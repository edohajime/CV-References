import { Col, Container, Row } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { PlusButton } from "./SimilarProducts";

const AnotherFlashSales = () => {
  return (
    <div className="comingSoon anotherFlashSales">
      <Container>
        <Row className="comingSoon-header align-items-center">
          <Col xs={8}>
            <h1 className="comingSoon-title">SẢN PHẨM FLASH SALE KHÁC</h1>
          </Col>
          <Col xs={4} className="text-end">
            <h5 className="comingSoon-expand">Xem tất cả {">>"}</h5>
          </Col>
        </Row>
        <Row className="comingSoon-body">
          <Col xs={12} className="comingSoon-section">
            <div className="comingSoon-item">
              <div
                className="comingSoon-thumb"
                style={{
                  background:
                    "url(../images/another-flashsales-item1.jpg) 50% 50% / cover",
                }}
              >
                <div className="comingSoon-tag favorites">
                  <div className="tag-body">
                    Yêu thích
                    <div className="tag-after"></div>
                  </div>
                </div>
                <div className="comingSoon-saleSticker">50%</div>
              </div>
              <div className="comingSoon-info">
                <h3 className="comingSoon-price">
                  300.000 đ &nbsp;<span>3.500.000 đ</span>
                </h3>
                <h3 className="comingSoon-brand">Tên thương hiệu</h3>
                <h3 className="comingSoon-name">
                  Quần sọc kim ánh vàngggggg...
                </h3>
                <Row className="comingSoon-buy align-items-end">
                  <Col xs={7}>
                    <div className="comingSoon-sold">Đã bán 32</div>
                  </Col>
                  <Col xs={5}>
                    <div className="comingSoon-select">Mua ngay</div>
                  </Col>
                </Row>
                <div className="comingSoon-color">
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
                          "url(../images/product-color2.jpg) 50% 50% / cover",
                      }}
                    ></div>
                  </div>
                  <div className="colorItem visible">
                    <div
                      className="colorBg"
                      style={{
                        background:
                          "url(../images/product-color3.jpg) 0% 0% / cover",
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
                          "url(../images/product-color3.jpg) 0% 0% / cover",
                      }}
                    ></div>
                  </div>
                  <PlusButton numShow={5} />
                </div>
                <FaHeart className="fa-heart" />
              </div>
            </div>
            <div className="comingSoon-item">
              <div
                className="comingSoon-thumb"
                style={{
                  background:
                    "url(../images/another-flashsales-item2.jpg) 50% 50% / cover",
                }}
              >
                <div className="comingSoon-saleSticker">20%</div>
              </div>
              <div className="comingSoon-info">
                <h3 className="comingSoon-price">
                  300.000 đ &nbsp;<span>3.500.000 đ</span>
                </h3>
                <h3 className="comingSoon-brand">Tên thương hiệu</h3>
                <h3 className="comingSoon-name">
                  Quần sọc kim ánh vàngggggg...
                </h3>
                <Row className="comingSoon-buy align-items-end">
                  <Col xs={7}>
                    <div className="comingSoon-sold">Đã bán 32</div>
                  </Col>
                  <Col xs={5}>
                    <div className="comingSoon-select">Mua ngay</div>
                  </Col>
                </Row>
                <div className="comingSoon-color">
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
                </div>
                <FiHeart className="fa-heart fs-5" />
              </div>
            </div>
          </Col>
          <Col xs={12} className="comingSoon-section">
            <div className="comingSoon-item">
              <div
                className="comingSoon-thumb"
                style={{
                  background:
                    "url(../images/another-flashsales-item1.jpg) 50% 50% / cover",
                }}
              >
                <div className="comingSoon-tag favorites">
                  <div className="tag-body">
                    Yêu thích
                    <div className="tag-after"></div>
                  </div>
                </div>
                <div className="comingSoon-saleSticker">50%</div>
              </div>
              <div className="comingSoon-info">
                <h3 className="comingSoon-price">
                  300.000 đ &nbsp;<span>3.500.000 đ</span>
                </h3>
                <h3 className="comingSoon-brand">Tên thương hiệu</h3>
                <h3 className="comingSoon-name">
                  Quần sọc kim ánh vàngggggg...
                </h3>
                <Row className="comingSoon-buy align-items-end">
                  <Col xs={7}>
                    <div className="comingSoon-sold">Đã bán 32</div>
                  </Col>
                  <Col xs={5}>
                    <div className="comingSoon-select">Mua ngay</div>
                  </Col>
                </Row>
                <div className="comingSoon-color">
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
                          "url(../images/product-color2.jpg) 50% 50% / cover",
                      }}
                    ></div>
                  </div>
                  <div className="colorItem visible">
                    <div
                      className="colorBg"
                      style={{
                        background:
                          "url(../images/product-color3.jpg) 0% 0% / cover",
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
                          "url(../images/product-color3.jpg) 0% 0% / cover",
                      }}
                    ></div>
                  </div>
                  <PlusButton numShow={5} />
                </div>
                <FaHeart className="fa-heart" />
              </div>
            </div>
            <div className="comingSoon-item">
              <div
                className="comingSoon-thumb"
                style={{
                  background:
                    "url(../images/another-flashsales-item2.jpg) 50% 50% / cover",
                }}
              >
                <div className="comingSoon-saleSticker">20%</div>
              </div>
              <div className="comingSoon-info">
                <h3 className="comingSoon-price">
                  300.000 đ &nbsp;<span>3.500.000 đ</span>
                </h3>
                <h3 className="comingSoon-brand">Tên thương hiệu</h3>
                <h3 className="comingSoon-name">
                  Quần sọc kim ánh vàngggggg...
                </h3>
                <Row className="comingSoon-buy align-items-end">
                  <Col xs={7}>
                    <div className="comingSoon-sold">Đã bán 32</div>
                  </Col>
                  <Col xs={5}>
                    <div className="comingSoon-select">Mua ngay</div>
                  </Col>
                </Row>
                <div className="comingSoon-color">
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
                </div>
                <FiHeart className="fa-heart fs-5" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default AnotherFlashSales;
