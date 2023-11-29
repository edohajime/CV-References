import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import { BsChevronRight } from "react-icons/bs";
import Category from "./components/Category";

const CategoryPage = () => {
  return (
    <>
      <Header />

      <div className="breadcrumb">
        <Container>
          <div className="breadcrumb-navibar">
            <p className="parent">Trang Chủ</p>
            <BsChevronRight />
            <p className="now">Bệnh</p>
          </div>
        </Container>
      </div>

      <Category />

      <Footer />
    </>
  );
};
export default CategoryPage;
