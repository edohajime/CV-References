import { Col, Container, Row } from "react-bootstrap";
import { iconList, iconList2 } from "../utilities/Icons";
import { ListPosts } from "./Profile";
import { handleSelect } from "../utilities/Utilities";
import { BsBookmark } from "react-icons/bs";
import { Pagination } from "@mui/material";

const Category = () => {
  const ops1 = {
    containerClass: "categories",
    childClass: "category",
  };

  const ops2 = {
    containerClass: "list_type",
    childClass: "type",
  };

  return (
    <div>
      <Container>
        <div className="list_categories">
          <div className="categories">
            <div
              className="category active"
              onClick={(e) => handleSelect(e.target, ops1)}
            >
              Nam Khoa
            </div>
            <div
              className="category"
              onClick={(e) => handleSelect(e.target, ops1)}
            >
              Nữ Khoa
            </div>
            <div
              className="category"
              onClick={(e) => handleSelect(e.target, ops1)}
            >
              Cơ Khớp
            </div>
            <div
              className="category"
              onClick={(e) => handleSelect(e.target, ops1)}
            >
              Răng Hàm Mặt
            </div>
          </div>
          <div className="list_type d-none d-sm-block">
            <IconList
              className="type"
              onClick={(e) => handleSelect(e.target, ops2)}
            />
            <IconList2
              className="type active"
              onClick={(e) => handleSelect(e.target, ops2)}
            />
          </div>
        </div>

        <div className="category_posts">
          <div className="header">
            <div className="mark"></div>
            <h3 className="header-title">Bệnh : Nam Khoa</h3>
          </div>
          <ListCategoryPosts />
        </div>
      </Container>
    </div>
  );
};
export default Category;

export const IconList = ({ ...props }) => {
  return (
    <svg
      className={`icon-list ${props.className}`}
      onClick={props.onClick}
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 2C0.5 1.1875 1.15625 0.5 2 0.5C2.8125 0.5 3.5 1.1875 3.5 2C3.5 2.84375 2.8125 3.5 2 3.5C1.15625 3.5 0.5 2.84375 0.5 2ZM15 1C15.5312 1 16 1.46875 16 2C16 2.5625 15.5312 3 15 3H6C5.4375 3 5 2.5625 5 2C5 1.46875 5.4375 1 6 1H15ZM15 6C15.5312 6 16 6.46875 16 7C16 7.5625 15.5312 8 15 8H6C5.4375 8 5 7.5625 5 7C5 6.46875 5.4375 6 6 6H15ZM15 11C15.5312 11 16 11.4688 16 12C16 12.5625 15.5312 13 15 13H6C5.4375 13 5 12.5625 5 12C5 11.4688 5.4375 11 6 11H15ZM0.5 12C0.5 11.1875 1.15625 10.5 2 10.5C2.8125 10.5 3.5 11.1875 3.5 12C3.5 12.8438 2.8125 13.5 2 13.5C1.15625 13.5 0.5 12.8438 0.5 12ZM3.5 7C3.5 7.84375 2.8125 8.5 2 8.5C1.15625 8.5 0.5 7.84375 0.5 7C0.5 6.1875 1.15625 5.5 2 5.5C2.8125 5.5 3.5 6.1875 3.5 7Z"
        fill="#3E3232"
      />
    </svg>
  );
};

export const IconList2 = ({ ...props }) => {
  return (
    <svg
      className={`icon-list2 ${props.className}`}
      onClick={props.onClick}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="2" r="1.5" fill="#3E3232" />
      <circle cx="7" cy="2" r="1.5" fill="#3E3232" />
      <circle cx="2" cy="2" r="1.5" fill="#3E3232" />
      <circle cx="12" cy="12" r="1.5" fill="#3E3232" />
      <circle cx="7" cy="12" r="1.5" fill="#3E3232" />
      <circle cx="2" cy="12" r="1.5" fill="#3E3232" />
      <circle cx="12" cy="7" r="1.5" fill="#3E3232" />
      <circle cx="7" cy="7" r="1.5" fill="#3E3232" />
      <circle cx="2" cy="7" r="1.5" fill="#3E3232" />
    </svg>
  );
};

export const CategoryPost = ({ ...props }) => {
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

export const ListCategoryPosts = ({ ...props }) => {
  return (
    <div>
      <Row className="list_posts">
        <CategoryPost
          postURL="/imgs/popularposts/popularposts-item_1.jpg"
          postTitle="How to choose the right laptop for programming"
          postContent="Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs"
          author="/imgs/popularposts/authors/popularposts-authors-item_1.jpg"
          authorName="Louis Hoebregts"
          createDate="July 25, 2022"
        />
        <CategoryPost
          postURL="/imgs/popularposts/popularposts-item_2.jpg"
          postTitle="How we built the first real self-driving car"
          postContent="Electric self-driving cars will save millions of lives and significantly accelerate the world’s transition to sustainable energy, but only when"
          author="/imgs/popularposts/authors/popularposts-authors-item_2.jpg"
          authorName="Louis HoebrMaryegts"
          createDate="July 14, 2022"
        />
        <CategoryPost
          postURL="/imgs/popularposts/popularposts-item_3.jpg"
          postTitle="How to Persuade Your Parents to Buy Fast Food"
          postContent="Parents often don’t want to buy fast food. They may be worried that it’s too expensive, unhealthy, or not worth the effort and time."
          author="/imgs/popularposts/authors/popularposts-authors-item_3.jpg"
          authorName="Jon Kantner"
          createDate="May 10, 2022"
        />
        <CategoryPost
          postURL="/imgs/popularposts/popularposts-item_4.jpg"
          postTitle="How to choose the right laptop for programming"
          postContent="Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs"
          author="/imgs/popularposts/authors/popularposts-authors-item_4.jpg"
          authorName="Louis Hoebregts"
          createDate="July 25, 2022"
        />
        <CategoryPost
          postURL="/imgs/popularposts/popularposts-item_1.jpg"
          postTitle="How to choose the right laptop for programming"
          postContent="Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs"
          author="/imgs/popularposts/authors/popularposts-authors-item_1.jpg"
          authorName="Louis Hoebregts"
          createDate="July 25, 2022"
        />
        <CategoryPost
          postURL="/imgs/popularposts/popularposts-item_2.jpg"
          postTitle="How we built the first real self-driving car"
          postContent="Electric self-driving cars will save millions of lives and significantly accelerate the world’s transition to sustainable energy, but only when"
          author="/imgs/popularposts/authors/popularposts-authors-item_2.jpg"
          authorName="Louis HoebrMaryegts"
          createDate="July 14, 2022"
        />
        <CategoryPost
          postURL="/imgs/popularposts/popularposts-item_3.jpg"
          postTitle="How to Persuade Your Parents to Buy Fast Food"
          postContent="Parents often don’t want to buy fast food. They may be worried that it’s too expensive, unhealthy, or not worth the effort and time."
          author="/imgs/popularposts/authors/popularposts-authors-item_3.jpg"
          authorName="Jon Kantner"
          createDate="May 10, 2022"
        />
        <CategoryPost
          postURL="/imgs/popularposts/popularposts-item_4.jpg"
          postTitle="How to choose the right laptop for programming"
          postContent="Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs"
          author="/imgs/popularposts/authors/popularposts-authors-item_4.jpg"
          authorName="Louis Hoebregts"
          createDate="July 25, 2022"
        />
        <CategoryPost
          postURL="/imgs/popularposts/popularposts-item_1.jpg"
          postTitle="How to choose the right laptop for programming"
          postContent="Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs"
          author="/imgs/popularposts/authors/popularposts-authors-item_1.jpg"
          authorName="Louis Hoebregts"
          createDate="July 25, 2022"
        />
        <CategoryPost
          postURL="/imgs/popularposts/popularposts-item_2.jpg"
          postTitle="How we built the first real self-driving car"
          postContent="Electric self-driving cars will save millions of lives and significantly accelerate the world’s transition to sustainable energy, but only when"
          author="/imgs/popularposts/authors/popularposts-authors-item_2.jpg"
          authorName="Louis HoebrMaryegts"
          createDate="July 14, 2022"
        />
        <CategoryPost
          postURL="/imgs/popularposts/popularposts-item_3.jpg"
          postTitle="How to Persuade Your Parents to Buy Fast Food"
          postContent="Parents often don’t want to buy fast food. They may be worried that it’s too expensive, unhealthy, or not worth the effort and time."
          author="/imgs/popularposts/authors/popularposts-authors-item_3.jpg"
          authorName="Jon Kantner"
          createDate="May 10, 2022"
        />
        <CategoryPost
          postURL="/imgs/popularposts/popularposts-item_4.jpg"
          postTitle="How to choose the right laptop for programming"
          postContent="Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs"
          author="/imgs/popularposts/authors/popularposts-authors-item_4.jpg"
          authorName="Louis Hoebregts"
          createDate="July 25, 2022"
        />
        <CategoryPost
          postURL="/imgs/popularposts/popularposts-item_1.jpg"
          postTitle="How to choose the right laptop for programming"
          postContent="Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs"
          author="/imgs/popularposts/authors/popularposts-authors-item_1.jpg"
          authorName="Louis Hoebregts"
          createDate="July 25, 2022"
        />
        <CategoryPost
          postURL="/imgs/popularposts/popularposts-item_2.jpg"
          postTitle="How we built the first real self-driving car"
          postContent="Electric self-driving cars will save millions of lives and significantly accelerate the world’s transition to sustainable energy, but only when"
          author="/imgs/popularposts/authors/popularposts-authors-item_2.jpg"
          authorName="Louis HoebrMaryegts"
          createDate="July 14, 2022"
        />
        <CategoryPost
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
