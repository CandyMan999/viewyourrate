import { NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = "nodejs";

const openai =
  OpenAI && process.env.OPENAI_API_KEY?.trim()
    ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
    : null;

const unsupportedFileResponse = (mimeType) =>
  NextResponse.json(
    {
      error: `Unsupported file type: ${mimeType}. Please upload a PDF or image.`,
    },
    { status: 400 }
  );

export async function POST(request) {
  if (!openai) {
    return NextResponse.json(
      { error: "OpenAI API key is not configured on the server." },
      { status: 500 }
    );
  }

  const formData = await request.formData();
  const uploadedFile = formData.get("file");

  if (!uploadedFile || typeof uploadedFile === "string") {
    return NextResponse.json(
      { error: "Please upload a Loan Estimate file to continue." },
      { status: 400 }
    );
  }

  try {
    const arrayBuffer = await uploadedFile.arrayBuffer();
    const base64File = Buffer.from(arrayBuffer).toString("base64");
    const mimeType = uploadedFile.type || "application/octet-stream";
    const fileName = uploadedFile.name || "loan-estimate.pdf";

    const isImage = mimeType.startsWith("image/");
    const isPdf =
      mimeType === "application/pdf" || mimeType === "application/x-pdf";

    if (!isImage && !isPdf) {
      return unsupportedFileResponse(mimeType);
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
        filename: fileName,
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

    if (
      parsedData &&
      parsedData.fixedOrArm === "Fixed" &&
      (parsedData.armStructure ||
        parsedData.firstAdjustmentMonth ||
        parsedData.adjustmentFrequencyMonths)
    ) {
      parsedData.fixedOrArm = "ARM";
    }

    return NextResponse.json({ parsedData });
  } catch (error) {
    console.error("Loan Estimate parsing failed:", error);
    const status = error.status || error.response?.status || 500;
    return NextResponse.json(
      {
        error: "Failed to parse the Loan Estimate. Please try again.",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status }
    );
  }
}
