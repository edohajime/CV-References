import Header from "./components/Header";
import Footer from "./components/Footer";
import PostDetail from "./components/PostDetail";
import { Container } from "react-bootstrap";
import { BsChevronRight } from "react-icons/bs";

const PostDetailPage = () => {
  return (
    <>
      <Header />
      <div className="breadcrumb">
        <Container>
          <div className="breadcrumb-navibar">
            <p className="parent">Trang Chủ</p>
            <BsChevronRight />
            <p className="parent">Bệnh</p>
            <BsChevronRight />
            <p className="now">Bài Thuốc Gia Truyền 8 Đời Lương Y</p>
          </div>
        </Container>
      </div>

      <PostDetail />

      <Footer />
    </>
  );
};
export default PostDetailPage;
