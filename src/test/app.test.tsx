import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "@/App";

describe("Portfolio app", () => {
  it("renders the main portfolio sections", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /hi, i'm malak mahmoud/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "About me" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Skills" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Featured projects" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Education & Certifications" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Let's work together" }),
    ).toBeInTheDocument();
  });
});
