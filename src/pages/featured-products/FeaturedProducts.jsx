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

function FeaturedProducts() {
  const dispatch = useDispatch();

  const handleWish = (e, item) => {
    console.log(item);
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

  return (
    <div className="featured_products custom-container">
      <span className="featured_products__title">Featured Products</span>
      <Slider {...settings}>
        {data.featuredProducts.map((item, key) => {
          return (
            <div className="item" key={key}>
              <div className="image_container">
                <div className="cart_detail">
                  <span>
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
                <span className="price">{item.price}</span>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default FeaturedProducts;
