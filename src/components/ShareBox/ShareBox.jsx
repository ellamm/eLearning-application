import React, { useState } from "react";
import styles from "./ShareBox.module.css";
import { Mail, Check, Copy } from "lucide-react";
import { copyCurrentUrlToClipboard, shareViaEmail } from "@utils/shareUtils";

export default function ShareBox({ componentName }) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    const success = copyCurrentUrlToClipboard();
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleEmailShare = () => {
    shareViaEmail(componentName);
  };

  return (
    <section className={styles.shareBoxSection}>
      <h2 className={styles.title}>Share this course</h2>
      <div className={styles.buttonGroup}>
        <button
          className={styles.shareButton}
          onClick={handleCopyLink}
          aria-label="Copy link to clipboard"
        >
          {copied ? (
            <Check size={18} aria-hidden="true" />
          ) : (
            <Copy size={18} aria-hidden="true" />
          )}
        </button>

        <button
          className={styles.shareButton}
          onClick={handleEmailShare}
          aria-label="Share via email"
        >
          <Mail size={18} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
