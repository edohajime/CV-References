import { Col, Container, Modal, Row } from "react-bootstrap";
import { BsHandbagFill, BsThreeDots } from "react-icons/bs";
import QuickBack from "./QuickBack.js";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductHeader = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="header">
        <Container className="my-2">
          <Row className="align-items-center">
            <Col xs={4} className="text-start">
              <Link to="/">
                <GrClose className="fa-close" style={{ fontSize: "1.5rem" }} />
              </Link>
            </Col>
            <Col xs={4}>
              <h3 className="header-productHeader">Chi tiết sản phẩm</h3>
            </Col>
            <Col xs={4} className="text-end">
              <BsThreeDots
                style={{
                  color: "#FFFFFF",
                  marginRight: "10px",
                  fontSize: "1.5rem",
                }}
                onClick={() => {
                  let e = document.querySelector(".quickBack");
                  if (e.classList.contains("visible")) {
                    e.classList.remove("visible");
                  } else {
                    e.classList.add("visible");
                  }
                }}
              />
              <div className="cart">
                <div className="cart-body">
                  <BsHandbagFill
                    style={{ color: "white" }}
                    onClick={handleShow}
                  />
                  <div className="cart-count">1</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <QuickBack />
      <Modal
        className="cartModal"
        show={show}
        onHide={handleClose}
        animation={true}
        onLoad={() => {
        }}
      >
        <Modal.Body>
          <div className="cartModal-item">
            <img
              className="item-image"
              src="./images/cart-product-item.jpg"
              alt="cart-product-item"
            ></img>
            <div className="item-info">
              <h3>Sản phẩm ABC</h3>
              <h4>Mua buôn</h4>
              <h5>19:36 19-11-2020</h5>
            </div>
            <h3 className="item-price">300.000đ</h3>
          </div>
          <div className="cartModal-item">
            <img
              className="item-image"
              src="./images/cart-product-item.jpg"
              alt="cart-product-item"
            ></img>
            <div className="item-info">
              <h3>Sản phẩm ABC</h3>
              <h4>Mua buôn</h4>
              <h5>19:36 19-11-2020</h5>
            </div>
            <h3 className="item-price">300.000đ</h3>
          </div>
          <div className="cartModal-item">
            <img
              className="item-image"
              src="./images/cart-product-item.jpg"
              alt="cart-product-item"
            ></img>
            <div className="item-info">
              <h3>Sản phẩm ABC</h3>
              <h4>Mua buôn</h4>
              <h5>19:36 19-11-2020</h5>
            </div>
            <h3 className="item-price">300.000đ</h3>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="cartExpand retail">Xem giỏ lẻ</div>
          <div className="cartExpand wholesale">Xem giỏ buôn</div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ProductHeader;
