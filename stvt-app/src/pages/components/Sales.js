export default function Sales() {
  return (
      <div
        className="sales"
        style={{
          backgroundImage: "url(../images/BannerSale.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-6 col-xl-5 sales-body">
              <div className="row sales-info">
                <div className="price">
                  <i className="fa-solid fa-caret-left"></i>
                  <p>GIÁ GỐC: 3.900.000 VNĐ</p>
                </div>
                <h1>CHỈ CÒN: 3.000.000 VNĐ</h1>
                <p>số lượng có hạn chỉ còn 20 suất duy nhất</p>
              </div>
              <div className="row sales-date">
                <div className="col-3">
                  <div className="expiration-date">03d</div>
                </div>
                <div className="col-3">
                  <div className="expiration-date">25h</div>
                </div>
                <div className="col-3">
                  <div className="expiration-date">11m</div>
                </div>
                <div className="col-3">
                  <div className="expiration-date">45s</div>
                </div>
              </div>
              <div className="row">
                <form className="sales-form">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-12">
                        <h3>ĐĂNG KÝ KIỂM TRA SINH TRẮC VÂN TAY</h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="sales-form-input">
                          <input type="text" placeholder="Họ và tên"></input>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="sales-form-input">
                          <input
                            type="text"
                            placeholder="Số điện thoại"
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="sales-form-input">
                          <input type="text" placeholder="Email"></input>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="sales-form-input sales-form-combobox">
                          <input
                            type="text"
                            placeholder="Thời gian tư vấn"
                          ></input>
                          <i className="fa-solid fa-caret-down"></i>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <button className="sales-form-button">ĐĂNG KÝ KIỂM TRA VÂN TAY</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
