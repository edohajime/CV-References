import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import { BsChevronRight } from "react-icons/bs";
import { Container } from "react-bootstrap";
const MyProfile = () => {
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

      <Profile />

      <Footer />
    </>
  );
};
export default MyProfile;
