import React from "react";
import styles from "./SearchBar.module.css";
import { X } from "lucide-react";

function SearchBar({ value, onChange }) {
  const handleClear = () => {
    onChange({ target: { value: "" } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit} role="search">
      <div className={styles.searchContainer}>
        <label htmlFor="search-input" className="srOnly">
          Search learning components
        </label>

        <input
          type="search"
          id="search-input"
          className={styles.searchInput}
          value={value}
          onChange={onChange}
          placeholder="Search courses, learning paths, or media"
          autoComplete="off"
        />

        {value && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={handleClear}
            aria-label="Clear search"
          >
            <X size={16} aria-hidden="true" />
          </button>
        )}
      </div>

      <button type="submit" className={styles.searchButton}>
        Search
      </button>
    </form>
  );
}

export default React.memo(SearchBar);
