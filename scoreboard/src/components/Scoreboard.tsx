import { useState } from "react"

export interface Match {
    homeTeam: {
        name: string,
        score: number | undefined
    }
    awayTeam: {
        name: string,
        score: number | undefined
    },
    isFinished?: boolean
}

export interface ScoreboardProps {
    matches: Match[],
    title?:string
}

export default function Scoreboard({matches, title = "Scoreboard"}:ScoreboardProps) {
    const [scores, ] = useState<Match[]>(compareMatches(matches));

    function compareMatches(matches:Match[]):Match[] {
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

    return <section>
        <h3>{title}</h3>
        {scores.map(match => 
            !match.isFinished && <div key={`${match.homeTeam.name}-${match.awayTeam.name}`} data-testid="score">
                <span>{`${match.homeTeam.name} ${match.homeTeam.score?.toString() ?? "0"}`}</span>
                <span>{`${match.awayTeam.name} ${match.awayTeam.score?.toString() ?? "0"}`}</span>
            </div>
        )}
    </section>
}
