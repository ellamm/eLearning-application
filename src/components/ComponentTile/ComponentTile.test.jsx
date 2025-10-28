import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ComponentTile from "./ComponentTile";

vi.mock("@components/common/ComponentImage/ComponentImage", () => ({
  default: () => <div>Mocked image</div>,
}));

vi.mock("@components/common/ProgressIndicator/ProgressIndicator", () => ({
  default: ({ progress }) => (
    <div role="progressbar" aria-valuenow={progress}>
      {progress}%
    </div>
  ),
}));

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("ComponentTile", () => {
  it("renders course information and navigates correctly", () => {
    const mockCourse = {
      name: "Microlearning: UX vs UI",
      subtitle: "Ended on 15 February 2025 11:27",
      type: "MEDIA_ITEM",
      progress: 100,
    };

    renderWithRouter(<ComponentTile {...mockCourse} />);

    expect(screen.getByText("Microlearning: UX vs UI")).toBeInTheDocument();
    expect(
      screen.getByText("Ended on 15 February 2025 11:27")
    ).toBeInTheDocument();
    expect(screen.getByText("Media")).toBeInTheDocument();

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/component/microlearning-ux-vs-ui");
    expect(link).toHaveAttribute(
      "aria-label",
      "View details for Microlearning: UX vs UI a Media with 100% progress"
    );

    const progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveAttribute("aria-valuenow", "100");
  });

  it("handles different component types", () => {
    const learningPath = {
      name: "Full-Stack Developer Path",
      subtitle: "Continue with learning path",
      type: "LEARNING_PATH",
      image: "/data/program/fullstack-path.jpg",
      progress: 45,
    };

    renderWithRouter(<ComponentTile {...learningPath} />);

    expect(screen.getByText("Full-Stack Developer Path")).toBeInTheDocument();
    expect(screen.getByText("Continue with learning path")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "/component/full-stack-developer-path"
    );
  });
});
