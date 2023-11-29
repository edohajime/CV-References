import { Col, Container, Row } from "react-bootstrap";
import Flickity from "react-flickity-component";

const CategoryChild = () => {
  const flickityOps = {
    contain: true,
    wrapAround: false,
    prevNextButtons: false,
    pageDots: false,
    freeScrolls: true,
    initialIndex: 1,
  };
  return (
    <div className="category-child-one">
      <Container>
        <Flickity
          className={"category-carousel-two"}
          elementType={"div"}
          options={flickityOps}
        >
          <div className="category-child-item">
            <Row>
              <Col xs={12}>
                <img
                  src="./images/category-child-item.jpg"
                  alt="Xem tất cả"
                ></img>
                <h5>Xem tất cả</h5>
              </Col>
              <Col xs={12}>
                <img
                  src="./images/category-child-item.jpg"
                  alt="Xem tất cả"
                ></img>
                <h5>Danh mục cháu</h5>
              </Col>
            </Row>
          </div>
          <div className="category-child-item">
            <Row>
              <Col xs={12}>
                <img
                  src="./images/category-child-item.jpg"
                  alt="Danh mục cháu"
                ></img>
                <h5>Danh mục cháu</h5>
              </Col>
              <Col xs={12}>
                <img
                  src="./images/category-child-item.jpg"
                  alt="Xem tất cả"
                ></img>
                <h5>Danh mục cháu</h5>
              </Col>
            </Row>
          </div>
          <div className="category-child-item">
            <Row>
              <Col xs={12}>
                <img
                  src="./images/category-child-item.jpg"
                  alt="Danh mục cháu"
                ></img>
                <h5>Danh mục cháu</h5>
              </Col>
              <Col xs={12}>
                <img
                  src="./images/category-child-item.jpg"
                  alt="Xem tất cả"
                ></img>
                <h5>Danh mục cháu</h5>
              </Col>
            </Row>
          </div>
          <div className="category-child-item">
            <Row>
              <Col xs={12}>
                <img
                  src="./images/category-child-item.jpg"
                  alt="Danh mục cháu"
                ></img>
                <h5>Danh mục cháu</h5>
              </Col>
              <Col xs={12}>
                <img
                  src="./images/category-child-item.jpg"
                  alt="Xem tất cả"
                ></img>
                <h5>Danh mục cháu</h5>
              </Col>
            </Row>
          </div>
          <div className="category-child-item">
            <Row>
              <Col xs={12}>
                <img
                  src="./images/category-child-item.jpg"
                  alt="Danh mục cháu"
                ></img>
                <h5>Danh mục cháu</h5>
              </Col>
              <Col xs={12}>
                <img
                  src="./images/category-child-item.jpg"
                  alt="Xem tất cả"
                ></img>
                <h5>Danh mục cháu</h5>
              </Col>
            </Row>
          </div>
          <div className="category-child-item">
            <Row>
              <Col xs={12}>
                <img
                  src="./images/category-child-item.jpg"
                  alt="Danh mục cháu"
                ></img>
                <h5>Danh mục cháu</h5>
              </Col>
              <Col xs={12}>
                <img
                  src="./images/category-child-item.jpg"
                  alt="Xem tất cả"
                ></img>
                <h5>Danh mục cháu</h5>
              </Col>
            </Row>
          </div>
          <div className="category-child-item">
            <Row>
              <Col xs={12}>
                <img
                  src="./images/category-child-item.jpg"
                  alt="Danh mục cháu"
                ></img>
                <h5>Danh mục cháu</h5>
              </Col>
              <Col xs={12}>
                <img
                  src="./images/category-child-item.jpg"
                  alt="Xem tất cả"
                ></img>
                <h5>Danh mục cháu</h5>
              </Col>
            </Row>
          </div>
        </Flickity>
      </Container>
    </div>
  );
};
export default CategoryChild;
