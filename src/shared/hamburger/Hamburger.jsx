import CartIcon from "../../assets/icons/CartIcon";
import CloseIcon from "../../assets/icons/CloseIcon";
import "./hamburger.scss";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openMenu } from "../../store/hamburger";
import { motion } from "framer-motion";

function Hamburger() {
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(openMenu({ name: "menu" }));
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3 }}
      className="ham_container"
    >
      <div className="data">
        <div className="ham_container__close">
          <button onClick={handleOpen}>
            <CloseIcon />
          </button>
        </div>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <li>
            <NavLink to="products">Products</NavLink>
          </li>
          <li>
            <NavLink to="pages">Pages</NavLink>
          </li>
          <li>
            <NavLink to="cart">
              <CartIcon color="#0D0E43" />
            </NavLink>
          </li>
        </motion.ul>
      </div>
    </motion.div>
  );
}

export default Hamburger;
