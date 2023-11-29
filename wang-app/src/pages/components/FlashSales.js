import { Col, Container, Row } from "react-bootstrap";
import Flickity from "react-flickity-component";
import { Link } from "react-router-dom";
import { useTimer } from "react-timer-hook";

const FlashSales = () => {
  const flickityOps = {
    contain: true,
    wrapAround: false,
    freeScrolls: true,
    prevNextButtons: false,
    pageDots: false,
    initialIndex: 1,
  };
  const expiryTimestamp = getExpiryTimestamp(36000); // 10 hours countdown
  const { seconds, minutes, hours, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      let newTime = new Date();
      newTime.setSeconds(newTime.getSeconds() + 36000);
      restart(newTime); // restart đc nhưng ko tiếp tục đếm ngược
    },
  });

  return (
    <div className="flashsales">
      <Container style={{ padding: 0 }}>
        <h5 className="flashsales-header">
          Flash <i className="fa-solid fa-bolt"></i> Sale
        </h5>
        <div className="flashsales-body">
          <Row>
            <Col xs={3}>
              <h5 className="on-sale-now">On sale now</h5>
            </Col>
            <Col className="text-end" xs={9}>
              <div className="timer-countdown">
                Kết thúc trong: &nbsp;
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
          <Row>
            <Col>
              <Flickity
                className={"flashsales-carousel"}
                elementType={"div"}
                options={flickityOps}
              >
                <div className="flashsales-item">
                  <Row>
                    <Col className="flashsales-product-item" xs={12}>
                      <Link to="/product-detail">
                        <img
                          className="product-image"
                          src="./images/flash-sale-item.jpg"
                          alt="Quần sọc kim ánh vàng"
                        ></img>
                      </Link>

                      <h5>Quần sọc kim ánh vàng</h5>
                      <p className="product-sale">
                        300.000đ &nbsp;
                        <span className="disabled">600.000đ</span>
                      </p>
                      <div className="product-sold">Đã bán 32</div>
                    </Col>
                    <Col className="flashsales-product-item" xs={12}>
                      <Link to="/product-detail">
                        <img
                          className="product-image"
                          src="./images/flash-sale-item.jpg"
                          alt="Quần sọc kim ánh vàng"
                        ></img>
                      </Link>

                      <h5>Quần sọc kim ánh vàng</h5>
                      <p className="product-sale">
                        300.000đ &nbsp;
                        <span className="disabled">600.000đ</span>
                      </p>
                      <div className="product-sold">Đã bán 32</div>
                    </Col>
                  </Row>
                </div>
                <div className="flashsales-item">
                  <Row>
                    <Col className="flashsales-product-item" xs={12}>
                      <Link to="/product-detail">
                        <img
                          className="product-image"
                          src="./images/flash-sale-item.jpg"
                          alt="Quần sọc kim ánh vàng"
                        ></img>
                      </Link>

                      <h5>Quần sọc kim ánh vàng</h5>
                      <p className="product-sale">
                        300.000đ &nbsp;
                        <span className="disabled">600.000đ</span>
                      </p>
                      <div className="product-sold">Đã bán 32</div>
                    </Col>
                    <Col className="flashsales-product-item" xs={12}>
                      <Link to="/product-detail">
                        <img
                          className="product-image"
                          src="./images/flash-sale-item.jpg"
                          alt="Quần sọc kim ánh vàng"
                        ></img>
                      </Link>

                      <h5>Quần sọc kim ánh vàng</h5>
                      <p className="product-sale">
                        300.000đ &nbsp;
                        <span className="disabled">600.000đ</span>
                      </p>
                      <div className="product-sold">Đã bán 32</div>
                    </Col>
                  </Row>
                </div>
                <div className="flashsales-item">
                  <Row>
                    <Col className="flashsales-product-item" xs={12}>
                      <Link to="/product-detail">
                        <img
                          className="product-image"
                          src="./images/flash-sale-item.jpg"
                          alt="Quần sọc kim ánh vàng"
                        ></img>
                      </Link>

                      <h5>Quần sọc kim ánh vàng</h5>
                      <p className="product-sale">
                        300.000đ &nbsp;
                        <span className="disabled">600.000đ</span>
                      </p>
                      <div className="product-sold">Đã bán 32</div>
                    </Col>
                    <Col className="flashsales-product-item" xs={12}>
                      <Link to="/product-detail">
                        <img
                          className="product-image"
                          src="./images/flash-sale-item.jpg"
                          alt="Quần sọc kim ánh vàng"
                        ></img>
                      </Link>

                      <h5>Quần sọc kim ánh vàng</h5>
                      <p className="product-sale">
                        300.000đ &nbsp;
                        <span className="disabled">600.000đ</span>
                      </p>
                      <div className="product-sold">Đã bán 32</div>
                    </Col>
                  </Row>
                </div>
                <div className="flashsales-item">
                  <Row>
                    <Col className="flashsales-product-item" xs={12}>
                      <Link to="/product-detail">
                        <img
                          className="product-image"
                          src="./images/flash-sale-item.jpg"
                          alt="Quần sọc kim ánh vàng"
                        ></img>
                      </Link>

                      <h5>Quần sọc kim ánh vàng</h5>
                      <p className="product-sale">
                        300.000đ &nbsp;
                        <span className="disabled">600.000đ</span>
                      </p>
                      <div className="product-sold">Đã bán 32</div>
                    </Col>
                    <Col className="flashsales-product-item" xs={12}>
                      <Link to="/product-detail">
                        <img
                          className="product-image"
                          src="./images/flash-sale-item.jpg"
                          alt="Quần sọc kim ánh vàng"
                        ></img>
                      </Link>

                      <h5>Quần sọc kim ánh vàng</h5>
                      <p className="product-sale">
                        300.000đ &nbsp;
                        <span className="disabled">600.000đ</span>
                      </p>
                      <div className="product-sold">Đã bán 32</div>
                    </Col>
                  </Row>
                </div>
                <div className="flashsales-item">
                  <Row>
                    <Col className="flashsales-product-item" xs={12}>
                      <Link to="/product-detail">
                        <img
                          className="product-image"
                          src="./images/flash-sale-item.jpg"
                          alt="Quần sọc kim ánh vàng"
                        ></img>
                      </Link>

                      <h5>Quần sọc kim ánh vàng</h5>
                      <p className="product-sale">
                        300.000đ &nbsp;
                        <span className="disabled">600.000đ</span>
                      </p>
                      <div className="product-sold">Đã bán 32</div>
                    </Col>
                    <Col className="flashsales-product-item" xs={12}>
                      <Link to="/product-detail">
                        <img
                          className="product-image"
                          src="./images/flash-sale-item.jpg"
                          alt="Quần sọc kim ánh vàng"
                        ></img>
                      </Link>

                      <h5>Quần sọc kim ánh vàng</h5>
                      <p className="product-sale">
                        300.000đ &nbsp;
                        <span className="disabled">600.000đ</span>
                      </p>
                      <div className="product-sold">Đã bán 32</div>
                    </Col>
                  </Row>
                </div>
                <div className="flashsales-item">
                  <Row>
                    <Col className="flashsales-product-item" xs={12}>
                      <Link to="/product-detail">
                        <img
                          className="product-image"
                          src="./images/flash-sale-item.jpg"
                          alt="Quần sọc kim ánh vàng"
                        ></img>
                      </Link>

                      <h5>Quần sọc kim ánh vàng</h5>
                      <p className="product-sale">
                        300.000đ &nbsp;
                        <span className="disabled">600.000đ</span>
                      </p>
                      <div className="product-sold">Đã bán 32</div>
                    </Col>
                    <Col className="flashsales-product-item" xs={12}>
                      <Link to="/product-detail">
                        <img
                          className="product-image"
                          src="./images/flash-sale-item.jpg"
                          alt="Quần sọc kim ánh vàng"
                        ></img>
                      </Link>

                      <h5>Quần sọc kim ánh vàng</h5>
                      <p className="product-sale">
                        300.000đ &nbsp;
                        <span className="disabled">600.000đ</span>
                      </p>
                      <div className="product-sold">Đã bán 32</div>
                    </Col>
                  </Row>
                </div>
                <div className="flashsales-item">
                  <Row>
                    <Col className="flashsales-product-item" xs={12}>
                      <Link to="/product-detail">
                        <img
                          className="product-image"
                          src="./images/flash-sale-item.jpg"
                          alt="Quần sọc kim ánh vàng"
                        ></img>
                      </Link>

                      <h5>Quần sọc kim ánh vàng</h5>
                      <p className="product-sale">
                        300.000đ &nbsp;
                        <span className="disabled">600.000đ</span>
                      </p>
                      <div className="product-sold">Đã bán 32</div>
                    </Col>
                    <Col className="flashsales-product-item" xs={12}>
                      <Link to="/product-detail">
                        <img
                          className="product-image"
                          src="./images/flash-sale-item.jpg"
                          alt="Quần sọc kim ánh vàng"
                        ></img>
                      </Link>

                      <h5>Quần sọc kim ánh vàng</h5>
                      <p className="product-sale">
                        300.000đ &nbsp;
                        <span className="disabled">600.000đ</span>
                      </p>
                      <div className="product-sold">Đã bán 32</div>
                    </Col>
                  </Row>
                </div>
                <div className="flashsales-item">
                  <Row>
                    <Col className="flashsales-product-item" xs={12}>
                      <Link to="/product-detail">
                        <img
                          className="product-image"
                          src="./images/flash-sale-item.jpg"
                          alt="Quần sọc kim ánh vàng"
                        ></img>
                      </Link>

                      <h5>Quần sọc kim ánh vàng</h5>
                      <p className="product-sale">
                        300.000đ &nbsp;
                        <span className="disabled">600.000đ</span>
                      </p>
                      <div className="product-sold">Đã bán 32</div>
                    </Col>
                    <Col className="flashsales-product-item" xs={12}>
                      <Link to="/product-detail">
                        <img
                          className="product-image"
                          src="./images/flash-sale-item.jpg"
                          alt="Quần sọc kim ánh vàng"
                        ></img>
                      </Link>

                      <h5>Quần sọc kim ánh vàng</h5>
                      <p className="product-sale">
                        300.000đ &nbsp;
                        <span className="disabled">600.000đ</span>
                      </p>
                      <div className="product-sold">Đã bán 32</div>
                    </Col>
                  </Row>
                </div>
              </Flickity>
            </Col>
          </Row>
        </div>
        <div className="flashsales-expand">
          <span>Xem tất cả {">>"}</span>
        </div>
      </Container>
    </div>
  );
};

export const getExpiryTimestamp = (countdown) => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + countdown);
  return time;
};

export default FlashSales;
