import { Col, Container, Row } from "react-bootstrap";
import Flickity from "react-flickity-component";

const Posts = () => {
  const flickityOps = {
    contain: true,
    draggable: false,
    wrapAround: true,
    prevNextButtons: true,
    pageDots: true,
    cellAlign: "center",
  };

  return (
    <div className="posts">
      <Container>
        <Row>
          <Col xs={12} sm={6} lg={3} style={{padding: '10px 5px'}}>
            <div
              className="posts-item"
              style={{
                background:
                  'url("/imgs/posts/posts-item_1.jpg") 50% 50% / cover',
              }}
            >
              <div className="posts-item-content">
                <h5>How to Drive a Car Safely</h5>
                <p>
                  Ah, the joy of the open road—it’s a good feeling. But if
                  you’re new to driving, you may feel a little nervous about
                  getting behind the wheel. Don’t worry. While it’s true that
                  accidents can happen to anybody, there are things you can do
                  to drive safely and do your best to avoid them.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3} style={{padding: '10px 5px'}}>
            <div
              className="posts-item"
              style={{
                background:
                  'url("/imgs/posts/posts-item_2.jpg") 50% 50% / cover',
              }}
            >
              <div className="posts-item-content">
                <h5>How to Make Dance Music</h5>
                <p>
                  Download torrents from verified or trusted uploaders. If
                  you're a BitTorrent user looking for safety tips, use this
                  method. Both of the big-name BitTorrent indexers (The Pirate
                  Bay and KickAssTorrents) use symbols to highlight torrents
                  uploaded by verified users.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <Flickity
              className="posts-carousel"
              elementType="div"
              options={flickityOps}
            >
              <div className="posts-carousel-item">
                <div
                  className="posts-item"
                  style={{
                    background:
                      'url("/imgs/posts/posts-item_3.jpg") 50% 50% / cover',
                  }}
                >
                  <div className="posts-item-content">
                    <h5>Why I Stopped Using Multiple Monitor</h5>
                    <p>
                      A Single Monitor Manifesto — Many developers believe
                      multiple monitors improve productivity. Studies have
                      proven it, right? Well, keep in mind, many of those
                      studies are commissioned from monitor manufacturers like
                    </p>
                  </div>
                </div>
              </div>
              <div className="posts-carousel-item">
                <div
                  className="posts-item"
                  style={{
                    background:
                      'url("/imgs/posts/posts-item_3.jpg") 50% 50% / cover',
                  }}
                >
                  <div className="posts-item-content">
                    <h5>Why I Stopped Using Multiple Monitor</h5>
                    <p>
                      A Single Monitor Manifesto — Many developers believe
                      multiple monitors improve productivity. Studies have
                      proven it, right? Well, keep in mind, many of those
                      studies are commissioned from monitor manufacturers like
                    </p>
                  </div>
                </div>
              </div>
              <div className="posts-carousel-item">
                <div
                  className="posts-item"
                  style={{
                    background:
                      'url("/imgs/posts/posts-item_3.jpg") 50% 50% / cover',
                  }}
                >
                  <div className="posts-item-content">
                    <h5>Why I Stopped Using Multiple Monitor</h5>
                    <p>
                      A Single Monitor Manifesto — Many developers believe
                      multiple monitors improve productivity. Studies have
                      proven it, right? Well, keep in mind, many of those
                      studies are commissioned from monitor manufacturers like
                    </p>
                  </div>
                </div>
              </div>
              <div className="posts-carousel-item">
                <div
                  className="posts-item"
                  style={{
                    background:
                      'url("/imgs/posts/posts-item_3.jpg") 50% 50% / cover',
                  }}
                >
                  <div className="posts-item-content">
                    <h5>Why I Stopped Using Multiple Monitor</h5>
                    <p>
                      A Single Monitor Manifesto — Many developers believe
                      multiple monitors improve productivity. Studies have
                      proven it, right? Well, keep in mind, many of those
                      studies are commissioned from monitor manufacturers like
                    </p>
                  </div>
                </div>
              </div>
              <div className="posts-carousel-item">
                <div
                  className="posts-item"
                  style={{
                    background:
                      'url("/imgs/posts/posts-item_3.jpg") 50% 50% / cover',
                  }}
                >
                  <div className="posts-item-content">
                    <h5>Why I Stopped Using Multiple Monitor</h5>
                    <p>
                      A Single Monitor Manifesto — Many developers believe
                      multiple monitors improve productivity. Studies have
                      proven it, right? Well, keep in mind, many of those
                      studies are commissioned from monitor manufacturers like
                    </p>
                  </div>
                </div>
              </div>
              <div className="posts-carousel-item">
                <div
                  className="posts-item"
                  style={{
                    background:
                      'url("/imgs/posts/posts-item_3.jpg") 50% 50% / cover',
                  }}
                >
                  <div className="posts-item-content">
                    <h5>Why I Stopped Using Multiple Monitor</h5>
                    <p>
                      A Single Monitor Manifesto — Many developers believe
                      multiple monitors improve productivity. Studies have
                      proven it, right? Well, keep in mind, many of those
                      studies are commissioned from monitor manufacturers like
                    </p>
                  </div>
                </div>
              </div>
              <div className="posts-carousel-item">
                <div
                  className="posts-item"
                  style={{
                    background:
                      'url("/imgs/posts/posts-item_3.jpg") 50% 50% / cover',
                  }}
                >
                  <div className="posts-item-content">
                    <h5>Why I Stopped Using Multiple Monitor</h5>
                    <p>
                      A Single Monitor Manifesto — Many developers believe
                      multiple monitors improve productivity. Studies have
                      proven it, right? Well, keep in mind, many of those
                      studies are commissioned from monitor manufacturers like
                    </p>
                  </div>
                </div>
              </div>
              <div className="posts-carousel-item">
                <div
                  className="posts-item"
                  style={{
                    background:
                      'url("/imgs/posts/posts-item_3.jpg") 50% 50% / cover',
                  }}
                >
                  <div className="posts-item-content">
                    <h5>Why I Stopped Using Multiple Monitor</h5>
                    <p>
                      A Single Monitor Manifesto — Many developers believe
                      multiple monitors improve productivity. Studies have
                      proven it, right? Well, keep in mind, many of those
                      studies are commissioned from monitor manufacturers like
                    </p>
                  </div>
                </div>
              </div>
            </Flickity>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Posts;
