import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TypingGame from "../src/TypingGame";

createRoot(document.getElementById("typing-game")!).render(
  <StrictMode>
    <TypingGame />
  </StrictMode>,
)
