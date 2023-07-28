import "./hamburger.scss";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { openMenu } from "../../store/hamburger";

function Hamburger() {
  const dispatch = useDispatch();

  const switchRoute = () => {
    dispatch(openMenu({}));
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
        <div className="ham_container__close"></div>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <li>
            <NavLink onClick={switchRoute} to="products">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink onClick={switchRoute} to="/blog">
              Blog
            </NavLink>
          </li>

          <li>
            <NavLink onClick={switchRoute} to="myCart">
              Cart
            </NavLink>
          </li>

          <li>
            <NavLink onClick={switchRoute} to="/contact">
              Contact
            </NavLink>
          </li>
        </motion.ul>
      </div>
    </motion.div>
  );
}

export default Hamburger;
