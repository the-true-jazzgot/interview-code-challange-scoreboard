import { Match } from './ScoresReducer';
import styles from './Scoreboard.module.css';

export interface ScoreboardProps {
    matches: Match[],
    title?:string
}

export default function Scoreboard({matches, title = "Scoreboard"}:ScoreboardProps) {
    return <section className={styles.section}>
        <h3>{title}</h3>
        {matches.map(match => 
            !match.isFinished && 
            <div 
                key={`${match.homeTeam.name}-${match.awayTeam.name}`} 
                data-testid="score">
                    <span>{`${match.homeTeam.name} ${match.homeTeam.score?.toString() ?? "0"}`}</span>
                    <span>{`${match.awayTeam.name} ${match.awayTeam.score?.toString() ?? "0"}`}</span>
            </div>
        )}
    </section>
}
