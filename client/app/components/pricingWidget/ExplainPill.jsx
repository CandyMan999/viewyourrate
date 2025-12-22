"use client";

import React, { useState } from "react";
import PropTypes from "prop-types";
import { request } from "../../../client";
import { CHAT_BOT_QUERY } from "../../../graphQL/queries";
import styles from "./PricingWidget.module.css";

const ExplainPill = ({ prompt, context }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [reply, setReply] = useState("");
  const [error, setError] = useState("");

  const handleClick = async () => {
    if (isOpen && !isLoading) {
      setIsOpen(false);
      return;
    }

    setIsOpen(true);
    setIsLoading(true);
    setError("");

    try {
      const data = await request(CHAT_BOT_QUERY, {
        input: { prompt, context },
      });
      const aiReply = data?.chatBot?.reply || "";
      setReply(aiReply);
    } catch (err) {
      console.error("ExplainPill error", err);
      setError("Sorry, I can't explain this right now.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.explainPill}>
      <button
        type="button"
        className={styles.explainButton}
        onClick={handleClick}
        disabled={isLoading}
        aria-expanded={isOpen}
      >
        <span aria-hidden>💬</span>
        <span>{isLoading ? "Thinking…" : isOpen ? "Hide explanation" : "Explain this"}</span>
        <span className={styles.chevron} aria-hidden>
          {isOpen ? "▾" : "▸"}
        </span>
      </button>
      {isOpen && (
        <div className={styles.explainReply} aria-live="polite">
          {isLoading && <p className={styles.explainText}>Gathering a quick explanation…</p>}
          {!isLoading && error && <p className={styles.explainError}>{error}</p>}
          {!isLoading && !error && reply && <p className={styles.explainText}>{reply}</p>}
        </div>
      )}
    </div>
  );
};

ExplainPill.propTypes = {
  prompt: PropTypes.string.isRequired,
  context: PropTypes.string,
};

ExplainPill.defaultProps = {
  context: "",
};

export default ExplainPill;
