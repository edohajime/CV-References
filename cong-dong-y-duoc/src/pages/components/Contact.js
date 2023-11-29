import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Col, Container, Row } from "react-bootstrap";
import { FormTextInput, SelectFile } from "./Profile";
import { iconFly, iconFolder } from "../utilities/Icons";

const Contact = () => {
  return (
    <div>
      <Container>
        <form>
          <Row>
            <Col xs={4}>
              <label className="profile-label" htmlFor="title">
                Tiêu Đề
              </label>
              <FormTextInput id="title" name="title" />
            </Col>
            <Col xs={4}>
              <label className="profile-label" htmlFor="fullname">
                Họ Tên
              </label>
              <FormTextInput id="fullname" name="fullname" />
            </Col>
            <Col xs={4}>
              <label className="profile-label" htmlFor="email">
                Email
              </label>
              <FormTextInput id="email" name="email" />
            </Col>
            <Col xs={9}>
              <label className="profile-label">Nội Dung</label>
              <div className="description">
                <div className="description_container">
                  <div className="editor">
                    <CKEditor
                      editor={ClassicEditor}
                      data="<p>Hãy Nhập Nội Dung Bài Viết!</p>"
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        console.log("Editor is ready to use!", editor);
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                      }}
                      onBlur={(event, editor) => {
                        console.log("Blur.", editor);
                      }}
                      onFocus={(event, editor) => {
                        console.log("Focus.", editor);
                      }}
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={3}>
              <label className="profile-label">Hình Ảnh</label>
              <SelectFile
                className="contact_image_selector"
                icon={iconFolder}
                selectImageLabel="Kéo Hình Ảnh Hoặc Chọn Hình Ảnh"
                selectImageButtonLabel="Chọn Ảnh"
              />
            </Col>
            <Col xs={12} className="d-flex justify-content-end">
              <button type="submit" className="update_profile-save">
                {iconFly}
                Send
              </button>
            </Col>
          </Row>
        </form>
      </Container>
    </div>
  );
};
export default Contact;
