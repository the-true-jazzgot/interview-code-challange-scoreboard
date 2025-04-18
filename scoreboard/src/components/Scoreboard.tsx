export interface Match {
    homeTeam: {
        name: String,
        score: Number | undefined
    }
    awayTeam: {
        name: String,
        score: Number | undefined
    }
}

export interface ScoreboardProps {
    scores: Match[]
}

export default function Scoreboard({scores}:ScoreboardProps) {
    return <section>
        <h3>Scoreboard</h3>
        {scores.map(match => 
            <div key={`${match.homeTeam.name}-${match.awayTeam.name}`}>
                <span>{`${match.homeTeam.name} ${match.homeTeam.score?.toString() ?? "0"}`}</span>
                <span>{`${match.awayTeam.name} ${match.awayTeam.score?.toString() ?? "0"}`}</span>
            </div>
        )}
    </section>
}
