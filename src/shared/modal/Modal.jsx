import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/modal";
import Frame from "../modals/Frame";
import "./modal.scss";
function Modal() {
  const { name } = useSelector((state) => state.modalSlice);
  const modalRef = useRef();
  const dispatch = useDispatch();

  const activeModal = () => {
    switch (name) {
      case "video":
        return <Frame />;

      default:
        <></>;
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        dispatch(closeModal());
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        dispatch(closeModal());
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="modal_container">
      <div ref={modalRef} className="modal_data">
        {activeModal()}
      </div>
    </div>
  );
}

export default Modal;
