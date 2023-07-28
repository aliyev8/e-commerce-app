import "./products.scss";
import ProductsBottom from "./ProductsBottom";
import ProductsTop from "./ProductsTop";
import data from "../../mock-data/mockData.json";
import { useEffect, useState } from "react";
import CircleLoader from "../../shared/circle-loader/CircleLoader";

function Products() {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [grid, setGrid] = useState(true);
  const [sort, setSort] = useState();

  useEffect(() => {
    setLoading(true);
    sort === "Raiting"
      ? setTimeout(() => {
          const sorted = products.sort((a, b) => b?.stars - a?.stars);
          setProducts([...sorted]);
          console.log(products);
          setLoading(false);
        }, 1000)
      : setTimeout(() => {
          const pro = data.featuredProducts;

          setProducts([...pro]);
          setLoading(false);
        }, 1000);
  }, [sort]);

  return (
    <div className="products_container custom-container">
      {loading ? (
        <div className="loading">
          <CircleLoader />
        </div>
      ) : (
        <div className="products">
          <ProductsTop setSort={setSort} grid={grid} setGrid={setGrid} />
          <ProductsBottom data={products} grid={grid} />
        </div>
      )}
    </div>
  );
}

export default Products;
