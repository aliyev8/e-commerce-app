import "./header.scss";
import HamburgerIcon from "../../assets/icons/HamburgerIcon";
import { useDispatch } from "react-redux";
import { openMenu } from "../../store/hamburger";
import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import data from "../../mock-data/mockData.json";
import { useNavigate } from "react-router-dom";

function HeaderBottom() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const [filteredProducts, setFilteredProducts] = useState([]);
  const dispatch = useDispatch();
  const searchRef = useRef();
  let products = data;

  const handleClick = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setFilteredProducts([]);
      setValue("");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.featuredProducts.filter((pr) =>
        pr.name.toLowerCase().includes(value)
      )
    );
  }, [value]);

  const handleOpen = () => {
    dispatch(openMenu({ name: "menu" }));
  };

  const goProduct = (prod) => {
    navigate(`/${prod.category}/${prod.id}`);
    setValue("");
    setFilteredProducts([]);
  };

  return (
    <div className="header_bottom custom-container">
      <NavLink to="/" className="header_bottom__left">
        Hekto
      </NavLink>

      <div className="header_bottom__center">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>Pages</li>
          <li>
            <NavLink to="/products">Product</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>Shop</li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>

      <div className="header_bottom__right">
        <input
          defaultValue={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search product ..."
          type="text"
        />

        <div ref={searchRef} className="search_container">
          {value.length > 0 &&
            filteredProducts.length > 0 &&
            filteredProducts.map((prod, key) => {
              return (
                <div onClick={() => goProduct(prod)} className="item" key={key}>
                  <img src={prod.image} alt="" /> {prod.name}
                </div>
              );
            })}
        </div>
      </div>

      <div className="hamburg">
        <div onClick={handleOpen} className="hamburger_menu">
          <HamburgerIcon />
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
