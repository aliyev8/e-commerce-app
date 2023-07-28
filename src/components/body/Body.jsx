import FeaturedProducts from "../../pages/featured-products/FeaturedProducts";
import InformationsCard from "../../pages/information-cards/InformationsCard";
import LeatestBlog from "../../pages/leatest-blog/LeatestBlog";
import LeatestProduct from "../../pages/leatest-product/LeatestProduct";
import MainCarousel from "../../pages/main-carousel/MainCarousel";
import Partners from "../../pages/partners/Partners";
import SubscribeArea from "../../pages/subscribe/SubscribeArea";
import TrendingProducts from "../../pages/trending-products/TrendingProducts";
import UniqeProduct from "../../pages/unique-features/UniqeProduct";
import "./body.scss";

function Body() {
  return (
    <div className="body_container">
      <MainCarousel />
      <FeaturedProducts />
      <LeatestProduct />
      <InformationsCard />
      <UniqeProduct />
      <TrendingProducts />
      <SubscribeArea />
      <Partners />
      <LeatestBlog />
    </div>
  );
}

export default Body;
