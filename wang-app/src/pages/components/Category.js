import { Col, Container, Row } from "react-bootstrap";
import Flickity from "react-flickity-component";
import { select } from "./Utilities";

const Category = () => {
  const flickityOps = {
    contain: true,
    freeScroll: true,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: false,
    initialIndex: 2,
  };
  const handleClick = (c) => {
    let cateParentItem = select(".parent-item", true);
    if (cateParentItem) {
      cateParentItem.forEach((e) => {
        if (e.classList.contains("selected")) {
          e.classList.remove("selected");
        }
      });
    }
    c.classList.add("selected");
  };
  return (
    <div>
      <div className="category-parent">
        <Container>
          <Row className="align-items-center">
            <Col
              xs={3}
              className="parent-item selected"
              onClick={(c) => handleClick(c.target)}
            >
              Danh mục cha
            </Col>
            <Col xs={3} className="parent-item" onClick={(c) => handleClick(c.target)}>
              Danh mục cha
            </Col>
            <Col xs={3} className="parent-item" onClick={(c) => handleClick(c.target)}>
              Danh mục cha
            </Col>
            <Col xs={3} className="parent-item" onClick={(c) => handleClick(c.target)}>
              Danh mục cha
            </Col>
          </Row>
        </Container>
      </div>
      <div className="category-child">
        <Flickity
          className={"category-carousel"}
          elementType={"div"}
          options={flickityOps}
        >
          <div className="category-item">
            <img src="./images/category-item.jpg" alt="danh mục con"></img>
            <h5>Danh mục con</h5>
          </div>
          <div className="category-item">
            <img src="./images/category-item.jpg" alt="danh mục con"></img>
            <h5>Danh mục con</h5>
          </div>
          <div className="category-item">
            <img src="./images/category-item.jpg" alt="danh mục con"></img>
            <h5>Danh mục con</h5>
          </div>
          <div className="category-item">
            <img src="./images/category-item.jpg" alt="danh mục con"></img>
            <h5>Danh mục con</h5>
          </div>
          <div className="category-item">
            <img src="./images/category-item.jpg" alt="danh mục con"></img>
            <h5>Danh mục con</h5>
          </div>
          <div className="category-item">
            <img src="./images/category-item.jpg" alt="danh mục con"></img>
            <h5>Danh mục con</h5>
          </div>
          <div className="category-item">
            <img src="./images/category-item.jpg" alt="danh mục con"></img>
            <h5>Danh mục con</h5>
          </div>
          <div className="category-item">
            <img src="./images/category-item.jpg" alt="danh mục con"></img>
            <h5>Danh mục con</h5>
          </div>
          <div className="category-item">
            <img src="./images/category-item.jpg" alt="danh mục con"></img>
            <h5>Danh mục con</h5>
          </div>
        </Flickity>
      </div>
    </div>
  );
};
export default Category;
