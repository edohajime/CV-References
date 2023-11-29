import { Col, Container, Row } from "react-bootstrap";
import Flickity from "react-flickity-component";
import { PlusButton } from "./SimilarProducts";

const NewestProduct = () => {
  const flickityOps = {
    contain: true,
    freeScrolls: true,
    wrapAround: false,
    prevNextButtons: false,
    pageDots: false,
    initialIndex: 1,
  };
  return (
    <div className="newestProduct">
      <Container>
        <Row className="newestProduct-header align-items-center">
          <Col xs={4}>
            <h1 className="newestProduct-title">HÀNG MỚI VỀ</h1>
          </Col>
          <Col xs={8} className="text-end">
            <h3 className="newestProduct-expand">Xem {">>"}</h3>
          </Col>
        </Row>
        <Row className="newestProduct-body">
          <Col>
            <Flickity
              className={"newestProduct-carousel"}
              elementType={"div"}
              options={flickityOps}
            >
              <div className="newestProduct-slide">
                <Row>
                  <Col className="newestProduct-item" xs={12}>
                    <div
                      className="product-thumbnail"
                      style={{
                        background:
                          "url(../images/newest-product-image.jpg) 100% 0% / 150%",
                      }}
                    ></div>
                    <div className="product-item-body">
                      <h3 className="product-price">300.000 đ</h3>
                      <p className="product-brand">Tên thương hiệu </p>
                      <p className="product-name">Quần sọc kim ánh vàng</p>
                      <div className="product-color">
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color2.jpg) 0% 0% / cover",
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
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color4.jpg) 0% 0% / cover",
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
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color1.jpg) 0% 0% / cover",
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
                                "url(../images/product-color1.jpg) 0% 0% / cover",
                            }}
                          ></div>
                        </div>
                        <div className="colorItem">
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
                                "url(../images/product-color2.jpg) 0% 0% / cover",
                            }}
                          ></div>
                        </div>
                        <PlusButton numShow={6} />
                      </div>
                    </div>
                    <i className="fa-solid fa-heart"></i>
                  </Col>
                  <Col className="newestProduct-item" xs={12}>
                    <div
                      className="product-thumbnail"
                      style={{
                        background:
                          "url(../images/newest-product-image.jpg) 100% 0% / 150%",
                      }}
                    ></div>
                    <div className="product-item-body">
                      <h3 className="product-price">300.000 đ</h3>
                      <p className="product-brand">Tên thương hiệu </p>
                      <p className="product-name">Quần sọc kim ánh vàng</p>
                      <div className="product-color">
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color2.jpg) 0% 0% / cover",
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
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color4.jpg) 0% 0% / cover",
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
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color1.jpg) 0% 0% / cover",
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
                                "url(../images/product-color1.jpg) 0% 0% / cover",
                            }}
                          ></div>
                        </div>
                        <div className="colorItem">
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
                                "url(../images/product-color2.jpg) 0% 0% / cover",
                            }}
                          ></div>
                        </div>
                        <PlusButton numShow={6} />
                      </div>
                    </div>
                    <i className="fa-solid fa-heart"></i>
                  </Col>
                </Row>
              </div>
              <div className="newestProduct-slide">
                <Row>
                  <Col className="newestProduct-item" xs={12}>
                    <div
                      className="product-thumbnail"
                      style={{
                        background:
                          "url(../images/newest-product-image.jpg) 100% 0% / 150%",
                      }}
                    ></div>
                    <div className="product-item-body">
                      <h3 className="product-price">300.000 đ</h3>
                      <p className="product-brand">Tên thương hiệu </p>
                      <p className="product-name">Quần sọc kim ánh vàng</p>
                      <div className="product-color">
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color2.jpg) 0% 0% / cover",
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
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color4.jpg) 0% 0% / cover",
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
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color1.jpg) 0% 0% / cover",
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
                                "url(../images/product-color1.jpg) 0% 0% / cover",
                            }}
                          ></div>
                        </div>
                        <div className="colorItem">
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
                                "url(../images/product-color2.jpg) 0% 0% / cover",
                            }}
                          ></div>
                        </div>
                        <PlusButton numShow={6} />
                      </div>
                    </div>
                    <i className="fa-solid fa-heart"></i>
                  </Col>
                  <Col className="newestProduct-item" xs={12}>
                    <div
                      className="product-thumbnail"
                      style={{
                        background:
                          "url(../images/newest-product-image.jpg) 100% 0% / 150%",
                      }}
                    ></div>
                    <div className="product-item-body">
                      <h3 className="product-price">300.000 đ</h3>
                      <p className="product-brand">Tên thương hiệu </p>
                      <p className="product-name">Quần sọc kim ánh vàng</p>
                      <div className="product-color">
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color2.jpg) 0% 0% / cover",
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
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color4.jpg) 0% 0% / cover",
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
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color1.jpg) 0% 0% / cover",
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
                                "url(../images/product-color1.jpg) 0% 0% / cover",
                            }}
                          ></div>
                        </div>
                        <div className="colorItem">
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
                                "url(../images/product-color2.jpg) 0% 0% / cover",
                            }}
                          ></div>
                        </div>
                        <PlusButton numShow={6} />
                      </div>
                    </div>
                    <i className="fa-solid fa-heart"></i>
                  </Col>
                </Row>
              </div>
              <div className="newestProduct-slide">
                <Row>
                  <Col className="newestProduct-item" xs={12}>
                    <div
                      className="product-thumbnail"
                      style={{
                        background:
                          "url(../images/newest-product-image.jpg) 100% 0% / 150%",
                      }}
                    ></div>
                    <div className="product-item-body">
                      <h3 className="product-price">300.000 đ</h3>
                      <p className="product-brand">Tên thương hiệu </p>
                      <p className="product-name">Quần sọc kim ánh vàng</p>
                      <div className="product-color">
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color2.jpg) 0% 0% / cover",
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
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color4.jpg) 0% 0% / cover",
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
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color1.jpg) 0% 0% / cover",
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
                                "url(../images/product-color1.jpg) 0% 0% / cover",
                            }}
                          ></div>
                        </div>
                        <div className="colorItem">
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
                                "url(../images/product-color2.jpg) 0% 0% / cover",
                            }}
                          ></div>
                        </div>
                        <PlusButton numShow={6} />
                      </div>
                    </div>
                    <i className="fa-solid fa-heart"></i>
                  </Col>
                  <Col className="newestProduct-item" xs={12}>
                    <div
                      className="product-thumbnail"
                      style={{
                        background:
                          "url(../images/newest-product-image.jpg) 100% 0% / 150%",
                      }}
                    ></div>
                    <div className="product-item-body">
                      <h3 className="product-price">300.000 đ</h3>
                      <p className="product-brand">Tên thương hiệu </p>
                      <p className="product-name">Quần sọc kim ánh vàng</p>
                      <div className="product-color">
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color2.jpg) 0% 0% / cover",
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
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color4.jpg) 0% 0% / cover",
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
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color1.jpg) 0% 0% / cover",
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
                                "url(../images/product-color1.jpg) 0% 0% / cover",
                            }}
                          ></div>
                        </div>
                        <div className="colorItem">
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
                                "url(../images/product-color2.jpg) 0% 0% / cover",
                            }}
                          ></div>
                        </div>
                        <PlusButton numShow={6} />
                      </div>
                    </div>
                    <i className="fa-solid fa-heart"></i>
                  </Col>
                </Row>
              </div>
              <div className="newestProduct-slide">
                <Row>
                  <Col className="newestProduct-item" xs={12}>
                    <div
                      className="product-thumbnail"
                      style={{
                        background:
                          "url(../images/newest-product-image.jpg) 100% 0% / 150%",
                      }}
                    ></div>
                    <div className="product-item-body">
                      <h3 className="product-price">300.000 đ</h3>
                      <p className="product-brand">Tên thương hiệu </p>
                      <p className="product-name">Quần sọc kim ánh vàng</p>
                      <div className="product-color">
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color2.jpg) 0% 0% / cover",
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
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color4.jpg) 0% 0% / cover",
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
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color1.jpg) 0% 0% / cover",
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
                                "url(../images/product-color1.jpg) 0% 0% / cover",
                            }}
                          ></div>
                        </div>
                        <div className="colorItem">
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
                                "url(../images/product-color2.jpg) 0% 0% / cover",
                            }}
                          ></div>
                        </div>
                        <PlusButton numShow={6} />
                      </div>
                    </div>
                    <i className="fa-solid fa-heart"></i>
                  </Col>
                  <Col className="newestProduct-item" xs={12}>
                    <div
                      className="product-thumbnail"
                      style={{
                        background:
                          "url(../images/newest-product-image.jpg) 100% 0% / 150%",
                      }}
                    ></div>
                    <div className="product-item-body">
                      <h3 className="product-price">300.000 đ</h3>
                      <p className="product-brand">Tên thương hiệu </p>
                      <p className="product-name">Quần sọc kim ánh vàng</p>
                      <div className="product-color">
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color2.jpg) 0% 0% / cover",
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
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color4.jpg) 0% 0% / cover",
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
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color1.jpg) 0% 0% / cover",
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
                                "url(../images/product-color1.jpg) 0% 0% / cover",
                            }}
                          ></div>
                        </div>
                        <div className="colorItem">
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
                                "url(../images/product-color2.jpg) 0% 0% / cover",
                            }}
                          ></div>
                        </div>
                        <PlusButton numShow={6} />
                      </div>
                    </div>
                    <i className="fa-solid fa-heart"></i>
                  </Col>
                </Row>
              </div>
              <div className="newestProduct-slide">
                <Row>
                  <Col className="newestProduct-item" xs={12}>
                    <div
                      className="product-thumbnail"
                      style={{
                        background:
                          "url(../images/newest-product-image.jpg) 100% 0% / 150%",
                      }}
                    ></div>
                    <div className="product-item-body">
                      <h3 className="product-price">300.000 đ</h3>
                      <p className="product-brand">Tên thương hiệu </p>
                      <p className="product-name">Quần sọc kim ánh vàng</p>
                      <div className="product-color">
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color2.jpg) 0% 0% / cover",
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
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color4.jpg) 0% 0% / cover",
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
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color1.jpg) 0% 0% / cover",
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
                                "url(../images/product-color1.jpg) 0% 0% / cover",
                            }}
                          ></div>
                        </div>
                        <div className="colorItem">
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
                                "url(../images/product-color2.jpg) 0% 0% / cover",
                            }}
                          ></div>
                        </div>
                        <PlusButton numShow={6} />
                      </div>
                    </div>
                    <i className="fa-solid fa-heart"></i>
                  </Col>
                  <Col className="newestProduct-item" xs={12}>
                    <div
                      className="product-thumbnail"
                      style={{
                        background:
                          "url(../images/newest-product-image.jpg) 100% 0% / 150%",
                      }}
                    ></div>
                    <div className="product-item-body">
                      <h3 className="product-price">300.000 đ</h3>
                      <p className="product-brand">Tên thương hiệu </p>
                      <p className="product-name">Quần sọc kim ánh vàng</p>
                      <div className="product-color">
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color2.jpg) 0% 0% / cover",
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
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color4.jpg) 0% 0% / cover",
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
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color1.jpg) 0% 0% / cover",
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
                                "url(../images/product-color1.jpg) 0% 0% / cover",
                            }}
                          ></div>
                        </div>
                        <div className="colorItem">
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
                                "url(../images/product-color2.jpg) 0% 0% / cover",
                            }}
                          ></div>
                        </div>
                        <PlusButton numShow={6} />
                      </div>
                    </div>
                    <i className="fa-solid fa-heart"></i>
                  </Col>
                </Row>
              </div>
              <div className="newestProduct-slide">
                <Row>
                  <Col className="newestProduct-item" xs={12}>
                    <div
                      className="product-thumbnail"
                      style={{
                        background:
                          "url(../images/newest-product-image.jpg) 100% 0% / 150%",
                      }}
                    ></div>
                    <div className="product-item-body">
                      <h3 className="product-price">300.000 đ</h3>
                      <p className="product-brand">Tên thương hiệu </p>
                      <p className="product-name">Quần sọc kim ánh vàng</p>
                      <div className="product-color">
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color2.jpg) 0% 0% / cover",
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
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color4.jpg) 0% 0% / cover",
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
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color1.jpg) 0% 0% / cover",
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
                                "url(../images/product-color1.jpg) 0% 0% / cover",
                            }}
                          ></div>
                        </div>
                        <div className="colorItem">
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
                                "url(../images/product-color2.jpg) 0% 0% / cover",
                            }}
                          ></div>
                        </div>
                        <PlusButton numShow={6} />
                      </div>
                    </div>
                    <i className="fa-solid fa-heart"></i>
                  </Col>
                  <Col className="newestProduct-item" xs={12}>
                    <div
                      className="product-thumbnail"
                      style={{
                        background:
                          "url(../images/newest-product-image.jpg) 100% 0% / 150%",
                      }}
                    ></div>
                    <div className="product-item-body">
                      <h3 className="product-price">300.000 đ</h3>
                      <p className="product-brand">Tên thương hiệu </p>
                      <p className="product-name">Quần sọc kim ánh vàng</p>
                      <div className="product-color">
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color2.jpg) 0% 0% / cover",
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
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color4.jpg) 0% 0% / cover",
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
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color1.jpg) 0% 0% / cover",
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
                                "url(../images/product-color1.jpg) 0% 0% / cover",
                            }}
                          ></div>
                        </div>
                        <div className="colorItem">
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
                                "url(../images/product-color2.jpg) 0% 0% / cover",
                            }}
                          ></div>
                        </div>
                        <PlusButton numShow={6} />
                      </div>
                    </div>
                    <i className="fa-solid fa-heart"></i>
                  </Col>
                </Row>
              </div>
              <div className="newestProduct-slide">
                <Row>
                  <Col className="newestProduct-item" xs={12}>
                    <div
                      className="product-thumbnail"
                      style={{
                        background:
                          "url(../images/newest-product-image.jpg) 100% 0% / 150%",
                      }}
                    ></div>
                    <div className="product-item-body">
                      <h3 className="product-price">300.000 đ</h3>
                      <p className="product-brand">Tên thương hiệu </p>
                      <p className="product-name">Quần sọc kim ánh vàng</p>
                      <div className="product-color">
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color2.jpg) 0% 0% / cover",
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
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color4.jpg) 0% 0% / cover",
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
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color1.jpg) 0% 0% / cover",
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
                                "url(../images/product-color1.jpg) 0% 0% / cover",
                            }}
                          ></div>
                        </div>
                        <div className="colorItem">
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
                                "url(../images/product-color2.jpg) 0% 0% / cover",
                            }}
                          ></div>
                        </div>
                        <PlusButton numShow={6} />
                      </div>
                    </div>
                    <i className="fa-solid fa-heart"></i>
                  </Col>
                  <Col className="newestProduct-item" xs={12}>
                    <div
                      className="product-thumbnail"
                      style={{
                        background:
                          "url(../images/newest-product-image.jpg) 100% 0% / 150%",
                      }}
                    ></div>
                    <div className="product-item-body">
                      <h3 className="product-price">300.000 đ</h3>
                      <p className="product-brand">Tên thương hiệu </p>
                      <p className="product-name">Quần sọc kim ánh vàng</p>
                      <div className="product-color">
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color2.jpg) 0% 0% / cover",
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
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color4.jpg) 0% 0% / cover",
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
                        <div className="colorItem visible">
                          <div
                            className="colorBg"
                            style={{
                              background:
                                "url(../images/product-color1.jpg) 0% 0% / cover",
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
                                "url(../images/product-color1.jpg) 0% 0% / cover",
                            }}
                          ></div>
                        </div>
                        <div className="colorItem">
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
                                "url(../images/product-color2.jpg) 0% 0% / cover",
                            }}
                          ></div>
                        </div>
                        <PlusButton numShow={6} />
                      </div>
                    </div>
                    <i className="fa-solid fa-heart"></i>
                  </Col>
                </Row>
              </div>
            </Flickity>
          </Col>
        </Row>
        <Row className="newestProduct-footer align-items-center">
          <h3 className="newestProduct-expand">Xem tất cả {">>"}</h3>
        </Row>
      </Container>
    </div>
  );
};
export default NewestProduct;
