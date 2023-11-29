import { Container, Row } from "react-bootstrap";
import { BsBookmark } from "react-icons/bs";
import { handleNext, handlePrev } from "../utilities/Utilities";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const TraditionalMedicine = () => {
  const ops1 = {
    carousel: "popularposts-carousel",
    container: "popularposts-container",
    cellSelector: ".popularposts-container .popularpost",
    prevButton: "prev_button",
    nextButton: "next_button",
  };
  return (
    <div className="popularposts traditional_medicine">
      <Container>
        <div className="header">
          <div className="mark"></div>
          <h3 className="header-title">Bài Thuốc Gia Truyền</h3>
        </div>
        <Row className="popularposts-posts">
          <div className="my_list popularposts-carousel">
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
        </Row>
      </Container>
    </div>
  );
};
export default TraditionalMedicine;

export const PopularPost = ({ ...props }) => {
  return (
    <Link to="/post-detail">
      <div className="popularpost">
        <div className="popularposts-item">
          <div
            className="popularposts-image"
            style={{
              background: `url("${props.popularPostURL}") 50% 50% / cover`,
              backgroundRepeat: "none",
              backgroundSize: "100%",
            }}
          ></div>
          <h4>{props.popularPostTitle}</h4>
          <p>{props.popularPostContent}</p>
          <div className="popularposts-author">
            <img src={props.author} alt="authors" />
            <div className="author-info">
              <h5>{props.authorName}</h5>
              <p>{props.createDate}</p>
            </div>
            <BsBookmark />
          </div>
        </div>
      </div>
    </Link>
  );
};
