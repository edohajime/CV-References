import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import { BsChevronRight } from "react-icons/bs";
import Contact from "./components/Contact";

const ContactPage = () => {
  return (
    <>
      <Header />

      <div className="breadcrumb">
        <Container>
          <div className="breadcrumb-navibar">
            <p className="parent">Trang Chủ</p>
            <BsChevronRight />
            <p className="now">Hồ Sơ Của Chúng Tôi</p>
          </div>
        </Container>
      </div>

      <Contact />

      <Footer />
    </>
  );
};

export default ContactPage;
