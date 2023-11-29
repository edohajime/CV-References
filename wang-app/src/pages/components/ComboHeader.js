import { Col, Container, Row } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import QuickBack from "./QuickBack";

const ComboHeader = () => {
  return (
    <>
      <div className="header comboHeader">
        <Container className="my-2">
          <Row className="align-items-center">
            <Col xs={4} className="text-start">
              <BsThreeDots
                style={{
                  color: "#000000",
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
            </Col>
            <Col xs={4}>
              <h3 className="header-productHeader">Chi tiết combo</h3>
            </Col>
            <Col xs={4} className="text-end">
              <Link to="/">
                <GrClose className="fa-close" style={{ fontSize: "1.5rem" }} />
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <QuickBack />
    </>
  );
};
export default ComboHeader;
