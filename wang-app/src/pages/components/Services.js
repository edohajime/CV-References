import { Col, Container, Row } from "react-bootstrap";

const Services = () => {
  return (
    <div>
      <div className="service-items">
        <Container>
          <Row>
            <Col xs={2}>
              <div className="service-img">
                <img src="./images/services-item1.jpg" alt="Mua chung"></img>
              </div>
              <h5>Mua chung</h5>
            </Col>
            <Col xs={2}>
              <div className="service-img">
                <img src="./images/services-item2.jpg" alt="Mua combo"></img>
              </div>
              <h5>Mua combo</h5>
            </Col>
            <Col xs={2}>
              <div className="service-img">
                <img src="./images/services-item3.jpg" alt="Flash sale"></img>
              </div>
              <h5>Flash sale</h5>
            </Col>
            <Col xs={2}>
              <div className="service-img">
                <img src="./images/services-item4.jpg" alt="Sale"></img>
              </div>
              <h5>Sale</h5>
            </Col>
            <Col xs={2}>
              <div className="service-img">
                <img src="./images/services-item5.jpg" alt="Đổi quà"></img>
              </div>
              <h5>Đổi quà</h5>
            </Col>
          </Row>
          <Row>
            <Col xs={2}>
              <div className="service-img">
                <img src="./images/services-item6.jpg" alt="Nạp tiền"></img>
              </div>
              <h5>Nạp tiền</h5>
            </Col>
            <Col xs={2}>
              <div className="service-img">
                <img src="./images/services-item7.jpg" alt="Tặng quà"></img>
              </div>
              <h5>Tặng quà</h5>
            </Col>
            <Col xs={2}>
              <div className="service-img">
                <img src="./images/services-item8.jpg" alt="Đã xem"></img>
              </div>
              <h5>Đã xem</h5>
            </Col>
            <Col xs={2}>
              <div className="service-img">
                <img src="./images/services-item9.jpg" alt="Hoa hồng"></img>
              </div>
              <h5>Hoa hồng</h5>
            </Col>
            <Col xs={2}>
              <div className="service-img">
                <img src="./images/services-item10.jpg" alt="Bản đồ"></img>
              </div>
              <h5>Bản đồ</h5>
            </Col>
          </Row>
        </Container>
      </div>
      
    </div>
  );
};
export default Services;
