import Flickity from "react-flickity-component";

const flickityOps = {
  freeScroll: false,
  contain: true,
  prevNextButtons: false,
  groupCells: false,
  pageDots: true,
  wrapAround: true,
  autoPlay: 1500,
  // cellSelector: ".carousel-cell",
};
function SliderCarousel() {
  return (
    <Flickity
      className={'slider-carousel'}
      elementType={'div'}
      options={flickityOps}
      disableImagesLoaded={false} // default
      reloadOnUpdate={false} // default
      static={false} // default
    >
      <div className="carousel-cell">
        <h1>Vel velit maecenas non bibendum.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="carousel-cell">
        <h1>Vel velit maecenas non bibendum.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="carousel-cell">
        <h1>Vel velit maecenas non bibendum.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </Flickity>
  );
}
export default SliderCarousel;
