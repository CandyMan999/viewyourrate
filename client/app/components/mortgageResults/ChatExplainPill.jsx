"use client";

import React, { useState } from "react";
import PropTypes from "prop-types";
import { request } from "../../../client";
import { CHAT_BOT_QUERY } from "../../../graphQL/queries";
import styles from "./MortgageOptionsPage.module.css";

const ChatExplainPill = ({ prompt, context, className }) => {
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
        input: {
          prompt,
          context,
        },
      });
      const aiReply = data?.chatBot?.reply || "";
      setReply(aiReply);
    } catch (err) {
      console.error("ChatExplainPill error", err);
      setError("Sorry, I can't explain this right now.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`${styles.chatExplain} ${className || ""}`}>
      <button
        type="button"
        className={styles.chatPill}
        onClick={handleClick}
        disabled={isLoading}
        aria-expanded={isOpen}
      >
        <span aria-hidden>💬</span>
        <span>{isLoading ? "Thinking…" : isOpen ? "Hide explanation" : "Explain this"}</span>
        <span className={styles.chatChevron} aria-hidden>
          {isOpen ? "▾" : "▸"}
        </span>
      </button>
      {isOpen && (
        <div className={styles.chatResponse} aria-live="polite">
          {isLoading && <p className={styles.chatText}>Gathering a quick explanation…</p>}
          {!isLoading && error && <p className={styles.chatError}>{error}</p>}
          {!isLoading && !error && reply && <p className={styles.chatText}>{reply}</p>}
        </div>
      )}
    </div>
  );
};

ChatExplainPill.propTypes = {
  prompt: PropTypes.string.isRequired,
  context: PropTypes.string,
  className: PropTypes.string,
};

ChatExplainPill.defaultProps = {
  context: "",
  className: "",
};

export default ChatExplainPill;
