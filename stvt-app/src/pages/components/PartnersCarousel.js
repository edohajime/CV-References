import Flickity from "react-flickity-component";

const flickityOps = {
  freeScroll: false,
  contain: true,
  draggable: true,
  prevNextButtons: false,
  groupCells: true,
  pageDots: false,
  wrapAround: true,
  autoPlay: 1500,
  // cellSelector: ".partner-item",
};

function PartnersCarousel() {
  return (
    <Flickity
      className={"partners-carousel"}
      elementType={"div"}
      options={flickityOps}
    >
      <div className="partner-item">
        <div className="row">
          <div className="col-4">
            <img
              className="partners-item"
              src="./images/Partner_OceanEdu.jpg"
              alt="Ocean Edu"
            ></img>
          </div>
          <div className="col-4">
            <img
              className="partners-item"
              src="./images/Partner_BlueSun.jpg"
              alt="Blue Sun"
            ></img>
          </div>
          <div className="col-4">
            <img
              className="partners-item"
              src="./images/Partner_RES.jpg"
              alt="Reliable English School"
            ></img>
          </div>
        </div>
      </div>
      <div className="partner-item">
        <div className="row">
          <div className="col-4">
            <img
              className="partners-item"
              src="./images/Partner_OceanEdu.jpg"
              alt="Ocean Edu"
            ></img>
          </div>
          <div className="col-4">
            <img
              className="partners-item"
              src="./images/Partner_BlueSun.jpg"
              alt="Blue Sun"
            ></img>
          </div>
          <div className="col-4">
            <img
              className="partners-item"
              src="./images/Partner_RES.jpg"
              alt="Reliable English School"
            ></img>
          </div>
        </div>
      </div>
    </Flickity>
  );
}
export default PartnersCarousel;
