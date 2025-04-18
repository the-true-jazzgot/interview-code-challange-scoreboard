import './App.css'
import Scoreboard, { Match } from './components/Scoreboard'

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

function App() {
  return <Scoreboard scores={matches} />
}

export default App
