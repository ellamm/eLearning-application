import React, { useState, useMemo, useCallback } from "react";
import styles from "./MainPage.module.css";
import mainPageData from "@data/mainPageData.json";
import ComponentTile from "@components/ComponentTile/ComponentTile";
import SearchBar from "@components/SearchBar/SearchBar";
import LoadMoreButton from "@components/common/Buttons/LoadMoreButton";
import { useDebounce } from "@hooks/useDebounce";
import { usePagination } from "@hooks/usePagination";

export default function MainPage() {
  const components = mainPageData.contents;
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const filteredComponents = useMemo(() => {
    if (!debouncedSearchQuery.trim()) {
      return components;
    }
    return components.filter((component) =>
      component.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
    );
  }, [components, debouncedSearchQuery]);

  const { visibleItems, hasMore, loadMore, reset } =
    usePagination(filteredComponents);

  const handleSearchChange = useCallback(
    (e) => {
      setSearchQuery(e.target.value);
      reset();
    },
    [reset]
  );

  const resultCount = filteredComponents.length;

  return (
    <main className={styles.mainPage}>
      <h1 className={styles.title}>Learning Status</h1>

      <h2 className={styles.sectionTitle}>Current</h2>
      <div className={styles.contentBox}>
        <SearchBar value={searchQuery} onChange={handleSearchChange} />
        <p className={styles.counter} aria-live="polite" aria-atomic="true">
          Showing {visibleItems.length} of {resultCount}
          {resultCount === 1 ? " result" : " results"}
        </p>
        {resultCount > 0 ? (
          <>
            <section aria-labelledby="results-heading">
              <h2 id="results-heading" className="srOnly">
                Search Results
              </h2>

              <ul className={styles.componentContainer}>
                {visibleItems.map((component) => (
                  <li key={component.id}>
                    <ComponentTile {...component} />
                  </li>
                ))}
              </ul>
            </section>
            {hasMore && (
              <LoadMoreButton onClick={loadMore}>Load more</LoadMoreButton>
            )}
          </>
        ) : (
          <div className={styles.emptyState} role="status" aria-live="polite">
            <p className={styles.emptyText}>
              No results found for "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
