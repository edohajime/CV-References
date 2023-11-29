import { Link } from "react-router-dom";
import BlogCarousel from "./BlogCarousel";
import React from "react";
// import BlogCommentsCarousel from "./BlogCommentsCarousel";

export default class Blog extends React.Component {
  render() {
    return (
      <div
        className="blog"
        style={{
          backgroundImage: "url(../images/BlogBg.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="blog-bg"></div>
        <div className="container">
          <div className="blog-recommend">
            <div className="row">
              <div className="col-12">
                <h1>BA ĐIỀU THÚ VỊ BẠN CÓ THỂ CHƯA BIẾT</h1>
                <p>Luôn luôn lắng nghe, luôn luôn thấu hiểu</p>
              </div>
            </div>
            <div className="row hidden-xs">
              <div className="col-md-4">
                <Link to="/detail">
                  <div className="blog-item">
                    <img
                      src="./images/Blog_EinsteinFingerprint.jpg"
                      alt="Einstein"
                    ></img>
                    <div className="blog-content">
                      <h5>
                        Dấu vân tay của Albert Einstein - Nhà vật lý số 1 thế kỷ
                        XX
                      </h5>
                      <p>
                        "Albert Einstein - người đã phát triển ra thuyết tương
                        đối tổng quát và được trao giải Nobel Vật lý năm 1921
                        ...
                      </p>
                      <div className="blog-expanded">
                        XEM THÊM &nbsp;
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-4 hidden-xs">
                <Link to="/detail">
                  <div className="blog-item">
                    <img
                      src="./images/Blog_GandhiFingerprint.jpg"
                      alt="Gandhi"
                    ></img>
                    <div className="blog-content">
                      <h5>
                        NHỮNG BÍ ẨN THÚ VỊ VỀ DẤU VÂN TAY mà bạn chưa từng biết
                      </h5>
                      <p>
                        Dù rằng vân tay cũng có một số lượng chủng vân tay, loại
                        và nhóm vân tay nhất định. Tuy nhiên, chúng lại ...
                      </p>
                      <div className="blog-expanded">
                        XEM THÊM &nbsp;
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-4 hidden-xs">
                <Link to="/detail">
                  <div className="blog-item">
                    <img
                      src="./images/Blog_DisneyFingerprint.jpg"
                      alt="Disney"
                    ></img>
                    <div className="blog-content">
                      <h5>
                        CHỦNG VÂN TAY CỦA WALTER ELIAS DISNEY - THIÊN BẨM CỦA SỰ
                        SÁNG TẠO TUYỆT VỜI
                      </h5>
                      <p>
                        Walter Elias Disney là một doanh nhân, nhà làm phim hoạt
                        hình, nhà văn, diễn viên lồng tiếng và nhà sản...
                      </p>
                      <div className="blog-expanded">
                        XEM THÊM &nbsp;
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="row block-xs">
              <BlogCarousel />
            </div>
          </div>
          <div className="blog-category">
            <div className="row">
              <div className="col-12">
                <h1>NIỀM TIN VÀ GIÁ TRỊ</h1>
                <p>Luôn luôn lắng nghe, luôn luôn thấu hiểu</p>
              </div>
            </div>
            <div className="row blog-banner">
              <div className="col-12 ">
                <img
                  src="./images/BlogBanner.jpg"
                  alt="Chỉ cần có niềm tin"
                ></img>
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-md-3">
                <div className="blog-item">
                  <img src="./images/Blog_1.jpg" alt="Blog 1"></img>
                  <div className="blog-content">
                    <h5>Tiêu đề nội dung 1</h5>
                    <p>Mô tả nội dung câu chuyện 1</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="blog-item">
                  <img src="./images/Blog_2.jpg" alt="Blog 2"></img>
                  <div className="blog-content">
                    <h5>Tiêu đề nội dung 1</h5>
                    <p>Mô tả nội dung câu chuyện 1</p>
                  </div>
                </div>
              </div>
              <div className="col-3 hidden-xs">
                <div className="blog-item">
                  <img src="./images/Blog_3.jpg" alt="Blog 3"></img>
                  <div className="blog-content">
                    <h5>Tiêu đề nội dung 1</h5>
                    <p>Mô tả nội dung câu chuyện 1</p>
                  </div>
                </div>
              </div>
              <div className="col-3 hidden-xs">
                <div className="blog-item">
                  <img src="./images/Blog_4.jpg" alt="Blog 4"></img>
                  <div className="blog-content">
                    <h5>Tiêu đề nội dung 1</h5>
                    <p>Mô tả nội dung câu chuyện 1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-comments">
            <div className="row">
              <div className="col-12">
                <h1>ĐÁNH GIÁ VÀ PHẢN HỒI</h1>
                <p>Luôn luôn lắng nghe, luôn luôn thấu hiểu</p>
              </div>
            </div>
            <div className="row hidden-xs">
              <div className="col-md-4">
                <div className="blog-comment-item">
                  <div className="row rate">
                    <div className="col-6">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star no-rate"></i>
                      <i className="fa-solid fa-star no-rate"></i>
                    </div>
                    <div className="col-6">
                      <div className="rate-date">24/09/2022</div>
                    </div>
                  </div>
                  <div className="row comment">
                    <div className="col-12">
                      <h3>COMBO SINH TRẮC VÂN TAY</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Amet orci viverra mauris ligula in leo, pellentesque
                        massa dignissim.
                      </p>
                      <hr />
                    </div>
                  </div>
                  <div className="row author">
                    <div className="col-3">
                      <img
                        src="./images/Comment_User1.jpg"
                        alt="Nguyễn Cường Phong"
                      ></img>
                    </div>
                    <div className="col-9">
                      <h2>Nguyễn Cường Phong</h2>
                      <p>0******831</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 hidden-xs">
                <div className="blog-comment-item">
                  <div className="row rate">
                    <div className="col-6">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="col-6">
                      <div className="rate-date">03/12/2022</div>
                    </div>
                  </div>
                  <div className="row comment">
                    <div className="col-12">
                      <h3>COMBO SINH TRẮC VÂN TAY</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ullamcorper tristique ut aliquet arcu eget tincidunt
                        nulla sed consequat. Id maecenas ipsum congue sagittis.
                      </p>
                      <hr />
                    </div>
                  </div>
                  <div className="row author">
                    <div className="col-3">
                      <img
                        src="./images/Comment_User2.jpg"
                        alt="Đoàn hồng ngọc"
                      ></img>
                    </div>
                    <div className="col-9">
                      <h2>Đoàn hồng ngọc</h2>
                      <p>0******789</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 hidden-xs">
                <div className="blog-comment-item">
                  <div className="row rate">
                    <div className="col-6">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star no-rate"></i>
                    </div>
                    <div className="col-6">
                      <div className="rate-date">02/11/2022</div>
                    </div>
                  </div>
                  <div className="row comment">
                    <div className="col-12">
                      <h3>COMBO SINH TRẮC VÂN TAY</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Varius nisl non suscipit at.
                      </p>
                      <hr />
                    </div>
                  </div>
                  <div className="row author">
                    <div className="col-3">
                      <img
                        src="./images/Comment_User3.jpg"
                        alt="Nguyễn Thùy trang"
                      ></img>
                    </div>
                    <div className="col-9">
                      <h2>Nguyễn Thùy trang</h2>
                      <p>0******124</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row block-xs">
              <BlogCommentsCarousel />
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
