import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";

import "./mainCarousel.scss";
function MainCarousel() {
  const { isOpen } = useSelector((state) => state.hamburgerSlice);

  console.log(isOpen);
  var settings = {
    className: isOpen ? "slider_container hidden_slider" : "slider_container",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <Slider {...settings}>
      <div className="item">
        <div className="item__left">
          <img
            src="https://res.cloudinary.com/dawsyfhbt/image/upload/v1688904811/image_32_g7mkxq.svg"
            alt=""
          />
        </div>

        <div className="item__center">
          <span className="title">Best Furniture For Your Castle....</span>
          <span className="subtitle">
            New Furniture Collection Trends in 2020
          </span>
          <span className="lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </span>

          <button>Shop Now</button>
        </div>

        <div className="item__right">
          <div className="layer1">
            <div className="layer2">
              <img
                src="https://res.cloudinary.com/dawsyfhbt/image/upload/v1688978838/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room_1_obpgwd.svg"
                alt=""
              />
            </div>
            <div className="blue_off">
              <span>
                50% <br /> off
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="item__left">
          <img
            src="https://res.cloudinary.com/dawsyfhbt/image/upload/v1688904811/image_32_g7mkxq.svg"
            alt=""
          />
        </div>

        <div className="item__center">
          <span className="title">Best Furniture For Your Castle....</span>
          <span className="subtitle">
            New Furniture Collection Trends in 2020
          </span>
          <span className="lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </span>

          <button>Shop Now</button>
        </div>

        <div className="item__right">
          <div className="layer1">
            <div className="layer2">
              <img
                src="https://res.cloudinary.com/dawsyfhbt/image/upload/v1688978838/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room_1_obpgwd.svg"
                alt=""
              />
            </div>
            <div className="blue_off">
              <span>
                50% <br /> off
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="item">
        <div className="item__left">
          <img
            src="https://res.cloudinary.com/dawsyfhbt/image/upload/v1688904811/image_32_g7mkxq.svg"
            alt=""
          />
        </div>

        <div className="item__center">
          <span className="title">Best Furniture For Your Castle....</span>
          <span className="subtitle">
            New Furniture Collection Trends in 2020
          </span>
          <span className="lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </span>

          <button>Shop Now</button>
        </div>

        <div className="item__right">
          <div className="layer1">
            <div className="layer2">
              <img
                src="https://res.cloudinary.com/dawsyfhbt/image/upload/v1688978838/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room_1_obpgwd.svg"
                alt=""
              />
            </div>
            <div className="blue_off">
              <span>
                50% <br /> off
              </span>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default MainCarousel;
