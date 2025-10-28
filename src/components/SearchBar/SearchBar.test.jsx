import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  let mockOnChange;
  let user;

  beforeEach(() => {
    mockOnChange = vi.fn();
    user = userEvent.setup();
  });

  it("calls onChange when user types", async () => {
    render(<SearchBar value="" onChange={mockOnChange} />);
    const input = screen.getByRole("searchbox");

    await user.type(input, "React");

    expect(mockOnChange).toHaveBeenCalled();
  });

  it("prevents page reload on form submit", async () => {
    render(<SearchBar value="" onChange={mockOnChange} />);
    const submitButton = screen.getByRole("button", { name: /search/i });

    await user.click(submitButton);

    expect(submitButton).toBeInTheDocument();
  });

  describe("Clear button", () => {
    it("is hidden when input is empty", () => {
      render(<SearchBar value="" onChange={mockOnChange} />);

      expect(screen.queryByLabelText(/clear/i)).not.toBeInTheDocument();
    });

    it("appears when input has text", () => {
      render(<SearchBar value="React" onChange={mockOnChange} />);

      expect(screen.getByLabelText(/clear/i)).toBeInTheDocument();
    });

    it("clears the input when clicked", async () => {
      const { rerender } = render(
        <SearchBar value="React" onChange={mockOnChange} />
      );

      const clearButton = screen.getByLabelText(/clear/i);
      await user.click(clearButton);

      expect(mockOnChange).toHaveBeenCalledWith({ target: { value: "" } });

      rerender(<SearchBar value="" onChange={mockOnChange} />);

      expect(screen.getByRole("searchbox")).toHaveValue("");
      expect(screen.queryByLabelText(/clear/i)).not.toBeInTheDocument();
    });
  });
});
