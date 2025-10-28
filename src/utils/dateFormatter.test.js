import { formatDate } from "./dateFormatter";

describe("dateFormatter", () => {
  it("formats valid data correctly", () => {
    expect(formatDate("01.12.2024 08:30 (GMT+02:00)")).toBe("1 Dec 2024 08:30");
    expect(formatDate("15.03.2024 14:30")).toBe("15 Mar 2024 14:30");
  });

  it("handles invalid input", () => {
    expect(formatDate("")).toBe("");
    expect(formatDate(null)).toBe("");
    expect(formatDate("Starting soon")).toBe("Invalid date format");
  });
});
