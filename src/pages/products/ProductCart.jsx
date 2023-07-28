import FavIcon from "../../assets/icons/FavIcon";
import CartIcon from "../../assets/icons/CartIcon";
import { useDispatch } from "react-redux";
import { addCart, toggleAnimation } from "../../store/cart";
import { addWish, toggleWishAnimation } from "../../store/wishList";
import StarRating from "../../shared/Stars";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ProductCart({ item, grid }) {
  //   const { data } = useSelector((state) => state.cartSlice);
  //   const isCart = (id) => {
  //     return data.some((pr) => pr.id === id);
  //   };
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleAddCart = (e) => {
    e.stopPropagation();
    dispatch(addCart({ data: item }));
    dispatch(toggleAnimation());
  };
  const handleWish = (e) => {
    e.stopPropagation();
    dispatch(addWish({ data: item }));
    dispatch(toggleWishAnimation());
  };

  const goProduct = (e) => {
    e.stopPropagation();
    navigate(`/${item.category}/${item.id}`);
  };

  return (
    <div onClick={(e) => goProduct(e)} className="card">
      <div className="img_container">
        <img src={item.image} alt="" />
        <div className="cart_container">
          {grid && (
            <>
              <span onClick={(e) => handleAddCart(e)} className="cart">
                <CartIcon color="#151875" />
              </span>
              <span onClick={(e) => handleWish(e)} className="wish">
                <FavIcon color="#151875" />
              </span>
            </>
          )}
        </div>
      </div>
      <div className="name_container">
        <div className="desc">
          <span className="name">{item.name}</span>
          <div className="colors">
            {item?.colors.map((c, i) => {
              return (
                <div
                  className="color"
                  key={i}
                  style={{ backgroundColor: c.color }}
                ></div>
              );
            })}
          </div>
        </div>
        <div className="price">
          <span className="new_price">{`$${item?.price}`}</span>
          <span>
            {!grid && <StarRating starCount={item.stars} isCount={false} />}
          </span>
        </div>
        {!grid && <div className="more">{item.moreDetails}</div>}

        {!grid && (
          <>
            <div className="cart_btn">
              <span onClick={(e) => handleAddCart(e)} className="cart">
                <CartIcon color="#151875" />
              </span>
              <span onClick={(e) => handleWish(e)} className="wish">
                <FavIcon color="#151875" />
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductCart;
