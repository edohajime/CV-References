import { Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="football banner">
      <div className="football-bg banner-bg"></div>
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <div className="banner-one"></div>
          </Col>
          <Col xs={12} md={5}>
            <div className="banner-two"></div>
          </Col>
          <Col xs={12} md={4}>
            <div className="banner-three"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Banner;
