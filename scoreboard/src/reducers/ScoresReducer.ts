export interface Match {
    homeTeam: {
        name: string,
        score?: number
    }
    awayTeam: {
        name: string,
        score?: number
    },
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

function sortMatches(matches:Match[]):Match[] {
    const returnValue = matches.map((match, index) => ({
        matchIndex: index,
        score: (match.awayTeam.score ?? 0) + (match.homeTeam.score ?? 0),
        match
    }));
    returnValue.sort((a,b)=>{
        if(a.score === b.score){
            return  b.matchIndex - a.matchIndex
        }
        return b.score - a.score
    });
    return returnValue.map(item => item.match);
}

export default function scoresReducer(state:Match[], action:AddNewMatchAction | UpdateScoreAction | FinishMatchAction):Match[] {
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
                }
            }
        ];
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
                    }
                }
            }
            return match
        });
        return sortMatches(matches);
      }
      case 'finish_match': {
        const matches:Match[] = state.map(match => {
            if((match.awayTeam.name == action.payload.awayTeam.name) && (match.homeTeam.name == action.payload.homeTeam.name)) {
                return {
                    homeTeam: {
                        name: match.homeTeam.name,
                        score: match.homeTeam.score
                    },
                    awayTeam: {
                        name: match.awayTeam.name,
                        score: match.awayTeam.score
                    },
                    isFinished: true
                }
            }
            return match
        });
        return sortMatches(matches);
      }
    }
  }