import Flickity from "react-flickity-component";
import { Link } from "react-router-dom";

const BlogCarousel = () => {
  const flickityOps = {
    freeScroll: false,
    contain: true,
    prevNextButtons: false,
    groupCells: false,
    pageDots: true,
    wrapAround: true,
    autoPlay: 3000,
    // cellSelector: ".blog-item",
    initialIndex: 2,
  };
  return (
    <div>
      <Flickity
        className={"blog-carousel"}
        elementType={"div"}
        options={flickityOps}
        disableImagesLoaded={false} // default false
      >
        <Link to="/detail">
          <div className="blog-item">
            <img
              src="./images/Blog_EinsteinFingerprint.jpg"
              alt="Einstein"
            ></img>
            <div className="blog-content">
              <h5>
                Dấu vân tay của Albert Einstein - Nhà vật lý số 1 thế kỷ XX
              </h5>
              <p>
                "Albert Einstein - người đã phát triển ra thuyết tương đối tổng
                quát và được trao giải Nobel Vật lý năm 1921 ...
              </p>
              <div className="blog-expanded">
                XEM THÊM &nbsp;
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/detail">
          <div className="blog-item">
            <img src="./images/Blog_GandhiFingerprint.jpg" alt="Gandhi"></img>
            <div className="blog-content">
              <h5>NHỮNG BÍ ẨN THÚ VỊ VỀ DẤU VÂN TAY mà bạn chưa từng biết</h5>
              <p>
                Dù rằng vân tay cũng có một số lượng chủng vân tay, loại và nhóm
                vân tay nhất định. Tuy nhiên, chúng lại ...
              </p>
              <div className="blog-expanded">
                XEM THÊM &nbsp;
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/detail">
          <div className="blog-item">
            <img src="./images/Blog_DisneyFingerprint.jpg" alt="Disney"></img>
            <div className="blog-content">
              <h5>
                CHỦNG VÂN TAY CỦA WALTER ELIAS DISNEY - THIÊN BẨM CỦA SỰ SÁNG
                TẠO TUYỆT VỜI
              </h5>
              <p>
                Walter Elias Disney là một doanh nhân, nhà làm phim hoạt hình,
                nhà văn, diễn viên lồng tiếng và nhà sản...
              </p>
              <div className="blog-expanded">
                XEM THÊM &nbsp;
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </Link>
      </Flickity>
    </div>
  );
};
export default BlogCarousel;
