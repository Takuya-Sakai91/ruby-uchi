import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TypingGame from "../src/TypingGame";

const gameElement = document.getElementById("typing-game");
const gameId = gameElement?.getAttribute("data-game-id");

if (gameId) {
  createRoot(gameElement!).render(
    <StrictMode>
      <TypingGame gameId={parseInt(gameId, 10)} />
    </StrictMode>,
  );
}
