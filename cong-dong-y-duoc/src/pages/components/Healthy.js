import { Col, Container, Row } from "react-bootstrap";
import { BsBookmark, BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Healthy = () => {
  return (
    <div className="newposts healthy">
      <Container>
        <div className="header">
          <div className="mark"></div>
          <h3 className="header-title">Sức Khỏe & Đời Sống</h3>
          <div className="showall healthy-showall">
            Xem Tất Cả
            <BsChevronRight />
          </div>
        </div>
        <Row>
          <NewPost
            newpostURL="/imgs/healthy/healthy-item_1.jpg"
            newpostTitle="12 Mobile UX Design Trends For 2018"
            newpostContent="Things move quickly in the mobile app universe. To succeed in the field of mobile UX design, designers must have the foresight and prepare for new challenges around the corner"
            avt="/imgs/healthy/authors/healthy-authors-item_1.jpg"
            authorName="Jon Kantner"
            createDate="July 14, 2022"
          />
          <NewPost
            newpostURL="/imgs/healthy/healthy-item_2.jpg"
            newpostTitle="No boat bottomfish: Jetty fishing on the Washington Coast"
            newpostContent="Cast from the rocks to bring home fresh fish tacos in this iconic spring and summer fishery. — Are you looking to go fishing and bring home deliciou"
            avt="/imgs/healthy/authors/healthy-authors-item_2.jpg"
            authorName="Louis Hoebregts"
            createDate="July 13, 2022"
          />
          <NewPost
            newpostURL="/imgs/healthy/healthy-item_3.jpg"
            newpostTitle="What a Disabled Squirrel Taught Me About Life, Work, and Love"
            newpostContent="Why it helps to know what it’s like, and the exquisite beauty of empathy These days, the wood patio area just outside my kitchen door is a riot"
            avt="/imgs/healthy/authors/healthy-authors-item_3.jpg"
            authorName="James"
            createDate="July 12, 2022"
          />
          <NewPost
            newpostURL="/imgs/healthy/healthy-item_4.jpg"
            newpostTitle="Becoming a Self-Driving Car & Machine Learning Engineer"
            newpostContent="How I left my full-time job, studied at Udacity, and landed a job at BMW The past year has been quite a journey for me. A year ago I left my full-time"
            avt="/imgs/healthy/authors/healthy-authors-item_4.jpg"
            authorName="Cassie Evans"
            createDate="July 12, 2022"
          />
          <NewPost
            newpostURL="/imgs/healthy/healthy-item_5.jpg"
            newpostTitle="How to Become a Master Designer"
            newpostContent="Many outsiders believe that designers are unicorns, gifted or special in some way. We have an innate ability to create gorgeous interfaces, a natural talent for matching complementary colors, an unexplainable intuition…"
            avt="/imgs/healthy/authors/healthy-authors-item_5.jpg"
            authorName="Cassie Evans"
            createDate="July 12, 2022"
          />
          <NewPost
            newpostURL="/imgs/healthy/healthy-item_6.jpg"
            newpostTitle="This free course can teach you music programming basics in less than an hour"
            newpostContent="A Berlin-based music software company, just released a free interactive music course that runs right in your browser. One thing that"
            avt="/imgs/healthy/authors/healthy-authors-item_6.jpg"
            authorName="Patricia"
            createDate="July 09, 2022"
          />
        </Row>
      </Container>
    </div>
  );
};
export default Healthy;

export const NewPost = ({ ...props }) => {
  return (
    <Col xs={12} lg={6} className="newpost">
      <Link to="/post-detail">
        <div className="newposts-item">
          <div
            className="newpost-image"
            style={{
              background: `url("${props.newpostURL}") 50% 50% / cover`,
              backgroundRepeat: "none",
            }}
          ></div>
          <div className="newposts-content">
            <h4>{props.newpostTitle}</h4>
            <p className="newposts-summary">{props.newpostContent}</p>
            <div className="newposts-author">
              <img src={props.avt} alt="authors" />
              <div className="author-info">
                <h5>{props.authorName}</h5>
                <p>{props.createDate}</p>
              </div>
              <BsBookmark />
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};
