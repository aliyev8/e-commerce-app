import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleZoom } from "../../store/zoom";

function ZoomItem() {
  const { isZoom, data } = useSelector((state) => state.zoomSlice);
  const dispatch = useDispatch();
  const motionRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!motionRef.current.contains(event.target)) {
        dispatch(handleZoom({ data: null, isZoom: false }));
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
        if (isZoom) {
          dispatch(handleZoom({ data: null, isZoom: false }));
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <AnimatePresence>
      {isZoom && (
        <motion.div ref={motionRef} className="layer" layoutId={data.id}>
          <motion.div className="layer_data">
            <img src={data.image} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ZoomItem;
