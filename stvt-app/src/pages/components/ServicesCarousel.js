import Flickity from "react-flickity-component";

const flickityOps = {
  freeScroll: false,
  contain: true,
  prevNextButtons: false,
  groupCells: false,
  pageDots: false,
  wrapAround: true,
  autoPlay: 1500,
  // cellSelector: ".service-item",
};
function SocialCarousel() {
  return (
    <Flickity
      className={"services-carousel"}
      elementType={"div"}
      options={flickityOps}
    >
      <div className="service-item">
        <img
          src="./images/ServiceItem.jpg"
          alt="Khám phá tính cách và hành vi"
        ></img>
        <h3>KHÁM PHÁ TÍNH CÁCH VÀ HÀNH VI</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium enim,
          vel libero magna amet, amet euismod pretium sed.
        </p>
      </div>
      <div className="service-item">
        <img
          src="./images/ServiceItem.jpg"
          alt="Khám phá tính cách và hành vi"
        ></img>
        <h3>KHÁM PHÁ TÍNH CÁCH VÀ HÀNH VI</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium enim,
          vel libero magna amet, amet euismod pretium sed. Posuere libero.
        </p>
      </div>

      <div className="service-item">
        <img
          src="./images/ServiceItem.jpg"
          alt="Khám phá tính cách và hành vi"
        ></img>
        <h3>XU HƯỚNG NĂNG LỰC BẨM SINH</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium enim,
          vel libero magna amet, amet euismod pretium sed. Posuere libero.
        </p>
      </div>
      <div className="service-item">
        <img
          src="./images/ServiceItem.jpg"
          alt="Khám phá tính cách và hành vi"
        ></img>
        <h3>KHÁM PHÁ TÍNH CÁCH VÀ HÀNH VI</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium enim,
          vel libero magna amet, amet euismod pretium sed.
        </p>
      </div>
    </Flickity>
  );
}

export default SocialCarousel;
