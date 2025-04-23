export interface Match {
    homeTeam: {
        name: string,
        score?: number
    }
    awayTeam: {
        name: string,
        score?: number
    },
    id?: number,
    isFinished?: boolean
}
  
interface AddNewMatchAction {
    type: "add_new_match",
    payload: Match
}

interface UpdateScoreAction {
    type: "update_score",
    payload: Match
}

interface FinishMatchAction {
    type: "finish_match",
    payload: Match
}

type ScoreboardActions = AddNewMatchAction | UpdateScoreAction | FinishMatchAction;

function sortMatches(matches:Match[]):Match[] {
    return matches.sort((match1,match2)=>{
        if(((match1.awayTeam.score ?? 0) + (match1.homeTeam.score ?? 0)) === ((match2.awayTeam.score ?? 0) + (match2.homeTeam.score ?? 0))){
            return (match2.id ?? 0) - (match1.id ?? 0)
        }
        return ((match2.awayTeam.score ?? 0) + (match2.homeTeam.score ?? 0)) - ((match1.awayTeam.score ?? 0) + (match1.homeTeam.score ?? 0))
    });
}

let id = 0;

export default function scoreboard(state:Match[], action:ScoreboardActions):Match[] {
    switch (action.type) {
      case 'add_new_match': {
        const matches:Match[] = [
            ...state,
            {
                homeTeam: {
                    name: action.payload.homeTeam.name,
                },
                awayTeam: {
                    name: action.payload.awayTeam.name,
                },
                id: id
            }
        ];
        id = id + 1;
        return sortMatches(matches);
      }
      case 'update_score': {
        const matches:Match[] = state.map(match => {
            if((match.awayTeam.name == action.payload.awayTeam.name) && (match.homeTeam.name == action.payload.homeTeam.name)) {
                return {
                    homeTeam: {
                        name: match.homeTeam.name,
                        score: action.payload.homeTeam.score
                    },
                    awayTeam: {
                        name: match.awayTeam.name,
                        score: action.payload.awayTeam.score
                    },
                    id: match.id
                }
            }
            return match
        });
        return sortMatches(matches);
      }
      case 'finish_match': {
        const matches:Match[] = state.filter(match => {
            return (match.awayTeam.name !== action.payload.awayTeam.name) && (match.homeTeam.name !== action.payload.homeTeam.name)
        });
        return sortMatches(matches);
      }
    }
  }