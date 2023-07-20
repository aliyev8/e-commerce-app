import "./header.scss";
import SearchIcon from "../../assets/icons/SearchIcon";
import HamburgerIcon from "../../assets/icons/HamburgerIcon";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../../store/hamburger";

function HeaderBottom() {
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(openMenu({ name: "menu" }));
  };

  return (
    <div className="header_bottom custom-container">
      <div className="header_bottom__left">Hekto</div>

      <div className="header_bottom__center">
        <ul>
          <li>Home</li>
          <li>Pages</li>
          <li>Product</li>
          <li>Blog</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="header_bottom__right">
        <input placeholder="Search product ..." type="text" />
        <button>
          <SearchIcon />
        </button>
      </div>

      <div onClick={handleOpen} className="hamburger_menu">
        <HamburgerIcon />
      </div>
    </div>
  );
}

export default HeaderBottom;
