import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 justify-center items-center p-4 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        {children}
        <button
          onClick={onClose}
          className="btn bg-gray-700 hover:bg-gray-800 text-white mt-4 w-full max-w-xs"
        >
          閉じる
        </button>
      </div>
    </div>
  );
}
