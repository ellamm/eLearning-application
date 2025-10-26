import React, { useState } from "react";
import { ChevronDown, Loader2 } from "lucide-react";
import Button from "./Button";
import styles from "./Button.module.css";

export default function LoadMoreButton({ onClick }) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await onClick();
    setLoading(false);
  };
  return (
    <div className={styles.loadMoreContainer}>
      <Button
        variant="filled"
        onClick={handleClick}
        disabled={loading}
        aria-busy={loading}
      >
        Load More
        {loading ? (
          <Loader2 size={20} aria-hidden="true" className="spinner" />
        ) : (
          <ChevronDown size={20} aria-hidden="true" />
        )}
      </Button>
    </div>
  );
}
