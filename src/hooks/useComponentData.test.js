import { useComponentData } from "./useComponentData";
import { renderHook } from "@testing-library/react";
import * as componentDataLoader from "@utils/componentDataLoader";

vi.mock("@utils/componentDataLoader.js");

describe("useComponentData", () => {
  it("loads component data successfully", () => {
    const mockData = {
      id: 4,
      name: "UI Design Principles",
      type: "COURSE",
    };

    componentDataLoader.getComponentDataBySlug.mockReturnValue(mockData);

    const { result } = renderHook(() =>
      useComponentData("ui-design-principles")
    );

    expect(result.current.componentData).toEqual(mockData);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
  });

  it("handles errors for invalid slug", () => {
    componentDataLoader.getComponentDataBySlug.mockImplementation(() => {
      throw new Error('Component with slug "invalid" not found');
    });

    const { result } = renderHook(() => useComponentData("invalid"));

    expect(result.current.componentData).toBe(null);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(
      'Component with slug "invalid" not found'
    );
  });
});
