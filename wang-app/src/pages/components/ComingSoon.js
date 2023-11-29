import { Col, Container, Row } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { PlusButton } from "./SimilarProducts";

const ComingSoon = () => {
  return (
    <div className="comingSoon">
      <Container>
        <Row className="comingSoon-header align-items-center">
          <Col xs={7}>
            <h1 className="comingSoon-title">SẢN PHẨM SẮP RA MẮT</h1>
          </Col>
          <Col xs={5} className="text-end">
            <h5 className="comingSoon-expand">Xem {">>"}</h5>
          </Col>
        </Row>
        <Row className="comingSoon-body">
          <Col xs={12} className="comingSoon-section">
            <div className="comingSoon-item">
              <div
                className="comingSoon-thumb"
                style={{
                  background:
                    "url(../images/combo-hot-item2.jpg) 50% 50% / cover",
                }}
              >
                <div className="comingSoon-tag vip">
                  <div className="tag-body">
                    Vip
                    <div className="tag-after"></div>
                  </div>
                </div>
                <div className="comingSoon-saleSticker">90%</div>
              </div>
              <div className="comingSoon-info">
                <h3 className="comingSoon-price">300.000 đ</h3>
                <h3 className="comingSoon-brand">Tên thương hiệu</h3>
                <h3 className="comingSoon-name">Quần sọc kim ánh vàng</h3>
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
                          "url(../images/product-color1.jpg) 50% 50% / cover",
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
                  <div className="colorItem visible">
                    <div
                      className="colorBg"
                      style={{
                        background:
                          "url(../images/product-color1.jpg) 0% 0% / cover",
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
                  <PlusButton numShow={6}/>
                </div>
                <FaHeart className="fa-heart pink" />
              </div>
            </div>
            <div className="comingSoon-item">
              <div
                className="comingSoon-thumb"
                style={{
                  background:
                    "url(../images/buy-together-thumb.jpg) 50% 50% / cover",
                }}
              >
                <div className="comingSoon-tag mall">
                  <div className="tag-body">
                    Mall
                    <div className="tag-after"></div>
                  </div>
                </div>
                <div className="comingSoon-saleSticker">90%</div>
              </div>
              <div className="comingSoon-info">
                <h3 className="comingSoon-price">
                  300.000 đ &nbsp;
                  <span>3.500.000 đ</span>
                </h3>
                <h3 className="comingSoon-brand">à.18+ style</h3>
                <h3 className="comingSoon-name">Quần sọc kim ánh vàng</h3>
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
                          "url(../images/product-color1.jpg) 50% 50% / cover",
                      }}
                    ></div>
                  </div>
                </div>
                <FaHeart className="fa-heart" />
              </div>
            </div>
          </Col>
          <Col xs={12} className="comingSoon-section">
            <div className="comingSoon-item">
              <div
                className="comingSoon-thumb"
                style={{
                  background:
                    "url(../images/combo-hot-item2.jpg) 50% 50% / cover",
                }}
              >
                <div className="comingSoon-tag favorites">
                  <div className="tag-body">
                    Yêu thích
                    <div className="tag-after"></div>
                  </div>
                </div>
                <div className="comingSoon-saleSticker">90%</div>
              </div>
              <div className="comingSoon-info">
                <h3 className="comingSoon-price">300.000 đ</h3>
                <h3 className="comingSoon-brand">Tên thương hiệu</h3>
                <h3 className="comingSoon-name">Quần sọc kim ánh vàng</h3>
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
                          "url(../images/product-color1.jpg) 50% 50% / cover",
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
                  <div className="colorItem visible">
                    <div
                      className="colorBg"
                      style={{
                        background:
                          "url(../images/product-color1.jpg) 0% 0% / cover",
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
                  <PlusButton numShow={6} />
                </div>
                <FaHeart className="fa-heart pink" />
              </div>
            </div>
            <div className="comingSoon-item">
              <div
                className="comingSoon-thumb"
                style={{
                  background:
                    "url(../images/buy-together-thumb.jpg) 50% 50% / cover",
                }}
              >
                <div className="comingSoon-saleSticker">90%</div>
              </div>
              <div className="comingSoon-info">
                <h3 className="comingSoon-price">
                  300.000 đ &nbsp;
                  <span>3.500.000 đ</span>
                </h3>
                <h3 className="comingSoon-brand">à.18+ style</h3>
                <h3 className="comingSoon-name">Quần sọc kim ánh vàng</h3>
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
                          "url(../images/product-color1.jpg) 50% 50% / cover",
                      }}
                    ></div>
                  </div>
                </div>
                <FaHeart className="fa-heart" />
              </div>
            </div>
          </Col>
          <Col xs={12} className="comingSoon-section">
            <div className="comingSoon-item">
              <div
                className="comingSoon-thumb"
                style={{
                  background:
                    "url(../images/combo-hot-item2.jpg) 50% 50% / cover",
                }}
              >
                <div className="comingSoon-tag favorites">
                  <div className="tag-body">
                    Yêu thích
                    <div className="tag-after"></div>
                  </div>
                </div>
                <div className="comingSoon-saleSticker">90%</div>
              </div>
              <div className="comingSoon-info">
                <h3 className="comingSoon-price">300.000 đ</h3>
                <h3 className="comingSoon-brand">Tên thương hiệu</h3>
                <h3 className="comingSoon-name">Quần sọc kim ánh vàng</h3>
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
                          "url(../images/product-color1.jpg) 50% 50% / cover",
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
                  <div className="colorItem visible">
                    <div
                      className="colorBg"
                      style={{
                        background:
                          "url(../images/product-color1.jpg) 0% 0% / cover",
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
                  <PlusButton numShow={6} />
                </div>
                <FaHeart className="fa-heart pink" />
              </div>
            </div>
            <div className="comingSoon-item">
              <div
                className="comingSoon-thumb"
                style={{
                  background:
                    "url(../images/buy-together-thumb.jpg) 50% 50% / cover",
                }}
              ></div>
              <div className="comingSoon-info">
                <h3 className="comingSoon-price">
                  300.000 đ &nbsp;
                  <span>3.500.000 đ</span>
                </h3>
                <h3 className="comingSoon-brand">à.18+ style</h3>
                <h3 className="comingSoon-name">Quần sọc kim ánh vàng</h3>
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
                            "url(../images/product-color1.jpg) 50% 50% / cover",
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
                            "url(../images/product-color3.jpg) 50% 50% / cover",
                        }}
                      ></div>
                    </div>
                </div>
                <FaHeart className="fa-heart" />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="comingSoon-footer">
          <Col>
            <h5 className="comingSoon-expand">Xem tất cả {">>"}</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ComingSoon;
