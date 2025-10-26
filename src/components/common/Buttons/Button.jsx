import React from "react";
import styles from "./Button.module.css";

export default function Button({
  children,
  variant = "outline",
  onClick,
  disabled = false,
  type = "button",
  className = "",
  ariaLabel,
  ...rest
}) {
  const variantClass =
    variant === "filled" ? styles.buttonFilled : styles.buttonOutline;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${variantClass} ${className}`}
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </button>
  );
}
