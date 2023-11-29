import { Col, Container, Row } from "react-bootstrap";
import Flickity from "react-flickity-component";
import { PostCarouselItem } from "./Doctors";

const DoctorsLikeMother = () => {
  const flickityOps = {
    contain: true,
    draggable: false,
    wrapAround: true,
    prevNextButtons: true,
    pageDots: true,
    cellAlign: "center",
  };

  return (
    <div className="posts doctors doctors_like_mother">
      <Container>
        <div className="header">
          <div className="mark"></div>
          <h3 className="header-title">Lương Y Như Từ Mẫu</h3>
        </div>
        <Row>
          <Col xs={12} sm={6} lg={3} style={{ padding: "10px 5px" }}>
            <div
              className="posts-item"
              style={{
                background:
                  'url("/imgs/doctors/doctors-item_1.jpg") 50% 50% / cover',
              }}
            >
              <div className="posts-item-content">
                <h5>PGS_TS. Trần Thế Anh</h5>
                <p>
                  Bv. Phụ Sản trung Ương. Chuyên khoa Nhi. Tôt nghiệp đại học Y
                  hà Nội
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3} style={{ padding: "10px 5px" }}>
            <div
              className="posts-item"
              style={{
                background:
                  'url("/imgs/doctors/doctors-item_2.jpg") 50% 50% / cover',
              }}
            >
              <div className="posts-item-content">
                <h5>PGS_TS. Đức Quang Vinh</h5>
                <p>
                  Bv. Phụ Sản trung Ương. Chuyên khoa Nhi. Tôt nghiệp đại học Y
                  hà Nội
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <Flickity
              className="posts-carousel"
              elementType="div"
              options={flickityOps}
            >
              <PostCarouselItem
                childClass="item"
                postURL="/imgs/doctors/doctors-item_3.jpg"
                postTitle="Phòng Khám Thu Cúc TCI - Phòng Khám Đa Khoa Thu Cúc"
                postContent="Trong tháng 6 này, Thu Cúc TCI cơ sở 216 Trần Duy Hưng dành tặng vô
            vàn ưu đãi hấp dẫn cho khách thăm khám, giúp bạn chăm sóc sức khỏe
            cho bản thân và những người thân yêu một cách toàn diện với chi phí
            hấp dẫn."
              />
              
              <PostCarouselItem
                childClass="item"
                postURL="/imgs/doctors/doctors-item_3.jpg"
                postTitle="Phòng Khám Thu Cúc TCI - Phòng Khám Đa Khoa Thu Cúc"
                postContent="Trong tháng 6 này, Thu Cúc TCI cơ sở 216 Trần Duy Hưng dành tặng vô
            vàn ưu đãi hấp dẫn cho khách thăm khám, giúp bạn chăm sóc sức khỏe
            cho bản thân và những người thân yêu một cách toàn diện với chi phí
            hấp dẫn."
              />
              
              <PostCarouselItem
                childClass="item"
                postURL="/imgs/doctors/doctors-item_3.jpg"
                postTitle="Phòng Khám Thu Cúc TCI - Phòng Khám Đa Khoa Thu Cúc"
                postContent="Trong tháng 6 này, Thu Cúc TCI cơ sở 216 Trần Duy Hưng dành tặng vô
            vàn ưu đãi hấp dẫn cho khách thăm khám, giúp bạn chăm sóc sức khỏe
            cho bản thân và những người thân yêu một cách toàn diện với chi phí
            hấp dẫn."
              />
              
              <PostCarouselItem
                childClass="item"
                postURL="/imgs/doctors/doctors-item_3.jpg"
                postTitle="Phòng Khám Thu Cúc TCI - Phòng Khám Đa Khoa Thu Cúc"
                postContent="Trong tháng 6 này, Thu Cúc TCI cơ sở 216 Trần Duy Hưng dành tặng vô
            vàn ưu đãi hấp dẫn cho khách thăm khám, giúp bạn chăm sóc sức khỏe
            cho bản thân và những người thân yêu một cách toàn diện với chi phí
            hấp dẫn."
              />
            </Flickity>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default DoctorsLikeMother;
