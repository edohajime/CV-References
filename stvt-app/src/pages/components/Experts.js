import ExpertRegisterModal from "./ExpertRegisterModal";
import ExpertsCarousel from "./ExpertsCarousel";

export default function Experts() {
  return (
    <>
      <div
        className="experts"
        style={{
          backgroundImage: "url(../images/ExpertTeamBg.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row experts-header">
            <div className="col-12">
              <h1>ĐỘI NGŨ CHUYÊN GIA</h1>
              <p>Luôn luôn lắng nghe, luôn luôn thấu hiểu</p>
            </div>
          </div>
          <div className="row hidden-xs">
            <div className="col-md-4">
              <div
                className="expert-item"
                style={{
                  backgroundImage: "url(../images/Expert_NguyenHoangAnh.jpg)",
                  backgroundSize: "cover",
                }}
              >
                <div className="expert-item-title">
                  <div className="row align-items-center ">
                    <div className="col-7">
                      <h5>NGUYỄN HOÀNG ANH</h5>
                      <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="col-5 text-end">
                      <ExpertRegisterModal />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="expert-item"
                style={{
                  backgroundImage: "url(../images/Expert_HoangHongHanh.jpg)",
                  backgroundSize: "cover",
                }}
              >
                <div className="expert-item-title">
                  <div className="row align-items-center ">
                    <div className="col-7">
                      <h5>HOÀNG HỒNG HẠNH</h5>
                      <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="col-5 text-end">
                      <ExpertRegisterModal />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="expert-item"
                style={{
                  backgroundImage: "url(../images/Expert_DinhHoang.jpg)",
                  backgroundSize: "cover",
                }}
              >
                <div className="expert-item-title">
                  <div className="row align-items-center ">
                    <div className="col-7">
                      <h5>TRẦN ĐÌNH HOÀNG</h5>
                      <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="col-5 text-end">
                      <ExpertRegisterModal />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row block-xs">
            <ExpertsCarousel />
          </div>
        </div>
      </div>
    </>
  );
}
