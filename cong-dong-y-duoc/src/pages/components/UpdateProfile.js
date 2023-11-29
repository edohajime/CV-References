import { Col, Container, Row } from "react-bootstrap";
import { FormTextInput, SelectFile } from "./Profile";
import { iconImage, iconSave } from "../utilities/Icons";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const UpdateProfile = () => {
  return (
    <div className="update_profile">
      <Container>
        <form>
          <Row>
            <Col xs={4}>
              <label className="profile-label" htmlFor="fullname">Họ Và Tên</label>
              <FormTextInput id="fullname" name="fullname" />
            </Col>
            <Col xs={4}>
              <label className="profile-label" htmlFor="literacy">Trình Độ Học Vấn</label>
              <FormTextInput id="literacy" name="literacy" />
            </Col>
            <Col xs={4}>
              <label className="profile-label" htmlFor="qualification">Trình Độ Chuyên Khoa</label>
              <FormTextInput id="qualification" name="qualification" />
            </Col>
            <Col xs={4}>
              <label className="profile-label" htmlFor="workplace">Đơn Vị Công Tác Hiện Tại</label>
              <FormTextInput id="workplace" name="workplace" />
            </Col>
            <Col xs={4}>
              <label className="profile-label" htmlFor="phone">Số Điện Thoại</label>
              <FormTextInput id="phone" name="phone" />
            </Col>
            <Col xs={4}>
              <label className="profile-label" htmlFor="email">Email</label>
              <FormTextInput id="email" name="email" />
            </Col>
            <Col xs={12}>
              <label className="profile-label">Hình Ảnh Banner</label>
              <SelectFile
                className="banner_selector"
                icon={iconImage}
                selectImageLabel="Kéo Hình Ảnh Hoặc Chọn Hình Ảnh"
                selectImageButtonLabel="Chọn Ảnh"
              />
              <input
                type="file"
                name="banner"
                id="banner"
                className="d-none"
              ></input>
            </Col>
            <Col xs={9}>
              <label className="profile-label">Mô Tả Về Bản Thân</label>
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
              <label className="profile-label">Ảnh Cá Nhân</label>
              <SelectFile
                className="avt_selector"
                icon={iconImage}
                selectImageLabel="Kéo Hình Ảnh Hoặc Chọn Hình Ảnh"
                selectImageButtonLabel="Chọn Ảnh"
              />
            </Col>
            <Col xs={12} className="d-flex justify-content-end">
              <button type="submit" className="update_profile-save">
                {iconSave}
                Lưu
              </button>
            </Col>
          </Row>
        </form>
      </Container>
    </div>
  );
};
export default UpdateProfile;
