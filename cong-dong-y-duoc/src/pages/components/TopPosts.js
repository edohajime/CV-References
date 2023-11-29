import { Col, Container, Row } from "react-bootstrap";
import { BsBookmark } from "react-icons/bs";
import { handleNextPopularPosts, handlePrevPopularPosts } from "./PopularPosts";

const TopPosts = () => {
  return (
    <div className="popularposts topposts">
      <Container>
        <div className="header">
          <div className="mark"></div>
          <h3 className="header-title">Top Posts</h3>
        </div>
        <Row className="popularposts-posts">
          <Col xs={3} className="popularpost visible">
            <div className="popularposts-item">
              <img src="/imgs/topposts/topposts-item_1.jpg" alt="topposts" />
              <h4>House boating on Lake Shasta</h4>
              <p>
                The best way to spend a long 4th of July weekend. Wake boarding,
                swimming, barbecues, and bonfires.
              </p>
              <div className="popularposts-author">
                <img
                  src="/imgs/topposts/authors/topposts-authors-item_1.jpg"
                  alt="authors"
                />
                <div className="author-info">
                  <h5>James</h5>
                  <p>July 14, 2022</p>
                </div>
                <BsBookmark />
              </div>
            </div>
          </Col>
          <Col xs={3} className="popularpost visible">
            <div className="popularposts-item">
              <img src="/imgs/topposts/topposts-item_2.jpg" alt="topposts" />
              <h4>How to choose the right laptop for programming</h4>
              <p>
                Choosing the right laptop for programming can be a tough
                process. It’s easy to get confused while researching the various
                options. There are many different laptop models out there, each
                with a different set of trade-offs
              </p>
              <div className="popularposts-author">
                <img
                  src="/imgs/topposts/authors/topposts-authors-item_2.jpg"
                  alt="authors"
                />
                <div className="author-info">
                  <h5>Robert</h5>
                  <p>July 14, 2022</p>
                </div>
                <BsBookmark />
              </div>
            </div>
          </Col>
          <Col xs={3} className="popularpost visible">
            <div className="popularposts-item">
              <img src="/imgs/topposts/topposts-item_3.jpg" alt="topposts" />
              <h4>Why Buying a New Car Makes More Sense than Buying Used</h4>
              <p>
                Many experts will tell you buying cars used is best for your
                long-term financial health. Here’s why they’re (mostly) wrong
              </p>
              <div className="popularposts-author">
                <img
                  src="/imgs/topposts/authors/topposts-authors-item_3.jpg"
                  alt="authors"
                />
                <div className="author-info">
                  <h5>Mary</h5>
                  <p>July 14, 2022</p>
                </div>
                <BsBookmark />
              </div>
            </div>
          </Col>
          <Col xs={3} className="popularpost visible">
            <div className="popularposts-item">
              <img src="/imgs/topposts/topposts-item_4.jpg" alt="topposts" />
              <h4>Lasagna is but a Pasta Cake</h4>
              <p>
                Re-envision the description of a common food from a different
                perspective — it is … pasta cake layered with cheese, meat,
                pasta repeated, bake and serve.
              </p>
              <div className="popularposts-author">
                <img
                  src="/imgs/topposts/authors/topposts-authors-item_4.jpg"
                  alt="authors"
                />
                <div className="author-info">
                  <h5>Jon Kantner</h5>
                  <p>May 10, 2022</p>
                </div>
                <BsBookmark />
              </div>
            </div>
          </Col>
          <Col xs={3} className="popularpost">
            <div className="popularposts-item">
              <img src="/imgs/topposts/topposts-item_2.jpg" alt="topposts" />
              <h4>How to choose the right laptop for programming</h4>
              <p>
                Choosing the right laptop for programming can be a tough
                process. It’s easy to get confused while researching the various
                options. There are many different laptop models out there, each
                with a different set of trade-offs
              </p>
              <div className="popularposts-author">
                <img
                  src="/imgs/topposts/authors/topposts-authors-item_2.jpg"
                  alt="authors"
                />
                <div className="author-info">
                  <h5>Louis Hoebregts</h5>
                  <p>July 25, 2022</p>
                </div>
                <BsBookmark />
              </div>
            </div>
          </Col>
          <Col xs={3} className="popularpost">
            <div className="popularposts-item">
              <img src="/imgs/topposts/topposts-item_3.jpg" alt="topposts" />
              <h4>How we built the first real self-driving car</h4>
              <p>
                Electric self-driving cars will save millions of lives and
                significantly accelerate the world’s transition to sustainable
                energy, but only when
              </p>
              <div className="popularposts-author">
                <img
                  src="/imgs/topposts/authors/topposts-authors-item_3.jpg"
                  alt="authors"
                />
                <div className="author-info">
                  <h5>Mary</h5>
                  <p>July 14, 2022</p>
                </div>
                <BsBookmark />
              </div>
            </div>
          </Col>
          <Col xs={3} className="popularpost">
            <div className="popularposts-item">
              <img src="/imgs/topposts/topposts-item_4.jpg" alt="topposts" />
              <h4>How to Persuade Your Parents to Buy Fast Food</h4>
              <p>
                Parents often don’t want to buy fast food. They may be worried
                that it’s too expensive, unhealthy, or not worth the effort and
                time.
              </p>
              <div className="popularposts-author">
                <img
                  src="/imgs/topposts/authors/topposts-authors-item_4.jpg"
                  alt="authors"
                />
                <div className="author-info">
                  <h5>Jon Kantner</h5>
                  <p>May 10, 2022</p>
                </div>
                <BsBookmark />
              </div>
            </div>
          </Col>
          <Col xs={3} className="popularpost">
            <div className="popularposts-item">
              <img src="/imgs/topposts/topposts-item_1.jpg" alt="topposts" />
              <h4>Opening Day of Boating Season, Seattle WA</h4>
              <p>
                Of course the Puget Sound is very watery, and where there is
                water, there are boats. Today is the Grand Opening of Boating
                Season when traffic gets stalled in the University District (UW)
                while the Montlake Bridge
              </p>
              <div className="popularposts-author">
                <img
                  src="/imgs/topposts/authors/topposts-authors-item_1.jpg"
                  alt="authors"
                />
                <div className="author-info">
                  <h5>James</h5>
                  <p>August 18, 2022</p>
                </div>
                <BsBookmark />
              </div>
            </div>
          </Col>
          <Col xs={3} className="popularpost">
            <div className="popularposts-item">
              <img src="/imgs/topposts/topposts-item_2.jpg" alt="topposts" />
              <h4>How to choose the right laptop for programming</h4>
              <p>
                Choosing the right laptop for programming can be a tough
                process. It’s easy to get confused while researching the various
                options. There are many different laptop models out there, each
                with a different set of trade-offs
              </p>
              <div className="popularposts-author">
                <img
                  src="/imgs/topposts/authors/topposts-authors-item_2.jpg"
                  alt="authors"
                />
                <div className="author-info">
                  <h5>Louis Hoebregts</h5>
                  <p>July 25, 2022</p>
                </div>
                <BsBookmark />
              </div>
            </div>
          </Col>
          <Col xs={3} className="popularpost">
            <div className="popularposts-item">
              <img src="/imgs/topposts/topposts-item_3.jpg" alt="topposts" />
              <h4>How we built the first real self-driving car</h4>
              <p>
                Electric self-driving cars will save millions of lives and
                significantly accelerate the world’s transition to sustainable
                energy, but only when
              </p>
              <div className="popularposts-author">
                <img
                  src="/imgs/topposts/authors/topposts-authors-item_3.jpg"
                  alt="authors"
                />
                <div className="author-info">
                  <h5>Mary</h5>
                  <p>July 14, 2022</p>
                </div>
                <BsBookmark />
              </div>
            </div>
          </Col>
          <Col xs={3} className="popularpost">
            <div className="popularposts-item">
              <img src="/imgs/topposts/topposts-item_4.jpg" alt="topposts" />
              <h4>How to Persuade Your Parents to Buy Fast Food</h4>
              <p>
                Parents often don’t want to buy fast food. They may be worried
                that it’s too expensive, unhealthy, or not worth the effort and
                time.
              </p>
              <div className="popularposts-author">
                <img
                  src="/imgs/topposts/authors/topposts-authors-item_4.jpg"
                  alt="authors"
                />
                <div className="author-info">
                  <h5>Jon Kantner</h5>
                  <p>May 10, 2022</p>
                </div>
                <BsBookmark />
              </div>
            </div>
          </Col>
          <div className="popularposts-prevNext">
            <div
              className="popularposts-prev"
              onClick={(e) => handlePrevPopularPosts(e.target, 4)}
            >
              {"<"}
            </div>
            <div
              className="popularposts-next"
              onClick={(e) => handleNextPopularPosts(e.target, 4)}
            >
              {">"}
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default TopPosts;
