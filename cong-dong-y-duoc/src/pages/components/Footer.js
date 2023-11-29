import { Col, Container, Row } from "react-bootstrap";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="footer">
      <div className="background"></div>
      <div className="background-child"></div>
      <Container>
        <Row className="footer-one">
          <Col xs={6}>
            <Row>
              <Col xs={12} lg={7} className="footer-item">
                <div className="header">
                  <div className="mark"></div>
                  <h3 className="header-title">Cộng Đồng Y Dược</h3>
                </div>
                <p className="footer-content">
                  Cộng đồng Y dược là một nơi tụ hội những người yêu thích và
                  quan tâm đến lĩnh vực y dược. Với mục tiêu chia sẻ, học hỏi và
                  thảo luận về kiến thức y học, chúng tôi tạo ra một môi trường
                  trực tuyến chuyên nghiệp và đáng tin cậy. Chúng tôi cung cấp
                  các nội dung bổ ích về các chủ đề y học đa dạng, từ bệnh lý,
                  điều trị, dinh dưỡng đến sức khỏe và lối sống lành mạnh.
                </p>
              </Col>
              <Col xs={12} lg={4} className="footer-item">
                <div className="header">
                  <div className="mark"></div>
                  <h3 className="header-title">Dịch vụ</h3>
                </div>
                <div className="footer-content">
                  <p>Bệnh</p>
                  <p>Làm Đẹp</p>
                  <p>Video</p>
                  <p>Hỏi Đáp</p>
                  <p>Tài Liệu</p>
                  <p>CS. Y Tế</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={7} className="footer-item">
                <div className="header">
                  <div className="mark"></div>
                  <h3 className="header-title">Đăng Ký Tư Vấn</h3>
                </div>
                <div className="footer-email">
                  <input
                    type="text"
                    name="email"
                    placeholder="Nhập Email ..."
                  />
                  <HiMail />
                </div>
              </Col>
              <Col xs={12} lg={4} className="footer-item">
                <div className="header">
                  <div className="mark"></div>
                  <h3 className="header-title">Mạng Xã Hội</h3>
                </div>
                <div className="socials">
                  <div className="instagram">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.3387 14.8444C6.45591 13.8739 6.85391 13.3306 7.60393 12.7736C8.67707 12.0193 10.0176 12.446 10.0176 12.446V9.91462C10.3435 9.90629 10.6695 9.92561 10.9918 9.97235V13.23C10.9918 13.23 9.65174 12.8033 8.57859 13.558C7.82898 14.1146 7.43016 14.6583 7.31336 15.6287C7.3097 16.1557 7.40859 16.8445 7.86398 17.4401C7.75139 17.3824 7.63662 17.3166 7.51969 17.2427C6.51654 16.5691 6.33382 15.5585 6.3387 14.8444ZM16.5269 5.23411C15.7886 4.42517 15.5095 3.60842 15.4085 3.03467H16.3372C16.3372 3.03467 16.152 4.53906 17.5015 6.01849L17.5202 6.03838C17.1565 5.8096 16.823 5.53956 16.5269 5.23411ZM21.0005 7.52756V10.7197C21.0005 10.7197 19.8155 10.6733 18.9385 10.4501C17.7139 10.1381 16.9269 9.65953 16.9269 9.65953C16.9269 9.65953 16.3832 9.31824 16.3392 9.29445V15.8862C16.3392 16.2532 16.2387 17.1698 15.9323 17.9343C15.5323 18.9343 14.9149 19.5908 14.8014 19.725C14.8014 19.725 14.0505 20.6123 12.7259 21.2098C11.5319 21.7489 10.4836 21.7352 10.1702 21.7489C10.1702 21.7489 8.35802 21.8207 6.72735 20.7609C6.37473 20.5273 6.04557 20.2628 5.74414 19.9707L5.75228 19.9765C7.38336 21.0363 9.19513 20.9645 9.19513 20.9645C9.50889 20.9509 10.5572 20.9645 11.7508 20.4255C13.0742 19.8279 13.8263 18.9406 13.8263 18.9406C13.9386 18.8064 14.5588 18.15 14.9572 17.1495C15.2628 16.3854 15.3642 15.4684 15.3642 15.1014V8.51047C15.4081 8.53465 15.9514 8.87594 15.9514 8.87594C15.9514 8.87594 16.7389 9.35491 17.9634 9.66655C18.8408 9.88966 20.0255 9.93607 20.0255 9.93607V7.43473C20.4308 7.52561 20.7763 7.55018 21.0005 7.52756Z"
                        fill="#EE1D52"
                      />
                      <path
                        d="M20.0256 7.43473V9.93529C20.0256 9.93529 18.841 9.88887 17.9636 9.66577C16.7391 9.35374 15.9516 8.87516 15.9516 8.87516C15.9516 8.87516 15.4083 8.53387 15.3644 8.50969V15.1022C15.3644 15.4692 15.2638 16.3862 14.9574 17.1503C14.5574 18.1507 13.94 18.8072 13.8265 18.9414C13.8265 18.9414 13.0752 19.8287 11.751 20.4262C10.5574 20.9653 9.50908 20.9516 9.19532 20.9653C9.19532 20.9653 7.38355 21.0371 5.75246 19.9773L5.74433 19.9715C5.57212 19.8047 5.41002 19.6286 5.25883 19.4441C4.73833 18.8095 4.41928 18.0591 4.3391 17.845C4.33897 17.844 4.33897 17.8431 4.3391 17.8422C4.2101 17.4701 3.93907 16.5765 3.9761 15.711C4.04162 14.184 4.5788 13.2467 4.72083 13.0119C5.09698 12.3716 5.58621 11.7987 6.16675 11.3188C6.67903 10.9046 7.2597 10.5751 7.88491 10.3437C8.5608 10.072 9.28455 9.92637 10.0174 9.91462V12.446C10.0174 12.446 8.67685 12.0208 7.60412 12.7736C6.85409 13.3306 6.45609 13.8739 6.33889 14.8444C6.334 15.5585 6.51673 16.5691 7.51906 17.2431C7.63599 17.3172 7.75076 17.383 7.86335 17.4405C8.03845 17.6681 8.25158 17.8664 8.49413 18.0275C9.47327 18.6473 10.2937 18.6906 11.3428 18.288C12.0424 18.0189 12.569 17.4124 12.8132 16.7404C12.9666 16.3207 12.9645 15.8982 12.9645 15.4614V3.03467H15.4063C15.5072 3.60842 15.7864 4.42517 16.5246 5.23411C16.8207 5.53956 17.1543 5.8096 17.518 6.03838C17.6254 6.14954 18.1748 6.69911 18.8801 7.0365C19.2447 7.21089 19.6291 7.34452 20.0256 7.43473Z"
                        fill="black"
                      />
                      <path
                        d="M3.36719 17.0679V17.0698L3.42778 17.234C3.42082 17.2149 3.3983 17.1568 3.36719 17.0679Z"
                        fill="#69C9D0"
                      />
                      <path
                        d="M7.88461 10.344C7.25939 10.5754 6.67873 10.9049 6.16644 11.3191C5.58572 11.8001 5.09661 12.3742 4.72093 13.0158C4.57891 13.2498 4.04172 14.1878 3.9762 15.7149C3.93917 16.5804 4.2102 17.4739 4.33921 17.846C4.33907 17.847 4.33907 17.8479 4.33921 17.8488C4.4206 18.061 4.73843 18.8114 5.25893 19.4479C5.41012 19.6325 5.57222 19.8085 5.74443 19.9753C5.19268 19.6095 4.7006 19.1674 4.28427 18.6632C3.76825 18.034 3.45001 17.2914 3.36699 17.0722C3.36689 17.0706 3.36689 17.0691 3.36699 17.0675V17.0648C3.23758 16.6931 2.96573 15.7991 3.00358 14.9324C3.0691 13.4054 3.60628 12.4681 3.74831 12.2333C4.12388 11.5917 4.613 11.0176 5.19382 10.5367C5.706 10.1223 6.28669 9.79279 6.91199 9.56155C7.30202 9.40646 7.70833 9.29203 8.1239 9.22027C8.75019 9.11549 9.38984 9.1064 10.0191 9.19336V9.91493C9.2856 9.92643 8.56113 10.0721 7.88461 10.344Z"
                        fill="#69C9D0"
                      />
                      <path
                        d="M15.4078 3.03476H12.9661V15.4619C12.9661 15.8987 12.9661 16.32 12.8147 16.7408C12.5681 17.4125 12.0435 18.019 11.3444 18.2881C10.2948 18.6922 9.47442 18.6474 8.49569 18.0276C8.25273 17.8673 8.03905 17.6696 7.86328 17.4425C8.69713 17.8688 9.44349 17.8614 10.3681 17.5057C11.0668 17.2366 11.5922 16.6301 11.838 15.958C11.9919 15.5383 11.9898 15.1159 11.9898 14.6795V2.25H15.3615C15.3615 2.25 15.3236 2.55891 15.4078 3.03476ZM20.0252 6.74328V7.43483C19.6293 7.34447 19.2456 7.21085 18.8816 7.0366C18.1764 6.69921 17.627 6.14964 17.5195 6.03848C17.6442 6.11693 17.7736 6.1883 17.907 6.25222C18.7644 6.66255 19.6089 6.78502 20.0252 6.74328Z"
                        fill="#69C9D0"
                      />
                    </svg>
                    Tiktok
                  </div>
                  <div className="facebook">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10.5"
                        fill="url(#paint0_linear_2536_13243)"
                      />
                      <path
                        d="M15.9103 15.2112L16.3767 12.2476H13.4589V10.3252C13.4589 9.51428 13.8657 8.7233 15.1726 8.7233H16.5V6.20024C16.5 6.20024 15.2959 6 14.1452 6C11.7411 6 10.1712 7.4197 10.1712 9.98883V12.2476H7.5V15.2112H10.1712V22.3759C10.7075 22.458 11.2562 22.5 11.8151 22.5C12.374 22.5 12.9226 22.458 13.4589 22.3759V15.2112H15.9103Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_2536_13243"
                          x1="12"
                          y1="1.5"
                          x2="12"
                          y2="22.4377"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#18ACFE" />
                          <stop offset="1" stopColor="#0163E0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="copyright">
              <Col xs={7}>
                <p>Privacy Policy | Terms & Conditions</p>
              </Col>
              <Col xs={4}>
                <p>All Copyright (C) 2022 Reserved</p>
              </Col>
            </Row>
          </Col>
          <Col xs={6}>
            <Row>
              <Col xs={12} lg={6}>
                <div className="header">
                  <div className="mark"></div>
                  <h3 className="header-title">Cộng Đồng Y Dược</h3>
                </div>
                <div>
                  <div className="newcomments">
                    <h5>Báo đời sống và sức khoẻ</h5>
                    <p>
                      Cộng Đồng Y dược - Nền tảng chia sẻ kiến thức y học đáng
                      tin cậy.
                    </p>
                  </div>
                  <div className="newcomments">
                    <h5>Báo mới</h5>
                    <p>
                      Cộng Đồng Y dược - Nơi giao lưu, học hỏi và chia sẻ về y
                      dược.
                    </p>
                  </div>
                  <div className="newcomments">
                    <h5>Báo VnExpresst</h5>
                    <p>
                      Cộng Đồng Y dược - Sân chơi trí tuệ y học, kết nối và chia
                      sẻ kiến thức chuyên sâu.
                    </p>
                  </div>
                  <div className="newcomments">
                    <h5>VTV3</h5>
                    <p>
                      Cộng Đồng Y dược - Nơi hội tụ tinh hoa y học, thảo luận và
                      tìm hiểu về sức khỏe và y đức.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={6}>
                <div className="header">
                  <div className="mark"></div>
                  <h3 className="header-title">Follow On Instagram</h3>
                </div>
                <div className="follow-instagram">
                  <img src="/imgs/footer/footer-item_1.jpg" alt="follow" />
                  <img src="/imgs/footer/footer-item_2.jpg" alt="follow" />
                  <img src="/imgs/footer/footer-item_3.jpg" alt="follow" />
                  <img src="/imgs/footer/footer-item_4.jpg" alt="follow" />
                  <img src="/imgs/footer/footer-item_5.jpg" alt="follow" />
                  <img src="/imgs/footer/footer-item_6.jpg" alt="follow" />
                  <img src="/imgs/footer/footer-item_7.jpg" alt="follow" />
                  <img src="/imgs/footer/footer-item_8.jpg" alt="follow" />
                  <img src="/imgs/footer/footer-item_9.jpg" alt="follow" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
