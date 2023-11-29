import { Col, Container, Row } from "react-bootstrap";

const FooterMobile2 = () => {
  return (
    <div className="footerMobile footerMobile2">
      <Container>
        <Row>
          <Col className="item cart">
            <img
              src="./images/footer2-cart-icon.jpg"
              alt="footer2-cart-icon"
            ></img>
            &nbsp; Cho vào giỏ
          </Col>
          <Col className="item buy">Mua ngay</Col>
          <Col className="item business">Kinh doanh</Col>
        </Row>
        <div className="chatbox">
          <div className="chatbox-body">
            <img src="./images/fa-chatbox.jpg" alt="chatbox"></img>
            <div className="chatbox-count">1</div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default FooterMobile2;
