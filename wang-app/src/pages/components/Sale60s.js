import { Col, Container, Row } from "react-bootstrap";

const Sale60s = () => {
  return (
    <div className="sale60s">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="sale60s-item" style={{background: "url(../images/sale60-ao-suit.jpg) 0% 0% / cover"}}>
              <div className="sale60s-item-bg"></div>
              <h3>Cơ hội cuối để nhận ưu đãi: Giảm 60% khi mua Suit</h3>
              <div className="sale60s-buynow">Mua ngay</div>
            </div>
          </Col>
          <Col xs={12}>
            <div className="sale60s-item" style={{background: "url(../images/sale60-ao-ngan-tay.jpg) 0% 0% / cover"}}>
              <div className="sale60s-item-bg"></div>
              <h3>Cơ hội cuối để nhận ưu đãi: Giảm 60% khi mua áo ngắn tay</h3>
              <div className="sale60s-buynow">Mua ngay</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Sale60s;
