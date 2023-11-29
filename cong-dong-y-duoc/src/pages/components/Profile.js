import { Col, Container, Row } from "react-bootstrap";
import { BsBookmark } from "react-icons/bs";
import { getParentNode, handleSelect } from "../utilities/Utilities";
import {
  iconEye,
  iconFly,
  iconGarbage2,
  iconImage,
  iconPlus,
  iconPost,
  iconReactAngry,
  iconReactLove,
  iconReactNone,
  iconReactSmile,
  iconReactStar,
  iconSave,
  iconStar,
  iconVideo,
} from "../utilities/Icons";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import { ImBin } from "react-icons/im";
import CanvasJSReact from "@canvasjs/react-charts";
import Flickity from "react-flickity-component";
import { Link } from "react-router-dom";
import { Pagination } from "@mui/material";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Profile = () => {
  const options = {
    animationEnabled: true,
    axisX: {
      valueFormatString: "MMM",
    },
    axisY: {
      prefix: "$",
    },
    data: [
      {
        yValueFormatString: "$#,###",
        xValueFormatString: "MMMM",
        type: "spline",
        dataPoints: [
          { x: new Date(2022, 3), y: 32400 },
          { x: new Date(2022, 4), y: 35260 },
          { x: new Date(2022, 5), y: 33900 },
          { x: new Date(2022, 6), y: 40000 },
          { x: new Date(2022, 7), y: 52500 },
          { x: new Date(2022, 8), y: 32300 },
          { x: new Date(2022, 9), y: 42000 },
          { x: new Date(2022, 10), y: 85000 },
        ],
      },
    ],
  };

  const flickityOps = {
    contain: true,
    draggable: true,
    freeScroll: true,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
    cellAlign: "center",
    initialIndex: 1,
  };

  return (
    <div className="profile">
      <Container>
        <ProfileHeader
          banner="/imgs/profile/profile-item_1.jpg"
          avt="/imgs/profile/profile-item_2.jpg"
          author="Louis Hoebregts"
        />
        <ListPosts />
        <CreatePost />
        <Row className="statistic_posts">
          <Col xs={12} lg={8}>
            <div className="header">
              <div className="mark"></div>
              <h3 className="header-title">Lượt Xem Bài Viết</h3>
            </div>
            <div className="chart card-body">
              <CanvasJSChart options={options} className="posts_chart" />
            </div>
          </Col>
          <Col xs={12} lg={4}>
            <div className="header">
              <div className="mark"></div>
              <h3 className="header-title">Sự Hài Lòng Của Bài Viết</h3>
            </div>
            <div className="react-items card-body">
              <Row>
                <Col xs={4} md={2} lg={4} className="react-item">
                  <div className="react">
                    <p>August 2022</p>
                    {iconReactAngry}
                    <p>20 điểm</p>
                  </div>
                </Col>
                <Col xs={4} md={2} lg={4} className="react-item">
                  <div className="react">
                    <p>September 2022</p>
                    {iconReactLove}
                    <p>20 điểm</p>
                  </div>
                </Col>
                <Col xs={4} md={2} lg={4} className="react-item">
                  <div className="react">
                    <p>October 2022</p>
                    {iconReactStar}
                    <p>20 điểm</p>
                  </div>
                </Col>
                <Col xs={4} md={2} lg={4} className="react-item">
                  <div className="react">
                    <p>May 2022</p>
                    {iconReactStar}
                    <p>20 điểm</p>
                  </div>
                </Col>
                <Col xs={4} md={2} lg={4} className="react-item">
                  <div className="react">
                    <p>June 2022</p>
                    {iconReactNone}
                    <p>20 điểm</p>
                  </div>
                </Col>
                <Col xs={4} md={2} lg={4} className="react-item">
                  <div className="react">
                    <p>July 2022</p>
                    {iconReactSmile}
                    <p>20 điểm</p>
                  </div>
                </Col>
                <Col xs={4} md={2} lg={4} className="react-item">
                  <div className="react">
                    <p>February 2022</p>
                    {iconReactSmile}
                    <p>20 điểm</p>
                  </div>
                </Col>
                <Col xs={4} md={2} lg={4} className="react-item">
                  <div className="react">
                    <p>March 2022</p>
                    {iconReactAngry}
                    <p>20 điểm</p>
                  </div>
                </Col>
                <Col xs={4} md={2} lg={4} className="react-item">
                  <div className="react">
                    <p>April 2022</p>
                    {iconReactLove}
                    <p>20 điểm</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12}>
            <div className="header">
              <div className="mark"></div>
              <h3 className="header-title">Bài Viết Của Tôi</h3>
            </div>
            <Flickity
              className="my_posts"
              elementType="div"
              options={flickityOps}
            >
              <MyPost
                postURL="/imgs/medicine/medicine-item_2.jpg"
                postTitle="Tác dụng của Hoa đu đủ đực đối với y học dân gian và sức khỏe"
                views="15k"
                reviewStar="4.5"
              />
              <MyPost
                postURL="/imgs/medicine/medicine-item_2.jpg"
                postTitle="Tác dụng của Hoa đu đủ đực đối với y học dân gian và sức khỏe"
                views="15k"
                reviewStar="4.5"
              />
              <MyPost
                postURL="/imgs/medicine/medicine-item_2.jpg"
                postTitle="Tác dụng của Hoa đu đủ đực đối với y học dân gian và sức khỏe"
                views="15k"
                reviewStar="4.5"
              />
              <MyPost
                postURL="/imgs/medicine/medicine-item_2.jpg"
                postTitle="Tác dụng của Hoa đu đủ đực đối với y học dân gian và sức khỏe"
                views="15k"
                reviewStar="4.5"
              />
              <MyPost
                postURL="/imgs/medicine/medicine-item_2.jpg"
                postTitle="Tác dụng của Hoa đu đủ đực đối với y học dân gian và sức khỏe"
                views="15k"
                reviewStar="4.5"
              />
              <MyPost
                postURL="/imgs/medicine/medicine-item_2.jpg"
                postTitle="Tác dụng của Hoa đu đủ đực đối với y học dân gian và sức khỏe"
                views="15k"
                reviewStar="4.5"
              />
            </Flickity>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Profile;

// CONSTANTS
const objSelect = {
  containerClass: "profile-activities",
  childClass: "activities",
};

const objSelect1 = {
  containerClass: "profile-tabs",
  childClass: "profile-tab",
};

// COMPONENTS
export const AddTags = ({ ...props }) => {
  return (
    <svg
      className="add-tags"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
    >
      <rect width="40" height="40" rx="12" fill="black" fillOpacity="0.05" />
      <path
        d="M26.5 20C26.5 20.5625 26.0312 21.0312 25.5 21.0312H21V25.5312C21 26.0625 20.5312 26.5 20 26.5C19.4375 26.5 19 26.0625 19 25.5312V21.0312H14.5C13.9375 21.0312 13.5 20.5625 13.5 20C13.5 19.4688 13.9375 19.0312 14.5 19.0312H19V14.5312C19 13.9688 19.4375 13.5 20 13.5C20.5312 13.5 21 13.9688 21 14.5312V19.0312H25.5C26.0312 19 26.5 19.4688 26.5 20Z"
        fill="#3E3232"
      />
    </svg>
  );
};
export const FormTextInput = ({ ...props }) => {
  return (
    <div className="form-input">
      <input
        id={props.id ? props.id : ""}
        type="text"
        name={props.name}
        placeholder={props.placeholder ? props.placeholder : ""}
      />
      {props.iconSVG}
    </div>
  );
};

export const EditorTool = ({ ...props }) => {
  return (
    <div className="tool">
      {props.icon}
      <p>{props.content}</p>
    </div>
  );
};

export const FormTextArea = ({ ...props }) => {
  return (
    <textarea
      className="form-textarea"
      id={props.id ? props.id : ""}
      name={props.name}
      style={{
        background: "#F5F5F5",
        border: "none",
        width: "100%",
        height: `${props.height ? props.height : 300}px`,
        borderRadius: "12px",
        padding: "10px",
      }}
      placeholder={props.placeholder}
    ></textarea>
  );
};

export const FormSelect = ({ ...props }) => {
  return (
    <div className="form-input">
      <select id="category" name="category">
        <option value="0">Chọn danh mục bài viết</option>
        <option value="Bệnh">Bệnh</option>
        <option value="Sức Khỏe & Lối Sống">Sức Khỏe & Lối Sống</option>
        <option value="Làm Đẹp">Làm Đẹp</option>
      </select>
    </div>
  );
};

export const TagItem = ({ ...props }) => {
  return (
    <div className="form-input">
      <input
        type="text"
        name={props.name}
        placeholder={props.placeholder ? props.placeholder : ""}
      />
      <ImBin className="icon-bin" onClick={props.onClick} />
    </div>
  );
};

export const MyPost = ({ ...props }) => {
  return (
    <div className="popularpost my_post">
      <div className="my_post-wrapper">
        <div className="my_post-container">
          <div className="popularposts-item">
            <div
              className="popularposts-image"
              style={{
                background: `url("${props.postURL}") 50% 50% / cover`,
                backgroundRepeat: "none",
                backgroundSize: "100%",
              }}
            ></div>
            <h4>{props.postTitle}</h4>
            <div className="popularposts-author">
              <div className="d-flex gap-3 align-items-center">
                <div className="d-flex gap-2 align-items-center">
                  {iconEye}
                  {props.views}
                </div>
                <div className="d-flex gap-2 align-items-center">
                  {iconStar}
                  {props.reviewStar}
                </div>
              </div>
              <div className="d-flex gap-2 align-items-center">
                {iconPost}
                {iconGarbage2}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Button = ({ ...props }) => {
  return (
    <div className={`button ${props.className ? props.className : ""}`}>
      {props.icon}
      {props.content}
    </div>
  );
};

export const ProfileTab = () => {
  return (
    <Row>
      <Col xs={12} className="profile-tabs">
        <h5
          className="profile-tab active"
          onClick={(e) => handleImagePost(e.target)}
        >
          Viết Bài
        </h5>
        <h5 className="profile-tab" onClick={(e) => handleVideoPost(e.target)}>
          Viết Bài Có Video
        </h5>
      </Col>
    </Row>
  );
};

export const PostContent = () => {
  const [tags, setTags] = useState([{ value: "" }]);

  const handleAddTag = () => {
    setTags([...tags, { value: "" }]);
  };

  const handleRemoveTag = (index) => {
    console.log(0);
    let updateTags = [...tags];
    updateTags.splice(index, 1);
    setTags(updateTags);
  };

  return (
    <Col xs={12} lg={8}>
      <Row>
        <Col xs={12} lg={7}>
          <h5 className="profile-label">Tiêu Đề</h5>
          <FormTextInput name="title" />
          <FormSelect />
        </Col>
        <Col xs={12} lg={5}>
          <h5 className="profile-label">Thêm Tags</h5>
          <FormTextInput
            name="tags"
            placeholder="Tag"
            iconSVG={<AddTags onClick={handleAddTag} />}
          />
          {tags.map((tag, index) => (
            <div key={index} className="form-input">
              <input
                type="text"
                name={`tags${index}`}
                placeholder={`Tag ${index}`}
              />
              <ImBin
                className="icon-bin"
                onClick={() => handleRemoveTag(index)}
              />
            </div>
          ))}
        </Col>
        <Col xs={12}>
          <h5 className="profile-label">Mô Tả Ngắn</h5>
          <div className="editor">
            <FormTextArea
              name="content"
              placeholder="Viết Mô Tả Ngắn"
              height={100}
            />
          </div>
        </Col>
        <Col xs={12}>
          <h5 className="profile-label">Nội Dung</h5>
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
        </Col>
      </Row>
    </Col>
  );
};

export const SelectFile = ({ ...props }) => {
  return (
    <div className={`select_image ${props.className ? props.className : ""}`}>
      <div className="select_image-container">
        {props.icon}
        <div className="select_image-label">
          <p>{props.selectImageLabel}</p>
          <label htmlFor={props.name}>
            <div className="select_image-button">
              {iconPlus}
              {props.selectImageButtonLabel}
            </div>
          </label>
        </div>
        <input
          type="file"
          id={props.name}
          name={props.name}
          className="d-none"
        />
      </div>
    </div>
  );
};

const PostMedia = ({ ...props }) => {
  return (
    <Col xs={12} lg={4}>
      <h5 className="profile-label">{props.profileLabel}</h5>
      <SelectFile
        icon={props.icon}
        selectImageLabel={props.selectImageLabel}
        selectImageButtonLabel={props.selectImageButtonLabel}
        name={props.inputName}
      />
      <div className="select_image-buttons justify-content-md-end justify-content-lg-between">
        <Button icon={iconSave} content="Lưu" />
        <Button icon={iconEye} content="Xem Trước" />
        <Button className="button-red" icon={iconFly} content="Đăng Bài" />
      </div>
    </Col>
  );
};

export const ImagePost = ({ ...props }) => {
  return (
    <Row className={`image_post ${props.className ? props.className : ""}`}>
      <PostContent />
      <PostMedia
        profileLabel="Thêm Hình Ảnh"
        icon={iconImage}
        selectImageLabel="Kéo Hình Ảnh Hoặc Chọn Hình Ảnh"
        selectImageButtonLabel="Chọn Ảnh"
        inputName="image"
      />
    </Row>
  );
};

export const handleGalleryImage = (e, blur) => {
  const galleryImage = getParentNode(e, "image_gallery-item");
  const galleryImageBg = galleryImage.querySelector(".image_gallery-bg");
  if (blur) {
    galleryImageBg.classList.add("blur");
  } else {
    galleryImageBg.classList.remove("blur");
  }
};

export const VideoPost = ({ ...props }) => {
  return (
    <Row className={`video_post ${props.className ? props.className : ""}`}>
      <PostContent />
      <PostMedia
        profileLabel="Thêm Video"
        icon={iconVideo}
        selectImageLabel="Kéo Video Hoặc Chọn Video"
        selectImageButtonLabel="Chọn Video"
        inputName="video"
      />
      <Col xs={12} lg={8}>
        <h5 className="profile-label">Bộ Sưu Tập Hình Ảnh</h5>
        <Row className="image_gallery">
          <Col xs={12} lg={4}>
            <div className="image_gallery-container one">
              <div className="select_image">
                <div className="select_image-container">
                  {iconImage}
                  <p>Kéo Ảnh Hoặc Chọn Ảnh</p>
                  <div className="select_image-button">
                    {iconPlus}
                    Chọn Ảnh
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={8}>
            <div className="image_gallery-container two">
              <div className="image_gallery-items">
                <div
                  className="image_gallery-item"
                  onMouseOver={(e) => handleGalleryImage(e.target, true)}
                  onMouseOut={(e) => handleGalleryImage(e.target, false)}
                >
                  <div
                    className="image_gallery-bg"
                    style={{
                      background: `url("/imgs/profile/image_gallery-item_1.jpg") 50% 50% / cover`,
                    }}
                  ></div>
                  <svg
                    width="42"
                    height="48"
                    viewBox="0 0 42 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 37.5C15 38.3438 14.25 39 13.5 39C12.6562 39 12 38.3438 12 37.5V18C12 17.25 12.6562 16.5 13.5 16.5C14.25 16.5 15 17.25 15 18V37.5ZM22.5 37.5C22.5 38.3438 21.75 39 21 39C20.1562 39 19.5 38.3438 19.5 37.5V18C19.5 17.25 20.1562 16.5 21 16.5C21.75 16.5 22.5 17.25 22.5 18V37.5ZM30 37.5C30 38.3438 29.25 39 28.5 39C27.6562 39 27 38.3438 27 37.5V18C27 17.25 27.6562 16.5 28.5 16.5C29.25 16.5 30 17.25 30 18V37.5ZM29.7188 2.34375L33.1875 7.5H39.75C40.9688 7.5 42 8.53125 42 9.75C42 11.0625 40.9688 12 39.75 12H39V40.5C39 44.7188 35.625 48 31.5 48H10.5C6.28125 48 3 44.7188 3 40.5V12H2.25C0.9375 12 0 11.0625 0 9.75C0 8.53125 0.9375 7.5 2.25 7.5H8.71875L12.1875 2.34375C13.125 0.9375 14.8125 0 16.5938 0H25.3125C27.0938 0 28.7812 0.9375 29.7188 2.34375ZM14.1562 7.5H27.75L25.9688 4.875C25.875 4.6875 25.5938 4.5 25.3125 4.5H16.5938C16.3125 4.5 16.0312 4.6875 15.9375 4.875L14.1562 7.5ZM7.5 40.5C7.5 42.1875 8.8125 43.5 10.5 43.5H31.5C33.0938 43.5 34.5 42.1875 34.5 40.5V12H7.5V40.5Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div
                  className="image_gallery-item"
                  onMouseOver={(e) => handleGalleryImage(e.target, true)}
                  onMouseOut={(e) => handleGalleryImage(e.target, false)}
                >
                  <div
                    className="image_gallery-bg"
                    style={{
                      background: `url("/imgs/profile/image_gallery-item_1.jpg") 50% 50% / cover`,
                    }}
                  ></div>
                  <svg
                    width="42"
                    height="48"
                    viewBox="0 0 42 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 37.5C15 38.3438 14.25 39 13.5 39C12.6562 39 12 38.3438 12 37.5V18C12 17.25 12.6562 16.5 13.5 16.5C14.25 16.5 15 17.25 15 18V37.5ZM22.5 37.5C22.5 38.3438 21.75 39 21 39C20.1562 39 19.5 38.3438 19.5 37.5V18C19.5 17.25 20.1562 16.5 21 16.5C21.75 16.5 22.5 17.25 22.5 18V37.5ZM30 37.5C30 38.3438 29.25 39 28.5 39C27.6562 39 27 38.3438 27 37.5V18C27 17.25 27.6562 16.5 28.5 16.5C29.25 16.5 30 17.25 30 18V37.5ZM29.7188 2.34375L33.1875 7.5H39.75C40.9688 7.5 42 8.53125 42 9.75C42 11.0625 40.9688 12 39.75 12H39V40.5C39 44.7188 35.625 48 31.5 48H10.5C6.28125 48 3 44.7188 3 40.5V12H2.25C0.9375 12 0 11.0625 0 9.75C0 8.53125 0.9375 7.5 2.25 7.5H8.71875L12.1875 2.34375C13.125 0.9375 14.8125 0 16.5938 0H25.3125C27.0938 0 28.7812 0.9375 29.7188 2.34375ZM14.1562 7.5H27.75L25.9688 4.875C25.875 4.6875 25.5938 4.5 25.3125 4.5H16.5938C16.3125 4.5 16.0312 4.6875 15.9375 4.875L14.1562 7.5ZM7.5 40.5C7.5 42.1875 8.8125 43.5 10.5 43.5H31.5C33.0938 43.5 34.5 42.1875 34.5 40.5V12H7.5V40.5Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div
                  className="image_gallery-item"
                  onMouseOver={(e) => handleGalleryImage(e.target, true)}
                  onMouseOut={(e) => handleGalleryImage(e.target, false)}
                >
                  <div
                    className="image_gallery-bg"
                    style={{
                      background: `url("/imgs/profile/image_gallery-item_1.jpg") 50% 50% / cover`,
                    }}
                  ></div>
                  <svg
                    width="42"
                    height="48"
                    viewBox="0 0 42 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 37.5C15 38.3438 14.25 39 13.5 39C12.6562 39 12 38.3438 12 37.5V18C12 17.25 12.6562 16.5 13.5 16.5C14.25 16.5 15 17.25 15 18V37.5ZM22.5 37.5C22.5 38.3438 21.75 39 21 39C20.1562 39 19.5 38.3438 19.5 37.5V18C19.5 17.25 20.1562 16.5 21 16.5C21.75 16.5 22.5 17.25 22.5 18V37.5ZM30 37.5C30 38.3438 29.25 39 28.5 39C27.6562 39 27 38.3438 27 37.5V18C27 17.25 27.6562 16.5 28.5 16.5C29.25 16.5 30 17.25 30 18V37.5ZM29.7188 2.34375L33.1875 7.5H39.75C40.9688 7.5 42 8.53125 42 9.75C42 11.0625 40.9688 12 39.75 12H39V40.5C39 44.7188 35.625 48 31.5 48H10.5C6.28125 48 3 44.7188 3 40.5V12H2.25C0.9375 12 0 11.0625 0 9.75C0 8.53125 0.9375 7.5 2.25 7.5H8.71875L12.1875 2.34375C13.125 0.9375 14.8125 0 16.5938 0H25.3125C27.0938 0 28.7812 0.9375 29.7188 2.34375ZM14.1562 7.5H27.75L25.9688 4.875C25.875 4.6875 25.5938 4.5 25.3125 4.5H16.5938C16.3125 4.5 16.0312 4.6875 15.9375 4.875L14.1562 7.5ZM7.5 40.5C7.5 42.1875 8.8125 43.5 10.5 43.5H31.5C33.0938 43.5 34.5 42.1875 34.5 40.5V12H7.5V40.5Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div
                  className="image_gallery-item"
                  onMouseOver={(e) => handleGalleryImage(e.target, true)}
                  onMouseOut={(e) => handleGalleryImage(e.target, false)}
                >
                  <div
                    className="image_gallery-bg"
                    style={{
                      background: `url("/imgs/profile/image_gallery-item_1.jpg") 50% 50% / cover`,
                    }}
                  ></div>
                  <svg
                    width="42"
                    height="48"
                    viewBox="0 0 42 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 37.5C15 38.3438 14.25 39 13.5 39C12.6562 39 12 38.3438 12 37.5V18C12 17.25 12.6562 16.5 13.5 16.5C14.25 16.5 15 17.25 15 18V37.5ZM22.5 37.5C22.5 38.3438 21.75 39 21 39C20.1562 39 19.5 38.3438 19.5 37.5V18C19.5 17.25 20.1562 16.5 21 16.5C21.75 16.5 22.5 17.25 22.5 18V37.5ZM30 37.5C30 38.3438 29.25 39 28.5 39C27.6562 39 27 38.3438 27 37.5V18C27 17.25 27.6562 16.5 28.5 16.5C29.25 16.5 30 17.25 30 18V37.5ZM29.7188 2.34375L33.1875 7.5H39.75C40.9688 7.5 42 8.53125 42 9.75C42 11.0625 40.9688 12 39.75 12H39V40.5C39 44.7188 35.625 48 31.5 48H10.5C6.28125 48 3 44.7188 3 40.5V12H2.25C0.9375 12 0 11.0625 0 9.75C0 8.53125 0.9375 7.5 2.25 7.5H8.71875L12.1875 2.34375C13.125 0.9375 14.8125 0 16.5938 0H25.3125C27.0938 0 28.7812 0.9375 29.7188 2.34375ZM14.1562 7.5H27.75L25.9688 4.875C25.875 4.6875 25.5938 4.5 25.3125 4.5H16.5938C16.3125 4.5 16.0312 4.6875 15.9375 4.875L14.1562 7.5ZM7.5 40.5C7.5 42.1875 8.8125 43.5 10.5 43.5H31.5C33.0938 43.5 34.5 42.1875 34.5 40.5V12H7.5V40.5Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div
                  className="image_gallery-item"
                  onMouseOver={(e) => handleGalleryImage(e.target, true)}
                  onMouseOut={(e) => handleGalleryImage(e.target, false)}
                >
                  <div
                    className="image_gallery-bg"
                    style={{
                      background: `url("/imgs/profile/image_gallery-item_1.jpg") 50% 50% / cover`,
                    }}
                  ></div>
                  <svg
                    width="42"
                    height="48"
                    viewBox="0 0 42 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 37.5C15 38.3438 14.25 39 13.5 39C12.6562 39 12 38.3438 12 37.5V18C12 17.25 12.6562 16.5 13.5 16.5C14.25 16.5 15 17.25 15 18V37.5ZM22.5 37.5C22.5 38.3438 21.75 39 21 39C20.1562 39 19.5 38.3438 19.5 37.5V18C19.5 17.25 20.1562 16.5 21 16.5C21.75 16.5 22.5 17.25 22.5 18V37.5ZM30 37.5C30 38.3438 29.25 39 28.5 39C27.6562 39 27 38.3438 27 37.5V18C27 17.25 27.6562 16.5 28.5 16.5C29.25 16.5 30 17.25 30 18V37.5ZM29.7188 2.34375L33.1875 7.5H39.75C40.9688 7.5 42 8.53125 42 9.75C42 11.0625 40.9688 12 39.75 12H39V40.5C39 44.7188 35.625 48 31.5 48H10.5C6.28125 48 3 44.7188 3 40.5V12H2.25C0.9375 12 0 11.0625 0 9.75C0 8.53125 0.9375 7.5 2.25 7.5H8.71875L12.1875 2.34375C13.125 0.9375 14.8125 0 16.5938 0H25.3125C27.0938 0 28.7812 0.9375 29.7188 2.34375ZM14.1562 7.5H27.75L25.9688 4.875C25.875 4.6875 25.5938 4.5 25.3125 4.5H16.5938C16.3125 4.5 16.0312 4.6875 15.9375 4.875L14.1562 7.5ZM7.5 40.5C7.5 42.1875 8.8125 43.5 10.5 43.5H31.5C33.0938 43.5 34.5 42.1875 34.5 40.5V12H7.5V40.5Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div
                  className="image_gallery-item"
                  onMouseOver={(e) => handleGalleryImage(e.target, true)}
                  onMouseOut={(e) => handleGalleryImage(e.target, false)}
                >
                  <div
                    className="image_gallery-bg"
                    style={{
                      background: `url("/imgs/profile/image_gallery-item_1.jpg") 50% 50% / cover`,
                    }}
                  ></div>
                  <svg
                    width="42"
                    height="48"
                    viewBox="0 0 42 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 37.5C15 38.3438 14.25 39 13.5 39C12.6562 39 12 38.3438 12 37.5V18C12 17.25 12.6562 16.5 13.5 16.5C14.25 16.5 15 17.25 15 18V37.5ZM22.5 37.5C22.5 38.3438 21.75 39 21 39C20.1562 39 19.5 38.3438 19.5 37.5V18C19.5 17.25 20.1562 16.5 21 16.5C21.75 16.5 22.5 17.25 22.5 18V37.5ZM30 37.5C30 38.3438 29.25 39 28.5 39C27.6562 39 27 38.3438 27 37.5V18C27 17.25 27.6562 16.5 28.5 16.5C29.25 16.5 30 17.25 30 18V37.5ZM29.7188 2.34375L33.1875 7.5H39.75C40.9688 7.5 42 8.53125 42 9.75C42 11.0625 40.9688 12 39.75 12H39V40.5C39 44.7188 35.625 48 31.5 48H10.5C6.28125 48 3 44.7188 3 40.5V12H2.25C0.9375 12 0 11.0625 0 9.75C0 8.53125 0.9375 7.5 2.25 7.5H8.71875L12.1875 2.34375C13.125 0.9375 14.8125 0 16.5938 0H25.3125C27.0938 0 28.7812 0.9375 29.7188 2.34375ZM14.1562 7.5H27.75L25.9688 4.875C25.875 4.6875 25.5938 4.5 25.3125 4.5H16.5938C16.3125 4.5 16.0312 4.6875 15.9375 4.875L14.1562 7.5ZM7.5 40.5C7.5 42.1875 8.8125 43.5 10.5 43.5H31.5C33.0938 43.5 34.5 42.1875 34.5 40.5V12H7.5V40.5Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div
                  className="image_gallery-item"
                  onMouseOver={(e) => handleGalleryImage(e.target, true)}
                  onMouseOut={(e) => handleGalleryImage(e.target, false)}
                >
                  <div
                    className="image_gallery-bg"
                    style={{
                      background: `url("/imgs/profile/image_gallery-item_1.jpg") 50% 50% / cover`,
                    }}
                  ></div>
                  <svg
                    width="42"
                    height="48"
                    viewBox="0 0 42 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 37.5C15 38.3438 14.25 39 13.5 39C12.6562 39 12 38.3438 12 37.5V18C12 17.25 12.6562 16.5 13.5 16.5C14.25 16.5 15 17.25 15 18V37.5ZM22.5 37.5C22.5 38.3438 21.75 39 21 39C20.1562 39 19.5 38.3438 19.5 37.5V18C19.5 17.25 20.1562 16.5 21 16.5C21.75 16.5 22.5 17.25 22.5 18V37.5ZM30 37.5C30 38.3438 29.25 39 28.5 39C27.6562 39 27 38.3438 27 37.5V18C27 17.25 27.6562 16.5 28.5 16.5C29.25 16.5 30 17.25 30 18V37.5ZM29.7188 2.34375L33.1875 7.5H39.75C40.9688 7.5 42 8.53125 42 9.75C42 11.0625 40.9688 12 39.75 12H39V40.5C39 44.7188 35.625 48 31.5 48H10.5C6.28125 48 3 44.7188 3 40.5V12H2.25C0.9375 12 0 11.0625 0 9.75C0 8.53125 0.9375 7.5 2.25 7.5H8.71875L12.1875 2.34375C13.125 0.9375 14.8125 0 16.5938 0H25.3125C27.0938 0 28.7812 0.9375 29.7188 2.34375ZM14.1562 7.5H27.75L25.9688 4.875C25.875 4.6875 25.5938 4.5 25.3125 4.5H16.5938C16.3125 4.5 16.0312 4.6875 15.9375 4.875L14.1562 7.5ZM7.5 40.5C7.5 42.1875 8.8125 43.5 10.5 43.5H31.5C33.0938 43.5 34.5 42.1875 34.5 40.5V12H7.5V40.5Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div
                  className="image_gallery-item"
                  onMouseOver={(e) => handleGalleryImage(e.target, true)}
                  onMouseOut={(e) => handleGalleryImage(e.target, false)}
                >
                  <div
                    className="image_gallery-bg"
                    style={{
                      background: `url("/imgs/profile/image_gallery-item_1.jpg") 50% 50% / cover`,
                    }}
                  ></div>
                  <svg
                    width="42"
                    height="48"
                    viewBox="0 0 42 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 37.5C15 38.3438 14.25 39 13.5 39C12.6562 39 12 38.3438 12 37.5V18C12 17.25 12.6562 16.5 13.5 16.5C14.25 16.5 15 17.25 15 18V37.5ZM22.5 37.5C22.5 38.3438 21.75 39 21 39C20.1562 39 19.5 38.3438 19.5 37.5V18C19.5 17.25 20.1562 16.5 21 16.5C21.75 16.5 22.5 17.25 22.5 18V37.5ZM30 37.5C30 38.3438 29.25 39 28.5 39C27.6562 39 27 38.3438 27 37.5V18C27 17.25 27.6562 16.5 28.5 16.5C29.25 16.5 30 17.25 30 18V37.5ZM29.7188 2.34375L33.1875 7.5H39.75C40.9688 7.5 42 8.53125 42 9.75C42 11.0625 40.9688 12 39.75 12H39V40.5C39 44.7188 35.625 48 31.5 48H10.5C6.28125 48 3 44.7188 3 40.5V12H2.25C0.9375 12 0 11.0625 0 9.75C0 8.53125 0.9375 7.5 2.25 7.5H8.71875L12.1875 2.34375C13.125 0.9375 14.8125 0 16.5938 0H25.3125C27.0938 0 28.7812 0.9375 29.7188 2.34375ZM14.1562 7.5H27.75L25.9688 4.875C25.875 4.6875 25.5938 4.5 25.3125 4.5H16.5938C16.3125 4.5 16.0312 4.6875 15.9375 4.875L14.1562 7.5ZM7.5 40.5C7.5 42.1875 8.8125 43.5 10.5 43.5H31.5C33.0938 43.5 34.5 42.1875 34.5 40.5V12H7.5V40.5Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div
                  className="image_gallery-item"
                  onMouseOver={(e) => handleGalleryImage(e.target, true)}
                  onMouseOut={(e) => handleGalleryImage(e.target, false)}
                >
                  <div
                    className="image_gallery-bg"
                    style={{
                      background: `url("/imgs/profile/image_gallery-item_1.jpg") 50% 50% / cover`,
                    }}
                  ></div>
                  <svg
                    width="42"
                    height="48"
                    viewBox="0 0 42 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 37.5C15 38.3438 14.25 39 13.5 39C12.6562 39 12 38.3438 12 37.5V18C12 17.25 12.6562 16.5 13.5 16.5C14.25 16.5 15 17.25 15 18V37.5ZM22.5 37.5C22.5 38.3438 21.75 39 21 39C20.1562 39 19.5 38.3438 19.5 37.5V18C19.5 17.25 20.1562 16.5 21 16.5C21.75 16.5 22.5 17.25 22.5 18V37.5ZM30 37.5C30 38.3438 29.25 39 28.5 39C27.6562 39 27 38.3438 27 37.5V18C27 17.25 27.6562 16.5 28.5 16.5C29.25 16.5 30 17.25 30 18V37.5ZM29.7188 2.34375L33.1875 7.5H39.75C40.9688 7.5 42 8.53125 42 9.75C42 11.0625 40.9688 12 39.75 12H39V40.5C39 44.7188 35.625 48 31.5 48H10.5C6.28125 48 3 44.7188 3 40.5V12H2.25C0.9375 12 0 11.0625 0 9.75C0 8.53125 0.9375 7.5 2.25 7.5H8.71875L12.1875 2.34375C13.125 0.9375 14.8125 0 16.5938 0H25.3125C27.0938 0 28.7812 0.9375 29.7188 2.34375ZM14.1562 7.5H27.75L25.9688 4.875C25.875 4.6875 25.5938 4.5 25.3125 4.5H16.5938C16.3125 4.5 16.0312 4.6875 15.9375 4.875L14.1562 7.5ZM7.5 40.5C7.5 42.1875 8.8125 43.5 10.5 43.5H31.5C33.0938 43.5 34.5 42.1875 34.5 40.5V12H7.5V40.5Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div
                  className="image_gallery-item"
                  onMouseOver={(e) => handleGalleryImage(e.target, true)}
                  onMouseOut={(e) => handleGalleryImage(e.target, false)}
                >
                  <div
                    className="image_gallery-bg"
                    style={{
                      background: `url("/imgs/profile/image_gallery-item_1.jpg") 50% 50% / cover`,
                    }}
                  ></div>
                  <svg
                    width="42"
                    height="48"
                    viewBox="0 0 42 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 37.5C15 38.3438 14.25 39 13.5 39C12.6562 39 12 38.3438 12 37.5V18C12 17.25 12.6562 16.5 13.5 16.5C14.25 16.5 15 17.25 15 18V37.5ZM22.5 37.5C22.5 38.3438 21.75 39 21 39C20.1562 39 19.5 38.3438 19.5 37.5V18C19.5 17.25 20.1562 16.5 21 16.5C21.75 16.5 22.5 17.25 22.5 18V37.5ZM30 37.5C30 38.3438 29.25 39 28.5 39C27.6562 39 27 38.3438 27 37.5V18C27 17.25 27.6562 16.5 28.5 16.5C29.25 16.5 30 17.25 30 18V37.5ZM29.7188 2.34375L33.1875 7.5H39.75C40.9688 7.5 42 8.53125 42 9.75C42 11.0625 40.9688 12 39.75 12H39V40.5C39 44.7188 35.625 48 31.5 48H10.5C6.28125 48 3 44.7188 3 40.5V12H2.25C0.9375 12 0 11.0625 0 9.75C0 8.53125 0.9375 7.5 2.25 7.5H8.71875L12.1875 2.34375C13.125 0.9375 14.8125 0 16.5938 0H25.3125C27.0938 0 28.7812 0.9375 29.7188 2.34375ZM14.1562 7.5H27.75L25.9688 4.875C25.875 4.6875 25.5938 4.5 25.3125 4.5H16.5938C16.3125 4.5 16.0312 4.6875 15.9375 4.875L14.1562 7.5ZM7.5 40.5C7.5 42.1875 8.8125 43.5 10.5 43.5H31.5C33.0938 43.5 34.5 42.1875 34.5 40.5V12H7.5V40.5Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Col>

      <Col xs={12} className="mobile tablet">
        <div className="select_image-buttons justify-content-md-end justify-content-lg-between">
          <Button icon={iconSave} content="Lưu" />
          <Button icon={iconEye} content="Xem Trước" />
          <Button className="button-red" icon={iconFly} content="Đăng Bài" />
        </div>
      </Col>
    </Row>
  );
};

export const ProfileHeader = ({ ...props }) => {
  return (
    <Row>
      <Col>
        <div className="profile-body">
          <div
            className="profile-banner"
            style={{
              background: `url("${props.banner}") 50% 50% / cover`, //
            }}
          ></div>
          <div className="profile-detail">
            <div className="profile-account">
              <div
                className="profile-avt"
                style={{
                  background: `url("${props.avt}") 50% 50% / cover`, //
                }}
              ></div>
            </div>
            <div className="d-flex align-items-center justify-content-between author_detail">
              <div className="d-flex align-items-center justify-content-between profile-author_detail">
                <h5 className="author_name">
                  {props.author}
                  <Link to="/update-profile">
                    <div className="profile-update mobile">
                      <svg
                        width="18"
                        height="15"
                        viewBox="0 0 18 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.34766 7.75C4.43359 7.75 2.875 6.19141 2.875 4.25C2.875 2.33594 4.43359 0.75 6.34766 0.75C8.26172 0.75 9.84766 2.33594 9.84766 4.25C9.84766 6.19141 8.26172 7.75 6.34766 7.75ZM7.74219 9.0625C9.02734 9.0625 10.1758 9.58203 11.0234 10.4023L9.76562 11.6328C9.57422 11.8242 9.46484 12.0703 9.41016 12.3438L9 14.2852C8.97266 14.4492 8.97266 14.6133 9.02734 14.75H1.17969C0.660156 14.75 0.25 14.3398 0.25 13.8203C0.25 11.1953 2.35547 9.0625 4.98047 9.0625H7.74219ZM10.3945 12.2617L13.8125 8.84375L15.7812 10.8125L12.3633 14.2305C12.2812 14.3125 12.1992 14.3398 12.1172 14.3672L10.1484 14.75C9.98438 14.8047 9.82031 14.6406 9.875 14.4766L10.2578 12.5078C10.2852 12.4258 10.3125 12.3438 10.3945 12.2617ZM17.4492 7.75C17.832 8.13281 17.832 8.76172 17.4492 9.14453L16.4102 10.1836L14.4414 8.21484L15.4805 7.17578C15.8633 6.79297 16.4922 6.79297 16.875 7.17578L17.4492 7.75Z"
                          fill="#F81539"
                          fillOpacity="0.75"
                        />
                      </svg>
                      <p>Sửa Hồ Sơ</p>
                    </div>
                  </Link>
                </h5>
                <div className="profile-activities">
                  <h5
                    className="activities active"
                    onClick={(e) => handleProfileHeader(e.target, 1)}
                  >
                    Bài Viết
                  </h5>
                  <h5
                    className="activities"
                    onClick={(e) => handleProfileHeader(e.target, 2)}
                  >
                    Viết Bài
                  </h5>
                  <h5
                    className="activities"
                    onClick={(e) => handleProfileHeader(e.target, 3)}
                  >
                    Thống Kê
                  </h5>
                </div>
              </div>
              <Link to="/update-profile">
                <div className="profile-update">
                  <svg
                    width="18"
                    height="15"
                    viewBox="0 0 18 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.34766 7.75C4.43359 7.75 2.875 6.19141 2.875 4.25C2.875 2.33594 4.43359 0.75 6.34766 0.75C8.26172 0.75 9.84766 2.33594 9.84766 4.25C9.84766 6.19141 8.26172 7.75 6.34766 7.75ZM7.74219 9.0625C9.02734 9.0625 10.1758 9.58203 11.0234 10.4023L9.76562 11.6328C9.57422 11.8242 9.46484 12.0703 9.41016 12.3438L9 14.2852C8.97266 14.4492 8.97266 14.6133 9.02734 14.75H1.17969C0.660156 14.75 0.25 14.3398 0.25 13.8203C0.25 11.1953 2.35547 9.0625 4.98047 9.0625H7.74219ZM10.3945 12.2617L13.8125 8.84375L15.7812 10.8125L12.3633 14.2305C12.2812 14.3125 12.1992 14.3398 12.1172 14.3672L10.1484 14.75C9.98438 14.8047 9.82031 14.6406 9.875 14.4766L10.2578 12.5078C10.2852 12.4258 10.3125 12.3438 10.3945 12.2617ZM17.4492 7.75C17.832 8.13281 17.832 8.76172 17.4492 9.14453L16.4102 10.1836L14.4414 8.21484L15.4805 7.17578C15.8633 6.79297 16.4922 6.79297 16.875 7.17578L17.4492 7.75Z"
                      fill="#F81539"
                      fillOpacity="0.75"
                    />
                  </svg>
                  <p>Sửa Hồ Sơ</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export const ProfilePost = ({ ...props }) => {
  return (
    <Col xs={12} md={6} lg={4} xl={3} className="popularpost category_post">
      <div className="popularposts-item">
        <Row>
          <Col xs={12} sm={4} md={12}>
            <div
              className="popularposts-image"
              style={{
                background: `url("${props.postURL}") 50% 50% / cover`,
              }}
            ></div>
          </Col>
          <Col xs={12} sm={8} md={12}>
            <h4>{props.postTitle}</h4>
            <p>{props.postContent}</p>
            <div className="popularposts-author">
              <img src={props.author} alt="authors" />
              <div className="author-info">
                <h5>{props.authorName}</h5>
                <p>{props.createDate}</p>
              </div>
              <BsBookmark />
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

// BIG TABS
export const CreatePost = ({ ...props }) => {
  return (
    <div className="create_post">
      <ProfileTab />
      <ImagePost />
      <VideoPost className="d-none" />
    </div>
  );
};

export const ListPosts = ({ ...props }) => {
  return (
    <div className="list_posts">
      <Row>
        <ProfilePost
          postURL="/imgs/popularposts/popularposts-item_1.jpg"
          postTitle="How to choose the right laptop for programming"
          postContent="Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs"
          author="/imgs/popularposts/authors/popularposts-authors-item_1.jpg"
          authorName="Louis Hoebregts"
          createDate="July 25, 2022"
        />
        <ProfilePost
          postURL="/imgs/popularposts/popularposts-item_2.jpg"
          postTitle="How we built the first real self-driving car"
          postContent="Electric self-driving cars will save millions of lives and significantly accelerate the world’s transition to sustainable energy, but only when"
          author="/imgs/popularposts/authors/popularposts-authors-item_2.jpg"
          authorName="Louis HoebrMaryegts"
          createDate="July 14, 2022"
        />
        <ProfilePost
          postURL="/imgs/popularposts/popularposts-item_3.jpg"
          postTitle="How to Persuade Your Parents to Buy Fast Food"
          postContent="Parents often don’t want to buy fast food. They may be worried that it’s too expensive, unhealthy, or not worth the effort and time."
          author="/imgs/popularposts/authors/popularposts-authors-item_3.jpg"
          authorName="Jon Kantner"
          createDate="May 10, 2022"
        />
        <ProfilePost
          postURL="/imgs/popularposts/popularposts-item_4.jpg"
          postTitle="How to choose the right laptop for programming"
          postContent="Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs"
          author="/imgs/popularposts/authors/popularposts-authors-item_4.jpg"
          authorName="Louis Hoebregts"
          createDate="July 25, 2022"
        />
        <ProfilePost
          postURL="/imgs/popularposts/popularposts-item_1.jpg"
          postTitle="How to choose the right laptop for programming"
          postContent="Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs"
          author="/imgs/popularposts/authors/popularposts-authors-item_1.jpg"
          authorName="Louis Hoebregts"
          createDate="July 25, 2022"
        />
        <ProfilePost
          postURL="/imgs/popularposts/popularposts-item_2.jpg"
          postTitle="How we built the first real self-driving car"
          postContent="Electric self-driving cars will save millions of lives and significantly accelerate the world’s transition to sustainable energy, but only when"
          author="/imgs/popularposts/authors/popularposts-authors-item_2.jpg"
          authorName="Louis HoebrMaryegts"
          createDate="July 14, 2022"
        />
        <ProfilePost
          postURL="/imgs/popularposts/popularposts-item_3.jpg"
          postTitle="How to Persuade Your Parents to Buy Fast Food"
          postContent="Parents often don’t want to buy fast food. They may be worried that it’s too expensive, unhealthy, or not worth the effort and time."
          author="/imgs/popularposts/authors/popularposts-authors-item_3.jpg"
          authorName="Jon Kantner"
          createDate="May 10, 2022"
        />
        <ProfilePost
          postURL="/imgs/popularposts/popularposts-item_4.jpg"
          postTitle="How to choose the right laptop for programming"
          postContent="Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs"
          author="/imgs/popularposts/authors/popularposts-authors-item_4.jpg"
          authorName="Louis Hoebregts"
          createDate="July 25, 2022"
        />
        <ProfilePost
          postURL="/imgs/popularposts/popularposts-item_1.jpg"
          postTitle="How to choose the right laptop for programming"
          postContent="Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs"
          author="/imgs/popularposts/authors/popularposts-authors-item_1.jpg"
          authorName="Louis Hoebregts"
          createDate="July 25, 2022"
        />
        <ProfilePost
          postURL="/imgs/popularposts/popularposts-item_2.jpg"
          postTitle="How we built the first real self-driving car"
          postContent="Electric self-driving cars will save millions of lives and significantly accelerate the world’s transition to sustainable energy, but only when"
          author="/imgs/popularposts/authors/popularposts-authors-item_2.jpg"
          authorName="Louis HoebrMaryegts"
          createDate="July 14, 2022"
        />
        <ProfilePost
          postURL="/imgs/popularposts/popularposts-item_3.jpg"
          postTitle="How to Persuade Your Parents to Buy Fast Food"
          postContent="Parents often don’t want to buy fast food. They may be worried that it’s too expensive, unhealthy, or not worth the effort and time."
          author="/imgs/popularposts/authors/popularposts-authors-item_3.jpg"
          authorName="Jon Kantner"
          createDate="May 10, 2022"
        />
        <ProfilePost
          postURL="/imgs/popularposts/popularposts-item_4.jpg"
          postTitle="How to choose the right laptop for programming"
          postContent="Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs"
          author="/imgs/popularposts/authors/popularposts-authors-item_4.jpg"
          authorName="Louis Hoebregts"
          createDate="July 25, 2022"
        />
        <ProfilePost
          postURL="/imgs/popularposts/popularposts-item_1.jpg"
          postTitle="How to choose the right laptop for programming"
          postContent="Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs"
          author="/imgs/popularposts/authors/popularposts-authors-item_1.jpg"
          authorName="Louis Hoebregts"
          createDate="July 25, 2022"
        />
        <ProfilePost
          postURL="/imgs/popularposts/popularposts-item_2.jpg"
          postTitle="How we built the first real self-driving car"
          postContent="Electric self-driving cars will save millions of lives and significantly accelerate the world’s transition to sustainable energy, but only when"
          author="/imgs/popularposts/authors/popularposts-authors-item_2.jpg"
          authorName="Louis HoebrMaryegts"
          createDate="July 14, 2022"
        />
        <ProfilePost
          postURL="/imgs/popularposts/popularposts-item_3.jpg"
          postTitle="How to Persuade Your Parents to Buy Fast Food"
          postContent="Parents often don’t want to buy fast food. They may be worried that it’s too expensive, unhealthy, or not worth the effort and time."
          author="/imgs/popularposts/authors/popularposts-authors-item_3.jpg"
          authorName="Jon Kantner"
          createDate="May 10, 2022"
        />
      </Row>
      <Pagination count={10} shape="rounded" />
    </div>
  );
};

// FUNCTION
export const handleProfileHeader = (e, page) => {
  let listPosts = document.querySelector(".list_posts");
  let createPost = document.querySelector(".create_post");
  let statisPosts = document.querySelector(".statistic_posts");
  handleSelect(e, objSelect);
  if (page === 1) {
    listPosts.classList.remove("d-none");
    createPost.classList.add("d-none");
    statisPosts.classList.add("d-none");
  } else if (page === 2) {
    createPost.classList.remove("d-none");
    listPosts.classList.add("d-none");
    statisPosts.classList.add("d-none");
  } else if (page === 3) {
    statisPosts.classList.remove("d-none");
    listPosts.classList.add("d-none");
    createPost.classList.add("d-none");
  }
};

export const handleImagePost = (e) => {
  let imagePost = document.querySelector(".image_post");
  let videoPost = document.querySelector(".video_post");
  if (imagePost.classList.contains("d-none")) {
    imagePost.classList.remove("d-none");
  }
  videoPost.classList.add("d-none");

  handleSelect(e, objSelect1);
};

export const handleVideoPost = (e) => {
  let imagePost = document.querySelector(".image_post");
  let videoPost = document.querySelector(".video_post");
  if (videoPost.classList.contains("d-none")) {
    videoPost.classList.remove("d-none");
  }
  imagePost.classList.add("d-none");

  handleSelect(e, objSelect1);
};
