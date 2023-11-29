import { Container, Row } from "react-bootstrap";
import { BsBookmark } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { handleNext, handlePrev } from "../utilities/Utilities";
import { PopularPost } from "./TraditionalMedicine";

const TerminallyIll = () => {
  const ops1 = {
    carousel: "popularposts-carousel",
    container: "popularposts-container",
    cellSelector: ".popularposts-container .popularpost",
    prevButton: "prev_button",
    nextButton: "next_button",
  };
  return (
    <div className="popularposts terminally_ill">
      <Container>
        <div className="header">
          <div className="mark"></div>
          <h3 className="header-title">Bệnh Nan Y</h3>
        </div>
        <Row className="popularposts-posts">
          <div className="my_list popularposts-carousel">
            <div className="my_slider">
              <div className="my_container popularposts-container">
                <PopularPost
                  popularPostURL="/imgs/terminally/terminally-item_1.jpg"
                  popularPostTitle="House boating on Lake Shasta"
                  popularPostContent="The best way to spend a long 4th of July weekend. Wake boarding, swimming, barbecues, and bonfires."
                  author="/imgs/terminally/authors/terminally-authors-item_1.jpg"
                  authorName="James"
                  createDate="July 14, 2022"
                />
                <PopularPost
                  popularPostURL="/imgs/terminally/terminally-item_2.jpg"
                  popularPostTitle="How to choose the right laptop for programming"
                  popularPostContent="Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs"
                  author="/imgs/terminally/authors/terminally-authors-item_2.jpg"
                  authorName="Robert"
                  createDate="July 14, 2022"
                />
                <PopularPost
                  popularPostURL="/imgs/terminally/terminally-item_3.jpg"
                  popularPostTitle="Why Buying a New Car Makes More Sense than Buying Used"
                  popularPostContent="Many experts will tell you buying cars used is best for your long-term financial health. Here’s why they’re (mostly) wrong"
                  author="/imgs/terminally/authors/terminally-authors-item_3.jpg"
                  authorName="Mary"
                  createDate="July 14, 2022"
                />
                <PopularPost
                  popularPostURL="/imgs/terminally/terminally-item_4.jpg"
                  popularPostTitle="Lasagna is but a Pasta Cake"
                  popularPostContent="Re-envision the description of a common food from a different perspective — it is … pasta cake layered with cheese, meat, pasta repeated, bake and serve."
                  author="/imgs/terminally/authors/terminally-authors-item_4.jpg"
                  authorName="Jon Kantner"
                  createDate="July 14, 2022"
                />
                <PopularPost
                  popularPostURL="/imgs/terminally/terminally-item_2.jpg"
                  popularPostTitle="How to choose the right laptop for programming"
                  popularPostContent="Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs"
                  author="/imgs/terminally/authors/terminally-authors-item_2.jpg"
                  authorName="Robert"
                  createDate="July 14, 2022"
                />
                <PopularPost
                  popularPostURL="/imgs/terminally/terminally-item_4.jpg"
                  popularPostTitle="Lasagna is but a Pasta Cake"
                  popularPostContent="Re-envision the description of a common food from a different perspective — it is … pasta cake layered with cheese, meat, pasta repeated, bake and serve."
                  author="/imgs/terminally/authors/terminally-authors-item_4.jpg"
                  authorName="Jon Kantner"
                  createDate="July 14, 2022"
                />
              </div>
            </div>
            <div
              className="prev_button popularposts_prev disable"
              onClick={(e) => {
                handlePrev(e.target, ops1);
              }}
            >
              <FaChevronLeft />
            </div>
            <div
              className="next_button popularposts_next"
              onClick={(e) => {
                handleNext(e.target, ops1);
              }}
            >
              <FaChevronRight />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default TerminallyIll;
