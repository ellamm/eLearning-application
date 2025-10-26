import React from "react";
import styles from "./ComponentImage.module.css";

export default function ComponentImage({ src, alt = "", size = "small" }) {
  const sizeClass = styles[size];
  return (
    <div className={`${styles.imageContainer} ${sizeClass}`}>
      <img
        src={src}
        alt={alt}
        className={styles.image}
        loading="lazy"
        decoding="async"
        fetchPriority="low"
      />
    </div>
  );
}
