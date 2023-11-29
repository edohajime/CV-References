import { Col, Container, Row } from "react-bootstrap";
import Flickity from "react-flickity-component";

const Banner = () => {
  const flickityOps = {
    contain: false,
    wrapAround: true,
    autoPlay: 3000,
    freeScrolls: false,
    prevNextButtons: false,
    pageDots: true,
  };
  return (
    <div className="banner">
      <Container fluid style={{ padding: 0 }}>
        <Flickity
          className={"banner-carousel"}
          elementType={"div"}
          options={flickityOps}
        >
          <div className="banner-item">
            <Row>
              <Col xs={7} className="banner-first">
                <img src="./images/banner-1.jpg" alt="banner1"></img>
              </Col>
              <Col xs={5}>
                <Row>
                  <Col xs={12} className="banner-second">
                    <img src="./images/banner-2.jpg" alt="banner2"></img>
                  </Col>
                  <Col xs={12} className="banner-second">
                    <img src="./images/banner-3.jpg" alt="banner3"></img>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="banner-item">
            <Row>
              <Col xs={7} className="banner-first">
                <img src="./images/banner-1.jpg" alt="banner1"></img>
              </Col>
              <Col xs={5}>
                <Row>
                  <Col xs={12} className="banner-second">
                    <img src="./images/banner-2.jpg" alt="banner2"></img>
                  </Col>
                  <Col xs={12} className="banner-second">
                    <img src="./images/banner-3.jpg" alt="banner3"></img>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="banner-item">
            <Row>
              <Col xs={7} className="banner-first">
                <img src="./images/banner-1.jpg" alt="banner1"></img>
              </Col>
              <Col xs={5}>
                <Row>
                  <Col xs={12} className="banner-second">
                    <img src="./images/banner-2.jpg" alt="banner2"></img>
                  </Col>
                  <Col xs={12} className="banner-second">
                    <img src="./images/banner-3.jpg" alt="banner3"></img>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="banner-item">
            <Row>
              <Col xs={7} className="banner-first">
                <img src="./images/banner-1.jpg" alt="banner1"></img>
              </Col>
              <Col xs={5}>
                <Row>
                  <Col xs={12} className="banner-second">
                    <img src="./images/banner-2.jpg" alt="banner2"></img>
                  </Col>
                  <Col xs={12} className="banner-second">
                    <img src="./images/banner-3.jpg" alt="banner3"></img>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Flickity>
      </Container>
    </div>
  );
};

export default Banner;
