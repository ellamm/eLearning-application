import React from "react";
import { Loader2 } from "lucide-react";
import styles from "./LoadingFallback.module.css";

export default function LoadingFallback() {
  return (
    <div className={styles.loadingContainer} role="status" aria-live="polite">
      <Loader2 className="spinner" size={48} aria-hidden="true" />
      <span className={styles.loadingText}>Loading...</span>
    </div>
  );
}
