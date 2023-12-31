import { Col, Container, Row } from "react-bootstrap";
import { BsChevronRight } from "react-icons/bs";

const Achievements = () => {
  return (
    <div className="achievements">
      <Container>
        <div className="header">
          <div className="mark"></div>
          <h3 className="header-title">Vinh Danh Thành Tích Xuất Sắc Nhất</h3>
          <div className="showall">
            Xem Tất Cả
            <BsChevronRight />
          </div>
        </div>
        <Row>
          <Col xs={12} sm={6} lg={3} >
            <div className="achievements-item red">
              <div className="achievements-item-header">
                <div className="achievements-doctor">
                  <div
                    className="image"
                    style={{
                      background:
                        'url("/imgs/topdoctors/topdoctors-item_1.jpg") 50% 50% / cover',
                    }}
                  />
                </div>
                <h5>TS. Ngọc Minh Châu</h5>
              </div>
              <div className="achievements-item-body">
                <Row className="body">
                  <Col xs={6} className="achievements-item-info">
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3689 2.28426H11.6978V0.645264H10.0267V2.28426H5.01333V0.645264H3.34222V2.28426H1.67111C0.749493 2.28426 0 3.01936 0 3.92326V15.3963C0 16.3002 0.749493 17.0353 1.67111 17.0353H13.3689C14.2905 17.0353 15.04 16.3002 15.04 15.3963V3.92326C15.04 3.01936 14.2905 2.28426 13.3689 2.28426ZM9.53536 14.5768L7.48908 13.5212L5.44281 14.5768L5.83385 12.3412L4.17778 10.7595L6.46553 10.4334L7.48908 8.40101L8.51264 10.4334L10.8004 10.7595L9.14515 12.342L9.53536 14.5768ZM13.3689 6.38176H1.67111V4.74276H13.3689V6.38176Z"
                        fill="#B60B1F"
                      />
                    </svg>
                    <div className="info">
                      <p>Năm sinh</p>
                      <h5>1953</h5>
                    </div>
                  </Col>
                  <Col xs={6} className="achievements-item-info">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.1424 8.31777L12.9656 15.0462C12.8254 15.3059 12.6253 15.5282 12.365 15.713C12.1048 15.8979 11.8146 15.9953 11.4943 16.0053C11.2141 15.9953 10.9338 15.8929 10.6536 15.6981C10.3734 15.5033 10.1832 15.286 10.0831 15.0462L7.90625 8.31777C7.67605 7.73834 7.62851 7.27379 7.76363 6.92413C7.89874 6.57447 8.14645 6.39964 8.50676 6.39964H14.5419C14.9022 6.39964 15.1499 6.57447 15.285 6.92413C15.4202 7.27379 15.3726 7.73834 15.1424 8.31777ZM11.4493 16.0053H11.5393H11.4493ZM8.64187 3.52245C8.64187 2.72323 8.92462 2.0439 9.4901 1.48444C10.0556 0.924991 10.7362 0.645264 11.5318 0.645264C12.3275 0.645264 13.0056 0.924991 13.5661 1.48444C14.1266 2.0439 14.4068 2.72323 14.4068 3.52245C14.4068 4.32167 14.1266 5.00101 13.5661 5.56046C13.0056 6.11992 12.3275 6.39964 11.5318 6.39964C10.7362 6.39964 10.0556 6.11992 9.4901 5.56046C8.92462 5.00101 8.64187 4.32167 8.64187 3.52245ZM6.85535 16.0053H0.805194C0.454895 16.0053 0.212188 15.8304 0.0770728 15.4808C-0.0580425 15.1311 -0.0155062 14.6666 0.204682 14.0871L2.84693 6.21982C2.28646 6.01002 1.82857 5.66037 1.47326 5.17084C1.11796 4.68132 0.940309 4.13186 0.940309 3.52245C0.940309 2.72323 1.22305 2.0439 1.78853 1.48444C2.35401 0.924991 3.03459 0.645264 3.83027 0.645264C4.62595 0.645264 5.30653 0.924991 5.87201 1.48444C6.4375 2.0439 6.72024 2.72323 6.72024 3.52245C6.72024 4.14185 6.53758 4.6988 6.17227 5.19332C5.80696 5.68784 5.33906 6.035 4.76857 6.23481L7.45586 14.0871C7.68606 14.6666 7.7311 15.1311 7.59098 15.4808C7.45086 15.8304 7.20565 16.0053 6.85535 16.0053Z"
                        fill="#B60B1F"
                      />
                    </svg>
                    <div className="info">
                      <p>Giới tính</p>
                      <h5>Nam</h5>
                    </div>
                  </Col>
                  <Col xs={12} className="achievements-item-info">
                    <svg
                      width="22"
                      height="12"
                      viewBox="0 0 22 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8458 7.28917C8.50754 7.28917 6.52093 8.02873 5.22334 9.18793V11.344H16.4691V9.18793C15.1715 8.02873 13.1845 7.28917 10.8458 7.28917ZM21.1707 6.18266L10.8185 0.994019L0.470703 6.18266L2.19563 7.04124V8.36181C1.7631 8.45919 1.7618 8.70571 1.7618 8.9988C1.7618 9.17193 1.81457 9.3747 1.91492 9.49607L1.32322 10.8736H3.43396L2.84745 9.49513C2.94607 9.37376 3.02695 9.19498 3.02695 9.02186C3.02695 8.72923 2.62816 8.45872 2.62816 8.36134V7.26188L4.79081 8.31853V8.22491C6.0884 6.99749 8.36826 6.21842 10.8454 6.21842C13.3233 6.21842 15.604 6.99749 16.9016 8.22491V8.31853L21.1707 6.18266Z"
                        fill="#B60B1F"
                      />
                    </svg>
                    <div className="info">
                      <p>Trình độ học vấn</p>
                      <h5>Đại Học Y Hà Nội</h5>
                    </div>
                  </Col>
                  <Col xs={12} className="achievements-item-info">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.5588 3.59145H11.5387V2.00239C11.5387 1.12046 10.8668 0.41333 10.0287 0.41333H7.00875C6.1707 0.41333 5.49875 1.12046 5.49875 2.00239V3.59145H2.47875C1.6407 3.59145 0.9763 4.29859 0.9763 5.18052L0.96875 13.9204C0.96875 14.8023 1.6407 15.5094 2.47875 15.5094H14.5588C15.3968 15.5094 16.0688 14.8023 16.0688 13.9204V5.18052C16.0688 4.29859 15.3968 3.59145 14.5588 3.59145ZM10.0287 3.59145H7.00875V2.00239H10.0287V3.59145Z"
                        fill="#B60B1F"
                      />
                    </svg>
                    <div className="info">
                      <p>Chuyên ngành</p>
                      <h5>Chuyên khoa Nhi</h5>
                    </div>
                  </Col>
                  <Col xs={12} className="achievements-item-info">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.73742 6.8569C7.82778 6.8569 6.28106 8.40345 6.28106 10.3129C6.28106 12.2223 7.82778 13.7688 9.73742 13.7688C11.6471 13.7688 13.1938 12.2223 13.1938 10.3129C13.1938 8.40345 11.6471 6.8569 9.73742 6.8569ZM17.4624 9.44888C17.2667 7.69681 16.4809 6.06336 15.2342 4.81675C13.9874 3.57015 12.3538 2.78449 10.6015 2.58878V0.80896H8.87333V2.58878C7.12106 2.78449 5.48742 3.57015 4.24067 4.81675C2.99393 6.06336 2.20818 7.69681 2.01245 9.44888H0.232422V11.1769H2.01245C2.20818 12.9289 2.99393 14.5624 4.24067 15.809C5.48742 17.0556 7.12106 17.8412 8.87333 18.037V19.8168H10.6015V18.037C12.3538 17.8412 13.9874 17.0556 15.2342 15.809C16.4809 14.5624 17.2667 12.9289 17.4624 11.1769H19.2424V9.44888H17.4624ZM9.73742 16.3608C6.39339 16.3608 3.68879 13.6565 3.68879 10.3129C3.68879 6.96922 6.39339 4.26493 9.73742 4.26493C13.0815 4.26493 15.7861 6.96922 15.7861 10.3129C15.7861 13.6565 13.0815 16.3608 9.73742 16.3608Z"
                        fill="#B60B1F"
                      />
                    </svg>
                    <div className="info">
                      <p>Nơi làm việc</p>
                      <h5>Bệnh Viện Nhi TW, Phòng Khám Đa Khoa Trung Đức</h5>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3} >
            <div className="achievements-item yellow">
              <div className="achievements-item-header">
                <div className="achievements-doctor">
                  <div
                    className="image"
                    style={{
                      background:
                        'url("/imgs/topdoctors/topdoctors-item_1.jpg") 50% 50% / cover',
                    }}
                  />
                </div>
                <h5>TS. Đức Quang Vinh</h5>
              </div>
              <div className="achievements-item-body">
                <Row className="body">
                  <Col xs={6} className="achievements-item-info">
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3689 2.28426H11.6978V0.645264H10.0267V2.28426H5.01333V0.645264H3.34222V2.28426H1.67111C0.749493 2.28426 0 3.01936 0 3.92326V15.3963C0 16.3002 0.749493 17.0353 1.67111 17.0353H13.3689C14.2905 17.0353 15.04 16.3002 15.04 15.3963V3.92326C15.04 3.01936 14.2905 2.28426 13.3689 2.28426ZM9.53536 14.5768L7.48908 13.5212L5.44281 14.5768L5.83385 12.3412L4.17778 10.7595L6.46553 10.4334L7.48908 8.40101L8.51264 10.4334L10.8004 10.7595L9.14515 12.342L9.53536 14.5768ZM13.3689 6.38176H1.67111V4.74276H13.3689V6.38176Z"
                        fill="#B60B1F"
                      />
                    </svg>
                    <div className="info">
                      <p>Năm sinh</p>
                      <h5>1953</h5>
                    </div>
                  </Col>
                  <Col xs={6} className="achievements-item-info">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.1424 8.31777L12.9656 15.0462C12.8254 15.3059 12.6253 15.5282 12.365 15.713C12.1048 15.8979 11.8146 15.9953 11.4943 16.0053C11.2141 15.9953 10.9338 15.8929 10.6536 15.6981C10.3734 15.5033 10.1832 15.286 10.0831 15.0462L7.90625 8.31777C7.67605 7.73834 7.62851 7.27379 7.76363 6.92413C7.89874 6.57447 8.14645 6.39964 8.50676 6.39964H14.5419C14.9022 6.39964 15.1499 6.57447 15.285 6.92413C15.4202 7.27379 15.3726 7.73834 15.1424 8.31777ZM11.4493 16.0053H11.5393H11.4493ZM8.64187 3.52245C8.64187 2.72323 8.92462 2.0439 9.4901 1.48444C10.0556 0.924991 10.7362 0.645264 11.5318 0.645264C12.3275 0.645264 13.0056 0.924991 13.5661 1.48444C14.1266 2.0439 14.4068 2.72323 14.4068 3.52245C14.4068 4.32167 14.1266 5.00101 13.5661 5.56046C13.0056 6.11992 12.3275 6.39964 11.5318 6.39964C10.7362 6.39964 10.0556 6.11992 9.4901 5.56046C8.92462 5.00101 8.64187 4.32167 8.64187 3.52245ZM6.85535 16.0053H0.805194C0.454895 16.0053 0.212188 15.8304 0.0770728 15.4808C-0.0580425 15.1311 -0.0155062 14.6666 0.204682 14.0871L2.84693 6.21982C2.28646 6.01002 1.82857 5.66037 1.47326 5.17084C1.11796 4.68132 0.940309 4.13186 0.940309 3.52245C0.940309 2.72323 1.22305 2.0439 1.78853 1.48444C2.35401 0.924991 3.03459 0.645264 3.83027 0.645264C4.62595 0.645264 5.30653 0.924991 5.87201 1.48444C6.4375 2.0439 6.72024 2.72323 6.72024 3.52245C6.72024 4.14185 6.53758 4.6988 6.17227 5.19332C5.80696 5.68784 5.33906 6.035 4.76857 6.23481L7.45586 14.0871C7.68606 14.6666 7.7311 15.1311 7.59098 15.4808C7.45086 15.8304 7.20565 16.0053 6.85535 16.0053Z"
                        fill="#B60B1F"
                      />
                    </svg>
                    <div className="info">
                      <p>Giới tính</p>
                      <h5>Nam</h5>
                    </div>
                  </Col>
                  <Col xs={12} className="achievements-item-info">
                    <svg
                      width="22"
                      height="12"
                      viewBox="0 0 22 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8458 7.28917C8.50754 7.28917 6.52093 8.02873 5.22334 9.18793V11.344H16.4691V9.18793C15.1715 8.02873 13.1845 7.28917 10.8458 7.28917ZM21.1707 6.18266L10.8185 0.994019L0.470703 6.18266L2.19563 7.04124V8.36181C1.7631 8.45919 1.7618 8.70571 1.7618 8.9988C1.7618 9.17193 1.81457 9.3747 1.91492 9.49607L1.32322 10.8736H3.43396L2.84745 9.49513C2.94607 9.37376 3.02695 9.19498 3.02695 9.02186C3.02695 8.72923 2.62816 8.45872 2.62816 8.36134V7.26188L4.79081 8.31853V8.22491C6.0884 6.99749 8.36826 6.21842 10.8454 6.21842C13.3233 6.21842 15.604 6.99749 16.9016 8.22491V8.31853L21.1707 6.18266Z"
                        fill="#B60B1F"
                      />
                    </svg>
                    <div className="info">
                      <p>Trình độ học vấn</p>
                      <h5>Đại Học Y Hà Nội</h5>
                    </div>
                  </Col>
                  <Col xs={12} className="achievements-item-info">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.5588 3.59145H11.5387V2.00239C11.5387 1.12046 10.8668 0.41333 10.0287 0.41333H7.00875C6.1707 0.41333 5.49875 1.12046 5.49875 2.00239V3.59145H2.47875C1.6407 3.59145 0.9763 4.29859 0.9763 5.18052L0.96875 13.9204C0.96875 14.8023 1.6407 15.5094 2.47875 15.5094H14.5588C15.3968 15.5094 16.0688 14.8023 16.0688 13.9204V5.18052C16.0688 4.29859 15.3968 3.59145 14.5588 3.59145ZM10.0287 3.59145H7.00875V2.00239H10.0287V3.59145Z"
                        fill="#B60B1F"
                      />
                    </svg>
                    <div className="info">
                      <p>Chuyên ngành</p>
                      <h5>Chuyên khoa Nhi</h5>
                    </div>
                  </Col>
                  <Col xs={12} className="achievements-item-info">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.73742 6.8569C7.82778 6.8569 6.28106 8.40345 6.28106 10.3129C6.28106 12.2223 7.82778 13.7688 9.73742 13.7688C11.6471 13.7688 13.1938 12.2223 13.1938 10.3129C13.1938 8.40345 11.6471 6.8569 9.73742 6.8569ZM17.4624 9.44888C17.2667 7.69681 16.4809 6.06336 15.2342 4.81675C13.9874 3.57015 12.3538 2.78449 10.6015 2.58878V0.80896H8.87333V2.58878C7.12106 2.78449 5.48742 3.57015 4.24067 4.81675C2.99393 6.06336 2.20818 7.69681 2.01245 9.44888H0.232422V11.1769H2.01245C2.20818 12.9289 2.99393 14.5624 4.24067 15.809C5.48742 17.0556 7.12106 17.8412 8.87333 18.037V19.8168H10.6015V18.037C12.3538 17.8412 13.9874 17.0556 15.2342 15.809C16.4809 14.5624 17.2667 12.9289 17.4624 11.1769H19.2424V9.44888H17.4624ZM9.73742 16.3608C6.39339 16.3608 3.68879 13.6565 3.68879 10.3129C3.68879 6.96922 6.39339 4.26493 9.73742 4.26493C13.0815 4.26493 15.7861 6.96922 15.7861 10.3129C15.7861 13.6565 13.0815 16.3608 9.73742 16.3608Z"
                        fill="#B60B1F"
                      />
                    </svg>
                    <div className="info">
                      <p>Nơi làm việc</p>
                      <h5>Bệnh Viện Nhi TW, Phòng Khám Đa Khoa Trung Đức</h5>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3} >
            <div className="achievements-item blue">
              <div className="achievements-item-header">
                <div className="achievements-doctor">
                  <div
                    className="image"
                    style={{
                      background:
                        'url("/imgs/topdoctors/topdoctors-item_1.jpg") 50% 50% / cover',
                    }}
                  />
                </div>
                <h5>TS. Lê Đăng Khôi</h5>
              </div>
              <div className="achievements-item-body">
                <Row className="body">
                  <Col xs={6} className="achievements-item-info">
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3689 2.28426H11.6978V0.645264H10.0267V2.28426H5.01333V0.645264H3.34222V2.28426H1.67111C0.749493 2.28426 0 3.01936 0 3.92326V15.3963C0 16.3002 0.749493 17.0353 1.67111 17.0353H13.3689C14.2905 17.0353 15.04 16.3002 15.04 15.3963V3.92326C15.04 3.01936 14.2905 2.28426 13.3689 2.28426ZM9.53536 14.5768L7.48908 13.5212L5.44281 14.5768L5.83385 12.3412L4.17778 10.7595L6.46553 10.4334L7.48908 8.40101L8.51264 10.4334L10.8004 10.7595L9.14515 12.342L9.53536 14.5768ZM13.3689 6.38176H1.67111V4.74276H13.3689V6.38176Z"
                        fill="#B60B1F"
                      />
                    </svg>
                    <div className="info">
                      <p>Năm sinh</p>
                      <h5>1953</h5>
                    </div>
                  </Col>
                  <Col xs={6} className="achievements-item-info">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.1424 8.31777L12.9656 15.0462C12.8254 15.3059 12.6253 15.5282 12.365 15.713C12.1048 15.8979 11.8146 15.9953 11.4943 16.0053C11.2141 15.9953 10.9338 15.8929 10.6536 15.6981C10.3734 15.5033 10.1832 15.286 10.0831 15.0462L7.90625 8.31777C7.67605 7.73834 7.62851 7.27379 7.76363 6.92413C7.89874 6.57447 8.14645 6.39964 8.50676 6.39964H14.5419C14.9022 6.39964 15.1499 6.57447 15.285 6.92413C15.4202 7.27379 15.3726 7.73834 15.1424 8.31777ZM11.4493 16.0053H11.5393H11.4493ZM8.64187 3.52245C8.64187 2.72323 8.92462 2.0439 9.4901 1.48444C10.0556 0.924991 10.7362 0.645264 11.5318 0.645264C12.3275 0.645264 13.0056 0.924991 13.5661 1.48444C14.1266 2.0439 14.4068 2.72323 14.4068 3.52245C14.4068 4.32167 14.1266 5.00101 13.5661 5.56046C13.0056 6.11992 12.3275 6.39964 11.5318 6.39964C10.7362 6.39964 10.0556 6.11992 9.4901 5.56046C8.92462 5.00101 8.64187 4.32167 8.64187 3.52245ZM6.85535 16.0053H0.805194C0.454895 16.0053 0.212188 15.8304 0.0770728 15.4808C-0.0580425 15.1311 -0.0155062 14.6666 0.204682 14.0871L2.84693 6.21982C2.28646 6.01002 1.82857 5.66037 1.47326 5.17084C1.11796 4.68132 0.940309 4.13186 0.940309 3.52245C0.940309 2.72323 1.22305 2.0439 1.78853 1.48444C2.35401 0.924991 3.03459 0.645264 3.83027 0.645264C4.62595 0.645264 5.30653 0.924991 5.87201 1.48444C6.4375 2.0439 6.72024 2.72323 6.72024 3.52245C6.72024 4.14185 6.53758 4.6988 6.17227 5.19332C5.80696 5.68784 5.33906 6.035 4.76857 6.23481L7.45586 14.0871C7.68606 14.6666 7.7311 15.1311 7.59098 15.4808C7.45086 15.8304 7.20565 16.0053 6.85535 16.0053Z"
                        fill="#B60B1F"
                      />
                    </svg>
                    <div className="info">
                      <p>Giới tính</p>
                      <h5>Nam</h5>
                    </div>
                  </Col>
                  <Col xs={12} className="achievements-item-info">
                    <svg
                      width="22"
                      height="12"
                      viewBox="0 0 22 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8458 7.28917C8.50754 7.28917 6.52093 8.02873 5.22334 9.18793V11.344H16.4691V9.18793C15.1715 8.02873 13.1845 7.28917 10.8458 7.28917ZM21.1707 6.18266L10.8185 0.994019L0.470703 6.18266L2.19563 7.04124V8.36181C1.7631 8.45919 1.7618 8.70571 1.7618 8.9988C1.7618 9.17193 1.81457 9.3747 1.91492 9.49607L1.32322 10.8736H3.43396L2.84745 9.49513C2.94607 9.37376 3.02695 9.19498 3.02695 9.02186C3.02695 8.72923 2.62816 8.45872 2.62816 8.36134V7.26188L4.79081 8.31853V8.22491C6.0884 6.99749 8.36826 6.21842 10.8454 6.21842C13.3233 6.21842 15.604 6.99749 16.9016 8.22491V8.31853L21.1707 6.18266Z"
                        fill="#B60B1F"
                      />
                    </svg>
                    <div className="info">
                      <p>Trình độ học vấn</p>
                      <h5>Đại Học Y Hà Nội</h5>
                    </div>
                  </Col>
                  <Col xs={12} className="achievements-item-info">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.5588 3.59145H11.5387V2.00239C11.5387 1.12046 10.8668 0.41333 10.0287 0.41333H7.00875C6.1707 0.41333 5.49875 1.12046 5.49875 2.00239V3.59145H2.47875C1.6407 3.59145 0.9763 4.29859 0.9763 5.18052L0.96875 13.9204C0.96875 14.8023 1.6407 15.5094 2.47875 15.5094H14.5588C15.3968 15.5094 16.0688 14.8023 16.0688 13.9204V5.18052C16.0688 4.29859 15.3968 3.59145 14.5588 3.59145ZM10.0287 3.59145H7.00875V2.00239H10.0287V3.59145Z"
                        fill="#B60B1F"
                      />
                    </svg>
                    <div className="info">
                      <p>Chuyên ngành</p>
                      <h5>Chuyên khoa Nhi</h5>
                    </div>
                  </Col>
                  <Col xs={12} className="achievements-item-info">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.73742 6.8569C7.82778 6.8569 6.28106 8.40345 6.28106 10.3129C6.28106 12.2223 7.82778 13.7688 9.73742 13.7688C11.6471 13.7688 13.1938 12.2223 13.1938 10.3129C13.1938 8.40345 11.6471 6.8569 9.73742 6.8569ZM17.4624 9.44888C17.2667 7.69681 16.4809 6.06336 15.2342 4.81675C13.9874 3.57015 12.3538 2.78449 10.6015 2.58878V0.80896H8.87333V2.58878C7.12106 2.78449 5.48742 3.57015 4.24067 4.81675C2.99393 6.06336 2.20818 7.69681 2.01245 9.44888H0.232422V11.1769H2.01245C2.20818 12.9289 2.99393 14.5624 4.24067 15.809C5.48742 17.0556 7.12106 17.8412 8.87333 18.037V19.8168H10.6015V18.037C12.3538 17.8412 13.9874 17.0556 15.2342 15.809C16.4809 14.5624 17.2667 12.9289 17.4624 11.1769H19.2424V9.44888H17.4624ZM9.73742 16.3608C6.39339 16.3608 3.68879 13.6565 3.68879 10.3129C3.68879 6.96922 6.39339 4.26493 9.73742 4.26493C13.0815 4.26493 15.7861 6.96922 15.7861 10.3129C15.7861 13.6565 13.0815 16.3608 9.73742 16.3608Z"
                        fill="#B60B1F"
                      />
                    </svg>
                    <div className="info">
                      <p>Nơi làm việc</p>
                      <h5>Bệnh Viện Nhi TW, Phòng Khám Đa Khoa Trung Đức</h5>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3} >
            <div className="achievements-item green">
              <div className="achievements-item-header">
                <div className="achievements-doctor">
                  <div
                    className="image"
                    style={{
                      background:
                        'url("/imgs/topdoctors/topdoctors-item_1.jpg") 50% 50% / cover',
                    }}
                  />
                </div>
                <h5>TS. Trần Đăng Khoa</h5>
              </div>
              <div className="achievements-item-body">
                <Row className="body">
                  <Col xs={6} className="achievements-item-info">
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3689 2.28426H11.6978V0.645264H10.0267V2.28426H5.01333V0.645264H3.34222V2.28426H1.67111C0.749493 2.28426 0 3.01936 0 3.92326V15.3963C0 16.3002 0.749493 17.0353 1.67111 17.0353H13.3689C14.2905 17.0353 15.04 16.3002 15.04 15.3963V3.92326C15.04 3.01936 14.2905 2.28426 13.3689 2.28426ZM9.53536 14.5768L7.48908 13.5212L5.44281 14.5768L5.83385 12.3412L4.17778 10.7595L6.46553 10.4334L7.48908 8.40101L8.51264 10.4334L10.8004 10.7595L9.14515 12.342L9.53536 14.5768ZM13.3689 6.38176H1.67111V4.74276H13.3689V6.38176Z"
                        fill="#B60B1F"
                      />
                    </svg>
                    <div className="info">
                      <p>Năm sinh</p>
                      <h5>1953</h5>
                    </div>
                  </Col>
                  <Col xs={6} className="achievements-item-info">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.1424 8.31777L12.9656 15.0462C12.8254 15.3059 12.6253 15.5282 12.365 15.713C12.1048 15.8979 11.8146 15.9953 11.4943 16.0053C11.2141 15.9953 10.9338 15.8929 10.6536 15.6981C10.3734 15.5033 10.1832 15.286 10.0831 15.0462L7.90625 8.31777C7.67605 7.73834 7.62851 7.27379 7.76363 6.92413C7.89874 6.57447 8.14645 6.39964 8.50676 6.39964H14.5419C14.9022 6.39964 15.1499 6.57447 15.285 6.92413C15.4202 7.27379 15.3726 7.73834 15.1424 8.31777ZM11.4493 16.0053H11.5393H11.4493ZM8.64187 3.52245C8.64187 2.72323 8.92462 2.0439 9.4901 1.48444C10.0556 0.924991 10.7362 0.645264 11.5318 0.645264C12.3275 0.645264 13.0056 0.924991 13.5661 1.48444C14.1266 2.0439 14.4068 2.72323 14.4068 3.52245C14.4068 4.32167 14.1266 5.00101 13.5661 5.56046C13.0056 6.11992 12.3275 6.39964 11.5318 6.39964C10.7362 6.39964 10.0556 6.11992 9.4901 5.56046C8.92462 5.00101 8.64187 4.32167 8.64187 3.52245ZM6.85535 16.0053H0.805194C0.454895 16.0053 0.212188 15.8304 0.0770728 15.4808C-0.0580425 15.1311 -0.0155062 14.6666 0.204682 14.0871L2.84693 6.21982C2.28646 6.01002 1.82857 5.66037 1.47326 5.17084C1.11796 4.68132 0.940309 4.13186 0.940309 3.52245C0.940309 2.72323 1.22305 2.0439 1.78853 1.48444C2.35401 0.924991 3.03459 0.645264 3.83027 0.645264C4.62595 0.645264 5.30653 0.924991 5.87201 1.48444C6.4375 2.0439 6.72024 2.72323 6.72024 3.52245C6.72024 4.14185 6.53758 4.6988 6.17227 5.19332C5.80696 5.68784 5.33906 6.035 4.76857 6.23481L7.45586 14.0871C7.68606 14.6666 7.7311 15.1311 7.59098 15.4808C7.45086 15.8304 7.20565 16.0053 6.85535 16.0053Z"
                        fill="#B60B1F"
                      />
                    </svg>
                    <div className="info">
                      <p>Giới tính</p>
                      <h5>Nam</h5>
                    </div>
                  </Col>
                  <Col xs={12} className="achievements-item-info">
                    <svg
                      width="22"
                      height="12"
                      viewBox="0 0 22 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8458 7.28917C8.50754 7.28917 6.52093 8.02873 5.22334 9.18793V11.344H16.4691V9.18793C15.1715 8.02873 13.1845 7.28917 10.8458 7.28917ZM21.1707 6.18266L10.8185 0.994019L0.470703 6.18266L2.19563 7.04124V8.36181C1.7631 8.45919 1.7618 8.70571 1.7618 8.9988C1.7618 9.17193 1.81457 9.3747 1.91492 9.49607L1.32322 10.8736H3.43396L2.84745 9.49513C2.94607 9.37376 3.02695 9.19498 3.02695 9.02186C3.02695 8.72923 2.62816 8.45872 2.62816 8.36134V7.26188L4.79081 8.31853V8.22491C6.0884 6.99749 8.36826 6.21842 10.8454 6.21842C13.3233 6.21842 15.604 6.99749 16.9016 8.22491V8.31853L21.1707 6.18266Z"
                        fill="#B60B1F"
                      />
                    </svg>
                    <div className="info">
                      <p>Trình độ học vấn</p>
                      <h5>Đại Học Y Hà Nội</h5>
                    </div>
                  </Col>
                  <Col xs={12} className="achievements-item-info">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.5588 3.59145H11.5387V2.00239C11.5387 1.12046 10.8668 0.41333 10.0287 0.41333H7.00875C6.1707 0.41333 5.49875 1.12046 5.49875 2.00239V3.59145H2.47875C1.6407 3.59145 0.9763 4.29859 0.9763 5.18052L0.96875 13.9204C0.96875 14.8023 1.6407 15.5094 2.47875 15.5094H14.5588C15.3968 15.5094 16.0688 14.8023 16.0688 13.9204V5.18052C16.0688 4.29859 15.3968 3.59145 14.5588 3.59145ZM10.0287 3.59145H7.00875V2.00239H10.0287V3.59145Z"
                        fill="#B60B1F"
                      />
                    </svg>
                    <div className="info">
                      <p>Chuyên ngành</p>
                      <h5>Chuyên khoa Nhi</h5>
                    </div>
                  </Col>
                  <Col xs={12} className="achievements-item-info">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.73742 6.8569C7.82778 6.8569 6.28106 8.40345 6.28106 10.3129C6.28106 12.2223 7.82778 13.7688 9.73742 13.7688C11.6471 13.7688 13.1938 12.2223 13.1938 10.3129C13.1938 8.40345 11.6471 6.8569 9.73742 6.8569ZM17.4624 9.44888C17.2667 7.69681 16.4809 6.06336 15.2342 4.81675C13.9874 3.57015 12.3538 2.78449 10.6015 2.58878V0.80896H8.87333V2.58878C7.12106 2.78449 5.48742 3.57015 4.24067 4.81675C2.99393 6.06336 2.20818 7.69681 2.01245 9.44888H0.232422V11.1769H2.01245C2.20818 12.9289 2.99393 14.5624 4.24067 15.809C5.48742 17.0556 7.12106 17.8412 8.87333 18.037V19.8168H10.6015V18.037C12.3538 17.8412 13.9874 17.0556 15.2342 15.809C16.4809 14.5624 17.2667 12.9289 17.4624 11.1769H19.2424V9.44888H17.4624ZM9.73742 16.3608C6.39339 16.3608 3.68879 13.6565 3.68879 10.3129C3.68879 6.96922 6.39339 4.26493 9.73742 4.26493C13.0815 4.26493 15.7861 6.96922 15.7861 10.3129C15.7861 13.6565 13.0815 16.3608 9.73742 16.3608Z"
                        fill="#B60B1F"
                      />
                    </svg>
                    <div className="info">
                      <p>Nơi làm việc</p>
                      <h5>Bệnh Viện Nhi TW, Phòng Khám Đa Khoa Trung Đức</h5>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Achievements;
