import React from "react";
import styles from "./InfoPanel.module.css";
import InfoBox from "@components/InfoBox/InfoBox";
import ShareBox from "@components/ShareBox/ShareBox";

export default function InfoPanel({
  startDate,
  endDate,
  learningMode,
  componentName,
}) {
  return (
    <aside className={styles.infoPanelSection}>
      <InfoBox
        startDate={startDate}
        endDate={endDate}
        learningMode={learningMode}
      />
      <ShareBox componentName={componentName} />
    </aside>
  );
}
