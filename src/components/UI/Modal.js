 import React from "react";
 import ReactDOM from "react-dom";
 import Classes from "./Modal.module.css";

 const Backdrop = (props) => {
    return(
        <div className={Classes.backdrop}></div>
    );
 };

 const ModalOverlay = (props) => {
    return(
        <div className={Classes.modal}>
            <div className={Classes.content} >{props.children}</div>
        </div>
    )
 };

 const portalElements = document.getElementById("overlays");

 const Modal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop />, portalElements)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElements)}
        </React.Fragment>
    )
 };

 export default Modal;