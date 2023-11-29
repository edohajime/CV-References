import { Col, Container, Row } from "react-bootstrap";
import { SlLocationPin } from "react-icons/sl";

const ComboDetail = () => {
  return (
    <div className="comboDetail">
      <Container>
        <Row className="shopInfo align-items-center py-1">
          <Col xs={2}>
            <img src="./images/combo-hot-item1.jpg" alt="Đại lý 1" />
          </Col>
          <Col xs={7} className="shopInfo-detail">
            <h3>Tên đại lý</h3>
            <h4>Loại đại lý</h4>
          </Col>
          <Col xs={3} className="shopInfo-locate">
            <SlLocationPin />
            &nbsp;
            <h5>240 km</h5>
          </Col>
        </Row>
        <Row className="comboItems">
          <Col xs={12} className="comboItem">
            <div className="comboItem-img"></div>
            <div className="comboItem-detail">
              <Row>
                <Col xs={5}>
                  <p>Thương hiệu : </p>
                  <p>Giá bán lẻ : </p>
                  <p>Mã sản phẩm :</p>
                </Col>
                <Col xs={7}>
                  <h4 className="comboItem-brand">Nike</h4>
                  <h4 className="comboItem-price">300.000 đ  <span>609.000 đ</span></h4>
                  <h4 className="comboItem-code">#656565656</h4>
                </Col>
              </Row>
              
            </div>
          </Col>
          <Col xs={12} className="comboItem"></Col>
          <Col xs={12} className="comboItem"></Col>
          <Col xs={12} className="comboItem"></Col>
          <Col xs={12} className="comboItem"></Col>
        </Row>
      </Container>
    </div>
  );
};
export default ComboDetail;
