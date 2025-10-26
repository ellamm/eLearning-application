import React, { useState, useMemo, useCallback } from "react";

export function usePagination(items, itemsPerPage = 6) {
  const [visibleCount, setVisibleCount] = useState(itemsPerPage);

  const visibleItems = useMemo(
    () => items.slice(0, visibleCount),
    [items, visibleCount]
  );

  const hasMore = useMemo(
    () => visibleCount < items.length,
    [visibleCount, items.length]
  );

  const loadMore = useCallback(
    () => setVisibleCount((prev) => prev + itemsPerPage),
    [itemsPerPage]
  );

  const reset = useCallback(
    () => setVisibleCount(itemsPerPage),
    [itemsPerPage]
  );

  return {
    visibleItems,
    hasMore,
    loadMore,
    reset,
    visibleCount,
    totalCount: items.length,
  };
}
