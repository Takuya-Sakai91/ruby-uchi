import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GameStartScreen from "../src/GameStartScreen";

createRoot(document.getElementById("game-start")!).render(
  <StrictMode>
    <GameStartScreen />
  </StrictMode>,
);
