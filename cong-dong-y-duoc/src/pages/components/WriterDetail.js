import { Col, Container, Row } from "react-bootstrap";
import { ListPosts } from "./Profile";
import { Link } from "react-router-dom";
import { iconNews, iconPlus, iconStar, iconUser } from "../utilities/Icons";

const WriterDetail = () => {
  return (
    <div>
      <Container>
        <WriterHeader
          banner="/imgs/profile/profile-item_1.jpg"
          avt="/imgs/profile/profile-item_2.jpg"
          author="Louis Hoebregts"
        />
        <div className="header">
          <div className="mark"></div>
          <h3 className="header-title">Bài Viết Mới Nhất</h3>
        </div>

        <ListPosts />
      </Container>
    </div>
  );
};

export const WriterHeader = ({ ...props }) => {
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
                <h5 className="author_name writer_name">
                  {props.author}
                  <div className="profile-update follow mobile">
                    {iconPlus}
                    <p>Follow</p>
                  </div>
                </h5>
                <div className="profile-activities writer-activities">
                  <h5 className="activities">
                    {iconStar}
                    Đánh Giá : 4.2
                  </h5>
                  <h5 className="activities">
                    {iconUser}
                    Follower : 1.2K
                  </h5>
                  <h5 className="activities">
                    {iconNews}
                    Bài Viết : 29
                  </h5>
                </div>
              </div>
              <div className="profile-update follow">
                {iconPlus}
                <p>Follow</p>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

// const Profile = () => {
//   const flickityOps = {
//     contain: true,
//     draggable: true,
//     freeScroll: true,
//     wrapAround: true,
//     prevNextButtons: false,
//     pageDots: false,
//     cellAlign: "center",
//     initialIndex: 1,
//   };

//   return (
//     <div className="profile">
//       <Container>
//         <ProfileHeader
//           banner="/imgs/profile/profile-item_1.jpg"
//           avt="/imgs/profile/profile-item_2.jpg"
//           author="Louis Hoebregts"
//         />
//         <ListPosts />
//         <CreatePost />
//         <Row className="statistic_posts">
//           <Col xs={12} lg={8}>
//             <div className="header">
//               <div className="mark"></div>
//               <h3 className="header-title">Lượt Xem Bài Viết</h3>
//             </div>
//             <div className="chart card-body">
//             </div>
//           </Col>
//           <Col xs={12} lg={4}>
//             <div className="header">
//               <div className="mark"></div>
//               <h3 className="header-title">Sự Hài Lòng Của Bài Viết</h3>
//             </div>
//             <div className="react-items card-body">
//               <Row>
//                 <Col xs={4} md={2} lg={4} className="react-item">
//                   <div className="react">
//                     <p>August 2022</p>
//                     {iconReactAngry}
//                     <p>20 điểm</p>
//                   </div>
//                 </Col>
//                 <Col xs={4} md={2} lg={4} className="react-item">
//                   <div className="react">
//                     <p>September 2022</p>
//                     {iconReactLove}
//                     <p>20 điểm</p>
//                   </div>
//                 </Col>
//                 <Col xs={4} md={2} lg={4} className="react-item">
//                   <div className="react">
//                     <p>October 2022</p>
//                     {iconReactStar}
//                     <p>20 điểm</p>
//                   </div>
//                 </Col>
//                 <Col xs={4} md={2} lg={4} className="react-item">
//                   <div className="react">
//                     <p>May 2022</p>
//                     {iconReactStar}
//                     <p>20 điểm</p>
//                   </div>
//                 </Col>
//                 <Col xs={4} md={2} lg={4} className="react-item">
//                   <div className="react">
//                     <p>June 2022</p>
//                     {iconReactNone}
//                     <p>20 điểm</p>
//                   </div>
//                 </Col>
//                 <Col xs={4} md={2} lg={4} className="react-item">
//                   <div className="react">
//                     <p>July 2022</p>
//                     {iconReactSmile}
//                     <p>20 điểm</p>
//                   </div>
//                 </Col>
//                 <Col xs={4} md={2} lg={4} className="react-item">
//                   <div className="react">
//                     <p>February 2022</p>
//                     {iconReactSmile}
//                     <p>20 điểm</p>
//                   </div>
//                 </Col>
//                 <Col xs={4} md={2} lg={4} className="react-item">
//                   <div className="react">
//                     <p>March 2022</p>
//                     {iconReactAngry}
//                     <p>20 điểm</p>
//                   </div>
//                 </Col>
//                 <Col xs={4} md={2} lg={4} className="react-item">
//                   <div className="react">
//                     <p>April 2022</p>
//                     {iconReactLove}
//                     <p>20 điểm</p>
//                   </div>
//                 </Col>
//               </Row>
//             </div>
//           </Col>
//           <Col xs={12}>
//             <div className="header">
//               <div className="mark"></div>
//               <h3 className="header-title">Bài Viết Của Tôi</h3>
//             </div>
//             <Flickity
//               className="my_posts"
//               elementType="div"
//               options={flickityOps}
//             >
//               <MyPost
//                 postURL="/imgs/medicine/medicine-item_2.jpg"
//                 postTitle="Tác dụng của Hoa đu đủ đực đối với y học dân gian và sức khỏe"
//                 views="15k"
//                 reviewStar="4.5"
//               />
//               <MyPost
//                 postURL="/imgs/medicine/medicine-item_2.jpg"
//                 postTitle="Tác dụng của Hoa đu đủ đực đối với y học dân gian và sức khỏe"
//                 views="15k"
//                 reviewStar="4.5"
//               />
//               <MyPost
//                 postURL="/imgs/medicine/medicine-item_2.jpg"
//                 postTitle="Tác dụng của Hoa đu đủ đực đối với y học dân gian và sức khỏe"
//                 views="15k"
//                 reviewStar="4.5"
//               />
//               <MyPost
//                 postURL="/imgs/medicine/medicine-item_2.jpg"
//                 postTitle="Tác dụng của Hoa đu đủ đực đối với y học dân gian và sức khỏe"
//                 views="15k"
//                 reviewStar="4.5"
//               />
//               <MyPost
//                 postURL="/imgs/medicine/medicine-item_2.jpg"
//                 postTitle="Tác dụng của Hoa đu đủ đực đối với y học dân gian và sức khỏe"
//                 views="15k"
//                 reviewStar="4.5"
//               />
//               <MyPost
//                 postURL="/imgs/medicine/medicine-item_2.jpg"
//                 postTitle="Tác dụng của Hoa đu đủ đực đối với y học dân gian và sức khỏe"
//                 views="15k"
//                 reviewStar="4.5"
//               />
//             </Flickity>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };
export default WriterDetail;
