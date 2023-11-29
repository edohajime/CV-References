import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { handleProfileHeader } from "./Profile";

export const ProfileHeader = ({ ...props }) => {
  return (
    <Row>
      <Col>
        <div className="profile-body">
          <div
            className="profile-banner"
            style={{
              background: `url("${props.banner}") 50% 50% / cover`, //
            }}
          ></div>
          <div className="profile-detail">
            <div className="profile-account">
              <div
                className="profile-avt"
                style={{
                  background: `url("${props.avt}") 50% 50% / cover`, //
                }}
              ></div>
            </div>
            <div className="d-flex align-items-center justify-content-between author_detail">
              <div className="d-flex align-items-center justify-content-between profile-author_detail">
                <h5 className="author_name">
                  {props.author}
                  <Link to="/update-profile">
                    <div className="profile-update mobile">
                      <svg
                        width="18"
                        height="15"
                        viewBox="0 0 18 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.34766 7.75C4.43359 7.75 2.875 6.19141 2.875 4.25C2.875 2.33594 4.43359 0.75 6.34766 0.75C8.26172 0.75 9.84766 2.33594 9.84766 4.25C9.84766 6.19141 8.26172 7.75 6.34766 7.75ZM7.74219 9.0625C9.02734 9.0625 10.1758 9.58203 11.0234 10.4023L9.76562 11.6328C9.57422 11.8242 9.46484 12.0703 9.41016 12.3438L9 14.2852C8.97266 14.4492 8.97266 14.6133 9.02734 14.75H1.17969C0.660156 14.75 0.25 14.3398 0.25 13.8203C0.25 11.1953 2.35547 9.0625 4.98047 9.0625H7.74219ZM10.3945 12.2617L13.8125 8.84375L15.7812 10.8125L12.3633 14.2305C12.2812 14.3125 12.1992 14.3398 12.1172 14.3672L10.1484 14.75C9.98438 14.8047 9.82031 14.6406 9.875 14.4766L10.2578 12.5078C10.2852 12.4258 10.3125 12.3438 10.3945 12.2617ZM17.4492 7.75C17.832 8.13281 17.832 8.76172 17.4492 9.14453L16.4102 10.1836L14.4414 8.21484L15.4805 7.17578C15.8633 6.79297 16.4922 6.79297 16.875 7.17578L17.4492 7.75Z"
                          fill="#F81539"
                          fillOpacity="0.75"
                        />
                      </svg>
                      <p>Sửa Hồ Sơ</p>
                    </div>
                  </Link>
                </h5>
                <div className="profile-activities">
                  <h5
                    className="activities active"
                    onClick={(e) => handleProfileHeader(e.target, 1)}
                  >
                    Bài Viết
                  </h5>
                  <h5
                    className="activities"
                    onClick={(e) => handleProfileHeader(e.target, 2)}
                  >
                    Viết Bài
                  </h5>
                  <h5
                    className="activities"
                    onClick={(e) => handleProfileHeader(e.target, 3)}
                  >
                    Thống Kê
                  </h5>
                </div>
              </div>
              <Link to="/update-profile">
                <div className="profile-update">
                  <svg
                    width="18"
                    height="15"
                    viewBox="0 0 18 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.34766 7.75C4.43359 7.75 2.875 6.19141 2.875 4.25C2.875 2.33594 4.43359 0.75 6.34766 0.75C8.26172 0.75 9.84766 2.33594 9.84766 4.25C9.84766 6.19141 8.26172 7.75 6.34766 7.75ZM7.74219 9.0625C9.02734 9.0625 10.1758 9.58203 11.0234 10.4023L9.76562 11.6328C9.57422 11.8242 9.46484 12.0703 9.41016 12.3438L9 14.2852C8.97266 14.4492 8.97266 14.6133 9.02734 14.75H1.17969C0.660156 14.75 0.25 14.3398 0.25 13.8203C0.25 11.1953 2.35547 9.0625 4.98047 9.0625H7.74219ZM10.3945 12.2617L13.8125 8.84375L15.7812 10.8125L12.3633 14.2305C12.2812 14.3125 12.1992 14.3398 12.1172 14.3672L10.1484 14.75C9.98438 14.8047 9.82031 14.6406 9.875 14.4766L10.2578 12.5078C10.2852 12.4258 10.3125 12.3438 10.3945 12.2617ZM17.4492 7.75C17.832 8.13281 17.832 8.76172 17.4492 9.14453L16.4102 10.1836L14.4414 8.21484L15.4805 7.17578C15.8633 6.79297 16.4922 6.79297 16.875 7.17578L17.4492 7.75Z"
                      fill="#F81539"
                      fillOpacity="0.75"
                    />
                  </svg>
                  <p>Sửa Hồ Sơ</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};
