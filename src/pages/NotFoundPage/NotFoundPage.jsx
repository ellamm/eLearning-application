import React from "react";
import styles from "./NotFoundPage.module.css";
import BackButton from "@/components/common/Buttons/BackButton";

export default function NotFoundPage() {
  return (
    <main className={styles.notFoundPage} role="main">
      <h1 className={styles.title}>404 - Page not Found</h1>
      <p className={styles.message}>
        The page you're looking for doesn't exist or has been moved
      </p>
      <BackButton>Return to Learning Status</BackButton>
    </main>
  );
}
