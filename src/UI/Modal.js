import React from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const Backdrop = (props) => {
  const cssClasses = [styles.backdrop, props.show ? styles['backdrop-open'] : styles['backdrop-closed']]
  return <div className={cssClasses.join(' ')} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  const cssClasses = [styles.modal, props.show ? styles['modal-open'] : styles['modal-closed']]

  return (
    <div className={cssClasses.join(' ')}>
      <i className="fa fa-close"> </i>
      {props.title && <header className={styles.header}>
        <h5>{props.title}</h5>
      </header>}
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop show={props.show} onConfirm={props.onConfirm} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay title={props.title} show={props.show} onConfirm={props.onConfirm}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
