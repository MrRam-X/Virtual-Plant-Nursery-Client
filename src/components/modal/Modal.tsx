import React from "react";
import ModalButton from "./ModalButton";
import {
  MODAL_BUTTONS_CLASSNAME,
  MODAL_CONFIRMATION_TEXT_CONTENT,
  MODAL_PRIMARY_BUTTON_TEXT_CONTENT,
} from "../../appConstant";

export type ModalProps = {
  primaryModalType: "Save" | "Clear" | "Delete";
  cancelButtonHandler: () => void;
  confirmButtonHandler: () => void;
};

const Modal: React.FC<ModalProps> = ({
  primaryModalType,
  cancelButtonHandler,
  confirmButtonHandler,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 max-w-sm w-full">
        <h3 className="font-serif text-2xl text-brand-green mb-4">
          Are you sure?
        </h3>
        <p className="text-gray-600 mb-6">
          {MODAL_CONFIRMATION_TEXT_CONTENT[primaryModalType]}
        </p>
        <div className="flex justify-end gap-4">
          <ModalButton
            title="Cancel"
            buttonClickHandler={cancelButtonHandler}
            className={MODAL_BUTTONS_CLASSNAME.Clear}
          />
          <ModalButton
            title={MODAL_PRIMARY_BUTTON_TEXT_CONTENT[primaryModalType]}
            buttonClickHandler={confirmButtonHandler}
            className={MODAL_BUTTONS_CLASSNAME[primaryModalType]}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
