import { Col, Container, Row } from "react-bootstrap";
import Flickity from "react-flickity-component";
import { TophospitalsItem } from "./TopHospitals";

const TopExcellentPosts = () => {
  const flickityOps = {
    contain: true,
    wrapAround: false,
    prevNextButtons: true,
    pageDots: false,
    draggable: false,
  };

  return (
    <div className="tophospitals topexcellentposts">
      <Container>
        <div className="header">
          <div className="mark"></div>
          <h3 className="header-title">Vinh Danh bài viết Hay Hàng Tuần</h3>
        </div>
        <Row>
          <Col xs={12} lg={6} className="tophospitals-col">
            <div className="tophospitals-video">
              <div className="wrapper">
                <img
                  className="image"
                  src="/imgs/topexcellentposts/topexcellentposts-item_1.jpg"
                  alt="main"
                />
              </div>
              <div className="tophospitals-item-content">
                <h5>
                  CÁCH RỬA BÁT NHANH NHẤT CHO NGƯỜI LƯỜI - SẠCH SẼ TRONG 5 PHÚT
                </h5>
                <p>
                  Một mẹo quan trọng để rửa bát đĩa nhanh chóng là sử dụng thời
                  gian bạn đợi món gì đó nấu chín để rửa những vật dụng bạn đã
                  dùng để chế biến món ăn đó. Tập thói quen rửa bát trong khi
                  nấu là một cách tuyệt vời để ngăn không cho đồ dùng chất thành
                  đống trong bồn rửa.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6} className="tophospitals-col carousel">
            <Flickity
              className="tophospitals-carousel"
              elementType="div"
              options={flickityOps}
            >
              <div className="tophospitals-slide">
                <div className="slide-wrapper">
                  <div className="slide-container">
                    <TophospitalsItem
                      imageURL="/imgs/topexcellentposts/topexcellentposts-item_2.jpg"
                      title="Điều phối, chuẩn bị ghép thận từ người hiến"
                      content="Điểm giống nhau giữa người hiến sống và chết đều dựa trên tinh thần tự nguyện, cần được bảo vệ, đều phải đảm bảo y đức và tính pháp lý, đều trung lập, không bị ảnh hưởng bởi bất kỳ ai. Trong khi đó, với mỗi hình thức hiến tạng sẽ có những điểm khác biệt."
                    />
                    <TophospitalsItem
                      imageURL="/imgs/topexcellentposts/topexcellentposts-item_3.jpg"
                      title="Siêu lọc trên bệnh nhân chạy thận nhân tạo định kỳ,"
                      content="Siêu lọc là một trong những chuyên đề mở đầu cho Hội nghị Khoa học thường niên lần thứ 20 do Hội Tiết Niệu - Thận học TPHCM (HUNA) phối hợp cùng Sở Y tế tỉnh Phú Yên tổ chức tại TP Tuy Hòa (Phú Yên) trong 3 ngày, từ 13/7 - 15/7/2023."
                    />
                  </div>
                </div>
              </div>
              <div className="tophospitals-slide">
                <div className="slide-wrapper">
                  <div className="slide-container">
                    <TophospitalsItem
                      imageURL="/imgs/topexcellentposts/topexcellentposts-item_4.jpg"
                      title="CEO Tô Quang Huy – hành trình sáng lập KOKASI"
                      content="Bằng đam mê, nhiệt huyết với công tác chăm sóc sức khỏe đặc biệt cho trẻ em, CEO Tô Quang Huy luôn mong muốn lan tỏa, phát huy truyền thống vẻ vang của ngành Y."
                    />
                    <TophospitalsItem
                      imageURL="/imgs/topexcellentposts/topexcellentposts-item_5.jpg"
                      title="CEO Tô Quang Huy – hành trình sáng lập KOKASI"
                      content="Bằng đam mê, nhiệt huyết với công tác chăm sóc sức khỏe đặc biệt cho trẻ em, CEO Tô Quang Huy luôn mong muốn lan tỏa, phát huy truyền thống vẻ vang của ngành Y."
                    />
                  </div>
                </div>
              </div>
              <div className="tophospitals-slide">
                <div className="slide-wrapper">
                  <div className="slide-container">
                    <TophospitalsItem
                      imageURL="/imgs/topexcellentposts/topexcellentposts-item_2.jpg"
                      title="CEO Tô Quang Huy – hành trình sáng lập KOKASI"
                      content="Bằng đam mê, nhiệt huyết với công tác chăm sóc sức khỏe đặc biệt cho trẻ em, CEO Tô Quang Huy luôn mong muốn lan tỏa, phát huy truyền thống vẻ vang của ngành Y."
                    />
                    <TophospitalsItem
                      imageURL="/imgs/topexcellentposts/topexcellentposts-item_3.jpg"
                      title="CEO Tô Quang Huy – hành trình sáng lập KOKASI"
                      content="Bằng đam mê, nhiệt huyết với công tác chăm sóc sức khỏe đặc biệt cho trẻ em, CEO Tô Quang Huy luôn mong muốn lan tỏa, phát huy truyền thống vẻ vang của ngành Y."
                    />
                  </div>
                </div>
              </div>
            </Flickity>
            <div className="blur"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default TopExcellentPosts;
