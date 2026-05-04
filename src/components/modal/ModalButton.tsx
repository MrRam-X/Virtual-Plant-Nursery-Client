import React from "react";

export type ModalButtonProps = {
  title: string;
  buttonClickHandler: () => void;
  className: string;
};

const ModalButton: React.FC<ModalButtonProps> = ({
  title,
  buttonClickHandler,
  className,
}) => {
  return (
    <button
      onClick={buttonClickHandler}
      className={`py-2 px-5 rounded-md font-semibold ${className}`}
    >
      {title}
    </button>
  );
};

export default ModalButton;
