import PartnersCarousel from "./PartnersCarousel";

export default function Partners() {
  return (
      <div
        className="partners"
        style={{
          backgroundImage: "url(../images/PartnerBg.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="partners-bg"></div>
        <div className="container">
          <div className="row partners-title">
            <div className="col-12">
              <h1>ĐỐI TÁC CỦA CHÚNG TÔI</h1>
              <p>Luôn luôn lắng nghe, luôn luôn thấu hiểu</p>
            </div>
          </div>
          <div className="row hidden-xs">
            <div className="col-4 col-md-2">
              <img
                className="partners-item"
                src="./images/Partner_OceanEdu.jpg"
                alt="Ocean Edu"
              ></img>
            </div>
            <div className="col-4 col-md-2">
              <img
                className="partners-item"
                src="./images/Partner_BlueSun.jpg"
                alt="Blue Sun"
              ></img>
            </div>
            <div className="col-4 col-md-2">
              <img
                className="partners-item"
                src="./images/Partner_RES.jpg"
                alt="Reliable English School"
              ></img>
            </div>
            <div className="col-4 col-md-2">
              <img
                className="partners-item"
                src="./images/Partner_OceanEdu.jpg"
                alt="Ocean Edu"
              ></img>
            </div>
            <div className="col-4 col-md-2">
              <img
                className="partners-item"
                src="./images/Partner_BlueSun.jpg"
                alt="Blue Sun"
              ></img>
            </div>
            <div className="col-4 col-md-2">
              <img
                className="partners-item"
                src="./images/Partner_RES.jpg"
                alt="Reliable English School"
              ></img>
            </div>
          </div>
          <div className="row block-xs">
            <div className="col-12">
              <PartnersCarousel />
            </div>
          </div>
        </div>
      </div>
  );
}
