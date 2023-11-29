import { Col, Container, Row } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Header = () => {
    const [user, setUser] = useState("");
    useEffect(() => {
        axios
            .get("http://localhost:8000/data")
            .then((response) => {
                setUser(response.data.user.name);
            })
            .catch((error) => {
                console.error("Error fetching user:", error);
            });
    }, []);
    return (
        <div className="header">
            <Container>
                <Row className="align-items-center">
                    <Col xs={6}>
                        <p>
                            Kết nối &nbsp;
                            <BsFacebook />
                            &nbsp;
                            <AiFillInstagram />
                        </p>
                    </Col>
                    <Col xs={6} className="text-end">
                        {user === null ? (
                            <p>Đăng ký &nbsp;|&nbsp; Đăng nhập</p>
                        ) : (
                            <>
                                <span className="mr-2 d-none d-lg-inline text-gray-600 small mx-2 text-white">
                                    {user}
                                </span>
                                <img
                                    className="img-profile rounded-circle"
                                    src="{{ asset('img/undraw_profile.svg')}}"
                                />
                            </>
                        )}
                    </Col>
                    <Col xs={3} className="header-logo">
                        <h5 className="logo">Clothing Shop</h5>
                    </Col>
                    <Col xs={7}>
                        <div className="searchBar">
                            <form>
                                <input
                                    type="text"
                                    name="search"
                                    className="searchInput"
                                    placeholder="Tìm kiếm thời trang, phụ kiện ..."
                                ></input>
                                <button className="searchButton">
                                    <BiSearch />
                                </button>
                            </form>
                        </div>
                    </Col>
                    <Col xs={2} className="text-center">
                        <Link to="/cart">
                            <CgShoppingCart className="fa-shopping" />
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default Header;
