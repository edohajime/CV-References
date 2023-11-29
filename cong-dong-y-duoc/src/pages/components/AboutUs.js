import { Col, Container, Row } from "react-bootstrap";
import { handlePlay } from "./TopHospitals";
import {
  iconClock,
  iconEmail,
  iconFax,
  iconLocation,
  iconPhone,
} from "../utilities/Icons";

const AboutUs = () => {
  return (
    <>
      <div className="about_us">
        <div className="about_us-bg"></div>
        <Container>
          <div className="about_us-article">
            <Row>
              <Col xs={12}>
                <h5 className="about_us-title">
                  We pay attention to your needs and do the best design.
                </h5>
              </Col>
              <Col xs={12} md={6}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
                  congue mauris rhoncus aenean vel elit scelerisque. In egestas
                  erat imperdiet sed euismod nisi porta lorem mollis. Morbi
                  tristique senectus et netus. Mattis pellentesque id nibh
                  tortor id aliquet lectus proin. Sapien faucibus et molestie ac
                  feugiat sed lectus vestibulum. Ullamcorper velit sed
                  ullamcorper morbi tincidunt ornare massa eget. Dictum varius
                  duis at consectetur lorem. Nisi vitae suscipit tellus mauris a
                  diam maecenas sed enim. Velit ut tortor pretium viverra
                  suspendisse potenti nullam. Et molestie ac feugiat sed lectus.
                  Non nisi est sit amet facilisis magna. Dignissim diam quis
                  enim lobortis scelerisque fermentum. Odio ut enim blandit
                  volutpat maecenas volutpat. Ornare lectus sit amet est
                  placerat in egestas erat.
                </p>
              </Col>
              <Col xs={12} md={6}>
                <div className="tophospitals-video">
                  <div
                    className="play visible"
                    onClick={(e) => handlePlay(e.target, true)}
                  >
                    <img
                      src="/imgs/tophospitals/tophospitals-play.jpg"
                      alt="play"
                    />
                  </div>
                  <div className="wrapper">
                    <video
                      src="/videos/tophospitals/tophospitals-item_1.mp4"
                      onClick={(e) => handlePlay(e.target, false)}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="about_us-location">
            <Row>
              <Col xs={12} md={7}>
                <div className="about_us-map">
                  <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1317.2112553807308!2d105.84386310996187!3d20.96712627502665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac707fc74279%3A0x32e2df2e3a1e7c0c!2zQ8OUTkcgVFkgQ-G7lCBQSOG6pk4gSMSQQiBIw4AgTuG7mEk!5e0!3m2!1svi!2s!4v1692064529873!5m2!1svi!2s"
                    height="297"
                    style={{ border: "0", width: "100%" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </Col>
              <Col xs={12} md={5}>
                <div className="header">
                  <div className="mark"></div>
                  <h3 className="header-title">Mega News Information</h3>
                </div>
                <div className="contact-infos">
                  <div className="contact-info">
                    {iconEmail}
                    Email : Management@mega.news
                  </div>
                  <div className="contact-info">
                    {iconPhone}
                    Phone Number : +1(234) 567-8910
                  </div>
                  <div className="contact-info">
                    {iconFax}
                    Fax : +1(234) 567-8910
                  </div>
                  <div className="contact-info">
                    {iconLocation}
                    Address : 1234 Foxrun St.New Lenox, IL 123456
                  </div>
                </div>
                <div className="response_title">
                  {iconClock}
                  Responding 24 hours a day, 7 days a week
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <div className="team_members">
            <Row>
              <Col xs={12}>
                <div className="header">
                  <div className="mark"></div>
                  <h3 className="header-title">Mega News Team</h3>
                </div>
                <Row className="mega_news_team">
                  <Col xs={6} md={4} lg={2}>
                    <div className="member">
                      <div
                        className="member-img"
                        style={{
                          background:
                            'url("/imgs/profile/profile-item_2.jpg") 50% 50% / cover',
                        }}
                      ></div>
                      <p>Designer</p>
                      <div className="member-name">Behzad Pashaei</div>
                    </div>
                  </Col>
                  <Col xs={6} md={4} lg={2}>
                    <div className="member">
                      <div
                        className="member-img"
                        style={{
                          background:
                            'url("/imgs/profile/profile-item_2.jpg") 50% 50% / cover',
                        }}
                      ></div>
                      <p>Designer</p>
                      <div className="member-name">Behzad Pashaei</div>
                    </div>
                  </Col>
                  <Col xs={6} md={4} lg={2}>
                    <div className="member">
                      <div
                        className="member-img"
                        style={{
                          background:
                            'url("/imgs/profile/profile-item_2.jpg") 50% 50% / cover',
                        }}
                      ></div>
                      <p>Designer</p>
                      <div className="member-name">Behzad Pashaei</div>
                    </div>
                  </Col>
                  <Col xs={6} md={4} lg={2}>
                    <div className="member">
                      <div
                        className="member-img"
                        style={{
                          background:
                            'url("/imgs/profile/profile-item_2.jpg") 50% 50% / cover',
                        }}
                      ></div>
                      <p>Designer</p>
                      <div className="member-name">Behzad Pashaei</div>
                    </div>
                  </Col>
                  <Col xs={6} md={4} lg={2}>
                    <div className="member">
                      <div
                        className="member-img"
                        style={{
                          background:
                            'url("/imgs/profile/profile-item_2.jpg") 50% 50% / cover',
                        }}
                      ></div>
                      <p>Designer</p>
                      <div className="member-name">Behzad Pashaei</div>
                    </div>
                  </Col>
                  <Col xs={6} md={4} lg={2}>
                    <div className="member">
                      <div
                        className="member-img"
                        style={{
                          background:
                            'url("/imgs/profile/profile-item_2.jpg") 50% 50% / cover',
                        }}
                      ></div>
                      <p>Designer</p>
                      <div className="member-name">Behzad Pashaei</div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};
export default AboutUs;
