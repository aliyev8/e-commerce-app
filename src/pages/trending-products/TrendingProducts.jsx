import { useEffect, useState } from "react";
import "./trendingProducts.scss";
import data from "../../mock-data/mockData.json";

function TrendingProducts() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [collection, setCollection] = useState([]);
  const [chairs, setChairs] = useState([]);

  useEffect(() => {
    const filtered = data.trendingProducts.filter(
      (pr) => pr.category === "stand"
    );
    const allProd = data.trendingProducts.filter(
      (pr) => pr.category === "all_product"
    );
    const collect = data.trendingProducts.filter(
      (pr) => pr.category === "collection"
    );
    const chairsArr = data.trendingProducts.filter(
      (pr) => pr.category === "chair"
    );
    setTimeout(() => {
      setChairs(chairsArr);
      setFilteredProducts(filtered);
      setCollection([...allProd, ...collect]);
    }, 1000);
  }, []);

  if (!collection && !filteredProducts) return "...loading";
  console.log(collection);

  return (
    <div className="trending_product">
      <span className="title">Trending Products</span>
      <div className="trending_product_container custom-container">
        <div className="trending_card">
          {filteredProducts.map((card, key) => {
            return (
              <div key={key} className="card">
                <div className="image_container">
                  <img src={card.image} alt="" />
                </div>
                <div className="bottom">
                  <div className="name">{card.name}</div>
                  <div className="price">
                    <span className="new_price">{card.price}</span>
                    <span className="old_price">{card.oldPrice}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="collection_container">
          {collection.map((col, i) => {
            return (
              <div
                key={i}
                className={
                  col.category === "all_product"
                    ? "all_product collection_card"
                    : "collection collection_card"
                }
                style={
                  col.category === "all_product"
                    ? { "--all_product_background": col?.background }
                    : { "--collection_background": col?.background }
                }
              >
                <div className="description"> {col.description}</div>
                <div className="btn">Shop now</div>
                <div className="image">
                  <img src={col.image} alt="" />
                </div>
              </div>
            );
          })}

          <div className="chairs_container">
            {chairs.map((ch, i) => {
              return (
                <div key={i} className="chair">
                  <div className="image">
                    <img src={ch.image} alt="" />
                  </div>
                  <div className="chair_info">
                    <div>{ch.name}</div>
                    <div className="old_price">{ch.oldPrice}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingProducts;
