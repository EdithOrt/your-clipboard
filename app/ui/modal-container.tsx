"use client";

import { Modal } from "./modal";
import { TextButton } from "./button";
import { ClipboardDataContext } from "@/contexts/clipboardData";
import { useContext } from "react";

export function ModalContainer() {
  const { modal, deleteAllClipboardData, handleModal } =
    useContext(ClipboardDataContext);

  return (
    <Modal isOpen={modal} handleClose={() => handleModal()}>
      <p className="text-center">Are you sure to delete all?</p>

      <div className="flex gap-x-10 sm:gap-x-28">
        <TextButton
          text="Yes"
          handleClick={() => deleteAllClipboardData()}
          style="secondary"
        />

        <TextButton
          text="No"
          handleClick={() => {
            handleModal();
          }}
          style="secondary"
        />
      </div>
    </Modal>
  );
}
