import React from "react";
import styles from "./ComponentHeader.module.css";
import { Clock } from "lucide-react";
import { formatDate } from "@utils/dateFormatter";

export default function ComponentHeader({ name, startDate, endDate }) {
  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = formatDate(endDate);
  return (
    <header className={styles.componentHeader}>
      <h1 className={styles.componentTitle}>{name}</h1>
      <div className={styles.dateRange}>
        <Clock size={16} aria-hidden="true" className={styles.clockIcon} />
        <p className={styles.data}>
          {formattedStartDate} to {formattedEndDate}
        </p>
      </div>
    </header>
  );
}
