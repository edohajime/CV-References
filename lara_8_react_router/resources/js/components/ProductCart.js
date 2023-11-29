import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsChevronRight } from "react-icons/bs";
import swal from "sweetalert";
const ProductCart = () => {
    // Lưu trữ nội dung thông báo hiện lên
    const [msg, setMsg] = useState({
        status: false,
        messages: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const url = `http://localhost:8000/api/add-anonymous-order`;
        const formData = new FormData(e.target);
        const config = {
            headers: { "content-type": "multipart/form-data" },
        };

        axios
            .post(url, formData, config)
            .then((res) => {
                setMsg(res.data);
            })
            .catch((error) => {
                console.log("Error network", error);
            });
    };
    // Hiện thông báo
    const handleAlert = (status, msg) => {
        swal({
            title: msg,
            icon: status ? "success" : "warning",
        });
    };
    // Xử lý hiện thông báo
    useEffect(() => {
        console.log(msg.messages);
        if (msg.messages !== "") {
            handleAlert(msg.status, msg.messages);
        }
    }, [msg]);

    const csrfToken = document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content");

    return (
        <div className="productDetail product_cart">
            <Container>
                <div className="breadcumbs">
                    <div className="brand">Clothing Shop</div>
                    <BsChevronRight />
                    <div className="brand leaf">Giỏ Hàng</div>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="_token" value={csrfToken} />
                    <Row className="align-items-center cart_table-header">
                        <Col xs={1}></Col>
                        <Col xs={3} className="text-center">
                            <p>Sản Phẩm</p>
                        </Col>
                        <Col xs={2}>
                            <p>Phân Loại Hàng</p>
                        </Col>
                        <Col xs={2}>
                            <p>Đơn Giá</p>
                        </Col>
                        <Col xs={1}>
                            <p>Số Lượng</p>
                        </Col>
                        <Col xs={2}>
                            <p>Số Tiền</p>
                        </Col>
                        <Col xs={1}></Col>
                    </Row>
                    <Row className="align-items-center cart_table-body">
                        <Col xs={1} className="text-center">
                            <input
                                className="product_cart-select"
                                type="checkbox"
                                name="select"
                            ></input>
                        </Col>
                        <Col xs={3}>
                            <Row className="align-items-center">
                                <Col xs={4}>
                                    <div className="product_cart-img">
                                        <img
                                            src="/storage/products/images/product-bg.png"
                                            alt="product.png"
                                        ></img>
                                    </div>
                                </Col>
                                <Col xs={8}>
                                    <p>
                                        Dép lông con sóc siêu cute xả kho
                                        85k-85k sập giá
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={2}>
                            <p>Sóc ghi, 39</p>
                        </Col>
                        <Col xs={2}>
                            <p>
                                <span className="price_older">170.000đ</span>{" "}
                                73.000đ
                            </p>
                        </Col>
                        <Col xs={1} className="text-center">
                            <p>1</p>
                        </Col>
                        <Col xs={2}>
                            <p>73.000đ</p>
                        </Col>
                        <Col xs={1}>
                            <span className="product_cart-action">Xóa</span>
                        </Col>
                    </Row>
                    <Row className="align-items-center cart_table-body">
                        <Col xs={1} className="text-center">
                            <input
                                className="product_cart-select"
                                type="checkbox"
                                name="select"
                            ></input>
                        </Col>
                        <Col xs={3}>
                            <Row className="align-items-center">
                                <Col xs={4}>
                                    <div className="product_cart-img">
                                        <img
                                            src="/storage/products/images/product-bg.png"
                                            alt="product.png"
                                        ></img>
                                    </div>
                                </Col>
                                <Col xs={8}>
                                    <p>
                                        Dép lông con sóc siêu cute xả kho
                                        85k-85k sập giá
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={2}>
                            <p>Sóc ghi, 39</p>
                        </Col>
                        <Col xs={2}>
                            <p>
                                <span className="price_older">170.000đ</span>{" "}
                                73.000đ
                            </p>
                        </Col>
                        <Col xs={1} className="text-center">
                            <p>1</p>
                        </Col>
                        <Col xs={2}>
                            <p>73.000đ</p>
                        </Col>
                        <Col xs={1}>
                            <span className="product_cart-action">Xóa</span>
                        </Col>
                    </Row>
                    <Row className="align-items-center cart_table-footer">
                        <Col xs={1} className="text-center">
                            <input
                                className="product_cart-select"
                                type="checkbox"
                                name="select"
                            ></input>
                        </Col>
                        <Col xs={3}>
                            <p>Chọn Tất Cả (2)</p>
                        </Col>
                        <Col xs={4} className="offset-2 text-end">
                            <p className="d-flex align-items-center justify-content-end gap-1">
                                Tổng Thanh Toán (0 Sản Phẩm):
                                <span className="product_cart-payment">0đ</span>
                            </p>
                        </Col>
                        <Col xs={2}>
                            <span className="product_cart-buy">Mua Hàng</span>
                        </Col>
                    </Row>
                </form>
            </Container>
        </div>
    );
};
export default ProductCart;
