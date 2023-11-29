import { Col, Container, Row } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";

const CheckIns = () => {
  return (
    <div className="checkIns">
      <Container>
        <Row className="checkIns-header align-items-end">
          <Col xs={8}>
            <h1 className="checkIns-title">1234 KHÁCH HÀNG CHECKIN</h1>
          </Col>
          <Col xs={4} className="text-end">
            <div className="checkIns-expand">Xem tất cả {">>"}</div>
          </Col>
        </Row>
        <Row className="checkIns-body">
          <Col xs={6} className="checkIns-item">
            <div
              className="checkIns-thumb"
              style={{
                background: "url(../images/check-in-item.jpg) 50% 0% / cover",
              }}
            ></div>
            <div className="checkIns-info">
              <div className="info-item">
                <img src="./images/check-in-avt.jpg" alt="Marina"></img>
                <div className="">
                  <h5>Mariaaa</h5>
                  <p>3/8 - 8:30</p>
                </div>
              </div>
              <div className="info-item">
                <BsPlusCircle />
                &nbsp; 34
              </div>
              <div className="info-item">
                <IoMdHeartEmpty />
                &nbsp; 34
              </div>
            </div>
          </Col>
          <Col xs={6} className="checkIns-item">
            <div
              className="checkIns-thumb"
              style={{
                background: "url(../images/check-in-item.jpg) 50% 0% / cover",
              }}
            ></div>
            <div className="checkIns-info">
              <div className="info-item">
                <img src="./images/check-in-avt.jpg" alt="Marina"></img>
                <div className="">
                  <h5>Mariaaa</h5>
                  <p>3/8 - 8:30</p>
                </div>
              </div>
              <div className="info-item">
                <BsPlusCircle />
                &nbsp; 34
              </div>
              <div className="info-item">
                <IoMdHeartEmpty />
                &nbsp; 34
              </div>
            </div>
          </Col>
          <Col xs={6} className="checkIns-item">
            <div
              className="checkIns-thumb"
              style={{
                background: "url(../images/check-in-item.jpg) 50% 0% / cover",
              }}
            ></div>
            <div className="checkIns-info">
              <div className="info-item">
                <img src="./images/check-in-avt.jpg" alt="Marina"></img>
                <div className="">
                  <h5>Mariaaa</h5>
                  <p>3/8 - 8:30</p>
                </div>
              </div>
              <div className="info-item">
                <BsPlusCircle />
                &nbsp; 34
              </div>
              <div className="info-item">
                <IoMdHeartEmpty />
                &nbsp; 34
              </div>
            </div>
          </Col>
          <Col xs={6} className="checkIns-item">
            <div
              className="checkIns-thumb"
              style={{
                background: "url(../images/check-in-item.jpg) 50% 0% / cover",
              }}
            ></div>
            <div className="checkIns-info">
              <div className="info-item">
                <img src="./images/check-in-avt.jpg" alt="Marina"></img>
                <div className="">
                  <h5>Mariaaa</h5>
                  <p>3/8 - 8:30</p>
                </div>
              </div>
              <div className="info-item">
                <BsPlusCircle />
                &nbsp; 34
              </div>
              <div className="info-item">
                <IoMdHeartEmpty />
                &nbsp; 34
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default CheckIns;
