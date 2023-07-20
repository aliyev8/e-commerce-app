import LeatestProductLayout from "../../layout/LeatestProductLayout";
import FeaturedProducts from "../../pages/featured-products/FeaturedProducts";
import InformationsCard from "../../pages/information-cards/InformationsCard";
import MainCarousel from "../../pages/main-carousel/MainCarousel";
import TrendingProducts from "../../pages/trending-products/TrendingProducts";
import UniqeProduct from "../../pages/unique-features/UniqeProduct";
import "./body.scss";

function Body() {
  return (
    <div>
      <MainCarousel />
      <FeaturedProducts />
      <LeatestProductLayout />
      <InformationsCard />
      <UniqeProduct />
      <TrendingProducts />
    </div>
  );
}

export default Body;
