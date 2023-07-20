import EmailIcon from "../../assets/icons/EmailIcon";
import PhoneIcon from "../../assets/icons/PhoneIcon";
import "./header.scss";
import LoginIcon from "../../assets/icons/LoginIcon";
import FavIcon from "../../assets/icons/FavIcon";
import CartIcon from "../../assets/icons/CartIcon";
import HeaderBottom from "./HeaderBottom";
import { useSelector } from "react-redux";

function Header() {
  const { isWishAnimation } = useSelector((state) => state.wishList);
  const { isCartAnimation } = useSelector((state) => state.cartSlice);

  return (
    <div>
      <div className="header_container">
        <div className="custom-container">
          <div className="header_top">
            <div className="header_top__left">
              <div className="email">
                <EmailIcon /> <span>example@gmail.com</span>
              </div>

              <div className="phone">
                <PhoneIcon /> <span className="sub">(12345)67890</span>
              </div>
            </div>
            <div className="header_top__right">
              <div className="login">
                <span className="sub">Login</span> <LoginIcon />
              </div>

              <div className={isWishAnimation ? "favs wishing" : "favs"}>
                <span className="sub">Wish list</span> <FavIcon />
              </div>

              <div className={isCartAnimation ? "cart cart_animation" : "cart"}>
                <CartIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeaderBottom />
    </div>
  );
}

export default Header;
