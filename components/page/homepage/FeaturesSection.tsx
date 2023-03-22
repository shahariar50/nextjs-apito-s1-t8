const FeaturesSection = () => {
  return (
    <section className="pt-5" id="featuresVideos">
      <div className="container">
        <div className="row flex-center mb-5">
          <div className="col-lg-8 text-center">
            <h1 className="fw-bold fs-md-3 fs-lg-4 fs-xl-5">Featured videos</h1>
            <hr
              className="mx-auto text-primary my-4"
              style={{ height: "3px", width: "70px" }}
            />
            <p className="mx-auto">
              Aliquam sodales vitae ex tincidunt consectetur. Etiam eleifend
              malesuada magna, at imperdiet justo euismod eu. Aliquam vel
              imperdet mi, et convallis eros. Duis fermentum fringilla nisl at
              vulputate. Nunc nec lorem faucibus, molestie nisi id, elementum
              sem. Sed vulputate tempor augue a efficitur urna, ultrices eu.
              Duis vel turpis et arcu.
            </p>
          </div>
        </div>
        <div className="row flex-center">
          <div className="col-12">
            <div className="row align-items-center">
              {/* <div className="col-12 col-xxl-7 px-2">
                <div className="carousel-inner">
                  <div className="carousel-item active h-100">
                    <div
                      className="player"
                      data-plyr-provider="youtube"
                      data-plyr-embed-id="bTqVqk7FSmY"
                    >
                      <iframe
                        src="https://www.youtube.com/embed/zLeLttVbFs8"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen={true}
                      ></iframe>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div
                      className="player"
                      data-plyr-provider="youtube"
                      data-plyr-embed-id="bTqVqk7FSmY"
                    >
                      <iframe
                        src="https://www.youtube.com/embed/nUI8f_hvKZw"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen={true}
                      ></iframe>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div
                      className="player"
                      data-plyr-provider="youtube"
                      data-plyr-embed-id="bTqVqk7FSmY"
                    >
                      <iframe
                        src="https://www.youtube.com/embed/xf86EzuLXu0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen={true}
                      ></iframe>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div
                      className="player"
                      data-plyr-provider="youtube"
                      data-plyr-embed-id="bTqVqk7FSmY"
                    >
                      <iframe
                        src="https://www.youtube.com/embed/YkEd_aorIiI"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen={true}
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-6 col-md-3 col-xxl-2 pt-3 pt-md-0">
                <div className="carousel-indicators">
                  <div className="row h-100 w-100">
                    <div className="col-12 px-1">
                      <button
                        className="active"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        aria-current="true"
                        aria-label="Slide 1"
                      >
                        <picture>
                          <img
                            className="d-block"
                            src="/img/gallery/maldives-v.png"
                            alt="..."
                          />
                        </picture>
                      </button>
                    </div>
                    <div className="col-12 px-1">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      >
                        <picture>
                          <img
                            className="d-block"
                            src="/img/gallery/tanzania.png"
                            alt="..."
                          />
                        </picture>
                      </button>
                    </div>
                    <div className="col-12 px-1">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                      >
                        <picture>
                          <img
                            className="d-block"
                            src="/img/gallery/kathmandu-v.png"
                            alt="..."
                          />
                        </picture>
                      </button>
                    </div>
                    <div className="col-12 px-1">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="3"
                        aria-label="Slide 4"
                      >
                        <picture>
                          <img
                            className="d-block"
                            src="/img/gallery/chaina.png"
                            alt="..."
                          />
                        </picture>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 px-xxl-0">
                <div className="row">
                  <div className="col-12 col-md-11 col-lg-12 col-xl-10 col-xxl-7 px-xxl-0 ps-lg-0 ps-md-4">
                    <div
                      className="card h-100 py-md-2 active"
                      style={{ minHeight: "113px" }}
                    >
                      <div className="card-body d-flex flex-column justify-content-center">
                        <p className="mb-0 fw-semi-bold text-dark">
                          {" "}
                          When go to maldives
                        </p>
                        <p className="card-text">
                          <small className="text-800">0.20</small>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-11 col-lg-12 col-xl-10 col-xxl-7 px-xxl-0 ps-lg-0 ps-md-4">
                    <div
                      className="card h-100 py-md-2"
                      style={{ minHeight: "113px" }}
                    >
                      <div className="card-body d-flex flex-column justify-content-center">
                        <p className="mb-0 fw-semi-bold text-500">
                          Tanzania’s deadly pink lake
                        </p>
                        <p className="card-text">
                          <small className="text-800">05.24</small>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-11 col-lg-12 col-xl-10 col-xxl-7 px-xxl-0 ps-lg-0 ps-md-4">
                    <div
                      className="card h-100 py-md-2"
                      style={{ minHeight: "113px" }}
                    >
                      <div className="card-body d-flex flex-column justify-content-center">
                        <p className="mb-0 fw-semi-bold text-500">
                          {" "}
                          Top things to do in Kathmandu
                        </p>
                        <p className="card-text">
                          <small className="text-800">06.12</small>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-11 col-lg-12 col-xl-10 col-xxl-7 px-xxl-0 ps-lg-0 ps-md-4">
                    <div
                      className="card h-100 py-md-3"
                      style={{ minHeight: "113px" }}
                    >
                      <div className="card-body d-flex flex-column justify-content-center">
                        <p className="mb-0 fw-semi-bold text-500">
                          {" "}
                          Exploring China’s creative capital
                        </p>
                        <p className="card-text">
                          <small className="text-800">0.20 </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
