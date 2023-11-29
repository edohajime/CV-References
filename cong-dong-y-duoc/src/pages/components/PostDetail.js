import { Col, Container, Row } from "react-bootstrap";
import {
  iconBack,
  iconCalendar,
  iconFly,
  iconFolder,
  iconMessage,
  iconPlus,
  iconReactAngry,
  iconReactLove,
  iconReactNone,
  iconReactSmile,
  iconSave,
} from "../utilities/Icons";
import { useState } from "react";
import { FormTextArea, FormTextInput } from "./Profile";
import { handleNext, handlePrev, handleSelect } from "../utilities/Utilities";
import { BsBookmark } from "react-icons/bs";
import Flickity from "react-flickity-component";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { PopularPost } from "./TraditionalMedicine";

const PostDetail = () => {
  const selectOps1 = {
    containerClass: "useful_levels",
    childClass: "useful_level",
  };

  const ops1 = {
    carousel: "popularposts-carousel",
    container: "popularposts-container",
    cellSelector: ".popularposts-container .popularpost",
    prevButton: "prev_button",
    nextButton: "next_button",
  };
  return (
    <div className="post_detail">
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <div className="post_detail-header-wrapper">
              <div className="post_detail-header">
                <h5 className="post_detail-title">
                  How to Spend the Perfect Day on Croatia’s Most Magical Island
                </h5>
                <div className="post_detail-bg"></div>
                <div
                  className="post_detail-banner"
                  style={{
                    background:
                      'url("/imgs/medicine/medicine-item_1.jpg") 50% 50% / cover',
                    backgroundRepeat: "none",
                    backgroundSize: "100%",
                  }}
                ></div>
              </div>
            </div>
            <div className="post_detail-meta">
              <div className="d-flex align-items-center">
                {iconCalendar}
                July 14, 2022
              </div>
              <div className="d-flex align-items-center">
                {iconMessage}
                Bình Luận: 35
              </div>
              <div className="d-flex align-items-center">
                {iconFolder}
                Bệnh: Nam Khoa
              </div>
            </div>

            <div className="post_detail-content">
              <h3>Don’t wait. The purpose of our lives is to be happy!</h3>
              <p>
                Upon arrival, your senses will be rewarded with the pleasant
                scent of lemongrass oil used to clean the natural wood found
                throughout the room, creating a relaxing atmosphere within the
                space. A wonderful serenity has taken possession of my entire
                soul, like these sweet mornings of spring which I enjoy with my
                whole heart. I am alone, and feel the charm of existence in this
                spot, which was created for the bliss of souls like mine. I am
                so happy, my dear friend, so absorbed in the exquisite.
              </p>
              <div
                style={{
                  background:
                    'url("/imgs/medicine/medicine-item_1.jpg") 50% 50% / cover',
                  backgroundRepeat: "none",
                  backgroundSize: "100%",
                  width: "90%",
                  paddingTop: "55.73%",
                  borderRadius: "12px",
                  margin: "15px auto",
                }}
              ></div>
              <h3>
                Not how long, but how well you have lived is the main thing.
              </h3>
              <p>
                When you are ready to indulge your sense of excitement, check
                out the range of water- sports opportunities at the resort’s
                on-site water-sports center. Want to leave your stress on the
                water? The resort has kayaks, paddleboards, or the low-key pedal
                boats. Snorkeling equipment is available as well, so you can
                experience the ever-changing undersea environment. Not only do
                visitors to a bed and breakfast get a unique perspective on the
                place they are visiting, they have options for special packages
                not available in other hotel settings. Bed and breakfasts can
                partner easily with local businesses for a smoothly organized
                and highly personalized vacation experience. The Fife and Drum
                Inn offers options such as the Historic Triangle Package that
                includes three nights at the Inn, breakfasts, and admissions to
                historic Williamsburg, Jamestown, and Yorktown. Bed and
                breakfasts also lend themselves to romance. Part of the charm of
                a bed and breakfast is the uniqueness; art, décor, and food are
                integrated to create a complete experience. For example, the
                Fife and Drum retains the colonial feel of the area in all its
                guest rooms. Special features include antique furnishings,
                elegant four poster beds in some guest rooms, as well folk art
                and artifacts from the restoration period of the historic area
                available for guests to enjoy.
              </p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <Row>
              <Col xs={12} sm={7} md={12}>
                <div className="post_detial-actions">
                  <div className="post_detail-action">
                    {iconFly}
                    <p>Chia Sẻ</p>
                  </div>
                  <div className="post_detail-action">
                    <BsBookmark />
                    <p>Lưu</p>
                  </div>
                  <div className="post_detail-action">
                    {iconMessage}
                    <p>Bình Luận</p>
                  </div>
                </div>
                <div className="post_detail-writer">
                  <Row>
                    <Col xs={4}>
                      <div
                        className="post_detail-writer-avt"
                        style={{
                          background:
                            'url("/imgs/medicine/medicine-item_1.jpg") 50% 50% / cover',
                        }}
                      ></div>
                    </Col>
                    <Col xs={8} className="post_detail-writer_info">
                      <div className="post_detail-writer_summary">
                        <h3 className="post_detail-writers">Louis Hoebregts</h3>
                        <p className="post_detail-writer-count_posts">27 bài</p>
                      </div>
                      <div className="follow_button">
                        {iconPlus}
                        <p>Follow</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col xs={5} md={12} className="d-none d-sm-block">
                <div className="post_detail-tags">
                  <div className="header">
                    <div className="mark"></div>
                    <h3 className="header-title">Tags</h3>
                  </div>
                  <div className="tags">
                    <h5 className="tag">Montenegro</h5>
                    <h5 className="tag">Visit Croatia</h5>
                    <h5 className="tag">Luxury Travel</h5>
                    <h5 className="tag">Travel Log</h5>
                    <h5 className="tag">Paradise Island</h5>
                    <h5 className="tag">Travel Info</h5>
                  </div>
                </div>
              </Col>
              <Col xs={12} className="d-none d-md-block">
                <div className="post_detail-relate_posts ">
                  <div className="header">
                    <div className="mark"></div>
                    <h3 className="header-title">Bài Viết Liên Quan</h3>
                  </div>
                  <div className="relate_posts">
                    <div className="relate_post">
                      <Row>
                        <Col xs={3}>
                          <div
                            className="relate_post-img"
                            style={{
                              background:
                                'url("/imgs/medicine/medicine-item_1.jpg") 50% 50% / cover',
                            }}
                          ></div>
                        </Col>
                        <Col xs={9} className="relate_post-info">
                          <h5 className="relate_post-title">
                            How to Spend the Perfect Day on Croatia’s Most
                            Magical Island
                          </h5>
                          <p className="relate_post-cate">Subhead</p>
                        </Col>
                      </Row>
                    </div>
                    <div className="relate_post">
                      <Row>
                        <Col xs={3}>
                          <div
                            className="relate_post-img"
                            style={{
                              background:
                                'url("/imgs/medicine/medicine-item_1.jpg") 50% 50% / cover',
                            }}
                          ></div>
                        </Col>
                        <Col xs={9} className="relate_post-info">
                          <h5 className="relate_post-title">
                            How to Spend the Perfect Day on Croatia’s Most
                            Magical Island
                          </h5>
                          <p className="relate_post-cate">Subhead</p>
                        </Col>
                      </Row>
                    </div>
                    <div className="relate_post">
                      <Row>
                        <Col xs={3}>
                          <div
                            className="relate_post-img"
                            style={{
                              background:
                                'url("/imgs/medicine/medicine-item_1.jpg") 50% 50% / cover',
                            }}
                          ></div>
                        </Col>
                        <Col xs={9} className="relate_post-info">
                          <h5 className="relate_post-title">
                            How to Spend the Perfect Day on Croatia’s Most
                            Magical Island
                          </h5>
                          <p className="relate_post-cate">Subhead</p>
                        </Col>
                      </Row>
                    </div>
                    <div className="relate_post">
                      <Row>
                        <Col xs={3}>
                          <div
                            className="relate_post-img"
                            style={{
                              background:
                                'url("/imgs/medicine/medicine-item_1.jpg") 50% 50% / cover',
                            }}
                          ></div>
                        </Col>
                        <Col xs={9} className="relate_post-info">
                          <h5 className="relate_post-title">
                            How to Spend the Perfect Day on Croatia’s Most
                            Magical Island
                          </h5>
                          <p className="relate_post-cate">Subhead</p>
                        </Col>
                      </Row>
                    </div>
                    <div className="relate_post">
                      <Row>
                        <Col xs={3}>
                          <div
                            className="relate_post-img"
                            style={{
                              background:
                                'url("/imgs/medicine/medicine-item_1.jpg") 50% 50% / cover',
                            }}
                          ></div>
                        </Col>
                        <Col xs={9} className="relate_post-info">
                          <h5 className="relate_post-title">
                            How to Spend the Perfect Day on Croatia’s Most
                            Magical Island
                          </h5>
                          <p className="relate_post-cate">Subhead</p>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} md={12}>
                <div
                  className="advertise_banner1"
                  style={{
                    background:
                      'url("/imgs/postdetail/post_detail-advertise-item1.jpg") 50% 50% / cover',
                    paddingTop: "50%",
                    borderRadius: "12px",
                    marginTop: "1rem",
                  }}
                ></div>
              </Col>
              <Col xs={12} sm={6} md={12}>
                <div
                  className="advertise_banner1"
                  style={{
                    background:
                      'url("/imgs/postdetail/post_detail-advertise-item2.jpg") 50% 50% / cover',
                    paddingTop: "50%",
                    borderRadius: "12px",
                    marginTop: "1rem",
                  }}
                ></div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={8}>
            <div className="post_detail-comments">
              <div className="header">
                <div className="mark"></div>
                <h3 className="header-title">Bình Luận</h3>
              </div>

              <PostDetailComment
                avt="/imgs/medicine/medicine-item_1.jpg"
                author="Jon Kantner"
                createDate="2022 04 July"
                reply={true}
                commentContent="When you are ready to indulge your sense of excitement, check out the range of water- sports opportunities at the resort’s on-site water-sports center. Want to leave your stress on the water? The resort has kayaks, paddleboards, or the low-key pedal boats."
                listReply={true}
              />
              <PostDetailComment
                avt="/imgs/medicine/medicine-item_1.jpg"
                author="Jon Kantner"
                createDate="2022 04 July"
                reply={true}
                commentContent="When you are ready to indulge your sense of excitement, check out the range of water- sports opportunities at the resort’s on-site water-sports center. Want to leave your stress on the water? The resort has kayaks, paddleboards, or the low-key pedal boats."
                listReply={false}
              />
            </div>

            <div className="header">
              <div className="mark"></div>
              <h3 className="header-title">Thêm Bình Luận</h3>
            </div>
            <form>
              <Row className="add_comment">
                <Col xs={12} md={6}>
                  <label htmlFor="fullname">Họ Và Tên</label>
                  <FormTextInput name="fullname" id="fullname" />
                  <label htmlFor="fullname">Số Điện Thoại</label>
                  <FormTextInput name="phone" id="phone" />
                  <label htmlFor="fullname">Email</label>
                  <FormTextInput name="email" id="email" />
                </Col>
                <Col xs={12} md={6}>
                  <label htmlFor="fullname">Nội Dung</label>
                  <FormTextArea
                    id="content"
                    name="content"
                    placeholder="Nhập Nội Dung Bình Luận"
                  />
                </Col>
                <Col
                  xs={12} md={9}
                  className="d-flex align-items-center justify-content-between"
                >
                  <div className="post_useful">
                    <p className="post_useful-title">
                      Đánh Giá Mức Độ Hữu Ích Của Bài Viết
                    </p>
                    <div className="useful_levels">
                      <div
                        className="useful_level"
                        onClick={(e) => handleSelect(e.target, selectOps1)}
                      >
                        {iconReactAngry}
                        <p>Terrible</p>
                      </div>
                      <div
                        className="useful_level"
                        onClick={(e) => handleSelect(e.target, selectOps1)}
                      >
                        {iconReactNone}
                        <p>Normal</p>
                      </div>
                      <div
                        className="useful_level"
                        onClick={(e) => handleSelect(e.target, selectOps1)}
                      >
                        {iconReactSmile}
                        <p>Useful</p>
                      </div>
                      <div
                        className="useful_level active"
                        onClick={(e) => handleSelect(e.target, selectOps1)}
                      >
                        {iconReactLove}
                        <p>Good</p>
                      </div>
                    </div>
                    <input
                      type="text"
                      name="useful"
                      id="useful"
                      className="d-none"
                    />
                  </div>
                </Col>
                <Col xs={12} md={3} className="d-flex justify-content-end py-2">
                  <button type="submit" className="send_comment">
                    {iconMessage} Send Comment
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
          <Col xs={12}>
            <div className="header">
              <div className="mark"></div>
              <h3 className="header-title">Bài Viết Liên Quan</h3>
            </div>
            <div className="my_list popularposts-carousel relate_posts-carousel">
              <div className="my_slider">
                <div className="my_container popularposts-container">
                  <PopularPost
                    popularPostURL="/imgs/medicine/medicine-item_1.jpg"
                    popularPostTitle="[BÀI THUỐC SỐ 1] Sinh lý nam Đỗ Minh"
                    popularPostContent="[BÀI THUỐC SỐ 1] Sinh lý nam Đỗ Minh – Giải pháp tăng cường tinh binh, giúp quý ông lấy lại phong độ"
                    author="/imgs/medicine/authors/medicine-authors-item_1.jpg"
                    authorName="PGS. Kỳ"
                    createDate="August 18, 2022"
                  />
                  <PopularPost
                    popularPostURL="/imgs/medicine/medicine-item_2.jpg"
                    popularPostTitle="Tác dụng của Hoa đu đủ đực đối với y học dân gian và sức khỏe"
                    popularPostContent="Hoa đu đủ đực được thu hái từ những cây đu đủ giống đực. Nguyên liệu này không chỉ được dùng trong chế biến món ăn mà còn có thể làm thuốc chữa các bệnh lý như ho, viêm họng, sỏi thận, tiểu đường hay hỗ trợ điều trị ung thư. Bài viết dưới đây, chuyên trang sẽ chia sẻ các thông tin về công dụng, cách dùng, đối tượng sử dụng dược liệu"
                    author="/imgs/medicine/authors/medicine-authors-item_2.jpg"
                    authorName="TS. Hoàng Anh"
                    createDate="July 25, 2022"
                  />
                  <PopularPost
                    popularPostURL="/imgs/medicine/medicine-item_3.jpg"
                    popularPostTitle="Bài thuốc trị tinh trùng yếu do thận âm khuy hư"
                    popularPostContent="Bệnh nhân chỉ sử dụng bài thuốc này khi gặp triệu chứng choáng váng, rối loạn bài tiết; giảm lượng tinh dịch sau mỗi lần xuất tinh, chất lượng tinh trùng giảm, lưỡi chuyển đỏ,… Bài thuốc sẽ tập trung bồi bổ thận âm để tăng cường khả năng cương dương và nâng cao chất lượng tinh trùng."
                    author="/imgs/medicine/authors/medicine-authors-item_3.jpg"
                    authorName="PGS. Quang Vinh"
                    createDate="July 14, 2022"
                  />
                  <PopularPost
                    popularPostURL="/imgs/medicine/medicine-item_4.jpg"
                    popularPostTitle="Tác dụng của cây lá dứa đối với sức khỏe"
                    popularPostContent="Lá dứa (hay còn có tên gọi khác là cây cơm nếp) có mùi thơm mát dễ chịu cùng màu xanh đặc trưng. Nó thường được dùng nhiều trong các món ăn truyền thống Việt. Tuy nhiên, ít ai biết rằng lá dứa cũng là một loại dược liệu mang lại nhiều tác dụng có lợi cho sức khỏe."
                    author="/imgs/medicine/authors/medicine-authors-item_4.jpg"
                    authorName="BS. Jon Kantner"
                    createDate="May 10, 2022"
                  />
                  <PopularPost
                    popularPostURL="/imgs/medicine/medicine-item_1.jpg"
                    popularPostTitle="[BÀI THUỐC SỐ 1] Sinh lý nam Đỗ Minh"
                    popularPostContent="[BÀI THUỐC SỐ 1] Sinh lý nam Đỗ Minh – Giải pháp tăng cường tinh binh, giúp quý ông lấy lại phong độ"
                    author="/imgs/medicine/authors/medicine-authors-item_1.jpg"
                    authorName="PGS. Kỳ"
                    createDate="August 18, 2022"
                  />
                  <PopularPost
                    popularPostURL="/imgs/medicine/medicine-item_2.jpg"
                    popularPostTitle="Tác dụng của Hoa đu đủ đực đối với y học dân gian và sức khỏe"
                    popularPostContent="Hoa đu đủ đực được thu hái từ những cây đu đủ giống đực. Nguyên liệu này không chỉ được dùng trong chế biến món ăn mà còn có thể làm thuốc chữa các bệnh lý như ho, viêm họng, sỏi thận, tiểu đường hay hỗ trợ điều trị ung thư. Bài viết dưới đây, chuyên trang sẽ chia sẻ các thông tin về công dụng, cách dùng, đối tượng sử dụng dược liệu"
                    author="/imgs/medicine/authors/medicine-authors-item_2.jpg"
                    authorName="TS. Hoàng Anh"
                    createDate="July 25, 2022"
                  />
                </div>
              </div>
              <div
                className="prev_button popularposts_prev disable"
                onClick={(e) => {
                  handlePrev(e.target, ops1);
                }}
              >
                <FaChevronLeft />
              </div>
              <div
                className="next_button popularposts_next"
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
export default PostDetail;

export const PostDetailComment = ({ ...props }) => {
  const [list, setList] = useState([
    {
      avt: "/imgs/medicine/medicine-item_1.jpg",
      author: "Jon Kantner",
      createDate: "2022 04 July",
      commentContent:
        "When you are ready to indulge your sense of excitement, check out the range of water- sports opportunities at the resort’s on-site water-sports center. Want to leave your stress on the water? The resort has kayaks, paddleboards, or the low-key pedal boats.",
    },
    {
      avt: "/imgs/medicine/medicine-item_1.jpg",
      author: "Jon Kantner",
      createDate: "2022 04 July",
      commentContent:
        "When you are ready to indulge your sense of excitement, check out the range of water- sports opportunities at the resort’s on-site water-sports center. Want to leave your stress on the water? The resort has kayaks, paddleboards, or the low-key pedal boats.",
    },
  ]);
  return (
    <div className="post_detail-comment">
      <div className="bg">
        <div className="comment_header">
          <div
            className="comment_author"
            style={{
              background: `url("${props.avt}") 50% 50% / cover`,
            }}
          ></div>
          <div className="comment_more">
            <div className="author-info">
              <h5>{props.author}</h5>
              <p>
                {iconCalendar}
                {props.createDate}
              </p>
            </div>
            {props.reply ? (
              <div className="comment-reply">
                {iconBack}
                <p>Trả Lời</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <p className="comment_content">{props.commentContent}</p>
      </div>
      {props.listReply ? (
        <div className="comment_reply">
          {list.map((item, index) => (
            <PostDetailComment
              key={index}
              avt={item.avt}
              author={item.author}
              createDate={item.createDate}
              reply={false}
              commentContent={item.commentContent}
            />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
