import React from "react";
import { getTypeLabel, getTypeClassName } from "@utils/componentTypeUtils";
import styles from "./Badge.module.css";

export default function Badge({ type }) {
  const label = getTypeLabel(type);
  const typeClass = getTypeClassName(type);
  return (
    <span className={`${styles.badge} ${styles[typeClass]}`}>{label}</span>
  );
}
