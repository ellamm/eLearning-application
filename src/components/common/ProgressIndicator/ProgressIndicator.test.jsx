import React from "react";
import { render, screen } from "@testing-library/react";
import ProgressIndicator from "./ProgressIndicator";

describe("ProgressIndicator", () => {
  it("shows correct linear status based on progress", () => {
    const { rerender } = render(
      <ProgressIndicator progress={0} variant="linear" />
    );

    expect(screen.getByText("Not Started")).toBeInTheDocument();

    rerender(<ProgressIndicator progress={35} variant="linear" />);

    expect(screen.getByText("In Progress")).toBeInTheDocument();
    expect(screen.getByText("35%")).toBeInTheDocument();
    expect(screen.getByRole("progressbar")).toHaveAttribute(
      "aria-valuenow",
      "35"
    );

    rerender(<ProgressIndicator progress={100} variant="linear" />);
    expect(screen.getByText("Completed")).toBeInTheDocument();
  });

  it("shows correct circular status based on progress", () => {
    render(<ProgressIndicator progress={65} variant="circular" />);

    expect(screen.getByText("65%")).toBeInTheDocument();
    expect(screen.queryByText("In Progress")).not.toBeInTheDocument();

    const progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveAttribute("aria-valuenow", "65");
    expect(progressbar).toHaveAttribute(
      "aria-label",
      "Course completion: 65 percent"
    );
  });
});
