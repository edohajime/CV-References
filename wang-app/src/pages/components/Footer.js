import { CCard, CCardBody, CCollapse } from "@coreui/react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaSortDown } from "react-icons/fa";
const Footer = () => {
  const [visible1, setVisible1] = useState(true);
  const [visible2, setVisible2] = useState(true);
  const [visible3, setVisible3] = useState(true);
  const [visible4, setVisible4] = useState(true);
  const [visible5, setVisible5] = useState(true);
  const [visible6, setVisible6] = useState(true);
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col xs={12} className="footer-section">
            <h1 className="footer-title">WEBSITE TRỰC THUỘC</h1>
            <CCollapse visible={visible1}>
              <CCard>
                <CCardBody>
                  <Row className="footer-items">
                    <Col>
                      <h5 className="footer-item">www.wanggroup.com</h5>
                    </Col>
                  </Row>
                  <Row className="footer-items">
                    <Col>
                      <h5 className="footer-item">www.Xuongmaymienbac.com</h5>
                    </Col>
                  </Row>
                  <Row className="footer-items">
                    <Col>
                      <h5 className="footer-item">www.polowang.vn</h5>
                    </Col>
                  </Row>
                </CCardBody>
              </CCard>
            </CCollapse>
            <FaSortDown
              className="footer-dropDown"
              onClick={(c) => {
                setVisible1(!visible1);
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="footer-section">
            <h1 className="footer-title">THEO DÕI CHÚNG TÔI TRÊN</h1>
            <CCollapse visible={visible2}>
              <CCard>
                <CCardBody>
                  <Row className="footer-items">
                    <Col xs={2} className="footer-icons">
                      <img src="./images/fa-facebook.jpg" alt="Facebook"></img>
                    </Col>
                    <Col xs={10}>
                      <h5 className="footer-item">Facebook</h5>
                    </Col>
                  </Row>
                  <Row className="footer-items">
                    <Col xs={2} className="footer-icons">
                      <img
                        src="./images/fa-instagram.jpg"
                        alt="Instagram"
                      ></img>
                    </Col>
                    <Col xs={10}>
                      <h5 className="footer-item">Instagram</h5>
                    </Col>
                  </Row>
                  <Row className="footer-items">
                    <Col xs={2} className="footer-icons">
                      <img src="./images/fa-youtube.jpg" alt="Youtube"></img>
                    </Col>
                    <Col xs={10}>
                      <h5 className="footer-item">Youtube</h5>
                    </Col>
                  </Row>
                  <Row className="footer-items">
                    <Col xs={2} className="footer-icons">
                      <img
                        src="./images/fa-pinterest.jpg"
                        alt="Pinterest"
                      ></img>
                    </Col>
                    <Col xs={10}>
                      <h5 className="footer-item">Pinterest</h5>
                    </Col>
                  </Row>
                  <Row className="footer-items">
                    <Col xs={2} className="footer-icons">
                      <img src="./images/fa-tiktok.jpg" alt="Tiktok"></img>
                    </Col>
                    <Col xs={10}>
                      <h5 className="footer-item">Tiktok</h5>
                    </Col>
                  </Row>
                  <Row className="footer-items">
                    <Col xs={2} className="footer-icons">
                      <img src="./images/fa-zalo.jpg" alt="Zalo"></img>
                    </Col>
                    <Col xs={10}>
                      <h5 className="footer-item">Zalo</h5>
                    </Col>
                  </Row>
                  <Row className="footer-items">
                    <Col xs={2} className="footer-icons">
                      <img
                        src="./images/fa-facebook.jpg"
                        alt="Group Facebook"
                      ></img>
                    </Col>
                    <Col xs={10}>
                      <h5 className="footer-item">Group Facebook</h5>
                    </Col>
                  </Row>
                  <Row className="footer-items">
                    <Col xs={2} className="footer-icons">
                      <img src="./images/fa-zalo.jpg" alt="Group Zalo"></img>
                    </Col>
                    <Col xs={10}>
                      <h5 className="footer-item">Group zalo</h5>
                    </Col>
                  </Row>
                </CCardBody>
              </CCard>
            </CCollapse>
            <FaSortDown
              className="footer-dropDown"
              onClick={() => setVisible2(!visible2)}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="footer-section">
            <h1 className="footer-title">VỀ A18</h1>
            <CCollapse visible={visible3}>
              <CCard>
                <CCardBody>
                  <Row className="footer-items">
                    <Col>
                      <h5 className="footer-item">Giới thiệu</h5>
                    </Col>
                  </Row>
                  <Row className="footer-items">
                    <Col>
                      <h5 className="footer-item">Tuyển dụng</h5>
                    </Col>
                  </Row>
                  <Row className="footer-items">
                    <Col>
                      <h5 className="footer-item">Hướng dẫn mua hàng</h5>
                    </Col>
                  </Row>
                  <Row className="footer-items">
                    <Col>
                      <h5 className="footer-item">Hướng dẫn đổi trả</h5>
                    </Col>
                  </Row>
                  <Row className="footer-items">
                    <Col>
                      <h5 className="footer-item">Hướng dẫn thanh toán</h5>
                    </Col>
                  </Row>
                  <Row className="footer-items">
                    <Col>
                      <h5 className="footer-item">Hướng dẫn vận chuyển</h5>
                    </Col>
                  </Row>
                  <Row className="footer-items">
                    <Col>
                      <h5 className="footer-item">
                        Hướng dẫn kinh doanh bán lẻ
                      </h5>
                    </Col>
                  </Row>
                  <Row className="footer-items">
                    <Col>
                      <h5 className="footer-item">
                        Hướng dẫn kinh doanh bán buôn
                      </h5>
                    </Col>
                  </Row>
                  <Row className="footer-items">
                    <Col>
                      <h5 className="footer-item">Hướng dẫn đầu tư</h5>
                    </Col>
                  </Row>
                  <Row className="footer-items">
                    <Col>
                      <h5 className="footer-item">Điều khoản A18</h5>
                    </Col>
                  </Row>
                  <Row className="footer-items">
                    <Col>
                      <h5 className="footer-item">Chính sách bảo mật</h5>
                    </Col>
                  </Row>
                </CCardBody>
              </CCard>
            </CCollapse>
            <FaSortDown
              className="footer-dropDown"
              onClick={() => setVisible3(!visible3)}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="footer-section">
            <h1 className="footer-title">CHĂM SÓC KHÁCH HÀNG</h1>
            <CCollapse visible={visible4}>
              <CCard>
                <CCardBody>
                  <Row className="footer-items">
                    <Col>
                      <h5 className="footer-item">
                        Đăng kí kinh doanh bán buôn
                      </h5>
                    </Col>
                  </Row>
                  <Row className="footer-items">
                    <Col>
                      <h5 className="footer-item">Đăng kí kinh doanh bán lẻ</h5>
                    </Col>
                  </Row>
                  <Row className="footer-items">
                    <Col>
                      <h5 className="footer-item">Câu hỏi thường gặp</h5>
                    </Col>
                  </Row>
                </CCardBody>
              </CCard>
            </CCollapse>
            <FaSortDown
              className="footer-dropDown"
              onClick={() => setVisible4(!visible4)}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="footer-section">
            <h1 className="footer-title">Công ty TNHH ANA GROUP</h1>
            <CCollapse visible={visible5}>
              <CCard>
                <CCardBody>
                  <Row className="footer-items">
                    <Col>
                      <h5 className="footer-item">
                        Mã số doanh nghiệp: 0108803168
                      </h5>
                    </Col>
                  </Row>
                  <Row className="footer-items">
                    <Col>
                      <h5 className="footer-item">
                        Số 6 ngõ 56/87/14 Thạch Cầu, Long Biên, Long Biên, Hà
                        Nội
                      </h5>
                    </Col>
                  </Row>
                  <Row className="footer-items">
                    <Col>
                      <h5 className="footer-item">Liên hệ: 0888601234</h5>
                    </Col>
                  </Row>
                </CCardBody>
              </CCard>
            </CCollapse>
            <FaSortDown
              className="footer-dropDown"
              onClick={() => setVisible5(!visible5)}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="footer-section">
            <h1 className="footer-title">Hotline</h1>
            <CCollapse visible={visible6}>
              <CCard>
                <CCardBody>
                  <Row className="footer-items">
                    <Col>
                      <h5 className="footer-item">0842201020</h5>
                    </Col>
                  </Row>
                </CCardBody>
              </CCard>
            </CCollapse>
            <FaSortDown
              className="footer-dropDown"
              onClick={() => setVisible6(!visible6)}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
