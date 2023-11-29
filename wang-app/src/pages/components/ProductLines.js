import { Col, Container, Row } from "react-bootstrap";

const ProductLines = () => {
  return (
    <div className="productLines">
      <Container>
        <Row className="productLines-header">
          <Col xs={8}>
            <h1 className="productLines-title">MUA THEO DÒNG SẢN PHẨM</h1>
          </Col>
          <Col xs={4} className="text-end">
            <h5 className="productLines-expand">Xem {">>"}</h5>
          </Col>
        </Row>
        <Row className="productLines-body">
          <Col xs={6}>
            <div className="productLines-item top">
              <div
                className="productLines-image"
                style={{
                  background:
                    "url(../images/product-lines-item1.jpg) 0% 0% / cover",
                }}
              ></div>
              <h3 className="productLines-name">À.18+ BASIC</h3>
              <h4 className="productLines-notes">Thiết kế cơ bản</h4>
            </div>
          </Col>
          <Col xs={6}>
            <div className="productLines-item top">
              <div
                className="productLines-image"
                style={{
                  background:
                    "url(../images/product-lines-item2.jpg) 0% 0% / cover",
                }}
              ></div>
              <h3 className="productLines-name">À.18+ STYLE</h3>
              <h4 className="productLines-notes">Thiết kế hiện đại cầu kì và đặc sắc</h4>
            </div>
          </Col>
          <Col xs={12}>
            <div className="productLines-item top">
              <div
                className="productLines-image"
                style={{
                  background:
                    "url(../images/product-lines-item2.jpg) 0% 0% / cover",
                }}
              ></div>
              <h3 className="productLines-name">À.18+ LIMITED</h3>
              <h4 className="productLines-notes">Các thiết kế mang tầm thương hiệu với các hoạ tiết thêu thủ công </h4>
            </div>
          </Col>
        </Row>
        <Row className="productLines-footer">
          <h5 className="productLines-expand">Xem tất cả {">>"}</h5>
        </Row>
      </Container>
    </div>
  );
};
export default ProductLines;
