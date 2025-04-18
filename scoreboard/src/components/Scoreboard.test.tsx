import { it, expect, describe } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen, within } from "@testing-library/react";

import Scoreboard from "./Scoreboard";
import { Match } from "./Scoreboard";

describe("Greeting", () => {
  const matches: Match[] = [
    {
      homeTeam: {
        name: "Mexico",
        score: undefined
      },
      awayTeam: {
        name: "Canada",
        score: undefined
      }
    }
  ];

  const {rerender} = render(<Scoreboard scores={matches} />);

  it("should render title Scoreboard", () => {
    const heading = screen.getByText("Scoreboard");
    expect(heading).toBeInTheDocument();
  });

  it("Start a new match, assuming initial score 0 – 0 and adding it the scoreboard.", ()=>{
    expect(screen.getByText(/^Mexico 0/)).toBeInTheDocument();
    expect(screen.getByText(/^Canada 0/)).toBeInTheDocument();
  });

  it("Update score. This should receive a pair of absolute scores: home team score and away team score.", ()=>{
    expect(screen.getByText(/^Mexico 0/)).toBeInTheDocument();
    expect(screen.getByText(/^Canada 0/)).toBeInTheDocument();

    const matches2 = [
      {
        homeTeam: {
          name: "Mexico",
          score: 1
        },
        awayTeam: {
          name: "Canada",
          score: 0
        }
      }
    ];

    rerender(<Scoreboard scores={matches2} />);
    expect(screen.getByText(/^Mexico 1/)).toBeInTheDocument();
    expect(screen.getByText(/^Canada 0/)).toBeInTheDocument();

    const matches3 = [
      {
        homeTeam: {
          name: "Mexico",
          score: 0
        },
        awayTeam: {
          name: "Canada",
          score: 1
        }
      }
    ];

    rerender(<Scoreboard scores={matches3} />);
    expect(screen.getByText(/^Mexico 0/)).toBeInTheDocument();
    expect(screen.getByText(/^Canada 1/)).toBeInTheDocument();
  });

  it("Finish match currently in progress. This removes a match from the scoreboard.", ()=>{
    expect(screen.getByText(/^Mexico/)).toBeInTheDocument();
    expect(screen.getByText(/^Canada/)).toBeInTheDocument();

    const matches2: Match[] = [];
    rerender(<Scoreboard scores={matches2} />);

    expect(screen.getByText(/^Mexico 0/)).not.toBeInTheDocument();
    expect(screen.getByText(/^Canada 0/)).not.toBeInTheDocument();
  });

  it(`Get a summary of matches in progress ordered by their total score. 
    The matches with thesame total score will be returned ordered by the 
    most recently started match in the scoreboard.`, ()=>{
  });

});
