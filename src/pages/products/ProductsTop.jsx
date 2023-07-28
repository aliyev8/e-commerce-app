import { useEffect, useState } from "react";
import ViewGridIcon from "../../assets/icons/ViewGridIcon";
import ViewListIcon from "../../assets/icons/ViewListIcon";
import data from "../../mock-data/mockData.json";

function ProductsTop({ setGrid, setSort }) {
  const [value, setValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    data.leatestProducts.filter((item) =>
      setFilteredData(item.name.includes(value))
    );
  }, [setValue]);

  const handleSort = (value) => {
    setSort(value);
  };

  return (
    <div className="products__top">
      <span className="title">Ecommerce Acceories & Fashion item </span>
      <div className="sort_by">
        <div className="sort">
          <span>Sort By:</span>
          <select onChange={(e) => handleSort(e.target.value)}>
            <option value="bestMatch">Best-match</option>
            <option value="Raiting">Raiting</option>
          </select>
        </div>
        <div className="view">
          <span>View:</span>
          <span onClick={() => setGrid(true)}>
            <ViewGridIcon />
          </span>
          <span onClick={() => setGrid(false)}>
            <ViewListIcon />
          </span>
        </div>

        <div className="search">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search product..."
          />

          <ul>
            {filteredData.length > 0 &&
              filteredData.map((product, key) => {
                return <li key={key}>{product.name}</li>;
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductsTop;
