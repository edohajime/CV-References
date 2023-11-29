import Flickity from "react-flickity-component";

const flickityOps = {
  freeScroll: false,
  contain: true,
  draggable: true,
  prevNextButtons: false,
  groupCells: false,
  pageDots: true,
  wrapAround: true,
  autoPlay: 3000,
  // cellSelector: ".blog-comment-item",
};

function BlogCommentsCarousel() {
  return (
    <Flickity
      className={"blog-comments-carousel"}
      elementType={"div"}
      options={flickityOps}
    >
      <div className="col-md-4">
        <div className="blog-comment-item">
          <div className="row rate">
            <div className="col-6">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star no-rate"></i>
              <i className="fa-solid fa-star no-rate"></i>
            </div>
            <div className="col-6">
              <div className="rate-date">24/09/2022</div>
            </div>
          </div>
          <div className="row comment">
            <div className="col-12">
              <h3>COMBO SINH TRẮC VÂN TAY</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                orci viverra mauris ligula in leo, pellentesque massa dignissim.
              </p>
              <hr />
            </div>
          </div>
          <div className="row author">
            <div className="col-3">
              <img
                src="./images/Comment_User1.jpg"
                alt="Nguyễn Cường Phong"
              ></img>
            </div>
            <div className="col-9">
              <h2>Nguyễn Cường Phong</h2>
              <p>0******831</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4 hidden-xs">
        <div className="blog-comment-item">
          <div className="row rate">
            <div className="col-6">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="col-6">
              <div className="rate-date">03/12/2022</div>
            </div>
          </div>
          <div className="row comment">
            <div className="col-12">
              <h3>COMBO SINH TRẮC VÂN TAY</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ullamcorper tristique ut aliquet arcu eget tincidunt nulla sed
                consequat. Id maecenas ipsum congue sagittis.
              </p>
              <hr />
            </div>
          </div>
          <div className="row author">
            <div className="col-3">
              <img src="./images/Comment_User2.jpg" alt="Đoàn hồng ngọc"></img>
            </div>
            <div className="col-9">
              <h2>Đoàn hồng ngọc</h2>
              <p>0******789</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4 hidden-xs">
        <div className="blog-comment-item">
          <div className="row rate">
            <div className="col-6">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star no-rate"></i>
            </div>
            <div className="col-6">
              <div className="rate-date">02/11/2022</div>
            </div>
          </div>
          <div className="row comment">
            <div className="col-12">
              <h3>COMBO SINH TRẮC VÂN TAY</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
                nisl non suscipit at.
              </p>
              <hr />
            </div>
          </div>
          <div className="row author">
            <div className="col-3">
              <img
                src="./images/Comment_User3.jpg"
                alt="Nguyễn Thùy trang"
              ></img>
            </div>
            <div className="col-9">
              <h2>Nguyễn Thùy trang</h2>
              <p>0******124</p>
            </div>
          </div>
        </div>
      </div>
    </Flickity>
  );
}
export default BlogCommentsCarousel;
