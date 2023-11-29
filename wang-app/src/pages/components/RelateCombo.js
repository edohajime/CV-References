import { Col, Container, Row } from "react-bootstrap";
import Flickity from "react-flickity-component";
import { SlLocationPin } from "react-icons/sl";

const RelateCombo = () => {
  const flickityOps = {
    contain: true,
    draggable: true,
    freeScrolls: true,
    wrapAround: false,
    prevNextButtons: false,
    pageDots: false,
  };
  return (
    <div className="comboHot relateCombo">
      <Container>
        <Row className="comboHot-header">
          <Col xs={6}>
            <h1 className="comboHot-title">COMBO LIÊN QUAN</h1>
          </Col>
          <Col xs={6} className="text-end">
            <h5 className="comboHot-expand">Xem tất cả {">>"}</h5>
          </Col>
        </Row>
        <Row className="comboHot-body">
          <Col xs={12} className="comboHot-section">
            <Flickity
              className={"comboHot-carousel"}
              elementType={"div"}
              options={flickityOps}
            >
              <div className="comboHot-slides">
                <div className="comboHot-slide">
                  <div
                    className="comboHot-productBanner"
                    style={{
                      background:
                        "url(../images/combo-hot-item1.jpg) 0% 0% / cover",
                    }}
                  ></div>
                  <h3>300.000 đ</h3>
                </div>
              </div>
              <div className="comboHot-slides">
                <span className="plus-icon">+</span>
                <div className="comboHot-slide">
                  <div
                    className="comboHot-productBanner"
                    style={{
                      background:
                        "url(../images/combo-hot-item1.jpg) 0% 0% / cover",
                    }}
                  ></div>
                  <h3>300.000 đ</h3>
                </div>
              </div>
              <div className="comboHot-slides">
                <span className="plus-icon">+</span>
                <div className="comboHot-slide">
                  <div
                    className="comboHot-productBanner"
                    style={{
                      background:
                        "url(../images/combo-hot-item1.jpg) 0% 0% / cover",
                    }}
                  ></div>
                  <h3>300.000 đ</h3>
                </div>
              </div>
              <div className="comboHot-slides">
                <span className="plus-icon">+</span>
                <div className="comboHot-slide">
                  <div
                    className="comboHot-productBanner"
                    style={{
                      background:
                        "url(../images/combo-hot-item1.jpg) 0% 0% / cover",
                    }}
                  ></div>
                  <h3>300.000 đ</h3>
                </div>
              </div>
              <div className="comboHot-slides">
                <span className="plus-icon">+</span>
                <div className="comboHot-slide">
                  <div
                    className="comboHot-productBanner"
                    style={{
                      background:
                        "url(../images/combo-hot-item1.jpg) 0% 0% / cover",
                    }}
                  ></div>
                  <h3>300.000 đ</h3>
                </div>
              </div>
            </Flickity>
            <Row>
              <Col xs={2}>
                <img
                  className="comboHot-agentAvatar"
                  src="./images/combo-hot-item1.jpg"
                  alt="Đại lý 1"
                ></img>
              </Col>
              <Col xs={5} className="comboHot-label">
                <h5 className="comboHot-agentName">Tên đại lý</h5>
                <h5 className="comboHot-agentType">
                  Tên loại đại lý &nbsp;
                  <span className="location">
                    <SlLocationPin /> 240 km
                  </span>
                </h5>
                <div className="comboHot-saleSticker">50%</div>
              </Col>
              <Col xs={5} className="comboHot-sale">
                <h3 className="comboHot-salePrice">300.000 đ</h3>
                <h3 className="comboHot-price">609.000 đ</h3>
                <h3 className="comboHot-sold">Đã bán: 902</h3>
                <div className="comboHot-buy">Mua combo</div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} className="comboHot-section">
            <Flickity
              className={"comboHot-carousel"}
              elementType={"div"}
              options={flickityOps}
            >
              <div className="comboHot-slides">
                <div className="comboHot-slide">
                  <div
                    className="comboHot-productBanner"
                    style={{
                      background:
                        "url(../images/combo-hot-item1.jpg) 0% 0% / cover",
                    }}
                  ></div>
                  <h3>300.000 đ</h3>
                </div>
              </div>
              <div className="comboHot-slides">
                <span className="plus-icon">+</span>
                <div className="comboHot-slide">
                  <div
                    className="comboHot-productBanner"
                    style={{
                      background:
                        "url(../images/combo-hot-item1.jpg) 0% 0% / cover",
                    }}
                  ></div>
                  <h3>300.000 đ</h3>
                </div>
              </div>
              <div className="comboHot-slides">
                <span className="plus-icon">+</span>
                <div className="comboHot-slide">
                  <div
                    className="comboHot-productBanner"
                    style={{
                      background:
                        "url(../images/combo-hot-item1.jpg) 0% 0% / cover",
                    }}
                  ></div>
                  <h3>300.000 đ</h3>
                </div>
              </div>
              <div className="comboHot-slides">
                <span className="plus-icon">+</span>
                <div className="comboHot-slide">
                  <div
                    className="comboHot-productBanner"
                    style={{
                      background:
                        "url(../images/combo-hot-item1.jpg) 0% 0% / cover",
                    }}
                  ></div>
                  <h3>300.000 đ</h3>
                </div>
              </div>
              <div className="comboHot-slides">
                <span className="plus-icon">+</span>
                <div className="comboHot-slide">
                  <div
                    className="comboHot-productBanner"
                    style={{
                      background:
                        "url(../images/combo-hot-item1.jpg) 0% 0% / cover",
                    }}
                  ></div>
                  <h3>300.000 đ</h3>
                </div>
              </div>
            </Flickity>
            <Row>
              <Col xs={2}>
                <img
                  className="comboHot-agentAvatar"
                  src="./images/combo-hot-item1.jpg"
                  alt="Đại lý 1"
                ></img>
              </Col>
              <Col xs={5} className="comboHot-label">
                <h5 className="comboHot-agentName">Tên đại lý</h5>
                <h5 className="comboHot-agentType">
                  Tên loại đại lý &nbsp;
                  <span className="location">
                    <SlLocationPin /> 240 km
                  </span>
                </h5>
                <div className="comboHot-saleSticker">50%</div>
              </Col>
              <Col xs={5} className="comboHot-sale">
                <h3 className="comboHot-salePrice">300.000 đ</h3>
                <h3 className="comboHot-price">609.000 đ</h3>
                <h3 className="comboHot-sold">Đã bán: 902</h3>
                <div className="comboHot-buy">Mua combo</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default RelateCombo;
