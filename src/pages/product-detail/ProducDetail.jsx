import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productDetail.scss";
import data from "../../mock-data/mockData.json";
import StarRating from "../../shared/Stars";
import FavIcon from "../../assets/icons/FavIcon";
import SkeletonLoader from "../../shared/skeleton/ProductDetailSkeleton";
import ArrowMoreIcon from "../../assets/icons/ArrowMoreIcon";
import RelatedProduct from "./relatedProduct";
import { useDispatch } from "react-redux";
import { addCart, toggleAnimation } from "../../store/cart";

function ProducDetail() {
  const [loading, setLoading] = useState(true);
  const [currentProduct, setCurrentProduct] = useState();
  const [relatedProducts, setRelatedProducts] = useState();
  const { category, id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    setCurrentProduct();
    const crntProduct = data[category].find((item) => item.id == id);

    setTimeout(() => {
      setCurrentProduct(crntProduct);
      setRelatedProducts(data[category].filter((pr) => pr.id !== id));
      setLoading(false);
    }, 1000);
  }, [category, id]);

  const handleAddCart = (e, item) => {
    e.stopPropagation();
    dispatch(addCart({ data: item }));
    dispatch(toggleAnimation());
  };

  return (
    <div className="product_detail custom-container">
      {loading ? (
        <SkeletonLoader />
      ) : (
        <div className="content_container">
          <div className="image_container">
            <div className="item1">
              <img
                src="https://res.cloudinary.com/dawsyfhbt/image/upload/v1689982037/rectangle134_vvyukv.png"
                alt=""
              />
            </div>
            <div className="item2">
              <img
                src="https://res.cloudinary.com/dawsyfhbt/image/upload/v1689982037/rectangle136_b1l3l9.png"
                alt=""
              />
            </div>
            <div className="item3">
              <img
                src="https://res.cloudinary.com/dawsyfhbt/image/upload/v1689982040/rectangle137_qmrzzt.png"
                alt=""
              />
            </div>
            <div className="item4">
              <img src={currentProduct.fullImage} alt="" />
            </div>
            <div className="item5">
              <span className="name">
                {currentProduct.title ?? currentProduct.name}
              </span>

              <span className="stars">
                <StarRating starCount={currentProduct?.stars} />
              </span>

              <div className="price">
                <span className="new_price">{`$${currentProduct?.price}`}</span>
                <span className="old_price">{currentProduct?.oldPrice}</span>
              </div>

              <span className="desc">{currentProduct?.description}</span>

              <div className="btn_container">
                <span
                  onClick={(e) => handleAddCart(e, currentProduct)}
                  className="add_to_card"
                >
                  Add to card
                </span>
                <FavIcon color="#151875" />
              </div>

              <div>Categories</div>
              <div>Tags</div>
              <div>
                <span>Share</span>
              </div>
            </div>
          </div>

          <div className="more_product">
            <div className="description_container custom-container">
              <div className="options">
                <div className="option">Description</div>
                <div className="option">Additional Info</div>
                <div className="option">Reviews</div>
                <div className="option">Video</div>
              </div>

              <div className="description_varius">
                <span className="varius">Varius tempor</span>
                <span className="desc">{currentProduct.variusTempor}</span>
              </div>

              <div className="more_details">
                <span className="varius">More details</span>

                <div className="desc_more">
                  <ArrowMoreIcon /> <span>{currentProduct.moreDetails}</span>
                </div>
              </div>
            </div>
          </div>

          <RelatedProduct
            category={category}
            relatedProducts={relatedProducts.splice(0, 4)}
            isTitle={true}
          />
        </div>
      )}
    </div>
  );
}

export default ProducDetail;
