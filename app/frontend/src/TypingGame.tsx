import React, { useState, useEffect } from "react";
import { rubyMethods } from "./methods";

export default function TypingGame() {
  const [inputValue, setInputValue] = useState("");
  const [currentMethod, setCurrentMethod] = useState(rubyMethods[0]);
  const [remainingTime, setRemainingTime] = useState(60);
  const [isGameFinished, setIsGameFinished] = useState(false); // ゲーム終了フラグの追加

  useEffect(() => {
    // ゲーム開始時の自動フォーカス
    document.getElementById("typing-input")?.focus();

    // タイマー処理
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime === 1) {
          clearInterval(timer); // タイマーを停止
          setIsGameFinished(true); // ゲーム終了状態にする
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // クリーンアップ処理
  }, []); //初回のみ実行するため依存配列は空

  useEffect(() => {
    // Escキーでリトライ、Shift + Dでメソッド解説
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        window.location.href = "/games/new";
      } else if (event.shiftKey && event.key === "D") {
        alert(`メソッド ${currentMethod} の解説`);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentMethod]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);

    if (event.target.value === currentMethod) {
      const nextMethod =
        rubyMethods[Math.floor(Math.random() * rubyMethods.length)];
      setCurrentMethod(nextMethod);
      setInputValue("");
    }
  };

  if (isGameFinished) {
    return (
      <div className="typing-game flex flex-col justify-center text-center bg-white min-h-screen p-4">
        <h1 className="text-4xl font-bold">ゲーム終了！</h1>
        <p>タイピング結果</p>
      </div>
    );
  }

  return (
    <div className="typing-game flex flex-col justify-center text-center bg-white min-h-screen p-4">
      <div className="fixed top-0 right-0 m-4 text-3xl">
        残り{remainingTime}秒
      </div>
      <div className="">
        <p className="text-4xl font-bold">{currentMethod}</p>
        <input
          id="typing-input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="input w-full text-center"
        />
      </div>
    </div>
  );
}
