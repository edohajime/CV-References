import { Col, Container, Row } from "react-bootstrap";
import { PlusButton } from "./SimilarProducts";

const BuyTogether = () => {
  return (
    <div className="buyTogether">
      <Container>
        <Row className="buyTogether-header align-items-center">
          <Col xs={7}>
            <h1 className="buyTogether-title">CÙNG NHAU MUA CHUNG</h1>
          </Col>
          <Col xs={5} className="text-end">
            <h5 className="buyTogether-expand">Xem {">>"}</h5>
          </Col>
        </Row>
        <Row className="buyTogether-body">
          <Col xs={12} className="buyTogether-section">
            <div
              className="buyTogether-thumb"
              style={{
                background:
                  "url(../images/buy-together-thumb.jpg) 50% 0% / cover",
              }}
            >
              <div className="buyTogether-saleSticker">
                <div className="vertical-triangle"></div>
                50%
              </div>
            </div>
            <div className="buyTogether-info">
              <div className="buyTogether-name">
                Giày thể thao nhãn hiệu adidas mặca...
              </div>
              <div className="buyTogether-type">à.18+ style</div>
              <div className="buyTogether-salePrice">
                850.000 đ &nbsp;
                <div className="buyTogether-price">3.500.000 đ</div>
              </div>
              <div className="buyTogether-color">
                <div className="colorItem visible">
                  <div
                    className="colorBg"
                    style={{
                      background:
                        "url(../images/product-color2.jpg) 50% 50% / cover",
                    }}
                  ></div>
                </div>
                <div className="colorItem visible">
                  <div
                    className="colorBg"
                    style={{
                      background:
                        "url(../images/product-color3.jpg) 50% 50% / cover",
                    }}
                  ></div>
                </div>
                <div className="colorItem visible">
                  <div
                    className="colorBg"
                    style={{
                      background:
                        "url(../images/product-color4.jpg) 50% 50% / cover",
                    }}
                  ></div>
                </div>
                <div className="colorItem visible">
                  <div
                    className="colorBg"
                    style={{
                      background:
                        "url(../images/product-color1.jpg) 50% 50% / cover",
                    }}
                  ></div>
                </div>
                <div className="colorItem">
                  <div
                    className="colorBg"
                    style={{
                      background:
                        "url(../images/product-color2.jpg) 50% 50% / cover",
                    }}
                  ></div>
                </div>
                <div className="colorItem">
                  <div
                    className="colorBg"
                    style={{
                      background:
                        "url(../images/product-color3.jpg) 50% 50% / cover",
                    }}
                  ></div>
                </div>
                <div className="colorItem">
                  <div
                    className="colorBg"
                    style={{
                      background:
                        "url(../images/product-color4.jpg) 50% 50% / cover",
                    }}
                  ></div>
                </div>

                <PlusButton numShow={4} />
              </div>
              <div className="buyTogether-notes">
                Giảm <span>50%</span> nhóm 4 người
              </div>
              <Row className="align-items-end">
                <Col xs={8}>
                  <div className="buyTogether-sold">Đã bán 7</div>
                </Col>
                <Col xs={4}>
                  <div className="buyTogether-select">Chọn</div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} className="buyTogether-section">
            <div
              className="buyTogether-thumb"
              style={{
                background:
                  "url(../images/buy-together-thumb.jpg) 50% 0% / cover",
              }}
            >
              <div className="buyTogether-saleSticker">
                <div className="vertical-triangle"></div>
                50%
              </div>
            </div>
            <div className="buyTogether-info">
              <div className="buyTogether-name">
                Giày thể thao nhãn hiệu adidas mặca...
              </div>
              <div className="buyTogether-type">à.18+ style</div>
              <div className="buyTogether-salePrice">
                850.000 đ &nbsp;
                <div className="buyTogether-price">3.500.000 đ</div>
              </div>
              <div className="buyTogether-color">
                <div className="colorItem visible">
                  <div
                    className="colorBg"
                    style={{
                      background:
                        "url(../images/product-color2.jpg) 50% 50% / cover",
                    }}
                  ></div>
                </div>
                <div className="colorItem visible">
                  <div
                    className="colorBg"
                    style={{
                      background:
                        "url(../images/product-color3.jpg) 50% 50% / cover",
                    }}
                  ></div>
                </div>
                <div className="colorItem visible">
                  <div
                    className="colorBg"
                    style={{
                      background:
                        "url(../images/product-color1.jpg) 50% 50% / cover",
                    }}
                  ></div>
                </div>
              </div>
              <div className="buyTogether-notes">
                Giảm <span>50%</span> nhóm 4 người
              </div>
              <Row className="align-items-end">
                <Col xs={8}>
                  <div className="buyTogether-sold">Đã bán 7</div>
                </Col>
                <Col xs={4}>
                  <div className="buyTogether-select">Chọn</div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} className="buyTogether-section">
            <div
              className="buyTogether-thumb"
              style={{
                background:
                  "url(../images/buy-together-thumb.jpg) 50% 0% / cover",
              }}
            >
              <div className="buyTogether-saleSticker">
                <div className="vertical-triangle"></div>
                50%
              </div>
            </div>
            <div className="buyTogether-info">
              <div className="buyTogether-name">
                Giày thể thao nhãn hiệu adidas mặca...
              </div>
              <div className="buyTogether-type">à.18+ style</div>
              <div className="buyTogether-salePrice">
                850.000 đ &nbsp;
                <div className="buyTogether-price">3.500.000 đ</div>
              </div>
              <div className="buyTogether-color">
                <div className="colorItem visible">
                  <div
                    className="colorBg"
                    style={{
                      background:
                        "url(../images/product-color2.jpg) 50% 50% / cover",
                    }}
                  ></div>
                </div>
                <div className="colorItem visible">
                  <div
                    className="colorBg"
                    style={{
                      background:
                        "url(../images/product-color3.jpg) 50% 50% / cover",
                    }}
                  ></div>
                </div>
                <div className="colorItem visible">
                  <div
                    className="colorBg"
                    style={{
                      background:
                        "url(../images/product-color1.jpg) 50% 50% / cover",
                    }}
                  ></div>
                </div>
              </div>
              <div className="buyTogether-notes">
                Giảm <span>50%</span> nhóm 4 người
              </div>
              <Row className="align-items-end">
                <Col xs={8}>
                  <div className="buyTogether-sold">Đã bán 7</div>
                </Col>
                <Col xs={4}>
                  <div className="buyTogether-select">Chọn</div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} className="buyTogether-section">
            <div
              className="buyTogether-thumb"
              style={{
                background:
                  "url(../images/buy-together-thumb.jpg) 50% 0% / cover",
              }}
            >
              <div className="buyTogether-saleSticker">
                <div className="vertical-triangle"></div>
                50%
              </div>
            </div>
            <div className="buyTogether-info">
              <div className="buyTogether-name">
                Giày thể thao nhãn hiệu adidas mặca...
              </div>
              <div className="buyTogether-type">à.18+ style</div>
              <div className="buyTogether-salePrice">
                850.000 đ &nbsp;
                <div className="buyTogether-price">3.500.000 đ</div>
              </div>
              <div className="buyTogether-color">
                <div className="colorItem visible">
                  <div
                    className="colorBg"
                    style={{
                      background:
                        "url(../images/product-color2.jpg) 50% 50% / cover",
                    }}
                  ></div>
                </div>
                <div className="colorItem visible">
                  <div
                    className="colorBg"
                    style={{
                      background:
                        "url(../images/product-color3.jpg) 50% 50% / cover",
                    }}
                  ></div>
                </div>
                <div className="colorItem visible">
                  <div
                    className="colorBg"
                    style={{
                      background:
                        "url(../images/product-color1.jpg) 50% 50% / cover",
                    }}
                  ></div>
                </div>
              </div>
              <div className="buyTogether-notes">
                Giảm <span>50%</span> nhóm 4 người
              </div>
              <Row className="align-items-end">
                <Col xs={8}>
                  <div className="buyTogether-sold">Đã bán 7</div>
                </Col>
                <Col xs={4}>
                  <div className="buyTogether-select">Chọn</div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="buyTogether-footer">
          <Col>
            <h5 className="buyTogether-expand">Xem tất cả {">>"}</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BuyTogether;
