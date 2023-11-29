import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import { BsChevronRight } from "react-icons/bs";

const AboutUsPage = () => {
  return (
    <>
      <Header />

      <div className="breadcrumb">
        <Container>
          <div className="breadcrumb-navibar">
            <p className="parent">Trang Chủ</p>
            <BsChevronRight />
            <p className="now">About Us</p>
          </div>
        </Container>
      </div>

      <AboutUs />

      <Footer />
    </>
  );
};
export default AboutUsPage;
