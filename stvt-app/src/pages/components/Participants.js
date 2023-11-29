import ParticipantRegisterModal from "./ParticipantRegisterModal";

export default function Participants() {
  return (
      <div className="participants">
        <div className="participants-bg"></div>
        <div className="container">
          <div className="row participant-team-title">
            <div className="col-12">
              <h1>ĐỘI NGŨ CHUYÊN VIÊN</h1>
              <p>Luôn luôn lắng nghe, luôn luôn thấu hiểu</p>
            </div>
          </div>
          <div className="row participant-team-content">
            <div className="col-lg-6">
              <div className="participant-item-main">
                <div className="participant-register">
                  <div className="row">
                    <div className="col-7">
                      <h2>Đăng ký chuyên viên</h2>
                      <p className="hidden-xs">
                        Lorem ipsum dolor sit amet, consectetur
                      </p>
                      <p className="block-xs">Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="col-5">
                      <ParticipantRegisterModal />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row participant-items">
                <div className="col-12">
                  <div
                    className="participant-item"
                    style={{
                      backgroundImage: "url(../images/ParticipantTeam.jpg)",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="participant-item-title">
                      <h2>ĐỘI NGŨ CHUYÊN VIÊN</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row participant-items">
                <div className="col-6">
                  <div
                    className="participant-item"
                    style={{
                      backgroundImage: "url(../images/ParticipantItem01.jpg)",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="participant-item-title">
                      <h2>CHUYÊN VIÊN 1</h2>
                      <p>Lorem ipsum dolor sit amet, consec </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    className="participant-item"
                    style={{
                      backgroundImage: "url(../images/ParticipantItem02.jpg)",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="participant-item-title">
                      <h2>CHUYÊN VIÊN 2</h2>
                      <p>Lorem ipsum dolor sit amet, consec </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 participant-socials">
              <div className="row">
                <div className="col-12">
                  <h1>THAM GIA CỘNG ĐỒNG</h1>
                  <p className="hidden-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Consectetur erat porttitor odio tincidunt vestibulum, amet,
                    massa faucibus. Pellentesque eu egestas adipiscing mattis
                    nisl tellus sit amet condimentum. Quisque vulputate pharetra
                    risus feugiat habitant mi. Consectetur arcu, odio arcu, quam
                    amet, orci praesent.
                  </p>
                  <p className="block-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Consectetur erat porttitor odio tincidunt vestibulum.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-4 col-lg-2">
                  <img
                    className="participant-social-item"
                    src="./images/FacebookSocial.jpg"
                    alt="Facebook"
                  ></img>
                </div>
                <div className="col-4 col-lg-2">
                  <img
                    className="participant-social-item"
                    src="./images/YoutubeSocial.jpg"
                    alt="Youtube"
                  ></img>
                </div>
                <div className="col-4 col-lg-2">
                  <img
                    className="participant-social-item"
                    src="./images/TiktokSocial.jpg"
                    alt="Tiktok"
                  ></img>
                </div>
                <div className="col-2 hidden-xs">
                  <img
                    className="participant-social-item"
                    src="./images/Group1Social.jpg"
                    alt="Group1"
                  ></img>
                </div>
                <div className="col-2 hidden-xs">
                  <img
                    className="participant-social-item"
                    src="./images/Group2Social.jpg"
                    alt="Group2"
                  ></img>
                </div>
                <div className="col-2 hidden-xs">
                  <img
                    className="participant-social-item"
                    src="./images/Group3Social.jpg"
                    alt="Group3"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
