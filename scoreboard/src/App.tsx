import './App.css'
import Scoreboard, { Match } from './components/Scoreboard'

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

function App() {
  return <Scoreboard matches={matches} />
}

export default App
