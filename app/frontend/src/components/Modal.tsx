import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";

import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

interface ModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
  children?: React.ReactNode;
}

export const Modal = ({ open, setOpen, className, children }: ModalProps) => {
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.4 } }}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 p-8 backdrop-blur"
        >
          <motion.div
            initial={{ scale: 1, rotate: "0deg", y: -100 }}
            animate={{ scale: 1, rotate: "0deg", y: 0 }}
            exit={{
              scale: 1,
              rotate: "0deg",
              y: -100,
              transition: { delay: 0.3 },
            }}
            onClick={(e) => e.stopPropagation()}
            className={cn(
              "w-full relative max-w-lg cursor-default overflow-hidden rounded-lg bg-white p-6 text-slate-700 shadow-[0_6px_30px_-4px_rgba(17,33,95,0.2)]",
              className
            )}
          >
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0, transition: { delay: 0 } }}
              transition={{ type: "linear", duration: 0.2, delay: 0.3 }}
              className="relative z-10"
            >
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
