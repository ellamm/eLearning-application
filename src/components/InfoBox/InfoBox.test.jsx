import React from "react";
import { render, screen } from "@testing-library/react";
import InfoBox from "./InfoBox";

describe("InfoBox", () => {
  it("renders formatted dates and learning mode", () => {
    render(
      <InfoBox
        startDate="01.01.2025 08:00 (GMT+02:00)"
        endDate="01.12.2025 08:00 (GMT+02:00)"
        learningMode="Learning Path"
      />
    );

    expect(screen.getByText("1 Jan 2025 08:00")).toBeInTheDocument();
    expect(screen.getByText("1 Dec 2025 08:00")).toBeInTheDocument();
    expect(screen.getByText("Learning Path")).toBeInTheDocument();

    expect(screen.getByText("Start date")).toBeInTheDocument();
    expect(screen.getByText("End date")).toBeInTheDocument();
    expect(screen.getByText("Learning mode")).toBeInTheDocument();
  });
});
