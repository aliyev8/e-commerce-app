import UniqueBackgroundIcon from "../../assets/icons/UniqueBackgroundIcon";
import "./uniqueProduct.scss";

function UniqeProduct() {
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
            <div className="btn">Add to cart</div>
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
