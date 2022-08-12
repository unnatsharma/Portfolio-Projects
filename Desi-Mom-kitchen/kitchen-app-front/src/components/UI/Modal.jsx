import ReactDOM from "react-dom";

import "./Modal.css";

const Backdrop = (props) => <div className="backdrop" onClick={props.onClose}></div>;

const ModalOverlay = (props) => (
  <div className="modal">
    <div className="content">{props.children}</div>
  </div>
);

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
