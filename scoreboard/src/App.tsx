import { useReducer, useState } from 'react';
import './App.css'
import scoresReducer, { Match } from '../lib/ScoresReducer';
import Scoreboard from '../lib/Scoreboard';

function App() {
  const [scores, dispatch] = useReducer(scoresReducer, []);
  const [lastIndexAdd, setLastIndexAdd] = useState(0);
  const [lastIndexUpdate, setLastIndexUpdate] = useState(0);

  const matches: Match[] = [
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

  function addMatch(){
    dispatch({
      type: "add_new_match",
      payload: matches[lastIndexAdd]
    });
    console.log(matches[lastIndexAdd]);
    setLastIndexAdd(prev => prev+1);
  }

  function removeMatch(){
    //removes Spain - Brasil match
    dispatch({
      type: "finish_match",
      payload: {
        ...matches[0],
        isFinished: true
      }
    });
  }

  function updateScore(){
    dispatch({
      type: "update_score",
      payload: matches[lastIndexUpdate]
    });
    console.log(matches[lastIndexUpdate]);
    setLastIndexUpdate(prev=>prev+1);
  }
  
  return <>
    <button onClick={() => addMatch()}>Add match</button>
    <button onClick={() => removeMatch()}>Remove match</button>
    <button onClick={() => updateScore()}>Update score</button>
    <Scoreboard matches={scores} />
  </>
}

export default App
