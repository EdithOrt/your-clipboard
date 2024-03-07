"use client";

import { Modal } from "./modal";
import { TextButton } from "./button";

export function ModalContainer() {
  const handleExample = () => {
    console.log("yes");
  };
  return (
    <Modal isOpen={false}>
      <p>Modal container</p>

      <div className="flex gap-x-28">
        <TextButton
          text="Yes"
          handleClick={handleExample}
          type="default"
          style="secondary"
        />

        <TextButton
          text="No"
          handleClick={handleExample}
          type="default"
          style="secondary"
        />
      </div>
    </Modal>
  );
}
