const CategoriesSection = () => {
  return (
    <section className="pt-5">
      <div className="container">
        <div className="row flex-center mb-5">
          <div className="col-lg-8 text-center">
            <h1 className="fw-bold fs-md-3 fs-lg-4 fs-xl-5">
              Travel categories
            </h1>
            <hr
              className="mx-auto text-primary my-4"
              style={{ height: "3px", width: "70px" }}
            />
            <p className="mx-auto">
              Maecenas et eros non quam ultricies interdum. Proin ac dolor vel
              neque ullamcorper blandit vitae et felis. Morbi ante urna,
              imperdiet vel neque vitae, porta ullamcorper metus. Quisque
              bibendum venenatis eros sed commodo. Nullam ultrices tortor non
              diam ullamcorper auctor. In urna tellus, auctor sit amet est ut,
              scelerisque volutpat diam.
            </p>
          </div>
        </div>
        <div className="row h-100 flex-center">
          <div className="row flex-lg-center">
            <div className="col-md-12">
              <div
                className="carousel slide"
                id="carouselCategory"
                data-bs-touch="false"
                data-bs-interval="false"
              >
                <div className="carousel-inner">
                  <div
                    className="carousel-item active"
                    data-bs-interval="10000"
                  >
                    <div className="row h-100">
                      <div className="col-6 col-sm-4 col-xl-2 mb-3 hover-top px-2">
                        <div className="card h-100 w-100 text-white">
                          <a className="stretched-link" href="!#">
                            <picture>
                              <img
                                className="img-fluid"
                                src="/img/gallery/food.png"
                                alt=""
                              />
                            </picture>
                          </a>
                          <div className="card-img-overlay d-flex align-items-end bg-dark-gradient">
                            <h5 className="text-white fs--1">Food</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-sm-4 col-xl-2 mb-3 hover-top px-2">
                        <div className="card h-100 w-100 text-white">
                          <a className="stretched-link" href="!#">
                            <picture>
                              <img
                                className="img-fluid"
                                src="/img/gallery/backpacking.png"
                                alt=""
                              />
                            </picture>
                          </a>
                          <div className="card-img-overlay d-flex align-items-end bg-dark-gradient">
                            <h5 className="text-white fs--1">Backpacking</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-sm-4 col-xl-2 mb-3 hover-top px-2">
                        <div className="card h-100 w-100 text-white">
                          <a className="stretched-link" href="!#">
                            <picture>
                              <img
                                className="img-fluid"
                                src="/img/gallery/beaches.png"
                                alt=""
                              />
                            </picture>
                          </a>
                          <div className="card-img-overlay d-flex align-items-end bg-dark-gradient">
                            <h5 className="text-white fs--1">
                              Beaches,coast and island
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-sm-4 col-xl-2 mb-3 hover-top px-2">
                        <div className="card h-100 w-100 text-white">
                          <a className="stretched-link" href="!#">
                            <picture>
                              <img
                                className="img-fluid"
                                src="/img/gallery/art-culture.png"
                                alt=""
                              />
                            </picture>
                          </a>
                          <div className="card-img-overlay d-flex align-items-end bg-dark-gradient">
                            <h5 className="text-white fs--1">
                              Art and culture
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-sm-4 col-xl-2 mb-3 hover-top px-2">
                        <div className="card h-100 w-100 text-white">
                          <a className="stretched-link" href="!#">
                            <picture>
                              <img
                                className="img-fluid"
                                src="/img/gallery/wild.png"
                                alt=""
                              />
                            </picture>
                          </a>
                          <div className="card-img-overlay d-flex align-items-end bg-dark-gradient">
                            <h5 className="text-white fs--1">
                              Wildlife and nature
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-sm-4 col-xl-2 mb-3 hover-top px-2">
                        <div className="card h-100 w-100 text-white">
                          <a className="stretched-link" href="!#">
                            <picture>
                              <img
                                className="img-fluid"
                                src="/img/gallery/hill.jpg"
                                alt=""
                              />
                            </picture>
                          </a>
                          <div className="card-img-overlay d-flex align-items-end bg-dark-gradient">
                            <h5 className="text-white fs--1">
                              Hill and nature
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="carousel-item" data-bs-interval="2000">
                    <div className="row h-100">
                      <div className="col-6 col-sm-4 col-xl-2 mb-3 hover-top px-2">
                        <div className="card h-100 w-100 text-white">
                          <a className="stretched-link" href="!#">
                            <picture>
                              <img
                                className="img-fluid"
                                src="/img/gallery/food.png"
                                alt=""
                              />
                            </picture>
                          </a>
                          <div className="card-img-overlay d-flex align-items-end bg-dark-gradient">
                            <h5 className="text-white fs--1">Food</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-sm-4 col-xl-2 mb-3 hover-top px-2">
                        <div className="card h-100 w-100 text-white">
                          <a className="stretched-link" href="!#">
                            <picture>
                              <img
                                className="img-fluid"
                                src="/img/gallery/backpacking.png"
                                alt=""
                              />
                            </picture>
                          </a>
                          <div className="card-img-overlay d-flex align-items-end bg-dark-gradient">
                            <h5 className="text-white fs--1">Backpacking</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-sm-4 col-xl-2 mb-3 hover-top px-2">
                        <div className="card h-100 w-100 text-white">
                          <a className="stretched-link" href="!#">
                            <picture>
                              <img
                                className="img-fluid"
                                src="/img/gallery/beaches.png"
                                alt=""
                              />
                            </picture>
                          </a>
                          <div className="card-img-overlay d-flex align-items-end bg-dark-gradient">
                            <h5 className="text-white fs--1">
                              Beaches,coast and island
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-sm-4 col-xl-2 mb-3 hover-top px-2">
                        <div className="card h-100 w-100 text-white">
                          <a className="stretched-link" href="!#">
                            <picture>
                              <img
                                className="img-fluid"
                                src="/img/gallery/art-culture.png"
                                alt=""
                              />
                            </picture>
                          </a>
                          <div className="card-img-overlay d-flex align-items-end bg-dark-gradient">
                            <h5 className="text-white fs--1">
                              Art and culture
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-sm-4 col-xl-2 mb-3 hover-top px-2">
                        <div className="card h-100 w-100 text-white">
                          <a className="stretched-link" href="!#">
                            <picture>
                              <img
                                className="img-fluid"
                                src="/img/gallery/wild.png"
                                alt=""
                              />
                            </picture>
                          </a>
                          <div className="card-img-overlay d-flex align-items-end bg-dark-gradient">
                            <h5 className="text-white fs--1">
                              Wildlife and nature
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-sm-4 col-xl-2 mb-3 hover-top px-2">
                        <div className="card h-100 w-100 text-white">
                          <a className="stretched-link" href="!#">
                            <picture>
                              <img
                                className="img-fluid"
                                src="/img/gallery/hill.jpg"
                                alt=""
                              />
                            </picture>
                          </a>
                          <div className="card-img-overlay d-flex align-items-end bg-dark-gradient">
                            <h5 className="text-white fs--1">
                              Hill and nature
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row h-100 offset-lg-2">
                      <div className="col-6 col-sm-4 col-xl-2 mb-3 hover-top px-2">
                        <div className="card h-100 w-100 text-white">
                          <a className="stretched-link" href="!#">
                            <picture>
                              <img
                                className="img-fluid"
                                src="/img/gallery/food.png"
                                alt=""
                              />
                            </picture>
                          </a>
                          <div className="card-img-overlay d-flex align-items-end bg-dark-gradient">
                            <h5 className="text-white fs--1">Food</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-sm-4 col-xl-2 mb-3 hover-top px-2">
                        <div className="card h-100 w-100 text-white">
                          <a className="stretched-link" href="!#">
                            <picture>
                              <img
                                className="img-fluid"
                                src="/img/gallery/backpacking.png"
                                alt=""
                              />
                            </picture>
                          </a>
                          <div className="card-img-overlay d-flex align-items-end bg-dark-gradient">
                            <h5 className="text-white fs--1">Backpacking</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-sm-4 col-xl-2 mb-3 hover-top px-2">
                        <div className="card h-100 w-100 text-white">
                          <a className="stretched-link" href="!#">
                            <picture>
                              <img
                                className="img-fluid"
                                src="/img/gallery/beaches.png"
                                alt=""
                              />
                            </picture>
                          </a>
                          <div className="card-img-overlay d-flex align-items-end bg-dark-gradient">
                            <h5 className="text-white fs--1">
                              Beaches,coast and island
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-sm-4 col-xl-2 mb-3 hover-top px-2">
                        <div className="card h-100 w-100 text-white">
                          <a className="stretched-link" href="!#">
                            <picture>
                              <img
                                className="img-fluid"
                                src="/img/gallery/art-culture.png"
                                alt=""
                              />
                            </picture>
                          </a>
                          <div className="card-img-overlay d-flex align-items-end bg-dark-gradient">
                            <h5 className="text-white fs--1">
                              Art and culture
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-sm-4 col-xl-2 mb-3 hover-top px-2">
                        <div className="card h-100 w-100 text-white">
                          <a className="stretched-link" href="!#">
                            <picture>
                              <img
                                className="img-fluid"
                                src="/img/gallery/wild.png"
                                alt=""
                              />
                            </picture>
                          </a>
                          <div className="card-img-overlay d-flex align-items-end bg-dark-gradient">
                            <h5 className="text-white fs--1">
                              Wildlife and nature
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="row mt-4">
                  <div className="col-12 position-relative">
                    <a
                      className="carousel-control-prev carousel-icon z-index-2"
                      href="#carouselCategory"
                      role="button"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next carousel-icon z-index-2"
                      href="#carouselCategory"
                      role="button"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </a>
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

export default CategoriesSection;
