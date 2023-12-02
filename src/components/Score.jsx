import React from "react";

const Score = ({ score, highScore }) => {
  return (
    <div className="score">
      <p>Score: {score}</p>
      <p>High Score: {highScore}</p>
    </div>
  );
};

export default Score;
