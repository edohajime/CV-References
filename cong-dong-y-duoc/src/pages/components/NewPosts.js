import { Col, Container, Row } from "react-bootstrap";
import { BsBookmark, BsChevronRight } from "react-icons/bs";

const NewPosts = () => {
  return (
    <div className="newposts">
      <Container>
        <div className="header">
          <div className="mark"></div>
          <h3 className="header-title">New Posts</h3>
          <div className="showall">
            Show All
            <BsChevronRight />
          </div>
        </div>
        <Row>
          <Col xs={6} className="newpost">
            <div className="newposts-item">
              <img src="/imgs/newposts/newposts-item_1.jpg" alt="newposts" />
              <div className="newposts-content">
                <h4>12 Mobile UX Design Trends For 2018</h4>
                <p>
                  Things move quickly in the mobile app universe. To succeed in
                  the field of mobile UX design, designers must have the
                  foresight and prepare for new challenges around the corner
                </p>
                <div className="newposts-author">
                  <img
                    src="/imgs/newposts/authors/newposts-authors-item_1.jpg"
                    alt="authors"
                  />
                  <div className="author-info">
                    <h5>Jon Kantner</h5>
                    <p>July 14, 2022</p>
                  </div>
                  <BsBookmark />
                </div>
              </div>
            </div>
          </Col>
          <Col xs={6} className="newpost">
            <div className="newposts-item">
              <img src="/imgs/newposts/newposts-item_2.jpg" alt="newposts" />
              <div className="newposts-content">
                <h4>
                  No boat bottomfish: Jetty fishing on the Washington Coast
                </h4>
                <p>
                  Cast from the rocks to bring home fresh fish tacos in this
                  iconic spring and summer fishery. — Are you looking to go
                  fishing and bring home deliciou
                </p>
                <div className="newposts-author">
                  <img
                    src="/imgs/newposts/authors/newposts-authors-item_2.jpg"
                    alt="authors"
                  />
                  <div className="author-info">
                    <h5>Louis Hoebregts</h5>
                    <p>July 13, 2022</p>
                  </div>
                  <BsBookmark />
                </div>
              </div>
            </div>
          </Col>
          <Col xs={6} className="newpost">
            <div className="newposts-item">
              <img src="/imgs/newposts/newposts-item_3.jpg" alt="newposts" />
              <div className="newposts-content">
                <h4>
                  What a Disabled Squirrel Taught Me About Life, Work, and Love
                </h4>
                <p>
                  Why it helps to know what it’s like, and the exquisite beauty
                  of empathy These days, the wood patio area just outside my
                  kitchen door is a riot
                </p>
                <div className="newposts-author">
                  <img
                    src="/imgs/newposts/authors/newposts-authors-item_3.jpg"
                    alt="authors"
                  />
                  <div className="author-info">
                    <h5>James</h5>
                    <p>July 12, 2022</p>
                  </div>
                  <BsBookmark />
                </div>
              </div>
            </div>
          </Col>
          <Col xs={6} className="newpost">
            <div className="newposts-item">
              <img src="/imgs/newposts/newposts-item_4.jpg" alt="newposts" />
              <div className="newposts-content">
                <h4>Becoming a Self-Driving Car & Machine Learning Engineer</h4>
                <p>
                  How I left my full-time job, studied at Udacity, and landed a
                  job at BMW The past year has been quite a journey for me. A
                  year ago I left my full-time
                </p>
                <div className="newposts-author">
                  <img
                    src="/imgs/newposts/authors/newposts-authors-item_4.jpg"
                    alt="authors"
                  />
                  <div className="author-info">
                    <h5>Cassie Evans</h5>
                    <p>July 12, 2022</p>
                  </div>
                  <BsBookmark />
                </div>
              </div>
            </div>
          </Col>
          <Col xs={6} className="newpost">
            <div className="newposts-item">
              <img src="/imgs/newposts/newposts-item_5.jpg" alt="newposts" />
              <div className="newposts-content">
                <h4>How to Become a Master Designer</h4>
                <p>
                  Many outsiders believe that designers are unicorns, gifted or
                  special in some way. We have an innate ability to create
                  gorgeous interfaces, a natural talent for matching
                  complementary colors, an unexplainable intuition…
                </p>
                <div className="newposts-author">
                  <img
                    src="/imgs/newposts/authors/newposts-authors-item_5.jpg"
                    alt="authors"
                  />
                  <div className="author-info">
                    <h5>Linda</h5>
                    <p>July 10, 2022</p>
                  </div>
                  <BsBookmark />
                </div>
              </div>
            </div>
          </Col>
          <Col xs={6} className="newpost">
            <div className="newposts-item">
              <img src="/imgs/newposts/newposts-item_6.jpg" alt="newposts" />
              <div className="newposts-content">
                <h4>
                  This free course can teach you music programming basics in
                  less than an hour
                </h4>
                <p>
                  A Berlin-based music software company, just released a free
                  interactive music course that runs right in your browser. One
                  thing that
                </p>
                <div className="newposts-author">
                  <img
                    src="/imgs/newposts/authors/newposts-authors-item_6.jpg"
                    alt="authors"
                  />
                  <div className="author-info">
                    <h5>Patricia</h5>
                    <p>July 09, 2022</p>
                  </div>
                  <BsBookmark />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default NewPosts;
