import React from "react";
import ReactDOM from "react-dom/client";
import GameStartScreen from "../src/GameStartScreen";

ReactDOM.createRoot(document.getElementById("game-start")!).render(
  <React.StrictMode>
    <GameStartScreen />
  </React.StrictMode>
);
