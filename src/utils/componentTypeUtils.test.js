import { getTypeLabel, getTypeClassName } from "./componentTypeUtils";

describe("componentTypeUtils", () => {
  describe("getTypeLabel", () => {
    it.each([
      ["COURSE", "Course"],
      ["LEARNING_PATH", "Learning Path"],
      ["MEDIA_ITEM", "Media"],
      ["Course", "Course"],
      ["Learning Path", "Learning Path"],
      ["Media Item", "Media"],
    ])("returns correct label for %s", (type, expectedLabel) => {
      expect(getTypeLabel(type)).toBe(expectedLabel);
    });

    it("returns original value for unknown types", () => {
      expect(getTypeLabel("UNKNOWN")).toBe("UNKNOWN");
      expect(getTypeLabel(null)).toBe(null);
      expect(getTypeLabel(undefined)).toBe(undefined);
    });
  });

  describe("getTypeClassName", () => {
    it.each([
      ["COURSE", "typeCourse"],
      ["LEARNING_PATH", "typeLearningPath"],
      ["MEDIA_ITEM", "typeMediaItem"],
      ["Course", "typeCourse"],
      ["Learning Path", "typeLearningPath"],
      ["Media Item", "typeMediaItem"],
    ])("returns correct class for %s", (type, expectedClassName) => {
      expect(getTypeClassName(type)).toBe(expectedClassName);
    });

    it("returns default class for unknown types", () => {
      expect(getTypeClassName("UNKNOWN")).toBe("typeCourse");
      expect(getTypeClassName(null)).toBe("typeCourse");
    });
  });
});
