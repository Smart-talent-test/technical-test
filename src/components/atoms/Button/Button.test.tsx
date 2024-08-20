import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Button } from "..";

describe("Button component", () => {
  it("should render component", () => {
    const componentContent = "Test content";
    render(<Button variant="primary" text="Test content" />);
    expect(screen.getByText(componentContent)).toBeInTheDocument();
  });
});
