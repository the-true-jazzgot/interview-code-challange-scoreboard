import { it, expect, describe, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import { cleanup, getByText, render } from "@testing-library/react";

import Scoreboard from "./Scoreboard";
import { Match } from "./scoreboard.lib";

describe("Greeting", () => {
  afterEach(cleanup);

  it("should render title Test Scoreboard", () => {
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
  
    const {getByText} = render(<Scoreboard title="Test Scoreboard" matches={matches} />);

    const heading = getByText("Test Scoreboard");
    expect(heading).toBeInTheDocument();
  });

  it("Start a new match, assuming initial score 0 – 0 and adding it the scoreboard.", ()=>{
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
  
    const {getByText} = render(<Scoreboard matches={matches} />);

    expect(getByText(/^Mexico 0/)).toBeInTheDocument();
    expect(getByText(/^Canada 0/)).toBeInTheDocument();
  });

  it("Update score. This should receive a pair of absolute scores: home team score and away team score.", ()=>{
    const matches = [
      {
        homeTeam: {
          name: "Mexico",
          score: 1
        },
        awayTeam: {
          name: "Canada",
          score: 3
        }
      }
    ];

    const {getByText} = render(<Scoreboard matches={matches} />);
    expect(getByText(/^Mexico\s+1/i)).toBeInTheDocument();
    expect(getByText(/^Canada\s+3/)).toBeInTheDocument();
  });

  it("Finish match currently in progress. This removes a match from the scoreboard.", ()=>{
    const matches: Match[] = [];
    const {queryByTestId} = render(<Scoreboard matches={matches} />);

    expect(queryByTestId('score')).toBeFalsy();
  });

  it("Finishes match currently in progress by marking it as finished. This removes a match from the scoreboard.", ()=>{
    const matches = [
      {
        homeTeam: {
          name: "Mexico",
          score: 1
        },
        awayTeam: {
          name: "Canada",
          score: 3
        },
        isFinished: true
      }
    ];
    const {queryByTestId} = render(<Scoreboard matches={matches} />);

    expect(queryByTestId('score')).toBeFalsy();
  });

  it(`Get a summary of matches in progress ordered by their total score. 
    The matches with the same total score will be returned ordered by the 
    most recently started match in the scoreboard.`, ()=>{
    const matches = [
      {
        homeTeam: {
          name: "Mexico",
          score: 0
        },
        awayTeam: {
          name: "Canada",
          score: 5
        }
      },
      {
        homeTeam: {
          name: "Spain",
          score: 10
        },
        awayTeam: {
          name: "Brazil",
          score: 2
        }
      },
      {
        homeTeam: {
          name: "Germany",
          score: 2
        },
        awayTeam: {
          name: "France",
          score: 2
        }
      },
      {
        homeTeam: {
          name: "Uruguay",
          score: 6
        },
        awayTeam: {
          name: "Italy",
          score: 6
        }
      },
      {
        homeTeam: {
          name: "Argentina",
          score: 3
        },
        awayTeam: {
          name: "Australia",
          score: 1
        }
      }
    ];

    const {getAllByTestId} = render(<Scoreboard matches={matches} />);

    const scores = getAllByTestId("score");

    expect(getByText(scores[0], /^Mexico/)).toBeInTheDocument();
    expect(getByText(scores[1], /^Spain/)).toBeInTheDocument();
    expect(getByText(scores[2], /^Germany/)).toBeInTheDocument();
    expect(getByText(scores[3], /^Uruguay/)).toBeInTheDocument();
    expect(getByText(scores[4], /^Argentina/)).toBeInTheDocument();
  });

});
