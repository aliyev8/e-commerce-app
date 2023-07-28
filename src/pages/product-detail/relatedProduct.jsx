import { NavLink } from "react-router-dom";
import StarRating from "../../shared/Stars";

function RelatedProduct({ relatedProducts, category, isTitle }) {
  return (
    <div className="related_products">
      <div className="custom-container gap">
        {isTitle && <span className="title">Related products</span>}
        <div className="related_products_container">
          {relatedProducts.map((pr, key) => {
            return (
              <NavLink
                to={`/${category}/${pr.id}`}
                className="rl_product"
                key={key}
              >
                <div className="img_container">
                  <img src={pr.image} alt="" />
                </div>
                <div className="name">
                  <span>{pr.name ?? pr.title}</span>
                  <StarRating starCount={pr.stars} isCount={false} />
                </div>
                <span className="price">{`$${pr.price}`}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RelatedProduct;
