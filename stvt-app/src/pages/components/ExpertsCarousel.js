import Flickity from "react-flickity-component";

const flickityOps = {
  freeScroll: false,
  contain: true,
  prevNextButtons: false,
  groupCells: false,
  pageDots: true,
  wrapAround: true,
  autoPlay: 3000,
  // cellSelector: ".expert-item",
};
function ExpertsCarousel() {
  return (
    <Flickity
      className={"experts-carousel"}
      elementType={"div"}
      options={flickityOps}
    >
      <div
        className="expert-item"
        style={{
          backgroundImage: "url(../images/Expert_NguyenHoangAnh.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="expert-item-title">
          <div className="row">
            <div className="col-7">
              <h5>NGUYỄN HOÀNG ANH</h5>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="col-5 text-end">
              <div className="expert-item-button">ĐĂNG KÝ</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="expert-item"
        style={{
          backgroundImage: "url(../images/Expert_HoangHongHanh.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="expert-item-title">
          <div className="row">
            <div className="col-7">
              <h5>HOÀNG HỒNG HẠNH</h5>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="col-5 text-end">
              <div className="expert-item-button">ĐĂNG KÝ</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="expert-item"
        style={{
          backgroundImage: "url(../images/Expert_DinhHoang.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="expert-item-title">
          <div className="row">
            <div className="col-7">
              <h5>TRẦN ĐÌNH HOÀNG</h5>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="col-5 text-end">
              <div className="expert-item-button">ĐĂNG KÝ</div>
            </div>
          </div>
        </div>
      </div>
    </Flickity>
  );
}

export default ExpertsCarousel;
