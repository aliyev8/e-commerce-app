import "./leatest.scss";
import { NavLink } from "react-router-dom";
import LeatestItem from "./leatestItem/LeatestItem";
import { useState } from "react";
import { motion } from "framer-motion";

function LeatestProduct() {
  const changeCategory = (cat) => {
    setLeatestCategory(cat);
  };

  const [leatestCategory, setLeatestCategory] = useState("new-arrival");

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const it = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="leatest_product custom-container">
      <span className="title">Leatest product</span>
      <div className="leatest_category">
        <NavLink
          onClick={() => changeCategory("new-arrival")}
          className={
            leatestCategory === "new-arrival" ? "selected category" : "category"
          }
        >
          New Arrival
        </NavLink>
        <NavLink
          onClick={() => changeCategory("best-seller")}
          className={
            leatestCategory === "best-seller" ? "selected category" : "category"
          }
        >
          Best Seller
        </NavLink>
        <NavLink
          onClick={() => changeCategory("featured")}
          className={
            leatestCategory === "featured" ? "selected category" : "category"
          }
        >
          Featured
        </NavLink>
        <NavLink
          onClick={() => changeCategory("special-offer")}
          className={
            leatestCategory === "special-offer"
              ? "selected category"
              : "category"
          }
        >
          Special Offer
        </NavLink>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="category_list"
      >
        <LeatestItem variants={it} leatestCategory={leatestCategory} />
      </motion.div>
    </div>
  );
}

export default LeatestProduct;
