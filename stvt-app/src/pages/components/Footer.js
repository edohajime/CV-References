export default function Footer() {
  return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-info">
                <h3>CÔNG TY TNHH SKEY NAM ĐỊNH</h3>
                <div className="footer-info-content">
                  <p>924B Kim Giang, Thanh Liệt, Thanh Trì, HN</p>
                  <p>Số giấy chứng nhận KD: 0601177989</p>
                  <p>Ngày cấp: 3/4/2019</p>
                  <p>Nơi cấp: Sở kế hoạch và đầu tư tỉnh Nam Định</p>
                </div>
                <h3>CHỨNG NHẬN KINH DOANH</h3>
                <div className="footer-info-ctf">
                  <img
                    src="./images/Certification.jpg"
                    alt="Chứng nhận kinh doanh"
                  ></img>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-info">
                <h3>CHÍNH SÁCH BẢO MẬT</h3>
                <p>Liên hệ hợp tác GFF Group </p>
                <p>Phone: 0399.417.998</p>

                <h3>GIỜ PHỤC VỤ</h3>
                <p>Thứ 2 đến thứ 6 : 8h - 24h</p>
                <p>Thứ 7 chủ nhật : 9h - 19h</p>

                <h3>HÌNH THỨC THANH TOÁN</h3>
                <div className="footer-info-content">
                  <div className="paymethod">
                    <img
                      src="./images/MastercardLogo.jpg"
                      alt="Mastercard"
                    ></img>
                  </div>
                  &nbsp;
                  <div className="paymethod">
                    <img src="./images/VISALogo.jpg" alt="Mastercard"></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-info">
                <h3>THAM GIA CỘNG ĐỒNG</h3>
                <p>Tham gia cộng đồng cùng +100,000 thành viên GFF Group</p>

                <div className="footer-info-content">
                  <div className="social">
                    <img src="./images/TiktokLogo.jpg" alt="Tiktok"></img>
                  </div>
                  <div className="social">
                    <img src="./images/FacebookLogo.jpg" alt="Facebook"></img>
                  </div>
                  <div className="social">
                    <img src="./images/YoutubeLogo.jpg" alt="Youtube"></img>
                  </div>
                </div>

                <div className="clear-fix"></div>

                <h3>LIÊN HỆ TƯ VẤN</h3>

                <div className="footer-info-content footer-info-contact">
                  <input
                    className="contact-input"
                    type="text"
                    placeholder="Nhập email liên hệ"
                  ></input>
                  &nbsp;
                  <img
                    className="contact-button"
                    src="./images/Contact.jpg"
                    alt="Contact"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
