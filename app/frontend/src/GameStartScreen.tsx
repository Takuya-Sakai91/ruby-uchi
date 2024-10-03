import React, { useState, useEffect } from "react";
import { Modal } from "./components/Modal";
import { CircleHelp } from "lucide-react";

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
      <Modal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        className="w-[100%] sm:w-[420px]"
      >
        <h3 className="text-center text-3xl font-bold">遊び方</h3>
        <div className="my-4 text-center">
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
          <button
            className="btn btn-outline w-full max-w-xs"
            onClick={() => setIsModalOpen(false)}
          >
            閉じる
          </button>
        </div>
      </Modal>
    </div>
  );
}
