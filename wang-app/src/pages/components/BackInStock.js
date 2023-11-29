import { Col, Container, Row } from "react-bootstrap";

const BackInStock = () => {
  return (
    <div className="backInStock">
      <Container>
        <Row className="backInStock-header align-items-end">
          <Col xs={4}>
            <h1 className="backInStock-title">Back In Stock</h1>
          </Col>
          <Col xs={8} className="text-end">
            <h3 className="backInStock-expand">Xem tất cả {">>"}</h3>
          </Col>
        </Row>
        <Row className="backInStock-body">
          <Col xs={12} className="backInStock-items">
            <div className="backInStock-item first">
              <div
                className="backInStock-thumbnail"
                style={{
                  background:
                    "url(../images/back-in-stock_item1.jpg) 50% 50% / 120%",
                }}
              ></div>
              <p>
                Quần sọc kim ánh vàng được làm lại bởi thương hiệu thời trang.
                Học sinh abc
              </p>
            </div>
            <div className="backInStock-item">
              <div
                className="backInStock-thumbnail"
                style={{
                  background:
                    "url(../images/back-in-stock_item2.jpg) 50% 50% / 120%",
                }}
              ></div>
              <p>Quần sọc kim ánh vàng được làm lại bởi thương hiệu ...</p>
            </div>
            <div className="backInStock-item">
              <div
                className="backInStock-thumbnail"
                style={{
                  background:
                    "url(../images/back-in-stock_item1.jpg) 50% 50% / 120%",
                }}
              ></div>
              <p>Quần sọc kim ánh vàng được làm lại bởi thương hiệu thời ...</p>
            </div>
          </Col>
        </Row>
        <Row className="backInStock-footer align-items-center">
          <h3 className="backInStock-expand">Xem tất cả {">>"}</h3>
        </Row>
      </Container>
    </div>
  );
};
export default BackInStock;
