import React, { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDropzone } from "react-dropzone";
import { FiCheckCircle, FiFileText, FiUploadCloud, FiX } from "react-icons/fi";
import { request } from "../../../client/client";
import PARSE_LOAN_ESTIMATE_MUTATION from "../../../client/graphQL/mutations/parseLoanEstimateMutation";

const BeatMyEstimateWidget = ({ isVisible, onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [parsedData, setParsedData] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    if (!acceptedFiles || acceptedFiles.length === 0) return;
    setSelectedFile(acceptedFiles[0]);
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
      "application/octet-stream": [".pdf"],
      "image/*": [],
    },
  });

  const fileName =
    selectedFile?.name || acceptedFiles?.[0]?.name || "Drag & drop or click";

  const handleAnalyze = async () => {
    const fileToUse = selectedFile || acceptedFiles?.[0];
    if (!fileToUse) {
      setError("Please upload a PDF or image of your Loan Estimate.");
      return;
    }

    setLoading(true);
    setError("");
    setParsedData(null);

    try {
      const data = await request(PARSE_LOAN_ESTIMATE_MUTATION, {
        file: fileToUse,
      });
      const parsed = data?.parseLoanEstimate?.parsedData || null;
      if (!parsed) {
        throw new Error(
          "We couldn't read that document. Please try another Loan Estimate."
        );
      }
      setParsedData(parsed);
    } catch (err) {
      setError(
        err?.message || "We couldn't analyze that document. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const summaryItems = useMemo(() => {
    if (!parsedData) return [];
    return [
      { label: "Loan Type", value: parsedData.loanType },
      { label: "Product", value: parsedData.productDisplayName },
      { label: "Loan Amount", value: formatCurrency(parsedData.loanAmount) },
      {
        label: "Interest Rate",
        value: formatPercent(parsedData.interestRate),
      },
      { label: "APR", value: formatPercent(parsedData.aprPercent) },
      {
        label: "Monthly Payment",
        value: formatCurrency(parsedData.monthlyPaymentInitial),
      },
      { label: "State", value: parsedData.state },
      { label: "Rate Lock", value: parsedData.rateLock },
    ].filter((item) => Boolean(item.value));
  }, [parsedData]);

  const overlayStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1200,
    padding: "6.5rem 1.5rem 2.5rem",
    boxSizing: "border-box",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
  };

  const widgetStyles = {
    width: "100%",
    maxWidth: "980px",
    maxHeight: "calc(100vh - 8rem)",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 20px 45px rgba(15, 33, 60, 0.25)",
    backgroundColor: "#fff",
    overflowY: "auto",
  };

  const panelStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    padding: "2.5rem",
    backgroundColor: "#f5f7fb",
  };

  const cardStyles = {
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "2rem",
    boxShadow: "0 14px 30px rgba(15, 23, 42, 0.08)",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  };

  const dropzoneStyles = {
    border: `1px dashed ${isDragActive ? "#1a6bff" : "#cbd5f5"}`,
    backgroundColor: isDragActive ? "rgba(26, 107, 255, 0.08)" : "#f8fafc",
    borderRadius: "14px",
    padding: "1.8rem",
    textAlign: "center",
    cursor: "pointer",
    transition: "all 0.2s ease",
  };

  const primaryButtonStyles = {
    background: "linear-gradient(135deg, #1a6bff, #22c55e)",
    color: "#fff",
    padding: "0.85rem 1.6rem",
    borderRadius: "999px",
    border: "none",
    fontWeight: 600,
    fontSize: "0.95rem",
    cursor: loading ? "not-allowed" : "pointer",
    boxShadow: "0 10px 25px rgba(26, 107, 255, 0.25)",
    alignSelf: "flex-start",
  };

  const closeIconStyles = {
    position: "absolute",
    top: "18px",
    right: "18px",
    fontSize: "1.5rem",
    color: "#1f2937",
    backgroundColor: "rgba(15, 23, 42, 0.08)",
    borderRadius: "999px",
    padding: "0.35rem",
    cursor: "pointer",
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          style={overlayStyles}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={widgetStyles}
          >
            <div style={{ position: "relative" }}>
              <FiX style={closeIconStyles} onClick={onClose} />
            </div>
            <div style={panelStyles}>
              <div style={cardStyles}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <span
                    style={{
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      fontSize: "0.75rem",
                      color: "#1a6bff",
                      fontWeight: 700,
                    }}
                  >
                    Beat My Estimate
                  </span>
                  <h2 style={{ margin: 0, fontSize: "1.9rem", color: "#0f172a" }}>
                    Upload your Loan Estimate and we will try to beat it.
                  </h2>
                  <p style={{ margin: 0, color: "#475569", fontSize: "1rem" }}>
                    Drop in your Loan Estimate and we will parse the same scenario to
                    see if we can deliver a better offer with identical terms.
                  </p>
                </div>

                <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
                  {[
                    "Upload a PDF or image of your Loan Estimate.",
                    "We only read the document to match your exact scenario.",
                    "If we can beat it, we will show the improved offer.",
                  ].map((item) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        gap: "0.65rem",
                        alignItems: "flex-start",
                        backgroundColor: "#f8fafc",
                        padding: "0.75rem 1rem",
                        borderRadius: "12px",
                        color: "#1f2937",
                      }}
                    >
                      <FiCheckCircle color="#22c55e" style={{ marginTop: 2 }} />
                      <span style={{ fontSize: "0.95rem" }}>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={dropzoneStyles} {...getRootProps()}>
                  <input {...getInputProps()} />
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <FiUploadCloud size={32} color="#1a6bff" />
                    <strong style={{ fontSize: "1rem", color: "#0f172a" }}>
                      {fileName}
                    </strong>
                    <span style={{ fontSize: "0.9rem", color: "#64748b" }}>
                      Drag & drop your Loan Estimate here, or click to browse.
                    </span>
                  </div>
                </div>

                {fileRejections.length > 0 && (
                  <p style={{ margin: 0, color: "#b91c1c", fontSize: "0.95rem" }}>
                    Unsupported file type. Please upload a PDF or image.
                  </p>
                )}

                <button
                  type="button"
                  style={{
                    ...primaryButtonStyles,
                    opacity: loading ? 0.7 : 1,
                  }}
                  onClick={handleAnalyze}
                  disabled={loading}
                >
                  {loading ? "Analyzing..." : "Analyze My Loan Estimate"}
                </button>

                <small style={{ color: "#64748b" }}>
                  Nothing is stored permanently — we only read the document to match your
                  terms.
                </small>

                {error && (
                  <p style={{ margin: 0, color: "#b91c1c", fontSize: "0.95rem" }}>
                    {error}
                  </p>
                )}

                {parsedData && (
                  <div
                    style={{
                      backgroundColor: "#eff6ff",
                      borderRadius: "14px",
                      padding: "1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <FiFileText color="#1a6bff" />
                      <strong style={{ color: "#0f172a" }}>
                        We matched your scenario
                      </strong>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gap: "0.75rem",
                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                      }}
                    >
                      {summaryItems.map((item) => (
                        <div
                          key={item.label}
                          style={{
                            backgroundColor: "#fff",
                            borderRadius: "10px",
                            padding: "0.75rem 1rem",
                            border: "1px solid rgba(148, 163, 184, 0.2)",
                          }}
                        >
                          <div style={{ fontSize: "0.75rem", color: "#64748b" }}>
                            {item.label}
                          </div>
                          <div style={{ fontWeight: 600, color: "#0f172a" }}>
                            {item.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const formatCurrency = (value) => {
  if (!value && value !== 0) return null;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Number(value));
};

const formatPercent = (value) => {
  if (!value && value !== 0) return null;
  return `${Number(value).toFixed(3)}%`;
};

export default BeatMyEstimateWidget;
