import React from "react";

const Score = ({ score, highScore }) => {
  return (
    <div className="instructions">
      <div className="inst">
        <p>Kindly click the unique gif each time to increase the score.</p>
        <p>On clicking the gif twice the game will reset.</p>
      </div>
      <div className="score">
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>
    </div>
  );
};

export default Score;
