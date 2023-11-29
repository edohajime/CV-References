import { Container, Row } from "react-bootstrap";
import { BsBookmark } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { handleNext, handlePrev } from "../utilities/Utilities";
import { PopularPost } from "./TraditionalMedicine";

const TraditionalMedicine1 = () => {
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
          <h3 className="header-title">Y học cổ truyền</h3>
        </div>
        <Row className="popularposts-posts">
          <div className="my_list popularposts-carousel">
            <div className="my_slider">
              <div className="my_container popularposts-container">
                <PopularPost
                  popularPostURL="/imgs/medicine1/medicine1-item_1.jpg"
                  popularPostTitle="Bác sĩ Y học cổ truyền – Người kết hợp tinh hoa của Đông y và Tây y"
                  popularPostContent="Kết hợp tinh hoa giữa Đông – Tây y trong khám chữa bệnh ngày càng làm cho Y học cổ truyền (YHCT) nắm giữ vai trò quan trọng trong đời sống ngày nay."
                  author="/imgs/medicine1/authors/medicine1-authors-item_1.jpg"
                  authorName="Mary"
                  createDate="July 14, 2022"
                />
                <PopularPost
                  popularPostURL="/imgs/medicine1/medicine1-item_2.jpg"
                  popularPostTitle="Y học cổ truyền có chữa được bệnh ung thư không?"
                  popularPostContent="Phải nói thêm rằng, y học cổ truyền ở đây là y học cổ truyền chân chính… chứ không phải là các bài thuốc lá lẩu, thuốc nam không rõ nguồn gốc xuất xứ khiến người bệnh “tiền mất tật mang”."
                  author="/imgs/medicine1/authors/medicine1-authors-item_2.jpg"
                  authorName="James"
                  createDate="July 14, 2022"
                />
                <PopularPost
                  popularPostURL="/imgs/medicine1/medicine1-item_3.jpg"
                  popularPostTitle="​Cách sử dụng thuốc y học cổ truyền"
                  popularPostContent="Hiện nay, ngày càng nhiều người sử dụng thuốc y học cổ truyền bởi hiệu quả của nó trong việc chữa một số bệnh."
                  author="/imgs/medicine1/authors/medicine1-authors-item_3.jpg"
                  authorName="Jon Kantner"
                  createDate="July 14, 2022"
                />
                <PopularPost
                  popularPostURL="/imgs/medicine1/medicine1-item_4.jpg"
                  popularPostTitle="Cách chẩn đoán bệnh trong y học cổ truyền"
                  popularPostContent="Nếu như Y học Phương Tây kiểm tra sức khỏe và chẩn đoán bệnh lý dựa trên các máy móc, trang thiết bị hiện đại như: xét nghiệm, siêu âm, nội soi, chụp X-quang,…"
                  author="/imgs/medicine1/authors/medicine1-authors-item_4.jpg"
                  authorName="Robert"
                  createDate="July 14, 2022"
                />
                <PopularPost
                  popularPostURL="/imgs/medicine1/medicine1-item_1.jpg"
                  popularPostTitle="Bác sĩ Y học cổ truyền – Người kết hợp tinh hoa của Đông y và Tây y"
                  popularPostContent="Kết hợp tinh hoa giữa Đông – Tây y trong khám chữa bệnh ngày càng làm cho Y học cổ truyền (YHCT) nắm giữ vai trò quan trọng trong đời sống ngày nay."
                  author="/imgs/medicine1/authors/medicine1-authors-item_1.jpg"
                  authorName="Mary"
                  createDate="July 14, 2022"
                />
                <PopularPost
                  popularPostURL="/imgs/medicine1/medicine1-item_3.jpg"
                  popularPostTitle="​Cách sử dụng thuốc y học cổ truyền"
                  popularPostContent="Hiện nay, ngày càng nhiều người sử dụng thuốc y học cổ truyền bởi hiệu quả của nó trong việc chữa một số bệnh."
                  author="/imgs/medicine1/authors/medicine1-authors-item_3.jpg"
                  authorName="Jon Kantner"
                  createDate="July 14, 2022"
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
export default TraditionalMedicine1;
