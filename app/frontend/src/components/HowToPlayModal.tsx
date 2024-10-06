import React from "react";
import { Modal } from "./Modal";

interface HowToPlayModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HowToPlayModal: React.FC<HowToPlayModalProps> = ({
  open,
  setOpen,
}) => {
  return (
    <Modal open={open} setOpen={setOpen} className="w-[100%] sm:w-[420px]">
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
          onClick={() => setOpen(false)}
        >
          閉じる
        </button>
      </div>
    </Modal>
  );
};
