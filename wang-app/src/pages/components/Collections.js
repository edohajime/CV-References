import { Col, Container, Row } from "react-bootstrap";

const Collections = () => {
  return (
    <div className="collections">
      <Container>
        <Row>
          <Col xs={12}>
            <div
              className="collections-first"
              style={{
                backgroundImage: "url(../images/winter-collections.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "right",
              }}
            >
              <div className="collections-first-bg"></div>
              <h5>Bộ sưu tập thu đông</h5>
            </div>
          </Col>
          <Col xs={12}>
            <div
              className="collections-second"
              style={{
                backgroundImage: "url(../images/collections-item.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            <div
              className="collections-second"
              style={{
                backgroundImage: "url(../images/collections-item.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </Col>
          <Col xs={12}>
            <div
              className="collections-second"
              style={{
                backgroundImage: "url(../images/collections-item.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            <div
              className="collections-second"
              style={{
                backgroundImage: "url(../images/collections-item.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="collections-second-bg"></div>
              <div className="collections-expand">Xem thêm</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Collections;
