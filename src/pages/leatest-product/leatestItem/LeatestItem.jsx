import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartIcon from "../../../assets/icons/CartIcon";
import FavIcon from "../../../assets/icons/FavIcon";
import SaleIcon from "../../../assets/icons/SaleIcon";
import ZoomIcon from "../../../assets/icons/ZoomIcon";
import data from "../../../mock-data/mockData.json";
import { addWish, toggleWishAnimation } from "../../../store/wishList";
import { motion } from "framer-motion";
import { handleZoom } from "../../../store/zoom";
import ZoomItem from "../../zoom-item/ZoomItem";
import { addCart, toggleAnimation } from "../../../store/cart";
import { useNavigate } from "react-router-dom";

function LeatestItem({ leatestCategory, variants }) {
  const [filteredProducts, setFilteredProducts] = useState(null);
  const dispatch = useDispatch();
  const { isZoom } = useSelector((state) => state.zoomSlice);

  const navigate = useNavigate();

  useEffect(() => {
    const filtered = data.leatestProducts.filter((pro) => {
      return leatestCategory
        ? pro.subCategory === leatestCategory
        : pro.subCategory === "new-arrival";
    });

    setTimeout(() => {
      setFilteredProducts(filtered);
    }, 100);
  }, [leatestCategory]);

  if (!filteredProducts) {
    return <div>Loading...</div>;
  }

  const handleWish = (e, item) => {
    e.stopPropagation();
    dispatch(addWish({ data: item }));
    dispatch(toggleWishAnimation());
  };

  const zooming = (e, item) => {
    e.stopPropagation();
    dispatch(handleZoom({ data: item, isZoom: true }));
  };

  const handleAddCart = (e, item) => {
    e.stopPropagation();
    dispatch(addCart({ data: item }));
    dispatch(toggleAnimation());
  };

  const goProduct = (go) => {
    navigate(go);
  };

  return (
    <>
      {isZoom && <ZoomItem />}

      {filteredProducts.map((item, key) => {
        return (
          <motion.div
            onClick={() => goProduct(`leatestProducts/${item.id}`)}
            variants={variants}
            layoutId={item.id}
            key={key}
            className="item_container"
          >
            <div className="sale_container">
              <SaleIcon />
              <span>Sale</span>
            </div>
            <div className="cart_detail">
              <span onClick={(e) => handleAddCart(e, item)}>
                <CartIcon size={20} color="#2f1ac4" />
              </span>

              <span onClick={(e) => handleWish(e, item)}>
                <FavIcon size={16} color="#2f1ac4" />
              </span>

              <span onClick={(e) => zooming(e, item)}>
                <ZoomIcon size={16} color="#2f1ac4" />
              </span>
            </div>
            <div className="item">
              <img src={item.image} alt="" />
            </div>
            <div className="bottom">
              <div className="name">{item.name}</div>
              <div className="price">
                <span className="new_price">{`$${item.price}`}</span>
                <span className="old_price">{item.oldPrice}</span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
}

export default LeatestItem;
