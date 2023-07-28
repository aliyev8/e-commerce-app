import UniqueBackgroundIcon from "../../assets/icons/UniqueBackgroundIcon";
import "./uniqueProduct.scss";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useDispatch } from "react-redux";
import { addCart, toggleAnimation } from "../../store/cart";

function UniqeProduct() {
  const dispatch = useDispatch();

  const handleAddCart = (e) => {
    e.stopPropagation();
    dispatch(
      addCart({
        data: {
          category: "special-offer",
          id: 15,
          name: "Cantilever chair",
          stars: 2,
          fullImage:
            "https://res.cloudinary.com/dawsyfhbt/image/upload/v1690018584/rectangle138_b0hnj2.png",
          price: "$42.00",
          oldPrice: "$62.00",
          code: "Y523201",
          image:
            "https://res.cloudinary.com/dawsyfhbt/image/upload/v1689086107/image_1168_b1dfdd.webp",
          variusTempor:
            "Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .",
          moreDetails:
            "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .",
        },
      })
    );
    dispatch(toggleAnimation());
  };

  return (
    <div className="unique_product">
      <div className="unique_product__container custom-container">
        <div className="left">
          <div className="circle">
            <div className="image"></div>
            <UniqueBackgroundIcon />
          </div>
        </div>
        <div className="right">
          <span className="title">
            Unique Features Of leatest & Trending Poducts
          </span>
          <div className="list_container">
            <div className="list_item">
              <div className="list"></div>
              <div className="text">
                All frames constructed with hardwood solids and laminates
              </div>
            </div>

            <div className="list_item">
              <div className="list blue"></div>
              <div className="text">
                Reinforced with double wood dowels, glue, screw - nails corner
                blocks and machine nails
              </div>
            </div>

            <div className="list_item">
              <div className="list green"></div>
              <div className="text">
                Arms, backs and seats are structurally reinforced
              </div>
            </div>
          </div>

          <div className="shop_now">
            <div onClick={(e) => handleAddCart(e)} className="btn">
              Add to cart
            </div>
            <div className="price">
              <div>
                <span className="info">B&B</span>
                <span className="info">Italian Sofa</span>
              </div>
              <div>$32</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UniqeProduct;
