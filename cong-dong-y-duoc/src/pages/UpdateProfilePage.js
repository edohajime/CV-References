import { Container } from "react-bootstrap";
import { BsChevronRight } from "react-icons/bs";
import Footer from "./components/Footer";
import UpdateProfile from "./components/UpdateProfile";
import Header from "./components/Header";

const UpdateProfilePage = () => {
  return (
    <>
      <Header />

      <div className="breadcrumb">
        <Container>
          <div className="breadcrumb-navibar">
            <p className="parent">Trang Chủ</p>
            <BsChevronRight />
            <p className="now">Sửa Hồ Sơ</p>
          </div>
        </Container>
      </div>

      <UpdateProfile />

      <Footer />
    </>
  );
};
export default UpdateProfilePage;
