import styles from "./VoteStats.module.css";

interface VoteStatsProps {
  onTotal: number;
  onGood: number;
  onNeutral: number;
  onBad: number;
}

function VoteStats({ onTotal, onGood, onNeutral, onBad }: VoteStatsProps) {
  return (
    <div>
      <div className={styles.container}>
        <p className={styles.stat}>
          Good: <strong>{onGood}</strong>
        </p>
        <p className={styles.stat}>
          Neutral: <strong>{onNeutral}</strong>
        </p>
        <p className={styles.stat}>
          Bad: <strong>{onBad}</strong>
        </p>
        <p className={styles.stat}>
          Total: <strong>{onTotal}</strong>
        </p>
        <p className={styles.stat}>
          Positive: <strong>0%</strong>
        </p>
      </div>
    </div>
  );
}

export default VoteStats;
