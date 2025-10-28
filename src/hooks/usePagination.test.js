import { usePagination } from "./usePagination";
import { renderHook, act } from "@testing-library/react";

describe("usePaginaion", () => {
  it("handle pagination flow", () => {
    const mockItems = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
      { id: 10 },
      { id: 11 },
      { id: 12 },
      { id: 13 },
    ];
    const { result } = renderHook(() => usePagination(mockItems));

    expect(result.current.visibleItems).toHaveLength(6);
    expect(result.current.totalCount).toBe(13);
    expect(result.current.hasMore).toBe(true);

    act(() => {
      result.current.loadMore();
    });

    expect(result.current.visibleItems).toHaveLength(12);
    expect(result.current.hasMore).toBe(true);

    act(() => {
      result.current.loadMore();
    });

    expect(result.current.visibleItems).toHaveLength(13);
    expect(result.current.hasMore).toBe(false);

    act(() => {
      result.current.reset();
    });

    expect(result.current.visibleItems).toHaveLength(6);
    expect(result.current.hasMore).toBe(true);
  });

  it("handle small array", () => {
    const smallArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const { result } = renderHook(() => usePagination(smallArray, 4));

    expect(result.current.visibleItems).toHaveLength(3);
    expect(result.current.hasMore).toBe(false);
    expect(result.current.visibleCount).toBe(4);
  });

  it("handles empty array", () => {
    const { result } = renderHook(() => usePagination([], 8));

    expect(result.current.visibleItems).toHaveLength(0);
    expect(result.current.hasMore).toBe(false);
    expect(result.current.visibleCount).toBe(8);
  });
});
