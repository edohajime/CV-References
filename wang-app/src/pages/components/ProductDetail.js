import { Col, Container, Row } from "react-bootstrap";
import Flickity from "react-flickity-component";
import { useTimer } from "react-timer-hook";
import { getExpiryTimestamp } from "./FlashSales";
import { BsShareFill, BsPlus, BsCheck2, BsFillStarFill } from "react-icons/bs";
import { RxBookmark } from "react-icons/rx";
import { FaHeart } from "react-icons/fa";
import { TbMathGreater } from "react-icons/tb";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useRef } from "react";

const ProductDetail = () => {
  const flickityOps = {
    contain: true,
    prevNextButtons: true,
    pageDots: true,
    wrapAround: true,
  };

  const flickityOps2 = {
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    freeScrolls: true,
    wrapAround: false,
  };
  const expiryTimestamp = getExpiryTimestamp(36000);
  const { seconds, minutes, hours, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      let newTime = new Date();
      newTime.setSeconds(newTime.getSeconds + 36000);
      restart(newTime);
    },
  });

  const handleVideo = useRef();

  const handleMediaButton = (e) => {
    let media = document.querySelectorAll(".producDetail-media-item");
    for (var i = 0; i < media.length; i++) {
      if (media[i].classList.contains("active")) {
        media[i].classList.remove("active");
      }
    }
    e.target.classList.add("active");
  };

  const handleColor = (e) => {
    let colors = document.querySelectorAll(".productColor-slide");
    for (var i = 0; i < colors.length; i++) {
      if (colors[i].classList.contains("selected")){
        colors[i].classList.remove("selected");
      }
    }
    e.target.parentNode.classList.add("selected");
  };

  return (
    <div className="productDetail">
      <Container>
        <Row className="productDetail-section">
          <Col>
            <Flickity
              className={"productDetail-carousel"}
              elementType={"div"}
              options={flickityOps}
            >
              <div
                className="productDetail-slide"
                style={{
                  background:
                    "url(../images/product-detail-item.jpg) 50% 50%/ cover",
                }}
              ></div>
              <div
                className="productDetail-slide"
                style={{
                  background:
                    "url(../images/product-detail-item.jpg) 50% 50%/ cover",
                }}
              ></div>
              <div
                className="productDetail-slide"
                style={{
                  background:
                    "url(../images/product-detail-item.jpg) 50% 50%/ cover",
                }}
              ></div>
              <div
                className="productDetail-slide"
                style={{
                  background:
                    "url(../images/product-detail-item.jpg) 50% 50%/ cover",
                }}
              ></div>
              <div
                className="productDetail-slide"
                style={{
                  background:
                    "url(../images/product-detail-item.jpg) 50% 50%/ cover",
                }}
              ></div>
            </Flickity>
            <Row className="productDetail-onSale">
              <Col xs={4} className="productDetail-sold">
                <h3>Đã bán 50</h3>
              </Col>
              <Col xs={8} className="timer-countdown">
                Kết thúc trong: &nbsp;
                <div className="bounder">
                  <span className="timer">
                    {hours < 10 ? "0" + hours : hours}
                  </span>
                  &nbsp; : &nbsp;
                  <span className="timer">
                    {minutes < 10 ? "0" + minutes : minutes}
                  </span>
                  &nbsp; : &nbsp;
                  <span className="timer">
                    {seconds < 10 ? "0" + seconds : seconds}
                  </span>
                </div>
              </Col>
            </Row>
            <div className="productDetail-tagList">
              <div className="productDetail-tag new">Mới</div>
              <div className="productDetail-tag sale50">50%</div>
              <div className="productDetail-tag mall">Mall</div>
            </div>
            <div className="productDetail-media">
              <button
                className="producDetail-media-item active"
                onClick={(e) => {
                  if (handleVideo.current.classList.contains("active")) {
                    handleVideo.current.classList.remove("active");
                  }
                  handleMediaButton(e);
                  let medias = document.querySelector(".productDetail-media");
                  if (medias.classList.contains("fixed")) {
                    medias.classList.remove("fixed");
                  }
                  handleVideo.current.children[0].pause();
                }}
              >
                Ảnh
              </button>
              <button
                className="producDetail-media-item"
                onClick={(e) => {
                  if (!handleVideo.current.classList.contains("active")) {
                    handleVideo.current.classList.add("active");
                  }
                  handleMediaButton(e);
                  let medias = document.querySelector(".productDetail-media");
                  medias.classList.add("fixed");
                  // handleVideo.current.children[0].play();
                }}
              >
                Video
              </button>
            </div>
            <div className="productDetail-video" ref={handleVideo}>
              <video className="w-100" controls>
                <source src="./videos/review-product.mp4" type="video/mp4" />
              </video>
            </div>
          </Col>
        </Row>
        <Row className="productDetail-section">
          <Col>
            <Row className="productDetail-commonInfo">
              <Col xs={6} className="productDetail-action">
                <div className="action-item">
                  <BsShareFill />
                  Chia sẻ
                </div>
                <div className="action-item">
                  <RxBookmark />
                  Lưu ảnh
                </div>
                <div className="action-item">
                  <FaHeart />
                  Thích
                </div>
              </Col>
              <Col xs={6} className="productDetail-info">
                <h3 className="productDetail-price">
                  <span>3.500.000 đ</span>&nbsp;&nbsp;300.000 đ
                </h3>
                <p>Quần sọc ánh vàng</p>
              </Col>
            </Row>
            <Row className="productDetail-color">
              <h3 className="section-title">Màu sắc</h3>
              <Flickity
                className={"productColor-carousel"}
                elementType={"div"}
                options={flickityOps2}
              >
                <div className="productColor-slide">
                  <div className="productColor-name">Đỏ</div>
                  <div
                    className="productColor-image"
                    style={{
                      background:
                        "url(../images/product-color-slide1.jpg) 50% 50% / cover",
                    }}
                    onClick={(e) => handleColor(e)}
                  ></div>
                </div>
                <div className="productColor-slide">
                  <div className="productColor-name">Vàng</div>
                  <div
                    className="productColor-image"
                    style={{
                      background:
                        "url(../images/product-color-slide1.jpg) 50% 50% / cover",
                    }}
                    onClick={(e) => handleColor(e)}
                  ></div>
                </div>
                <div className="productColor-slide">
                  <div className="productColor-name">Nâu</div>
                  <div
                    className="productColor-image"
                    style={{
                      background:
                        "url(../images/product-color-slide1.jpg) 50% 50% / cover",
                    }}
                    onClick={(e) => handleColor(e)}
                  ></div>
                </div>
                <div className="productColor-slide">
                  <div className="productColor-name">Đỏ</div>
                  <div
                    className="productColor-image"
                    style={{
                      background:
                        "url(../images/product-color-slide1.jpg) 50% 50% / cover",
                    }}
                    onClick={(e) => handleColor(e)}
                  ></div>
                </div>
                <div className="productColor-slide">
                  <div className="productColor-name">Vàng</div>
                  <div
                    className="productColor-image"
                    style={{ background: "#2BD60F" }}
                    onClick={(e) => handleColor(e)}
                  ></div>
                </div>
                <div className="productColor-slide">
                  <div className="productColor-name">Nâu</div>
                  <div
                    className="productColor-image"
                    style={{ background: "#FA7268" }}
                    onClick={(e) => handleColor(e)}
                  ></div>
                </div>
              </Flickity>
            </Row>
          </Col>
        </Row>
        <Row className="productDetail-section guarantee">
          <Col xs={4} className="guarantee-item">
            <img src="./images/box-icon.jpg" alt="Hàng chính hãng 100%"></img>
            <h5>7 ngày miễn phí đổi trả</h5>
          </Col>
          <Col xs={4} className="guarantee-item">
            <img
              src="./images/triple-star-icon.jpg"
              alt="Hàng chính hãng 100%"
            ></img>
            <h5>Hàng chính hãng 100%</h5>
          </Col>
          <Col xs={4} className="guarantee-item">
            <img
              src="./images/freeship-icon.jpg"
              alt="Miễn phí vận chuyển đơn trên 499k"
            ></img>
            <h5>Miễn phí vận chuyển đơn trên 499k</h5>
          </Col>
        </Row>
        <Row className="productDetail-section warehouseInfo">
          <Col>
            <Row>
              <Col className="info">Kho nhà phân phối : </Col>
              <Col className="value">100</Col>
            </Row>
            <Row>
              <Col className="info">Đã bán buôn : </Col>
              <Col className="value">200</Col>
            </Row>
            <Row>
              <Col className="info">Đã bán lẻ : </Col>
              <Col className="value">300</Col>
            </Row>
          </Col>
        </Row>
        <Row className="productDetail-section sale">
          <Col xs={6} className="info">
            Khuyến mại mua buôn :{" "}
          </Col>
          <Col xs={6} className="value">
            <div
              className="sale-code"
              style={{
                background:
                  "url(../images/sale-code.jpg) 50% 50% / contain no-repeat",
              }}
            >
              Giá khuyến mại
            </div>
            <TbMathGreater />
          </Col>
        </Row>
        <Row className="productDetail-section brand">
          <Col>
            <Row>
              <Col xs={8} className="info">
                Thương hiệu : <span>Adidas</span>
              </Col>
              <Col xs={4} className="action">
                <div className="follow">
                  <BsPlus /> Theo dõi
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={8} className="info">
                Nhà phân phối : <span>Answer</span>
              </Col>
              <Col xs={4} className="action">
                <div className="follow followed">
                  <BsCheck2 /> Theo dõi
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="productDetail-section productInfo">
          <h3 className="section-title">Thông tin sản phẩm</h3>
          <Col xs={12} className="info">
            <p>
              <span className="label">Danh mục :</span>&nbsp;
              <span className="cateValue">Danh mục cha</span> {">"}&nbsp;
              <span className="cateValue">Danh mục con</span> {">"}&nbsp;
              <span className="cateValue">Danh mục cháu</span>
            </p>
            <p>
              <span className="label">Dòng sản phẩm :</span>&nbsp; Dòng dự tiệc
            </p>
            <div className="expand">
              <span>
                Xem thêm <AiOutlineCaretDown />
              </span>
            </div>
          </Col>
        </Row>
        <Row className="productDetail-section productInfo">
          <h3 className="section-title">Mô tả sản phẩm</h3>
          <Col xs={12} className="info">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the
            </p>
            <div className="expand">
              <span>
                Xem thêm <AiOutlineCaretDown />
              </span>
            </div>
          </Col>
        </Row>
        <Row className="productDetail-section productRate">
          <Col xs={12} className="section-header">
            <h3 className="section-title">Đánh giá sản phẩm mua lẻ</h3>
            <div className="rate">
              4.0&nbsp;
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill className="unrate" />
            </div>
          </Col>
          <Col xs={12}>
            <Flickity
              className={"rate-carousel"}
              elementType={"div"}
              options={flickityOps2}
            >
              <div className="rate-slide selected">Tất cả</div>
              <div className="rate-slide">5 sao (265)</div>
              <div className="rate-slide">4 sao (25)</div>
              <div className="rate-slide">3 sao (0)</div>
              <div className="rate-slide">2 sao (0)</div>
              <div className="rate-slide">1 sao (0)</div>
              <div className="rate-slide">Có hình ảnh (0)</div>
              <div className="rate-slide">Không hình ảnh (90)</div>
            </Flickity>
          </Col>
          <Col xs={12}>
            <Row>
              <Col xs={3} className="rate-customer">
                <div className="customer">
                  <img src="./images/customer-avt.jpg" alt="customer-avt"></img>
                  <h2>Hà My</h2>
                </div>
                <div className="rate">
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill className="unrate" />
                </div>
              </Col>
              <Col xs={9}>
                <Row className="rate-title">
                  <h3>Đánh giá sản phẩm của shop bán lẻ </h3>
                </Row>
                <Row className="rate-shopInfo">
                  <Col xs={1}>
                    <img src="./images/shop-logo.jpg" alt="shop"></img>
                  </Col>
                  <Col xs={7}>
                    <h3>Tên shop</h3>
                    <h4>Loại shop</h4>
                  </Col>
                  <Col xs={4}>
                    <div className="aboutShop">Về shop</div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={12} className="rate-content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the
            </p>
            <div className="rate-images">
              <img src="./images/product-image.jpg" alt="product_Image"></img>
              <img src="./images/product-image.jpg" alt="product_Image"></img>
              <img src="./images/product-image.jpg" alt="product_Image"></img>
            </div>
          </Col>
          <Col xs={12} className="rate-date">
            20/10/2020 14:56
          </Col>
          <Col xs={12} className="text-center">
            <span className="expand">Xem tất cả</span>
          </Col>
        </Row>
        <Row className="productDetail-section productRate">
          <Col xs={12} className="section-header">
            <h3 className="section-title">Đánh giá sản phẩm mua buôn</h3>
            <div className="rate">
              4.0&nbsp;
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill className="unrate" />
            </div>
          </Col>
          <Col xs={12}>
            <Flickity
              className={"rate-carousel"}
              elementType={"div"}
              options={flickityOps2}
            >
              <div className="rate-slide selected">Tất cả</div>
              <div className="rate-slide">5 sao (265)</div>
              <div className="rate-slide">4 sao (25)</div>
              <div className="rate-slide">3 sao (0)</div>
              <div className="rate-slide">2 sao (0)</div>
              <div className="rate-slide">1 sao (0)</div>
              <div className="rate-slide">Có hình ảnh (0)</div>
              <div className="rate-slide">Không hình ảnh (90)</div>
            </Flickity>
          </Col>
          <Col xs={12}>
            <Row>
              <Col xs={3} className="rate-customer">
                <div className="customer">
                  <img src="./images/customer-avt.jpg" alt="customer-avt"></img>
                  <h2>Hà My</h2>
                </div>
                <div className="rate">
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill className="unrate" />
                </div>
              </Col>
              <Col xs={9}></Col>
            </Row>
          </Col>
          <Col xs={12} className="rate-content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the
            </p>
            <div className="rate-images">
              <img src="./images/product-image.jpg" alt="product_Image"></img>
              <img src="./images/product-image.jpg" alt="product_Image"></img>
              <img src="./images/product-image.jpg" alt="product_Image"></img>
            </div>
          </Col>
          <Col xs={12} className="rate-date">
            20/10/2020 14:56
          </Col>
          <Col xs={12} className="text-center">
            <span className="expand">Xem tất cả</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
