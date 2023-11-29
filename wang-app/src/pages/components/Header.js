import { Col, Container, Row } from "react-bootstrap";
import { BsHandbagFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header">
      <Container>
        <Row className="align-items-center">
          <Col xs={4} className="text-start">
            <img
              className="header-list"
              src="./images/list-icon.jpg"
              alt="list"
              onClick={() => {
                let sidebar = document.querySelector(".sidebar");
                sidebar.classList.add("block");
              }}
            />
            <img src="./images/wang-icon.jpg" alt="wang" />
          </Col>
          <Col xs={8} className="text-end">
            <img src="./images/search-icon.jpg" alt="search" />
            <img src="./images/favorites-icon.jpg" alt="favorites" />
            <img src="./images/announce-icon.jpg" alt="announce" />
            <div className="cart">
              <div className="cart-body">
                <BsHandbagFill style={{ color: "white" }} />
                <div className="cart-count">1</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Header;
