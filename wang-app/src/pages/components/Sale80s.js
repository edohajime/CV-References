import { Col, Container, Row } from "react-bootstrap";

const Sale80s = () => {
  return (
    <div className="sale80s">
      <Container>
        <Row className="sale80s-header align-items-center">
          <Col xs={5}>
            <h1 className="sale80s-title">SALE UP TO 80%</h1>
          </Col>
          <Col xs={7} className="text-end">
            <h5 className="sale80s-expand">Xem {">>"}</h5>
          </Col>
        </Row>
        <Row className="sale80s-body">
          <Col xs={6}>
            <div className="sale80s-item">
              <div
                className="sale80s-image"
                style={{
                  background: "url(../images/sale-ao-polo1.jpg) 0% 0% / cover",
                }}
              >
                <span
                  className="sale80s-sticker"
                  style={{ top: "5%", right: "5%" }}
                >
                  50%
                </span>
              </div>
              <h5>Sale áo Polo</h5>
            </div>
          </Col>
          <Col xs={6}>
            <div className="sale80s-item">
              <div
                className="sale80s-image"
                style={{
                  background: "url(../images/sale-ao-polo2.jpg) 0% 0% / cover",
                }}
              >
                <span
                  className="sale80s-sticker"
                  style={{ bottom: "5%", right: "5%" }}
                >
                  50%
                </span>
              </div>
              <h5>Sale áo Polo</h5>
            </div>
          </Col>
          <Col xs={6}>
            <div className="sale80s-item">
              <div
                className="sale80s-image"
                style={{
                  background: "url(../images/sale-ao-polo3.jpg) 0% 0% / cover",
                }}
              >
                <span
                  className="sale80s-sticker"
                  style={{ top: "40%", right: "40%" }}
                >
                  50%
                </span>
              </div>
              <h5>Sale áo Polo</h5>
            </div>
          </Col>
          <Col xs={6}>
            <div className="sale80s-item">
              <div
                className="sale80s-image"
                style={{
                  background: "url(../images/sale-ao-polo4.jpg) 0% 0% / cover",
                }}
              >
                <span
                  className="sale80s-sticker"
                  style={{ top: "5%", left: "5%" }}
                >
                  50%
                </span>
              </div>
              <h5>Sale áo Polo</h5>
            </div>
          </Col>
        </Row>
        <Row className="sale80s-footer">
          <Col>
            <h5 className="sale80s-expand">Xem tất cả {">>"}</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Sale80s;
