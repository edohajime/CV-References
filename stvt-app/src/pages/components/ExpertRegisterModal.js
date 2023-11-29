import { useState } from "react";
import { Modal, Button, Form, Row, Col, Container } from "react-bootstrap";
import DatePicker from "react-date-picker";

function ExpertRegisterModal() {
  const [show, setShow] = useState(false);
  const [value, onChange] = useState(new Date());
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="expert-item-button" onClick={handleShow}>
        ĐĂNG KÝ
      </Button>
      <Modal
        className="participant-modal"
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Header>
          <div className="participant-modal-header">
            ĐĂNG KÝ SỬ DỤNG DỊCH VỤ TƯ VẤN CHUYÊN GIA
          </div>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <Form>
              <Form.Group>
                <Form.Label>1. CHỌN DỊCH VỤ</Form.Label>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Check
                      type="radio"
                      label="Online (500.000 800.000)"
                    ></Form.Check>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Check
                      type="radio"
                      label="Online (1.000.000 1.500.000)"
                    ></Form.Check>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Form.Label>2. CHỌN NGÀY</Form.Label>
                <div className="modal-date-input">
                  <Form.Control
                    type="text"
                    placeholder="Chọn ngày"
                  ></Form.Control>
                  <i class="fa-solid fa-calendar-days"></i>
                  <DatePicker
                    className="modal-datepicker"
                    onChange={onChange}
                    value={value}
                  />
                </div>
              </Form.Group>
              <Form.Group>
                <Form.Label>3. CHỌN KHUNG GIỜ</Form.Label>
                <Row>
                  <Col xs={6} md={4}>
                    <div className="modal-hour">08:00 - 10:00</div>
                  </Col>
                  <Col xs={6} md={4}>
                    <div className="modal-hour">10:00 - 12:00</div>
                  </Col>
                  <Col xs={6} md={4}>
                    <div className="modal-hour">14:00 - 16:00</div>
                  </Col>
                  <Col xs={6} md={4}>
                    <div className="modal-hour">16:00 - 18:00</div>
                  </Col>
                  <Col xs={6} md={4}>
                    <div className="modal-hour">18:00 - 20:00</div>
                  </Col>
                  <Col xs={6} md={4}>
                    <div className="modal-hour">20:00 - 22:00</div>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col>
                    <Button className="modal-button">ĐẶT LỊCH</Button>
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ExpertRegisterModal;
