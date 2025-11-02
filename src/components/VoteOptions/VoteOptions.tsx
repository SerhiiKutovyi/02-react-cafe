import css from "./VoteOptions.module.css";

interface VoteOptionsProps {
  onGood: () => void;
  onReset: () => void;
  onNeutral: () => void;
  onBad: () => void;
}

function VoteOptions({ onGood, onNeutral, onBad, onReset }: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button onClick={onGood} className={css.button}>
        Good
      </button>
      <button onClick={onNeutral} className={css.button}>
        Neutral
      </button>
      <button onClick={onBad} className={css.button}>
        Bad
      </button>
      <button onClick={onReset} className={`${css.button} ${css.reset}`}>
        Reset
      </button>
    </div>
  );
}
export default VoteOptions;
