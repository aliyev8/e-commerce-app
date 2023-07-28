import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./featuredProducts.scss";
import data from "../../mock-data/mockData.json";
import CartIcon from "../../assets/icons/CartIcon";
import FavIcon from "../../assets/icons/FavIcon";
import ZoomIcon from "../../assets/icons/ZoomIcon";
import { useDispatch } from "react-redux";
import { addWish, toggleWishAnimation } from "../../store/wishList";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { addCart, toggleAnimation } from "../../store/cart";

function FeaturedProducts() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleWish = (e, item) => {
    e.stopPropagation();
    dispatch(addWish({ data: item }));
    dispatch(toggleWishAnimation());
  };

  const settings = {
    className: "featured_products_carousel",
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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

  const goProduct = (go) => {
    navigate(go);
  };

  const handleAddCart = (e, item) => {
    e.stopPropagation();
    dispatch(addCart({ data: item }));
    dispatch(toggleAnimation());
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="featured_products custom-container"
    >
      <span className="featured_products__title">Featured Products</span>
      <Slider {...settings}>
        {data.featuredProducts.map((item, key) => {
          return (
            <motion.div
              onClick={() => goProduct(`featuredProducts/${item.id}`)}
              className="item"
              key={key}
              variants={it}
            >
              <div className="image_container">
                <div className="cart_detail">
                  <span onClick={(e) => handleAddCart(e, item)}>
                    <CartIcon size={26} color="#1389FF" />
                  </span>

                  <span onClick={(e) => handleWish(e, item)}>
                    <FavIcon size={24} color="#1389FF" />
                  </span>

                  <span>
                    <ZoomIcon size={24} />
                  </span>
                </div>
                <img src={item.image} alt="" />
              </div>
              <div className="bottom">
                <span className="name">{item.name}</span>

                <div className="color_container">
                  {item.colors.map(({ color }, i) => (
                    <span
                      key={i}
                      className="color"
                      style={{ backgroundColor: `${color}` }}
                    ></span>
                  ))}
                </div>

                <span className="code">Code - {item.code}</span>
                <span className="price">{`$${item.price}`}</span>
              </div>
            </motion.div>
          );
        })}
      </Slider>
    </motion.div>
  );
}

export default FeaturedProducts;
