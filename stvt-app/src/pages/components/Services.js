import SocialCarousel from "./ServicesCarousel";

export default function Services() {
  return (
      <div className="services">
        <div className="services-bg"></div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="service-items-main">
                <h1>Trải nghiệm dịch vụ</h1>
                <p>Luôn luôn lắng nghe, luôn luôn thấu hiểu</p>
                <div className="services-banner">
                  <img
                    src="./images/BestSellerBook.jpg"
                    alt="Best seller book"
                  ></img>
                  <span className="buynow">MUA NGAY</span>
                </div>
              </div>
            </div>
            <div className="col-6 hidden-xs">
            <div className="row ">
                <div className="col-3 col-md-6 service-item service-items-down">
                  <img
                    src="./images/ServiceItem.jpg"
                    alt="Khám phá tính cách và hành vi"
                  ></img>
                  <h3>KHÁM PHÁ TÍNH CÁCH VÀ HÀNH VI</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pretium enim, vel libero magna amet, amet euismod pretium
                    sed.
                  </p>
                </div>
                <div className="col-3 col-md-6 service-item service-items-up">
                  <img
                    src="./images/ServiceItem.jpg"
                    alt="Khám phá tính cách và hành vi"
                  ></img>
                  <h3>KHÁM PHÁ TÍNH CÁCH VÀ HÀNH VI</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pretium enim, vel libero magna amet, amet euismod pretium
                    sed. Posuere libero.
                  </p>
                </div>

                <div className="col-3 col-md-6 service-item service-items-down">
                  <img
                    src="./images/ServiceItem.jpg"
                    alt="Khám phá tính cách và hành vi"
                  ></img>
                  <h3>XU HƯỚNG NĂNG LỰC BẨM SINH</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pretium enim, vel libero magna amet, amet euismod pretium
                    sed. Posuere libero.
                  </p>
                </div>
                <div className="col-3 col-md-6 service-item service-items-up">
                  <img
                    src="./images/ServiceItem.jpg"
                    alt="Khám phá tính cách và hành vi"
                  ></img>
                  <h3>KHÁM PHÁ TÍNH CÁCH VÀ HÀNH VI</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pretium enim, vel libero magna amet, amet euismod pretium
                    sed.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 block-xs">
              <SocialCarousel />
            </div>
          </div>
        </div>
        <div className="fingerprint-check">
          <div className="fingerprint-bg"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="fingerprint-title hidden-xs">
                  Lorem ipsum dolor sit amet,{" "}
                  <span>consectetur adipiscing elit. </span>
                </div>
                <div className="fingerprint-title block-xs">
                  Lorem ipsum dolor sit amet, <span>consectetur </span>
                </div>

                <p className="hidden-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare purus arcu fames tempus nibh at mollis ipsum. A
                  pharetra, quis tempor at. Quam ornare curabitur ut diam,
                  feugiat nibh mi proin nisl. Sed massa augue tellus aliquet
                  posuere magna. Et libero aliquet natoque nisl, blandit sed
                  pulvinar.
                </p>
                <p className="block-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="col-9 col-md-6 col-lg-3">
                <div className="fingerprint-check-button hidden-xs">
                  KIỂM TRA KẾT QUẢ
                </div>
                <div className="fingerprint-check-button block-xs">
                  KIỂM TRA VÂN TAY ONLINE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
