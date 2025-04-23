import { useReducer, useState } from 'react';
import './App.css'
import scoresReducer, { Match } from '../lib/scoreboard.lib';
import Scoreboard from '../lib/Scoreboard';

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

export default App
