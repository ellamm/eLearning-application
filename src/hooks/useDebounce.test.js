import { renderHook, act } from "@testing-library/react";
import { useDebounce } from "./useDebounce";

describe("useDebounce", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("debounces value changes after delay", async () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 300),
      { initialProps: { value: "initial" } }
    );

    expect(result.current).toBe("initial");

    act(() => {
      rerender({ value: "updated" });
    });
    expect(result.current).toBe("initial");

    await act(async () => {
      vi.advanceTimersByTime(300);
    });

    expect(result.current).toBe("updated");
  });

  it("cancels previous timer when value changes rapidly", async () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 300),
      { initialProps: { value: "initial" } }
    );

    act(() => {
      rerender({ value: "first" });
      vi.advanceTimersByTime(100);

      rerender({ value: "second" });
      vi.advanceTimersByTime(100);

      rerender({ value: "final" });
    });

    await act(async () => {
      vi.advanceTimersByTime(300);
    });

    expect(result.current).toBe("final");
  });

  it("uses custom delay", async () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: "initial", delay: 500 } }
    );

    act(() => {
      rerender({ value: "updated", delay: 500 });
    });

    await act(async () => {
      vi.advanceTimersByTime(300);
    });

    expect(result.current).toBe("initial");

    await act(async () => {
      vi.advanceTimersByTime(200);
    });

    expect(result.current).toBe("updated");
  });
});
