import { it, expect, describe, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import { cleanup, fireEvent, getByText, render } from "@testing-library/react";

import Scoreboard from "./Scoreboard";
import { useReducer } from "react";
import scoresReducer from "./scoreboard.lib";

describe("Greeting", () => {
  afterEach(cleanup);

  it("Start a new match, assuming initial score 0 – 0 and adding it the scoreboard.", ()=>{
    function App() {
        const [scores, dispatch] = useReducer(scoresReducer, []);
      
        function addMatch(){
          dispatch({
            type: "add_new_match",
            payload: {
              homeTeam: {
                name: "Mexico"
              },
              awayTeam: {
                name: "Canada"
              }
            }
          });
        }
        
        return <>
          <button onClick={() => addMatch()}>Add match</button>
          <Scoreboard matches={scores} />
        </>
    };

    const {getByText} = render(<App />);

    fireEvent.click(getByText('Add match'));
    expect(getByText(/^Mexico 0/)).toBeInTheDocument();
  });

  it("Update score. This should receive a pair of absolute scores: home team score and away team score.", ()=>{
    function App() {
        const [scores, dispatch] = useReducer(scoresReducer, [{
            homeTeam: {
              name: "Mexico"
            },
            awayTeam: {
              name: "Canada"
            }
          }]);
      
        function updateScore(){
          dispatch({
            type: "update_score",
            payload: {
                homeTeam: {
                  name: "Mexico",
                  score: 1
                },
                awayTeam: {
                  name: "Canada",
                  score: 5
                }
              }
          });
        }
        
        return <>
          <button onClick={() => updateScore()}>Update score</button>
          <Scoreboard matches={scores} />
        </>
    };

    const {getByText} = render(<App />);

    fireEvent.click(getByText('Update score'));
    
    expect(getByText(/^Canada 5/)).toBeInTheDocument();
    expect(getByText(/^Mexico 1/)).toBeInTheDocument();
  });

  it("Finishes match currently in progress by marking it as finished. This removes a match from the scoreboard.", ()=>{
    function App() {
        const [scores, dispatch] = useReducer(scoresReducer, [{
            homeTeam: {
              name: "Mexico"
            },
            awayTeam: {
              name: "Canada"
            }
          }]);
      
        function removeMatch(){
          dispatch({
            type: "finish_match",
            payload: {
                homeTeam: {
                  name: "Mexico",
                },
                awayTeam: {
                  name: "Canada",
                }
              }
          });
        }
        
        return <>
          <button onClick={() => removeMatch()}>Remove score</button>
          <Scoreboard matches={scores} />
        </>
    };

    const {queryByTestId, getByText} = render(<App />);

    fireEvent.click(getByText('Remove score'));
    
    expect(queryByTestId('score')).toBeFalsy();
  });

  it(`Get a summary of matches in progress ordered by their total score. 
    The matches with the same total score will be returned ordered by the 
    most recently started match in the scoreboard.`, ()=>{
    function App() {
        const [scores, dispatch] = useReducer(scoresReducer, []);
      
        function addMatch1(){
          dispatch({
            type: "add_new_match",
            payload: {
              homeTeam: {
                name: "Mexico"
              },
              awayTeam: {
                name: "Canada"
              }
            }
        });
        }

        function updateScore1(){
            dispatch({
                type: "update_score",
                payload: {
                    homeTeam: {
                    name: "Mexico",
                    score: 0
                    },
                    awayTeam: {
                    name: "Canada",
                    score: 5
                }
            }
        });
        }

        function addMatch2(){
            dispatch({
                type: "add_new_match",
                payload: {
                    homeTeam: {
                        name: "Spain"
                    },
                    awayTeam: {
                        name: "Brazil"
                    }
                }
            });
            }

        function updateScore2(){
            dispatch({
                type: "update_score",
                payload: {
                    homeTeam: {
                        name: "Spain",
                        score: 10
                    },
                    awayTeam: {
                        name: "Brazil",
                        score: 2
                    }
                }
            });
            }

        function addMatch3(){
            dispatch({
                type: "add_new_match",
                payload: {
                    homeTeam: {
                        name: "Germany"
                    },
                    awayTeam: {
                        name: "France"
                    }
                }
            });
            }

        function updateScore3(){
            dispatch({
                type: "update_score",
                payload: {
                    homeTeam: {
                      name: "Germany",
                      score: 2
                    },
                    awayTeam: {
                      name: "France",
                      score: 2
                    }
                }
            });
            }

        function addMatch4(){
            dispatch({
                type: "add_new_match",
                payload: {
                    homeTeam: {
                        name: "Uruguay"
                    },
                    awayTeam: {
                        name: "Italy"
                    }
                }
            });
        }

        function updateScore4(){
            dispatch({
                type: "update_score",
                payload: {
                    homeTeam: {
                      name: "Uruguay",
                      score: 6
                    },
                    awayTeam: {
                      name: "Italy",
                      score: 6
                    }
                  }
            });
        }

        function addMatch5(){
            dispatch({
                type: "add_new_match",
                payload: {
                    homeTeam: {
                        name: "Argentina"
                    },
                    awayTeam: {
                        name: "Australia"
                    }
                }
            });
        }

        function updateScore5(){
            dispatch({
                type: "update_score",
                payload: {
                    homeTeam: {
                      name: "Argentina",
                      score: 3
                    },
                    awayTeam: {
                      name: "Australia",
                      score: 1
                    }
                  }
            });
        }
        
        return <>
          <button onClick={() => addMatch1()}>Add match 1</button>
          <button onClick={() => addMatch2()}>Add match 2</button>
          <button onClick={() => addMatch3()}>Add match 3</button>
          <button onClick={() => addMatch4()}>Add match 4</button>
          <button onClick={() => addMatch5()}>Add match 5</button>
          <button onClick={() => updateScore1()}>Update score 1</button>
          <button onClick={() => updateScore2()}>Update score 2</button>
          <button onClick={() => updateScore3()}>Update score 3</button>
          <button onClick={() => updateScore4()}>Update score 4</button>
          <button onClick={() => updateScore5()}>Update score 5</button>
          <Scoreboard matches={scores} />
        </>
    }
    
    const {getAllByTestId, getByText: GetBy} = render(<App />);

    fireEvent.click(GetBy('Add match 1'));
    fireEvent.click(GetBy('Add match 2'));
    fireEvent.click(GetBy('Add match 3'));
    fireEvent.click(GetBy('Add match 4'));
    fireEvent.click(GetBy('Add match 5'));

    fireEvent.click(GetBy('Update score 1'));
    fireEvent.click(GetBy('Update score 2'));
    fireEvent.click(GetBy('Update score 3'));
    fireEvent.click(GetBy('Update score 4'));
    fireEvent.click(GetBy('Update score 5'));

    const scores = getAllByTestId("score");

    expect(getByText(scores[0], /^Uruguay/)).toBeInTheDocument();
    expect(getByText(scores[1], /^Spain/)).toBeInTheDocument();
    expect(getByText(scores[2], /^Mexico/)).toBeInTheDocument();
    expect(getByText(scores[3], /^Argentina/)).toBeInTheDocument();
    expect(getByText(scores[4], /^Germany/)).toBeInTheDocument();

    });
});





