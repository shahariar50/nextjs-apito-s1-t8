import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const CategoriesSection = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

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
              <Swiper
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                onSwiper={(swiper) => console.log(swiper)}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  // @ts-ignore
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  // @ts-ignore
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                loop={true}
              >
                <SwiperSlide>
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
                          <h5 className="text-white fs--1">Art and culture</h5>
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
                          <h5 className="text-white fs--1">Hill and nature</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
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
                          <h5 className="text-white fs--1">Art and culture</h5>
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
                          <h5 className="text-white fs--1">Hill and nature</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
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
                          <h5 className="text-white fs--1">Art and culture</h5>
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
                          <h5 className="text-white fs--1">Hill and nature</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="row mt-4">
                <div className="col-12 position-relative">
                  <span
                    className="carousel-control-prev carousel-icon z-index-2"
                    ref={navigationPrevRef}
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </span>
                  <span
                    className="carousel-control-next carousel-icon z-index-2"
                    ref={navigationNextRef}
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </span>
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
