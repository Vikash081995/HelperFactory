import ReactDOM from "react-dom";

const ModalPortal = ({ children, isOpen }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    document.getElementById("portal-root")
  );
};

export default ModalPortal;
