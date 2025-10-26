import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Button from "@/components/common/Buttons/Button";
import styles from "./Button.module.css";

export default function BackButton({ children = "Back to Learning Status" }) {
  return (
    <Link to="/" className={styles.backButtonLink}>
      <Button variant="outline">
        <ArrowLeft size={20} aria-hidden="true" />
        {children}
      </Button>
    </Link>
  );
}
