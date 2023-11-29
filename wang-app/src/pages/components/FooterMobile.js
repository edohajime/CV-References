import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineArrowUp } from "react-icons/ai";

const FooterMobile = () => {
  return (
    <div className="footerMobile">
      <Container>
        <Row>
          <Col className="footerMobile-items">
            <div className="footerMobile-item">
              <div className="fa-cartMobile"></div>
              <h5>Mua sắm</h5>
            </div>
            <div className="footerMobile-item">
              <div className="fa-listMobile"></div>
              <h5>Danh mục</h5>
            </div>
            <div className="footerMobile-item">
              <div className="fa-communityMobile"></div>
              <h5>Cộng đồng</h5>
            </div>
            <div className="footerMobile-item">
              <div className="fa-tradingMobile"></div>
              <h5>Đầu tư</h5>
            </div>
            <div className="footerMobile-item">
              <div className="fa-accountMobile"></div>
              <h5>Cá nhân</h5>
            </div>
          </Col>
        </Row>
        <div className="chatbox">
          <div className="chatbox-body">
            <img src="./images/fa-chatbox.jpg" alt="chatbox"></img>
            <div className="chatbox-count">1</div>
          </div>
        </div>
        <div className="scrollTop">
          <AiOutlineArrowUp color="white" onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
          }}/>
        </div>
      </Container>
    </div>
  );
};
export default FooterMobile;
