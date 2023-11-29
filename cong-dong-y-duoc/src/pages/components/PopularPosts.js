import { Col, Container, Row } from "react-bootstrap";
import { BsBookmark } from "react-icons/bs";

const PopularPosts = () => {
  return (
    <div className="popularposts">
      <Container>
        <div className="header">
          <div className="mark"></div>
          <h3 className="header-title">Popular Posts</h3>
        </div>
        <Row className="popularposts-posts">
          <Col xs={3} className="popularpost visible">
            <div className="popularposts-item">
              <img
                src="/imgs/popularposts/popularposts-item_1.jpg"
                alt="popularposts"
              />
              <h4>Opening Day of Boating Season, Seattle WA</h4>
              <p>
                Of course the Puget Sound is very watery, and where there is
                water, there are boats. Today is the Grand Opening of Boating
                Season when traffic gets stalled in the University District (UW)
                while the Montlake Bridge
              </p>
              <div className="popularposts-author">
                <img
                  src="/imgs/popularposts/authors/popularposts-authors-item_1.jpg"
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
          <Col xs={3} className="popularpost visible">
            <div className="popularposts-item">
              <img
                src="/imgs/popularposts/popularposts-item_2.jpg"
                alt="popularposts"
              />
              <h4>How to choose the right laptop for programming</h4>
              <p>
                Choosing the right laptop for programming can be a tough
                process. It’s easy to get confused while researching the various
                options. There are many different laptop models out there, each
                with a different set of trade-offs
              </p>
              <div className="popularposts-author">
                <img
                  src="/imgs/popularposts/authors/popularposts-authors-item_2.jpg"
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
          <Col xs={3} className="popularpost visible">
            <div className="popularposts-item">
              <img
                src="/imgs/popularposts/popularposts-item_3.jpg"
                alt="popularposts"
              />
              <h4>How we built the first real self-driving car</h4>
              <p>
                Electric self-driving cars will save millions of lives and
                significantly accelerate the world’s transition to sustainable
                energy, but only when
              </p>
              <div className="popularposts-author">
                <img
                  src="/imgs/popularposts/authors/popularposts-authors-item_3.jpg"
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
              <img
                src="/imgs/popularposts/popularposts-item_4.jpg"
                alt="popularposts"
              />
              <h4>How to Persuade Your Parents to Buy Fast Food</h4>
              <p>
                Parents often don’t want to buy fast food. They may be worried
                that it’s too expensive, unhealthy, or not worth the effort and
                time.
              </p>
              <div className="popularposts-author">
                <img
                  src="/imgs/popularposts/authors/popularposts-authors-item_4.jpg"
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
              <img
                src="/imgs/popularposts/popularposts-item_2.jpg"
                alt="popularposts"
              />
              <h4>How to choose the right laptop for programming</h4>
              <p>
                Choosing the right laptop for programming can be a tough
                process. It’s easy to get confused while researching the various
                options. There are many different laptop models out there, each
                with a different set of trade-offs
              </p>
              <div className="popularposts-author">
                <img
                  src="/imgs/popularposts/authors/popularposts-authors-item_2.jpg"
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
              <img
                src="/imgs/popularposts/popularposts-item_3.jpg"
                alt="popularposts"
              />
              <h4>How we built the first real self-driving car</h4>
              <p>
                Electric self-driving cars will save millions of lives and
                significantly accelerate the world’s transition to sustainable
                energy, but only when
              </p>
              <div className="popularposts-author">
                <img
                  src="/imgs/popularposts/authors/popularposts-authors-item_3.jpg"
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
              <img
                src="/imgs/popularposts/popularposts-item_4.jpg"
                alt="popularposts"
              />
              <h4>How to Persuade Your Parents to Buy Fast Food</h4>
              <p>
                Parents often don’t want to buy fast food. They may be worried
                that it’s too expensive, unhealthy, or not worth the effort and
                time.
              </p>
              <div className="popularposts-author">
                <img
                  src="/imgs/popularposts/authors/popularposts-authors-item_4.jpg"
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
              <img
                src="/imgs/popularposts/popularposts-item_1.jpg"
                alt="popularposts"
              />
              <h4>Opening Day of Boating Season, Seattle WA</h4>
              <p>
                Of course the Puget Sound is very watery, and where there is
                water, there are boats. Today is the Grand Opening of Boating
                Season when traffic gets stalled in the University District (UW)
                while the Montlake Bridge
              </p>
              <div className="popularposts-author">
                <img
                  src="/imgs/popularposts/authors/popularposts-authors-item_1.jpg"
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
              <img
                src="/imgs/popularposts/popularposts-item_2.jpg"
                alt="popularposts"
              />
              <h4>How to choose the right laptop for programming</h4>
              <p>
                Choosing the right laptop for programming can be a tough
                process. It’s easy to get confused while researching the various
                options. There are many different laptop models out there, each
                with a different set of trade-offs
              </p>
              <div className="popularposts-author">
                <img
                  src="/imgs/popularposts/authors/popularposts-authors-item_2.jpg"
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
              <img
                src="/imgs/popularposts/popularposts-item_3.jpg"
                alt="popularposts"
              />
              <h4>How we built the first real self-driving car</h4>
              <p>
                Electric self-driving cars will save millions of lives and
                significantly accelerate the world’s transition to sustainable
                energy, but only when
              </p>
              <div className="popularposts-author">
                <img
                  src="/imgs/popularposts/authors/popularposts-authors-item_3.jpg"
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
              <img
                src="/imgs/popularposts/popularposts-item_4.jpg"
                alt="popularposts"
              />
              <h4>How to Persuade Your Parents to Buy Fast Food</h4>
              <p>
                Parents often don’t want to buy fast food. They may be worried
                that it’s too expensive, unhealthy, or not worth the effort and
                time.
              </p>
              <div className="popularposts-author">
                <img
                  src="/imgs/popularposts/authors/popularposts-authors-item_4.jpg"
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
export default PopularPosts;

export const find = (lists, classNames) => {
  let l = lists;
  let ind = -1;
  for (var i = 0; i < l.length; i++) {
    if (l[i].classList.contains(classNames)) {
      return i;
    }
  }
  return ind;
};

export const getParentNode = (e, className) => {
  let slides = e;
  while (!slides.classList.contains(className)) {
    slides = slides.parentNode;
  }
  return slides;
};

export const handleNextPopularPosts = (e, numShows) => {
  let posts = getParentNode(e, "popularposts-posts");
  let listE = posts.querySelectorAll("div.popularpost");
  let index = find(listE, "visible");
  let max = listE.length;
  // số lượng hiển thị = 6, nếu > max thì gán bằng max
  let numShow = max < numShows ? max : numShows;

  if (max - index <= numShow) {
    let i = 0;
    for (i = 1; i <= max - index; i++) {
      listE[max - i].classList.remove("visible");
    }
    for (i = 0; i < numShow; i++) {
      listE[i].classList.add("visible");
    }
  } else {
    let j = 0;
    while (j < max) {
      if (j < index || j > index + (numShow * 2 - 1)) {
        j++;
      } else if (j < index + numShow) {
        listE[j++].classList.remove("visible");
      } else {
        listE[j++].classList.add("visible");
      }
    }
  }
};

export const handlePrevPopularPosts = (e, numShows) => {
  let posts = getParentNode(e, "popularposts-posts");
  let listE = posts.querySelectorAll("div.popularpost");
  let index = find(listE, "visible");
  let max = listE.length;
  // số lượng hiển thị = numShows, nếu > max thì gán bằng max
  let numShow = max < numShows ? max : numShows;

  if (index === 0) {
    let i = 0;
    let shows = max % numShow;
    for (i = 0; i <= numShow; i++) {
      listE[i].classList.remove("visible");
    }
    for (i = max - 1; i > max - shows - 1; i--) {
      listE[i].classList.add("visible");
    }
  } else {
    let j = 0;
    while (j < max) {
      if (j < index - numShow || j > index + numShow - 1) {
        j++;
      } else if (j >= index && j <= index + numShow - 1) {
        listE[j++].classList.remove("visible");
      } else {
        listE[j++].classList.add("visible");
      }
    }
  }
};
