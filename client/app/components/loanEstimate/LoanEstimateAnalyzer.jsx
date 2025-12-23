"use client";

import React, { useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { request } from "../../../client";
import { PARSE_LOAN_ESTIMATE_MUTATION } from "../../../graphQL/mutations/parseLoanEstimateMutation";
import styles from "./LoanEstimateAnalyzer.module.css";

const formatCurrency = (value) => {
  if (!value && value !== 0) return "—";
  return value.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
};

const formatPercent = (value) => {
  if (!value && value !== 0) return "—";
  return `${Number(value).toFixed(3)}%`;
};

const LoanEstimateAnalyzer = ({ onBack }) => {
  const [fileName, setFileName] = useState("");
  const [status, setStatus] = useState("idle"); // idle | uploading | success | error
  const [error, setError] = useState("");
  const [parsed, setParsed] = useState(null);

  const onDrop = async (acceptedFiles) => {
    if (!acceptedFiles?.length) return;
    const file = acceptedFiles[0];
    setFileName(file.name);
    setStatus("uploading");
    setError("");

    try {
      const data = await request(PARSE_LOAN_ESTIMATE_MUTATION, { file });
      setParsed(data?.parseLoanEstimate?.parsedData || null);
      setStatus("success");
    } catch (err) {
      setError(err?.message || "Unable to analyze this file.");
      setStatus("error");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "image/*": [".png", ".jpg", ".jpeg", ".webp"],
    },
    multiple: false,
  });

  const detailRows = useMemo(
    () => [
      { label: "Loan type", value: parsed?.loanType },
      { label: "Fixed/ARM", value: parsed?.fixedOrArm },
      { label: "Product", value: parsed?.productDisplayName },
      { label: "Loan amount", value: formatCurrency(parsed?.loanAmount) },
      { label: "Term", value: parsed?.loanTermYears ? `${parsed.loanTermYears} years` : "—" },
      { label: "Interest rate", value: formatPercent(parsed?.interestRate) },
      { label: "APR", value: formatPercent(parsed?.aprPercent) },
      { label: "Initial payment", value: formatCurrency(parsed?.monthlyPaymentInitial) },
      { label: "State", value: parsed?.state || "—" },
      { label: "ZIP", value: parsed?.zipCode || "—" },
      { label: "Rate lock", value: parsed?.rateLock || "—" },
    ],
    [parsed]
  );

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          <p className={styles.kicker}>Loan Estimate analyzer</p>
          <h2 className={styles.title}>Upload a Loan Estimate to unpack the details</h2>
          <p className={styles.subtitle}>
            Drop a PDF or image. We’ll extract rate, APR, loan amount, ARM structure, payment, and lock info.
          </p>
        </div>
        <div className={styles.headerActions}>
          <button type="button" className={styles.secondary} onClick={onBack}>
            Back
          </button>
        </div>
      </div>

      <div {...getRootProps()} className={`${styles.dropzone} ${isDragActive ? styles.dropzoneActive : ""}`}>
        <input {...getInputProps()} />
        <p className={styles.dropLabel}>{isDragActive ? "Release to upload" : "Drag & drop a Loan Estimate"}</p>
        <p className={styles.dropSub}>PDF or image • We’ll keep the file local for parsing</p>
        {fileName && <p className={styles.fileName}>Selected: {fileName}</p>}
        <button type="button" className={styles.primary}>Browse files</button>
      </div>

      <div className={styles.statusRow}>
        <span className={styles.statusBadge} data-state={status}>
          {status === "uploading" && "Analyzing…"}
          {status === "success" && "Analysis complete"}
          {status === "error" && "Analysis failed"}
          {status === "idle" && "Awaiting upload"}
        </span>
        {error && <span className={styles.errorText}>{error}</span>}
      </div>

      {parsed && (
        <div className={styles.resultsGrid}>
          {detailRows.map((row) => (
            <div key={row.label} className={styles.resultCard}>
              <p className={styles.resultLabel}>{row.label}</p>
              <p className={styles.resultValue}>{row.value || "—"}</p>
            </div>
          ))}
          {parsed?.armStructure && (
            <div className={styles.resultCardWide}>
              <p className={styles.resultLabel}>ARM details</p>
              <p className={styles.resultValue}>{parsed.armStructure}</p>
              <p className={styles.resultMeta}>
                Caps: {parsed.initialInterestCapPercent || "—"} / {parsed.periodicCapPercent || "—"} /{" "}
                {parsed.lifetimeCapPercent || "—"} • Margin: {formatPercent(parsed.marginPercent)}
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default LoanEstimateAnalyzer;
