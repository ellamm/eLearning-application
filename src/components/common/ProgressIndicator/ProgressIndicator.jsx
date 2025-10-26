import React from "react";
import styles from "./ProgressIndicator.module.css";

export default function ProgressIndicator({ progress, variant = "linear" }) {
  const getStatus = () => {
    if (progress === 0)
      return { label: "Not Started", className: "notStarted" };
    if (progress === 100) return { label: "Completed", className: "completed" };
    return { label: "In Progress", className: "inProgress" };
  };

  const status = getStatus();

  // Circular variant for tiles
  if (variant === "circular") {
    return (
      <div className={styles.circularContainer}>
        <div
          className={styles.circularRing}
          style={{ "--progress": progress }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label={`Course completion: ${progress} percent`}
        >
          <span className={styles.circularPercentage} aria-hidden="true">
            {progress}%
          </span>
        </div>
      </div>
    );
  }

  // Linear variant for detail page
  return (
    <div className={styles.linearContainer}>
      <div className={styles.linearHeader}>
        <span className={`${styles.statusBadge} ${styles[status.className]}`}>
          {status.label}
        </span>
        <span className={styles.linearPercentage}>{progress}%</span>
      </div>
      <div
        className={styles.linearBarTrack}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label={`Course completion: ${progress} percent`}
      >
        <div
          className={styles.linearBarFill}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
