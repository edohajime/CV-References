import { Col, Container, Row } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";

const SimilarProducts = () => {
  return (
    <div className="comingSoon similarProducts">
      <Container>
        <Row className="comingSoon-header align-items-center">
          <Col xs={7}>
            <h1 className="comingSoon-title">SẢN PHẨM TƯƠNG TỰ</h1>
          </Col>
          <Col xs={5} className="text-end">
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
                  {/* COLOR ITEMS */}

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
                          "url(../images/product-color4.jpg) 50% 50% / cover",
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
                          "url(../images/product-color2.jpg) 50% 50% / cover",
                      }}
                    ></div>
                  </div>
                  <div className="colorItem">
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
                          "url(../images/product-color1.jpg) 0% 0% / cover",
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
                          "url(../images/product-color4.jpg) 50% 50% / cover",
                      }}
                    ></div>
                  </div>

                  {/* END COLOR ITEMS */}
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
                          "url(../images/product-color4.jpg) 50% 50% / cover",
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
                          "url(../images/product-color2.jpg) 50% 50% / cover",
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
                          "url(../images/product-color3.jpg) 50% 50% / cover",
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
                          "url(../images/product-color2.jpg) 50% 50% / cover",
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
        </Row>
      </Container>
    </div>
  );
};

/**
 * Hàm xử lý hoạt ảnh xoay tròn cho nút '+'
 * @param {*} e - event
 */
export const handleRotate = (e) => {
  if (e.classList.contains("rotate")) {
    e.classList.remove("rotate");
  } else {
    e.classList.add("rotate");
  }
};

export const find = (lists, classNames) => {
  let l = lists;
  let ind = -1;
  for (var i = 0; i < l.length; i++) {
    if (l[i].classList.contains(classNames)) {
      return i;
    }
  }
  return ind;
};

/**
 * Hàm xử lý sự kiện click của nút '+' xem thêm color.
 * Với điều kiện:
 * - phần tử cha của nó chứa các thẻ div.colorItem dùng để hiển thị màu sắc.
 * - nút '+' không phải là thẻ div, không chứa thêm phần tử con nào bên trong.
 * @param {*} e - event target
 */
export const handleColorItems = (e, numShows) => {
  let listE = e.parentNode.querySelectorAll("div.colorItem");
  let index = find(listE, "visible");
  let max = listE.length;
  // số lượng hiển thị = 6, nếu > max thì gán bằng max
  let numShow = max < numShows ? max : numShows;

  if (max - index <= numShow) {
    let i = 0;
    for (i = 1; i <= max - index; i++) {
      listE[max - i].classList.remove("visible");
    }
    for (i = 0; i < numShow; i++) {
      listE[i].classList.add("visible");
    }
  } else {
    let j = 0;
    while (j < max) {
      if (j < index || j > index + (numShow * 2 - 1)) {
        j++;
      } else if (j < index + numShow) {
        listE[j++].classList.remove("visible");
      } else {
        listE[j++].classList.add("visible");
      }
    }
  }

  handleRotate(e);
};

/**
 * Nút xử lý sự kiện click của nút '+' xem thêm color.
 * Với điều kiện:
 * - phần tử cha của nó chứa các thẻ div.colorItem dùng để hiển thị màu sắc.
 * - nút '+' không phải là thẻ div, không chứa thêm phần tử con nào bên trong.
 * @param {*} numShow - số lượng colorItem được phép show mỗi lần
 */
export const PlusButton = ({numShow}) => {
  return (
    <img
      src="./images/plus.jpg"
      alt="plus"
      className="plus"
      onClick={(e) => handleColorItems(e.target, numShow)}
    />
  );
};

export default SimilarProducts;
