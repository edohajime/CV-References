import { Col, Container, Row } from "react-bootstrap";
import { GrClose, GrPlayFill } from "react-icons/gr";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Container>
        <div className="sidebar-exit">
          <GrClose
            className="fa-close"
            onClick={() => {
              let sidebar = document.querySelector(".sidebar");
              if (sidebar.classList.contains("block")) {
                sidebar.classList.remove("block");
              }
            }}
          />
        </div>
        <Row>
          <Col xs={12} className="text-end mb-3">
            <img
              className="sidebar-language"
              src="./images/lang-en.jpg"
              alt="English"
            ></img>
          </Col>
          <Col xs={6}>
            <div className="sidebar-btn">Đăng nhập</div>
          </Col>
          <Col xs={6}>
            <div className="sidebar-btn">Đăng ký</div>
          </Col>
        </Row>
        <Row className="sidebar-item">
          <Col xs={10}>Kênh bán lẻ</Col>
          <Col xs={2} className="text-end">
            <GrPlayFill className="fa-playFill"/>
          </Col>
        </Row>
        <Row className="sidebar-item">
          <Col xs={10}>Kênh bán buôn</Col>
          <Col xs={2} className="text-end">
            <GrPlayFill className="fa-playFill"/>
          </Col>
        </Row>
        <Row className="sidebar-item">
          <Col xs={10}>Kênh đầu tư</Col>
          <Col xs={2} className="text-end">
            <GrPlayFill className="fa-playFill"/>
          </Col>
        </Row>
        <Row className="sidebar-item">
          <Col xs={10}>Mua buôn</Col>
          <Col xs={2} className="text-end">
            <GrPlayFill className="fa-playFill"/>
          </Col>
        </Row>
        <Row className="sidebar-item">
          <Col xs={10}>Ưu đãi</Col>
          <Col xs={2} className="text-end">
            <GrPlayFill className="fa-playFill"/>
          </Col>
        </Row>
        <Row className="sidebar-item">
          <Col xs={10}>Tặng quà</Col>
          <Col xs={2} className="text-end">
            <GrPlayFill className="fa-playFill"/>
          </Col>
        </Row>
        <Row className="sidebar-item">
          <Col xs={10}>Nạp tiền</Col>
          <Col xs={2} className="text-end">
            <GrPlayFill className="fa-playFill"/>
          </Col>
        </Row>
        <Row className="sidebar-item">
          <Col xs={10}>Hoa hồng</Col>
          <Col xs={2} className="text-end">
            <GrPlayFill className="fa-playFill"/>
          </Col>
        </Row>
        <Row className="sidebar-item">
          <Col xs={10}>Bản đồ</Col>
          <Col xs={2} className="text-end">
            <GrPlayFill className="fa-playFill"/>
          </Col>
        </Row>
        <Row className="sidebar-item">
          <Col xs={10}>Theo dõi</Col>
          <Col xs={2} className="text-end">
            <GrPlayFill className="fa-playFill"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Sidebar;
