import { Col, Container, Row } from "react-bootstrap";
import Flickity from "react-flickity-component";
import { getParentNode } from "../utilities/Utilities";

const TopHospitals = () => {
  const flickityOps = {
    contain: true,
    wrapAround: false,
    prevNextButtons: true,
    pageDots: false,
    draggable: false,
  };

  return (
    <div className="tophospitals">
      <Container>
        <div className="header">
          <div className="mark"></div>
          <h3 className="header-title">
            Bệnh Viện & Phòng Khám Đánh Giá Tốt Nhất
          </h3>
        </div>
        <div className="tophospital-bg">
          <div className="tophospital-container">
            <Row>
              <Col xs={12} lg={6} className="tophospitals-col">
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
                  <div className="tophospitals-item-content">
                    <h5>Phòng Khám Thu Cúc TCI - Phòng Khám Đa Khoa Thu Cúc</h5>
                    <p>
                      Trong tháng 6 này, Thu Cúc TCI cơ sở 216 Trần Duy Hưng
                      dành tặng vô vàn ưu đãi hấp dẫn cho khách thăm khám, giúp
                      bạn chăm sóc sức khỏe cho bản thân và những người thân yêu
                      một cách toàn diện với chi phí hấp dẫn.
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
                          imageURL="/imgs/tophospitals/tophospitals-item_1.jpg"
                          title="CEO Tô Quang Huy – hành trình sáng lập KOKASI"
                          content="Bằng đam mê, nhiệt huyết với công tác chăm sóc sức khỏe đặc biệt cho trẻ em, CEO Tô Quang Huy luôn mong muốn lan tỏa, phát huy truyền thống vẻ vang của ngành Y."
                        />
                        <TophospitalsItem
                          imageURL="/imgs/tophospitals/tophospitals-item_2.jpg"
                          title="Phòng khám Sản Phụ khoa Linh Đàm Clinic"
                          content="Quan Điểm Sai Lầm Khi Khám Thai: CHỈ CẦN SIÊU ÂM LÀ ĐỦ Hiện nay do y học ngày càng phát triển nên các mẹ bầu khi đi khám thai có điều kiện để tiếp cận với các dịch vụ y tế chất lượng hơn, đặc biệt trong đó là SIÊU ÂM THAI. Tuy nhiên nhiều mẹ bầu vẫn quan niệm sai lầm rằng khi đi khám thai chỉ cần siêu âm là có thể biết thai khoẻ hay không, thai có bình thường không."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="tophospitals-slide">
                    <div className="slide-wrapper">
                      <div className="slide-container">
                        <TophospitalsItem
                          imageURL="/imgs/tophospitals/tophospitals-item_3.jpg"
                          title="CEO Tô Quang Huy – hành trình sáng lập KOKASI"
                          content="Bằng đam mê, nhiệt huyết với công tác chăm sóc sức khỏe đặc biệt cho trẻ em, CEO Tô Quang Huy luôn mong muốn lan tỏa, phát huy truyền thống vẻ vang của ngành Y."
                        />
                        <TophospitalsItem
                          imageURL="/imgs/tophospitals/tophospitals-item_4.jpg"
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
                          imageURL="/imgs/tophospitals/tophospitals-item_1.jpg"
                          title="CEO Tô Quang Huy – hành trình sáng lập KOKASI"
                          content="Bằng đam mê, nhiệt huyết với công tác chăm sóc sức khỏe đặc biệt cho trẻ em, CEO Tô Quang Huy luôn mong muốn lan tỏa, phát huy truyền thống vẻ vang của ngành Y."
                        />
                        <TophospitalsItem
                          imageURL="/imgs/tophospitals/tophospitals-item_2.jpg"
                          title="Phòng khám Sản Phụ khoa Linh Đàm Clinic"
                          content="Quan Điểm Sai Lầm Khi Khám Thai: CHỈ CẦN SIÊU ÂM LÀ ĐỦ Hiện nay do y học ngày càng phát triển nên các mẹ bầu khi đi khám thai có điều kiện để tiếp cận với các dịch vụ y tế chất lượng hơn, đặc biệt trong đó là SIÊU ÂM THAI. Tuy nhiên nhiều mẹ bầu vẫn quan niệm sai lầm rằng khi đi khám thai chỉ cần siêu âm là có thể biết thai khoẻ hay không, thai có bình thường không."
                        />
                      </div>
                    </div>
                  </div>
                </Flickity>
                <div className="blur"></div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default TopHospitals;

export const TophospitalsItem = ({ ...props }) => {
  return (
    <div className="tophospitals-item">
      <div
        className="tophospitals-item-image"
        style={{
          background: `url("${props.imageURL}") 50% 50% / cover`,
        }}
      ></div>
      <div className="tophospitals-item-info">
        <h5>{props.title}</h5>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export const handlePlay = (e, willPlay) => {
  let container = getParentNode(e, "tophospitals-video");
  let video = container.querySelector("video");
  let playButton = container.querySelector(".play");
  let content = container.querySelector(".tophospitals-item-content");
  if (willPlay) {
    video.play();
    playButton.classList.remove("visible");
    if (content) {
      content.classList.add("d-none");
    }
  } else {
    video.pause();
    playButton.classList.add("visible");
    if (content) {
      content.classList.remove("d-none");
    }
  }
};
