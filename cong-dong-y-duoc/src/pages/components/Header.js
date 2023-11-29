import { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  BsChevronDown,
  BsThreeDotsVertical,
  BsSearch,
  BsBookmark,
  BsList,
} from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import UserContext from "./UserContext";

const Header = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const handleProfile = () => {
    let profile = document.querySelector(".useraccount-profile");
    if (profile.classList.contains("visible")) {
      profile.classList.remove("visible");
    } else {
      profile.classList.add("visible");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    navigate("/login");
  };

  useEffect(() => {
    if (! sessionStorage.getItem('user')) {
      swal({
        title: 'Phải đăng nhập!',
        icon: 'warning'
      });
      navigate('/login');
    }
  }, []);

  return (
    <div className="header">
      <Container className="header-container">
        <Row>
          <Col className="menu" xs={7}>
            <div className="menu-list">
              <BsList />
            </div>
            <Link to="/">
              <img
                className="logo"
                src="/imgs/logo-congdongyduoc_1.jpg"
                alt="logo"
              />
            </Link>
            <div className="menu-item menu-dropdown">
              <Link to="/categories">Bệnh</Link>
              <BsChevronDown className="chepvon-down" />
            </div>
            <div className="menu-item menu-dropdown">
              Làm Đẹp
              <BsChevronDown className="chepvon-down" />
            </div>
            <div className="menu-item menu-dropdown">
              Video
              <BsChevronDown className="chepvon-down" />
            </div>
            <div className="menu-item menu-dropdown">
              Cs.Y Tế
              <BsChevronDown className="chepvon-down" />
            </div>
            <div className="menu-item menu-dropdown">
              Tài Liệu
              <BsChevronDown className="chepvon-down" />
            </div>
            <div className="menu-item menu-dropdown">
              Thuốc
              <BsChevronDown className="chepvon-down" />
            </div>
            <div className="menu-item menu-dropdown">
              Bác Sĩ
              <BsChevronDown className="chepvon-down" />
            </div>
            <div className="menu-item">Hỏi Đáp</div>
          </Col>
          <Col className="search" xs={5}>
            <div className="searchbar">
              <BsThreeDotsVertical />
              <input
                className="searchbar-input"
                type="text"
                name="search"
                placeholder="Search Anything"
              />
              <BsSearch />
            </div>
            <div className="useraccount" onClick={handleProfile}>
              <img src="/imgs/IMG_03999_1.jpg" alt="User Account" />
              <h5>{user.name ? user.name : "User"}</h5>
              <BsChevronDown className="chepvon-down" />
            </div>
            <div className="save">
              <BsBookmark />
            </div>
          </Col>
          <Col xs={12} className="search search-tablet">
            <div className="searchbar">
              <BsThreeDotsVertical />
              <input
                className="searchbar-input"
                type="text"
                name="search"
                placeholder="Search Anything"
              />
              <BsSearch />
            </div>
          </Col>
        </Row>
        <div className="useraccount-profile">
          <Link to="/my-profiles">
            <div className="profile-item">
              <FaRegUser />
              Profile
            </div>
          </Link>
          <div className="profile-item">
            <BsBookmark />
            Marked
          </div>
          <div className="profile-item" onClick={handleLogout}>
            <RxExit />
            Exit
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Header;
