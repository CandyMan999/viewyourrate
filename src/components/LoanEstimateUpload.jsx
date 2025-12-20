import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

const API_BASE_URL =
  (process.env.NEXT_PUBLIC_API_BASE_URL &&
    process.env.NEXT_PUBLIC_API_BASE_URL.trim()) ||
  "";

const LoanEstimateUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [parsedData, setParsedData] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    if (!acceptedFiles || acceptedFiles.length === 0) return;

    const file = acceptedFiles[0];
    setSelectedFile(file);
    setError("");
    setParsedData(null);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    fileRejections,
    acceptedFiles,
  } = useDropzone({
    onDrop,
    maxFiles: 1,
    multiple: false,
    accept: {
      "application/pdf": [".pdf"],
      "application/x-pdf": [".pdf"],
      "application/octet-stream": [".pdf"], // fallback PDF MIME type
      "image/*": [],
    },
  });

  const fileName =
    selectedFile?.name || acceptedFiles?.[0]?.name || "Drag & drop or click";

  const handleAnalyze = async () => {
    const fileToUse = selectedFile || acceptedFiles[0];

    if (!fileToUse) {
      setError("Please upload a PDF or image of your Loan Estimate.");
      return;
    }

    setLoading(true);
    setError("");
    setParsedData(null);

    const formData = new FormData();
    formData.append("file", fileToUse);

    try {
      const apiHost = API_BASE_URL.replace(/\/$/, "");
      const response = await fetch(`${apiHost}/api/parse-le`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error ||
            "We couldn't analyze that document. Please try again."
        );
      }

      const data = await response.json();
      setParsedData(data.parsedData || data);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={sectionStyles}>
      <div style={cardStyles}>
        <h2 style={titleStyles}>Upload Your Loan Estimate</h2>
        <p style={subtitleStyles}>We'll extract key details automatically.</p>

        <div style={uploadAreaStyles}>
          <div
            {...getRootProps()}
            style={{
              ...fileInputLabelStyles,
              borderColor: isDragActive ? "#3a7bd5" : "#4b5d67",
              backgroundColor: isDragActive
                ? "rgba(58, 123, 213, 0.08)"
                : "transparent",
            }}
          >
            <input {...getInputProps()} />
            <strong>{fileName}</strong>
            <p style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>
              Drag & drop your Loan Estimate here, or click to browse.
            </p>
          </div>

          {fileRejections.length > 0 && (
            <p style={{ color: "#c0392b", fontSize: "0.9rem" }}>
              Unsupported file type. Upload a PDF or image.
            </p>
          )}

          <button
            type="button"
            style={{
              ...buttonStyles,
              opacity: loading ? 0.7 : 1,
              cursor: loading ? "not-allowed" : "pointer",
            }}
            onClick={handleAnalyze}
            disabled={loading}
          >
            {loading ? "Analyzing..." : "Analyze My Loan Estimate"}
          </button>

          <small style={helperTextStyles}>
            Nothing is stored permanently — we only read the document.
          </small>
        </div>

        {error && <p style={errorStyles}>{error}</p>}

        {parsedData && (
          <div style={resultsContainerStyles}>
            <h3 style={resultsTitleStyles}>Extracted Details</h3>
            <pre style={preStyles}>{JSON.stringify(parsedData, null, 2)}</pre>
          </div>
        )}
      </div>
    </section>
  );
};

// --- Styles ---

const sectionStyles = {
  // minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem 1rem",
};

const cardStyles = {
  width: "100%",
  maxWidth: "700px",
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  borderRadius: "18px",
  padding: "2rem",
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.25)",
};

const titleStyles = {
  fontSize: "2rem",
  marginBottom: "0.5rem",
  color: "#0f2027",
  textAlign: "center",
};

const subtitleStyles = {
  fontSize: "1rem",
  marginBottom: "1.5rem",
  color: "#4b5d67",
  textAlign: "center",
};

const uploadAreaStyles = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

const fileInputLabelStyles = {
  border: "2px dashed #4b5d67",
  borderRadius: "12px",
  padding: "1.25rem",
  textAlign: "center",
  color: "#4b5d67",
  fontWeight: 600,
  cursor: "pointer",
};

const buttonStyles = {
  width: "100%",
  padding: "1rem",
  borderRadius: "12px",
  border: "none",
  background: "linear-gradient(90deg, #3a7bd5, #3a6073)",
  color: "#fff",
  fontSize: "1rem",
  fontWeight: 600,
  transition: "transform 0.2s ease",
};

const helperTextStyles = {
  fontSize: "0.85rem",
  color: "#6c7a89",
  textAlign: "center",
};

const errorStyles = {
  marginTop: "1rem",
  padding: "0.75rem",
  borderRadius: "8px",
  backgroundColor: "#ffe6e6",
  color: "#c0392b",
  fontWeight: 600,
};

const resultsContainerStyles = {
  marginTop: "2rem",
  borderRadius: "12px",
  backgroundColor: "#0f2027",
  color: "#fff",
  padding: "1.5rem",
  overflowX: "auto",
};

const resultsTitleStyles = {
  marginBottom: "1rem",
  fontSize: "1.25rem",
};

const preStyles = {
  margin: 0,
  fontSize: "0.95rem",
  lineHeight: 1.4,
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
};

export default LoanEstimateUpload;
