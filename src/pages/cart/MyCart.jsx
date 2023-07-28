import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UnSelectIcon from "../../assets/icons/UnSelectIcon";
import SkeletonLoader from "../../shared/skeleton/ProductDetailSkeleton";
import {
  addCart,
  decreaseQuantity,
  increaseQuantity,
  toggleAnimation,
} from "../../store/cart";
import "./myCart.scss";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import CartBox from "../../shared/checkbox/CartBox";
import CircleLoader from "../../shared/circle-loader/CircleLoader";
import { useNavigate } from "react-router-dom";

function MyCart() {
  const { data } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [checked, setChecked] = useState(false);
  const [btnLoading, setBtnloading] = useState(false);
  const navigate = useNavigate();

  const removeItem = (e, id) => {
    e.stopPropagation();
    dispatch(addCart({ data: { id } }));
    dispatch(toggleAnimation());
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

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

  const calculateTotalPrice = () => {
    let total = 0;
    data.forEach((item) => {
      total += item.price * item.quantity;
    });
    return `$${total}`;
  };

  const orderComplete = () => {
    setBtnloading(true);
    setTimeout(() => {
      navigate("/orderComplete");
      setBtnloading(false);
    }, 1000);
  };

  return (
    <div className="my_cart">
      {loading ? (
        <SkeletonLoader />
      ) : data.length > 0 ? (
        <motion.table
          variants={container}
          initial="hidden"
          animate="visible"
          className="custom-container my_cart_container"
        >
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, key) => {
                return (
                  <motion.tr variants={it} key={key}>
                    <td
                      className={
                        data.length === 1 ? "product margin_product" : "product"
                      }
                    >
                      <img src={item.image} alt="" />
                      <span>{item.name ?? item.title}</span>
                      <span onClick={(e) => removeItem(e, item.id)}>
                        <UnSelectIcon />
                      </span>
                    </td>

                    <td>{`$${item.price}`}</td>
                    <td>
                      <div className="quantity_bar">
                        <button
                          disabled={item.quantity === 1}
                          className="decrease"
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                        >
                          -
                        </button>
                        <span className="count">{item.quantity}</span>
                        <button
                          className="increase"
                          onClick={() => dispatch(increaseQuantity(item.id))}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>{`$${item.price * item.quantity}`}</td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>

          <div className="check">
            <span className="title">Cart totals</span>
            <div className="totals">
              <div className="total_container">
                <span>Totals:</span>
                <span>{calculateTotalPrice()}</span>
              </div>
              <CartBox
                checked={checked}
                set={setChecked}
                background="#19D16F"
                content="Shipping & taxes calculated at checkout"
              />

              <button
                onClick={orderComplete}
                disabled={!checked}
                className="checkout"
              >
                {btnLoading ? (
                  <span>
                    <CircleLoader />
                  </span>
                ) : (
                  "Proceed To Checkout "
                )}
              </button>
            </div>
          </div>
        </motion.table>
      ) : (
        <div className="not_product">
          <div>No product in the cart</div>

          <NavLink to="/">Go to shoping</NavLink>
        </div>
      )}
    </div>
  );
}

export default MyCart;
