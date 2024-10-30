import React, { useState, useEffect } from "react";
import { HowToPlayModal } from "./components/HowToPlayModal";
import { CircleHelp } from "lucide-react";

export default function GameStartScreen() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === " " || event.key === "Enter") {
        startGame();
      }
    };

    addEventListener("keydown", handleKeyPress);
    return () => {
      removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const startGame = async () => {
    try {
      const response = await fetch("/games", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token":
            document
              .querySelector('meta[name="csrf-token"]')
              ?.getAttribute("content") || "",
        },
      });

      if (response.ok) {
        const game = await response.json();
        location.href = `/games/${game.id}`;
      } else {
        console.error("ゲームの作成に失敗しました");
      }
    } catch (error) {
      console.error("通信エラー", error);
    }
  };

  return (
    <div className="flex flex-col justify-center text-center bg-white min-h-screen p-4">
      <div>
        <h1 className="text-4xl font-bold mb-4">
          SpaceかEnterを押してスタート！
        </h1>
        <p className="text-lg mb-4">
          ※ゲーム中は「Esc」キーですぐにタイピングをやり直すことができます。
        </p>
        <button
          className="btn bg-red-600 hover:bg-red-700 text-white w-full mb-4 max-w-xs"
          onClick={() => setIsModalOpen(true)}
        >
          <CircleHelp className="size-[1rem]" />
          遊び方
        </button>
        <a href="/" className="btn btn-outline btn-primary w-full max-w-xs">
          TOPへ戻る
        </a>
      </div>
      <HowToPlayModal open={isModalOpen} setOpen={setIsModalOpen} />
    </div>
  );
}
