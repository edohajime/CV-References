import { Col, Container, Row } from "react-bootstrap";
import { BsFillCaretUpFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const QuickBack = () => {
  return (
    <div className="quickBack">
      <Container>
        <Row>
          <Col xs={12}>
            <Link to="/">
              <img src="./images/home.jpg" alt="home"></img>
              Trang chủ
            </Link>
          </Col>
          <Col xs={12}>
            <img src="./images/account.jpg" alt="account"></img>
            Cá nhân
          </Col>
          <Col xs={12}>
            <img src="./images/list.jpg" alt="list"></img>
            Danh mục
          </Col>
          <Col xs={12}>
            <img src="./images/cart.jpg" alt="cart"></img>
            Giỏ hàng
          </Col>
          <Col xs={12} className="lastChild">
            <img src="./images/share.jpg" alt="share"></img>
            Chia sẻ
          </Col>
        </Row>
        <BsFillCaretUpFill className="icon" />
      </Container>
    </div>
  );
};
export default QuickBack;
