"use client";

import { ReactNode } from "react";
import { IconButton } from "./button";
import { SVGComponent } from "../lib/utils";
import clsx from "clsx";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  handleClose: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
}

export function Modal({ children, isOpen, handleClose }: ModalProps) {
  return (
    <div
      className={clsx(
        "absolute top-0 z-30 h-screen w-screen items-center justify-center bg-black bg-opacity-50 ",
        { hidden: isOpen === false },
        { flex: isOpen === true },
      )}
      onClick={handleClose}
    >
      <div className="flex h-80 w-5/6 flex-col items-center rounded-2xl bg-white p-4  md:w-2/4 ">
        <div className="self-end">
          <IconButton
            type="default"
            handleClick={handleClose}
            variant="default"
            style="primary"
          >
            <SVGComponent width="12" height="12" icon="close-icon" />
          </IconButton>
        </div>

        <div className="flex h-5/6 w-3/5 flex-col items-center justify-evenly justify-self-center text-2xl font-bold">
          {children}
        </div>
      </div>
    </div>
  );
}
