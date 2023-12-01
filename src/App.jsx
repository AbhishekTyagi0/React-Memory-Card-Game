import React from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <div className="appContainer">
      <h1>Memory Card Game</h1>
      <GameBoard />
    </div>
  );
}

export default App;
