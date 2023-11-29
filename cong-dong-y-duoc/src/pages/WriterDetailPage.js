import Header from "./components/Header";
import WriterDetail from "./components/WriterDetail";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import { BsChevronRight } from "react-icons/bs";

const WriterDetailPage = () => {
  return (
    <>
      <Header />

      <div className="breadcrumb">
        <Container>
          <div className="breadcrumb-navibar">
            <p className="parent">Trang Chủ</p>
            <BsChevronRight />
            <p className="now">Writer</p>
          </div>
        </Container>
      </div>

      <WriterDetail />

      <Footer />
    </>
  );
};
export default WriterDetailPage;
