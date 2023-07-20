import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { motion, AnimatePresence } from "framer-motion";

function Modal() {
  const { isZoom, item } = useSelector((state) => state.zoomSlice);
  const dispatch = useDispatch();

  //   const modalRef = useRef(null);

  //   useEffect(() => {
  //     const handleOutsideClick = (event) => {
  //       if (modalRef.current && !modalRef.current.contains(event.target)) {
  //         name !== "editTask" ? dispatch(closeModal()) : dispatch(closeModal());
  //         navigate(category);
  //       }
  //     };

  //     document.addEventListener("mousedown", handleOutsideClick);

  //     return () => {
  //       document.removeEventListener("mousedown", handleOutsideClick);
  //     };
  //   }, []);

  //   useEffect(() => {
  //     const handleKeyDown = (event) => {
  //       if (event.key === "Escape") {
  //         if (isOpen) {
  //           name !== "editTask" ? dispatch(closeModal()) : dispatch(closeModal());
  //           navigate(category);
  //         }
  //       }
  //     };

  //     document.addEventListener("keydown", handleKeyDown);

  //     return () => {
  //       document.removeEventListener("keydown", handleKeyDown);
  //     };
  //   }, []);

  //   const activeModal = () => {
  //     switch (name) {
  //       case "asd":
  //         return "asd";
  //     }
  //   };

  return <></>;
}

export default Modal;
