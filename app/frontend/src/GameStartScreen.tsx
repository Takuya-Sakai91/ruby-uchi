import React, { useState, useEffect } from "react";
import Modal from "./components/Modal";

export default function GameStartScreen() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === " " || event.key === "Enter") {
        startGame();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const startGame = () => {
    console.log("ゲームスタート");
  };

  return (
    <div className="flex justify-center text-center min-h-screen p-4">
      <div className="flex-col">
        <h1 className="text-4xl font-bold mb-4">
          SpaceかEnterを押してスタート！
        </h1>
        <p className="text-lg mb-8">
          ※ゲーム中は「Esc」キーですぐにタイピングをやり直すことができます。
        </p>
        <button
          className="btn bg-red-600 hover:bg-red-700 text-white w-full mb-4 max-w-xs"
          onClick={() => setIsModalOpen(true)}
        >
          遊び方
        </button>
        <a href="/" className="btn btn-outline btn-primary w-full max-w-xs">
          TOPへ戻る
        </a>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">遊び方</h2>
        <p>Ruby打ちはRubyメソッドも学べるタイピングゲームです。</p>
        <p>※制限時間は60秒です。</p>
        <p>
          ・画面中央にRubyメソッドが表示されます。画面内にある内にメソッドをタイピングすると次のメソッドが表示されます。
        </p>
        <p>
          ・タイピングには時間制限があります。時間内にたくさんのメソッドを打ち込みましょう！
        </p>
        <p>
          ・ゲーム中は「Esc」キーですぐにタイピングをやり直すことができます。
        </p>
        <p>
          ・ゲーム中は「Shift +
          D」キーでRubyメソッドの解説を見ることができます。
        </p>
        <p>
          ・さらにメソッドの解説画面で「Shift +
          D」キーを押すとRubyの公式ドキュメントが別ウィンドウで開きます。
        </p>
      </Modal>
    </div>
  );
}
