import ProductCart from "./ProductCart";
function ProductsBottom({ data, grid }) {
  return (
    <div
      className={
        grid ? "products__bottom_grid" : "products__bottom_grid products__list"
      }
    >
      {data.map((item, key) => {
        return (
          <div key={key} className="product">
            <ProductCart item={item} grid={grid} />
          </div>
        );
      })}
    </div>
  );
}

export default ProductsBottom;
