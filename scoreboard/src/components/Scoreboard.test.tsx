import { it, expect, describe } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";

import Scoreboard from "./Scoreboard";

describe("Greeting", () => {
  it("should render title Scoreboard", () => {
    render(<Scoreboard />);

    const heading = screen.getByText("Scoreboard");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Scoreboard");
  });
});