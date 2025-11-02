import { useState } from "react";
import CafeInfo from "../Cafeinfo/Cafeinfo";
import Notification from "../Notification/Notification";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";

// import type { Votes } from "../../types/votes";

// interface VotesProps {
//   votes: Votes;
// }

import css from "./App.module.css";

export default function App() {
  const [good, setGood] = useState<number>(0);
  const [neutral, setNeutral] = useState<number>(0);
  const [bad, setBad] = useState<number>(0);

  const totalVotes = good + neutral + bad;

  const handleClickGood = () => {
    setGood((prevVote) => prevVote + 1);
  };
  const handleClickNeutral = () => {
    setNeutral((prevVote) => prevVote + 1);
  };
  const handleClickBad = () => {
    setBad((prevVote) => prevVote + 1);
  };

  const handleClickReset = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  };

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onGood={handleClickGood}
        onNeutral={handleClickNeutral}
        onBad={handleClickBad}
        onReset={handleClickReset}
      />
      {totalVotes > 0 ? (
        <VoteStats
          onTotal={totalVotes}
          onGood={good}
          onNeutral={neutral}
          onBad={bad}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
