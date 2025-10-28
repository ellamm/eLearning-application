import { slugify } from "./slugify.js";

describe("slugify", () => {
  it("converts a string to a slug", () => {
    const result = slugify("React Fundamentals");
    expect(result).toBe("react-fundamentals");
  });

  it("handles special characters", () => {
    const result = slugify("UI/UX Design Principles");
    expect(result).toBe("uiux-design-principles");
  });
});
