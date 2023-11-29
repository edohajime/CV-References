import SliderCarousel from "./SliderCarousel";

export default function Slider() {
  
  return (
      <div className="slider">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-lg-5">
              <div className="slider-content">
                <h1 className="hidden-xs">Fingerprint Biometrics !</h1>
                <p className="hidden-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sodales aliquam pretium augue malesuada tortor. At viverra
                  interdum dictum diam mattis. Urna laoreet vitae mi arcu proin
                  convallis eget. At habitant dui habitant eu aliquet at
                  praesent accumsan eget. aliquet at praesent accumsan eget.
                </p>
                <div className="block-xs">
                  <SliderCarousel />
                </div>
                <form>
                  <div className="slider-form-input">
                    <input type="text" placeholder="Nguyễn Văn Minh"></input>
                    <span className="slider-dropdown-icon">
                      <i className="fa-solid fa-caret-down"></i>
                    </span>
                  </div>

                  <button className="slider-form-button">
                    KIỂM TRA KẾT QUẢ
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
