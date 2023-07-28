import { NavLink } from "react-router-dom";
import CheckoutIcon from "../../assets/icons/CheckoutIcon";
import ClockIcon from "../../assets/icons/ClockIcon.Jsx";
import SuccessBackgroundIcon from "../../assets/icons/SuccessBackgroundIcon";
import SuccessCarticon from "../../assets/icons/SuccessCarticon";
import "./orderComplete.scss";
import { motion } from "framer-motion";

function OrderComplete() {
  return (
    <div className="order_complete custom-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="complete"
      >
        <div>
          <SuccessBackgroundIcon />
          <span className="background">
            <SuccessCarticon />
          </span>
        </div>
        <span className="title">You Order Is Completed!</span>
        <h3>
          Thank you for your order! Your order is being processed and will be
          completed within 3-6 hours. You will receive an email confirmation
          when your order is completed.
        </h3>
        <NavLink to="/">Continue Shopping</NavLink>

        <span className="clock">
          <ClockIcon />
        </span>
        <span className="checkout">
          <CheckoutIcon />
        </span>
      </motion.div>
    </div>
  );
}

export default OrderComplete;
