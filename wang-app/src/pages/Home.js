import BackInStock from "./components/BackInStock";
import Banner from "./components/Banner";
import BuyTogether from "./components/BuyTogether";
import Category from "./components/Category";
import CategoryChild from "./components/CategoryChild";
import Collections from "./components/Collections";
import ComboHot from "./components/ComboHot";
import ComingSoon from "./components/ComingSoon";
import FeaturedProduct from "./components/FeaturedProduct";
import FlashSales from "./components/FlashSales";
import Footer from "./components/Footer";
import FooterMobile from "./components/FooterMobile";
import Header from "./components/Header";
import NewestProduct from "./components/NewestProduct";
import ProductLines from "./components/ProductLines";
import Sale60s from "./components/Sale60s";
import Sale80s from "./components/Sale80s";
import Services from "./components/Services";
import Sidebar from "./components/Sidebar";

const Home = () => {
  return (
    <div>
      <Header />

      <Category />

      <Banner />

      <Services />

      <CategoryChild />

      <FlashSales />

      <Collections />

      <BackInStock />

      <NewestProduct />

      <Sale80s />

      <Sale60s />

      <ProductLines />

      <ComboHot />

      <BuyTogether />

      <ComingSoon />

      <FeaturedProduct />

      <Footer />

      <Sidebar />

      <FooterMobile />
    </div>
  );
};

export default Home;
