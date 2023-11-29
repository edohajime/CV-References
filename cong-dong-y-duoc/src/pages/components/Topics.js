import { Col, Container, Row } from "react-bootstrap";
import Flickity from "react-flickity-component";

const Topics = () => {
  const flickityOps = {
    freeScroll: true,
    contain: true,
    draggable: true,
    wrapAround: true,
    prevNextButtons: true,
    pageDots: false,
    initialIndex: 2,
  };

  return (
    <div className="topics">
      <Container>
        <Row>
          <Col xs={12}>
            <Flickity
              className="topics-carousel"
              elementType="div"
              options={flickityOps}
            >
              <div className="topics-item">
                <div className="topics-item-content">
                  <img src="/imgs/topics/topics-item_1.jpg" alt="Food" />
                  <h5>Nhi Khoa</h5>
                </div>
              </div>
              <div className="topics-item">
                <div className="topics-item-content">
                  <img src="/imgs/topics/topics-item_2.jpg" alt="Food" />
                  <h5>Nam Khoa</h5>
                </div>
              </div>
              <div className="topics-item">
                <div className="topics-item-content">
                  <img src="/imgs/topics/topics-item_3.jpg" alt="Food" />
                  <h5>Da Liễu</h5>
                </div>
              </div>
              <div className="topics-item">
                <div className="topics-item-content">
                  <img src="/imgs/topics/topics-item_4.jpg" alt="Food" />
                  <h5>Xương Khớp</h5>
                </div>
              </div>
              <div className="topics-item">
                <div className="topics-item-content">
                  <img src="/imgs/topics/topics-item_5.jpg" alt="Food" />
                  <h5>Phụ Khoa</h5>
                </div>
              </div>
              <div className="topics-item">
                <div className="topics-item-content">
                  <img src="/imgs/topics/topics-item_6.jpg" alt="Food" />
                  <h5>Vacxin</h5>
                </div>
              </div>
              <div className="topics-item">
                <div className="topics-item-content">
                  <img src="/imgs/topics/topics-item_7.jpg" alt="Food" />
                  <h5>Khoa Ngoại</h5>
                </div>
              </div>
              <div className="topics-item">
                <div className="topics-item-content">
                  <img src="/imgs/topics/topics-item_8.jpg" alt="Food" />
                  <h5>#Nature</h5>
                </div>
              </div>
            </Flickity>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Topics;
