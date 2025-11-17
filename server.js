require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");

let OpenAI;
try {
  OpenAI = require("openai");
} catch (error) {
  console.warn(
    "OpenAI SDK is not installed. The /api/parse-le endpoint will be disabled until dependencies are installed.",
    error.message
  );
}

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    limits: { fileSize: 20 * 1024 * 1024 },
    abortOnLimit: true,
    useTempFiles: false,
  })
);

const openai =
  OpenAI && process.env.OPENAI_API_KEY?.trim()
    ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
    : null;

const placeholderRates = [
  {
    id: "conv-30",
    purpose: "Purchase",
    product: "30 Year Fixed",
    rate: 6.375,
    apr: 6.489,
    change: -0.035,
    points: 0.689,
  },
  {
    id: "conv-15",
    purpose: "Purchase",
    product: "15 Year Fixed",
    rate: 5.875,
    apr: 5.942,
    change: -0.018,
    points: 0.412,
  },
  {
    id: "jumbo-arm",
    purpose: "Purchase",
    product: "10/6 ARM Jumbo",
    rate: 6.125,
    apr: 6.271,
    change: 0.012,
    points: 0.328,
  },
  {
    id: "fha-30",
    purpose: "Purchase",
    product: "30 Year FHA",
    rate: 6.0,
    apr: 6.214,
    change: -0.045,
    points: 0.235,
  },
];

app.get("/api/mortgage-rates", (req, res) => {
  res.json({
    lastUpdated: new Date().toISOString(),
    rates: placeholderRates,
    source: "placeholder",
  });
});

app.post("/api/parse-le", async (req, res) => {
  if (!openai) {
    return res
      .status(500)
      .json({ error: "OpenAI API key is not configured on the server." });
  }

  if (!req.files || !req.files.file) {
    return res
      .status(400)
      .json({ error: "Please upload a Loan Estimate file to continue." });
  }

  try {
    const uploadedFile = req.files.file;
    const base64File = uploadedFile.data.toString("base64");
    const mimeType = uploadedFile.mimetype || "application/octet-stream";

    const isImage = mimeType.startsWith("image/");
    const isPdf =
      mimeType === "application/pdf" || mimeType === "application/x-pdf";

    if (!isImage && !isPdf) {
      throw new Error(
        `Unsupported file type: ${mimeType}. Please upload a PDF or image.`
      );
    }

    const prompt = `
You are an expert mortgage underwriter. Extract structured data from the attached Loan Estimate.

Focus on precise classification. Do NOT guess or omit ARM features.

Return ONLY valid JSON matching the schema below. If a field is not found, return null (or an empty string for text).

{
  "loanType": "Conventional | FHA | VA | USDA | Other",
  "fixedOrArm": "Fixed | ARM",
  "productDisplayName": "",

  "loanAmount": null,
  "loanTermYears": null,
  "interestRate": null,
  "aprPercent": null,
  "monthlyPaymentInitial": null,

  "isInterestOnly": false,
  "interestOnlyMonths": null,

  "armStructure": null,
  "firstAdjustmentMonth": null,
  "adjustmentFrequencyMonths": null,
  "index": null,
  "marginPercent": null,
  "initialInterestCapPercent": null,
  "periodicCapPercent": null,
  "lifetimeCapPercent": null,

  "maxInterestRatePossible": null,
  "maxPaymentPossible": null,

  "state": "",
  "zipCode": "",
  "rateLock": false
}

Rules:
- If the loan has ANY adjusting interest rate or adjustable payment schedule, set "fixedOrArm" to "ARM".
- If the LE contains an Adjustable Interest Rate (AIR) table or Adjustable Payment (AP) table, extract the key values into the ARM-related fields.
- Parse terms such as "5/6 ARM", "5/3 ARM", "5 Year Interest Only, Adjustable Rate", etc.
- If the loan is fixed and never adjusts, set all ARM-related fields to null and "fixedOrArm" to "Fixed".
- Do NOT invent values that are not explicitly present on the document.
`;

    // Build the content payload depending on file type
    const content = [
      {
        type: "input_text",
        text: prompt,
      },
    ];

    if (isImage) {
      content.push({
        type: "input_image",
        image_url: `data:${mimeType};base64,${base64File}`,
      });
    } else if (isPdf) {
      content.push({
        type: "input_file",
        filename: uploadedFile.name || "loan-estimate.pdf",
        file_data: `data:application/pdf;base64,${base64File}`,
      });
    }

    const aiResponse = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: [
        {
          role: "user",
          content,
        },
      ],
      text: {
        format: {
          type: "json_object",
        },
      },
    });

    const rawContent = aiResponse.output_text;

    if (!rawContent) {
      throw new Error("No data returned from OpenAI.");
    }

    let parsedData = JSON.parse(rawContent);

    // Simple sanity fix: if ARM fields exist but fixedOrArm is "Fixed", flip it
    if (
      parsedData &&
      parsedData.fixedOrArm === "Fixed" &&
      (parsedData.armStructure ||
        parsedData.firstAdjustmentMonth ||
        parsedData.adjustmentFrequencyMonths)
    ) {
      parsedData.fixedOrArm = "ARM";
    }

    return res.json({ parsedData });
  } catch (error) {
    console.error("Loan Estimate parsing failed:", error);
    const status = error.status || error.response?.status || 500;
    return res.status(status).json({
      error: "Failed to parse the Loan Estimate. Please try again.",
      details:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Mortgage Rates API server is running on port ${PORT}`);
});
