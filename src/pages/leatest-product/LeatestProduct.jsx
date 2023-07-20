import "./leatest.scss";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
function LeatestProduct() {
  return (
    <div className="leatest_product custom-container">
      <span className="title">Leatest product</span>
      <div className="leatest_category">
        <NavLink to="new-arrival" className="category">
          New Arrival
        </NavLink>
        <NavLink to="best-seller" className="category">
          Best Seller
        </NavLink>
        <NavLink to="featured" className="category">
          Featured
        </NavLink>
        <NavLink to="special-offer" className="category">
          Special Offer
        </NavLink>
      </div>

      <div className="category_list">
        <Outlet />
      </div>
    </div>
  );
}

export default LeatestProduct;
