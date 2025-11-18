import React, { useState } from "react";
import ModalPortal from "../Components/ui/Modal/ModalPortal";

const Modal = ({ Title, Content, ButtonLabel }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>{ButtonLabel}</button>
      <ModalPortal isOpen={isModalOpen}>
        <h2>{Title}</h2>
        <p>{Content}</p>
      </ModalPortal>
    </div>
  );
};

export default Modal;
