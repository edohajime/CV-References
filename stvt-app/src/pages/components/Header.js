import { Link } from "react-router-dom";

export default function Header() {
  return (
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <Link to="/">
                <div className="logo">
                  <img src="./images/Logo.jpg" alt="STVT Logo"></img>
                </div>
              </Link>
            </div>
            <div className="col-8 hidden-xs">
              <div className="menubar">
                <div className="menu-item">TRẢI NGHIỆM DỊCH VỤ</div>
                <div className="menu-item menu-dropdown">
                  VỀ CHÚNG TÔI &nbsp;
                  <span className="menu-dropdown-icon">
                    <i className="fa-solid fa-caret-down"></i>
                  </span>
                  <div className="row menubar-two">
                    <div className="col-12 menubar-two-item">
                      VỀ WEBSITE GFF
                    </div>
                    <div className="col-12 menubar-two-item">VỀ CAD</div>
                    <div className="col-12 menubar-two-item">VỀ NỘI DUNG</div>
                    <div className="col-12 menubar-two-item">VỀ CHUYÊN GIA</div>
                  </div>
                </div>
                <div className="menu-item">CÂU CHUYỆN KHÁCH HÀNG</div>
                <div className="menu-item">KIỂM TRA SINH TRẮC VÂN TAY</div>
                <div className="menu-item">LAN TỎA</div>
              </div>
            </div>
            <div className="col-2 hidden-xs">
              <div className="account">
                <i className="fa-regular fa-user"></i>
                &nbsp;
                <span className="account-name">
                  TÀI KHOẢN &nbsp;
                  <span className="account-dropdown-icon">
                    <i className="fa-solid fa-caret-down"></i>
                  </span>
                  <div className="row menubar-two">
                    <div className="col-12 menubar-two-item">TÀI KHOẢN</div>
                    <div className="col-12 menubar-two-item">
                      THEO DÕI ĐƠN HÀNG
                    </div>
                  </div>
                </span>
              </div>
            </div>
            <div className="offset-8 col-2 block-xs">
              <i className="fa-solid fa-bars block-xs"></i>
              <div className="menubar-mobile"></div>
            </div>
          </div>
        </div>
      </div>
  );
}
