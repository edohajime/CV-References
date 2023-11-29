import { Col, Container, Row } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { handleNext, handlePrev } from "../utilities/Utilities";
import "../../css/myslider.css";

const Reels = () => {
  const ops1 = {
    carousel: "reels-carousel",
    container: "reels-container",
    cellSelector: ".reels-container .reels-item",
    prevButton: "prev_button",
    nextButton: "next_button",
  };

  return (
    <div className="reels">
      <Container>
        <Row>
          <Col>
            <div className="my_list reels-carousel">
              <div className="my_slider">
                <div className="my_container reels-container">
                  <div className="my_cell reels-item">
                    <div
                      className="reels-media"
                      style={{
                        background:
                          'url("/imgs/reels/reels-item_1.jpg") 50% 50% / cover',
                      }}
                    ></div>
                    <div className="reels-create_button">
                      <div className="reels-create_button-body">
                        <img
                          src="/imgs/reels/create-reels-icon.jpg"
                          alt="create reels icon"
                        />
                        <svg
                          width="34"
                          height="34"
                          viewBox="0 0 34 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="16.52"
                            cy="17.3208"
                            r="15.3733"
                            stroke="url(#paint0_linear_2881_11389)"
                            strokeWidth="2.29338"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_2881_11389"
                              x1="33.04"
                              y1="17.3208"
                              x2="0"
                              y2="17.3208"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#7A4BFF" />
                              <stop offset="1" stopColor="#00E0E4" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <h5>Tạo Reels</h5>
                    </div>
                  </div>
                  <div className="my_cell reels-item">
                    <div
                      className="reels-media"
                      style={{
                        background:
                          'url("/imgs/reels/reels-item_2.jpg") 50% 50% / cover',
                      }}
                    ></div>
                    <div className="reels-author">
                      <div className="reels-author-avt">
                        <div className="reels-create_button-body">
                          <img
                            src="/imgs/topdoctors/topdoctors-item_1.jpg"
                            alt="doctor img"
                          />
                          <svg
                            width="34"
                            height="34"
                            viewBox="0 0 34 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="16.52"
                              cy="17.3208"
                              r="15.3733"
                              stroke="url(#paint0_linear_2881_11389)"
                              strokeWidth="2.29338"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_2881_11389"
                                x1="33.04"
                                y1="17.3208"
                                x2="0"
                                y2="17.3208"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#7A4BFF" />
                                <stop offset="1" stopColor="#00E0E4" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <h5 className="reels-author-name">
                        BSCK2. Vũ Nguyệt ánh
                      </h5>
                    </div>
                    <h5 className="reels-content">Bài thuốc chữa bệnh mát  ...</h5>
                  </div>
                  <div className="my_cell reels-item">
                    <div
                      className="reels-media"
                      style={{
                        background:
                          'url("/imgs/reels/reels-item_3.jpg") 50% 50% / cover',
                      }}
                    ></div>
                    <div className="reels-author">
                      <div className="reels-author-avt">
                        <div className="reels-create_button-body">
                          <img
                            src="/imgs/topdoctors/topdoctors-item_1.jpg"
                            alt="doctor img"
                          />
                          <svg
                            width="34"
                            height="34"
                            viewBox="0 0 34 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="16.52"
                              cy="17.3208"
                              r="15.3733"
                              stroke="url(#paint0_linear_2881_11389)"
                              strokeWidth="2.29338"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_2881_11389"
                                x1="33.04"
                                y1="17.3208"
                                x2="0"
                                y2="17.3208"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#7A4BFF" />
                                <stop offset="1" stopColor="#00E0E4" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <h5 className="reels-author-name">
                        BSCK2. Vũ Nguyệt ánh
                      </h5>
                    </div>
                    <h5 className="reels-content">Bài thuốc chữa bệnh mát  ...</h5>
                  </div>
                  <div className="my_cell reels-item">
                    <div
                      className="reels-media"
                      style={{
                        background:
                          'url("/imgs/reels/reels-item_4.jpg") 50% 50% / cover',
                      }}
                    ></div>
                    <div className="reels-author">
                      <div className="reels-author-avt">
                        <div className="reels-create_button-body">
                          <img
                            src="/imgs/topdoctors/topdoctors-item_1.jpg"
                            alt="doctor img"
                          />
                          <svg
                            width="34"
                            height="34"
                            viewBox="0 0 34 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="16.52"
                              cy="17.3208"
                              r="15.3733"
                              stroke="url(#paint0_linear_2881_11389)"
                              strokeWidth="2.29338"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_2881_11389"
                                x1="33.04"
                                y1="17.3208"
                                x2="0"
                                y2="17.3208"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#7A4BFF" />
                                <stop offset="1" stopColor="#00E0E4" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <h5 className="reels-author-name">
                        BSCK2. Vũ Nguyệt ánh
                      </h5>
                    </div>
                    <h5 className="reels-content">Bài thuốc chữa bệnh mát  ...</h5>
                  </div>
                  <div className="my_cell reels-item">
                    <div
                      className="reels-media"
                      style={{
                        background:
                          'url("/imgs/reels/reels-item_5.jpg") 50% 50% / cover',
                      }}
                    ></div>
                    <div className="reels-author">
                      <div className="reels-author-avt">
                        <div className="reels-create_button-body">
                          <img
                            src="/imgs/topdoctors/topdoctors-item_1.jpg"
                            alt="doctor img"
                          />
                          <svg
                            width="34"
                            height="34"
                            viewBox="0 0 34 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="16.52"
                              cy="17.3208"
                              r="15.3733"
                              stroke="url(#paint0_linear_2881_11389)"
                              strokeWidth="2.29338"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_2881_11389"
                                x1="33.04"
                                y1="17.3208"
                                x2="0"
                                y2="17.3208"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#7A4BFF" />
                                <stop offset="1" stopColor="#00E0E4" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <h5 className="reels-author-name">
                        BSCK2. Vũ Nguyệt ánh
                      </h5>
                    </div>
                    <h5 className="reels-content">Bài thuốc chữa bệnh mát  ...</h5>
                  </div>
                  <div className="my_cell reels-item">
                    <div
                      className="reels-media"
                      style={{
                        background:
                          'url("/imgs/reels/reels-item_6.jpg") 50% 50% / cover',
                      }}
                    ></div>
                    <div className="reels-author">
                      <div className="reels-author-avt">
                        <div className="reels-create_button-body">
                          <img
                            src="/imgs/topdoctors/topdoctors-item_1.jpg"
                            alt="doctor img"
                          />
                          <svg
                            width="34"
                            height="34"
                            viewBox="0 0 34 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="16.52"
                              cy="17.3208"
                              r="15.3733"
                              stroke="url(#paint0_linear_2881_11389)"
                              strokeWidth="2.29338"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_2881_11389"
                                x1="33.04"
                                y1="17.3208"
                                x2="0"
                                y2="17.3208"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#7A4BFF" />
                                <stop offset="1" stopColor="#00E0E4" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <h5 className="reels-author-name">
                        BSCK2. Vũ Nguyệt ánh
                      </h5>
                    </div>
                    <h5 className="reels-content">Bài thuốc chữa bệnh mát  ...</h5>
                  </div>
                  <div className="my_cell reels-item">
                    <div
                      className="reels-media"
                      style={{
                        background:
                          'url("/imgs/reels/reels-item_7.jpg") 50% 50% / cover',
                      }}
                    ></div>
                    <div className="reels-author">
                      <div className="reels-author-avt">
                        <div className="reels-create_button-body">
                          <img
                            src="/imgs/topdoctors/topdoctors-item_1.jpg"
                            alt="doctor img"
                          />
                          <svg
                            width="34"
                            height="34"
                            viewBox="0 0 34 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="16.52"
                              cy="17.3208"
                              r="15.3733"
                              stroke="url(#paint0_linear_2881_11389)"
                              strokeWidth="2.29338"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_2881_11389"
                                x1="33.04"
                                y1="17.3208"
                                x2="0"
                                y2="17.3208"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#7A4BFF" />
                                <stop offset="1" stopColor="#00E0E4" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <h5 className="reels-author-name">
                        BSCK2. Vũ Nguyệt ánh
                      </h5>
                    </div>
                    <h5 className="reels-content">Bài thuốc chữa bệnh mát  ...</h5>
                  </div>
                  <div className="my_cell reels-item">
                    <div
                      className="reels-media"
                      style={{
                        background:
                          'url("/imgs/reels/reels-item_8.jpg") 50% 50% / cover',
                      }}
                    ></div>
                    <div className="reels-author">
                      <div className="reels-author-avt">
                        <div className="reels-create_button-body">
                          <img
                            src="/imgs/topdoctors/topdoctors-item_1.jpg"
                            alt="doctor img"
                          />
                          <svg
                            width="34"
                            height="34"
                            viewBox="0 0 34 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="16.52"
                              cy="17.3208"
                              r="15.3733"
                              stroke="url(#paint0_linear_2881_11389)"
                              strokeWidth="2.29338"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_2881_11389"
                                x1="33.04"
                                y1="17.3208"
                                x2="0"
                                y2="17.3208"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#7A4BFF" />
                                <stop offset="1" stopColor="#00E0E4" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <h5 className="reels-author-name">
                        BSCK2. Vũ Nguyệt ánh
                      </h5>
                    </div>
                    <h5 className="reels-content">Bài thuốc chữa bệnh mát  ...</h5>
                  </div>
                  <div className="my_cell reels-item">
                    <div
                      className="reels-media"
                      style={{
                        background:
                          'url("/imgs/reels/reels-item_9.jpg") 50% 50% / cover',
                      }}
                    ></div>
                    <div className="reels-author">
                      <div className="reels-author-avt">
                        <div className="reels-create_button-body">
                          <img
                            src="/imgs/topdoctors/topdoctors-item_1.jpg"
                            alt="doctor img"
                          />
                          <svg
                            width="34"
                            height="34"
                            viewBox="0 0 34 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="16.52"
                              cy="17.3208"
                              r="15.3733"
                              stroke="url(#paint0_linear_2881_11389)"
                              strokeWidth="2.29338"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_2881_11389"
                                x1="33.04"
                                y1="17.3208"
                                x2="0"
                                y2="17.3208"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#7A4BFF" />
                                <stop offset="1" stopColor="#00E0E4" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <h5 className="reels-author-name">
                        BSCK2. Vũ Nguyệt ánh
                      </h5>
                    </div>
                    <h5 className="reels-content">Bài thuốc chữa bệnh mát  ...</h5>
                  </div>
                  <div className="my_cell reels-item">
                    <div
                      className="reels-media"
                      style={{
                        background:
                          'url("/imgs/reels/reels-item_2.jpg") 50% 50% / cover',
                      }}
                    ></div>
                    <div className="reels-author">
                      <div className="reels-author-avt">
                        <div className="reels-create_button-body">
                          <img
                            src="/imgs/topdoctors/topdoctors-item_1.jpg"
                            alt="doctor img"
                          />
                          <svg
                            width="34"
                            height="34"
                            viewBox="0 0 34 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="16.52"
                              cy="17.3208"
                              r="15.3733"
                              stroke="url(#paint0_linear_2881_11389)"
                              strokeWidth="2.29338"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_2881_11389"
                                x1="33.04"
                                y1="17.3208"
                                x2="0"
                                y2="17.3208"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#7A4BFF" />
                                <stop offset="1" stopColor="#00E0E4" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <h5 className="reels-author-name">
                        BSCK2. Vũ Nguyệt ánh
                      </h5>
                    </div>
                    <h5 className="reels-content">Bài thuốc chữa bệnh mát  ...</h5>
                  </div>
                  <div className="my_cell reels-item">
                    <div
                      className="reels-media"
                      style={{
                        background:
                          'url("/imgs/reels/reels-item_3.jpg") 50% 50% / cover',
                      }}
                    ></div>
                    <div className="reels-author">
                      <div className="reels-author-avt">
                        <div className="reels-create_button-body">
                          <img
                            src="/imgs/topdoctors/topdoctors-item_1.jpg"
                            alt="doctor img"
                          />
                          <svg
                            width="34"
                            height="34"
                            viewBox="0 0 34 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="16.52"
                              cy="17.3208"
                              r="15.3733"
                              stroke="url(#paint0_linear_2881_11389)"
                              strokeWidth="2.29338"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_2881_11389"
                                x1="33.04"
                                y1="17.3208"
                                x2="0"
                                y2="17.3208"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#7A4BFF" />
                                <stop offset="1" stopColor="#00E0E4" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <h5 className="reels-author-name">
                        BSCK2. Vũ Nguyệt ánh
                      </h5>
                    </div>
                    <h5 className="reels-content">Bài thuốc chữa bệnh mát  ...</h5>
                  </div>
                  <div className="my_cell reels-item">
                    <div
                      className="reels-media"
                      style={{
                        background:
                          'url("/imgs/reels/reels-item_4.jpg") 50% 50% / cover',
                      }}
                    ></div>
                    <div className="reels-author">
                      <div className="reels-author-avt">
                        <div className="reels-create_button-body">
                          <img
                            src="/imgs/topdoctors/topdoctors-item_1.jpg"
                            alt="doctor img"
                          />
                          <svg
                            width="34"
                            height="34"
                            viewBox="0 0 34 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="16.52"
                              cy="17.3208"
                              r="15.3733"
                              stroke="url(#paint0_linear_2881_11389)"
                              strokeWidth="2.29338"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_2881_11389"
                                x1="33.04"
                                y1="17.3208"
                                x2="0"
                                y2="17.3208"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#7A4BFF" />
                                <stop offset="1" stopColor="#00E0E4" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <h5 className="reels-author-name">
                        BSCK2. Vũ Nguyệt ánh
                      </h5>
                    </div>
                    <h5 className="reels-content">Bài thuốc chữa bệnh mát  ...</h5>
                  </div>
                </div>
              </div>
              <div
                className="prev_button disable"
                onClick={(e) => {
                  handlePrev(e.target, ops1);
                }}
              >
                <FaChevronLeft />
              </div>
              <div
                className="next_button"
                onClick={(e) => {
                  handleNext(e.target, ops1);
                }}
              >
                <FaChevronRight />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Reels;
