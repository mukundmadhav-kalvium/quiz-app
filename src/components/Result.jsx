import React, { useContext } from "react";
import { AppContext } from "./Context";
import "./Result.css";

const Result = () => {
  const { score, setScore, setShowResult } = useContext(AppContext);
  let userScorePercentage = (score / 5) * 100;
  const playAgain = () => {
    setScore(0);
    setShowResult(false);
  };
  return (
    <div className="result">
      <h1 id="result--tagline">
        {userScorePercentage <= 60
          ? "Sorry, you failed the quiz. Try Again!"
          : "Congratulations! You successfully cleared the quiz!"}
      </h1>
      <h2 id="result--percentage">You got {userScorePercentage}%</h2>
      <button id="play-again" onClick={playAgain}>
        Play Again
      </button>
    </div>
  );
};
export default Result;
