import React from "react";
import { render, screen } from "@testing-library/react";
import Badge from "./Badge";

describe("Badge", () => {
  it.each([
    { type: "COURSE", expectedLabel: "Course" },
    { type: "LEARNING_PATH", expectedLabel: "Learning Path" },
    { type: "MEDIA_ITEM", expectedLabel: "Media" },
  ])("renders $type with correct label", ({ type, expectedLabel }) => {
    render(<Badge type={type} />);
    expect(screen.getByText(expectedLabel)).toBeInTheDocument();
  });
});
