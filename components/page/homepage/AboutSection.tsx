import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const AboutSection = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <section id="places">
      <div className="container">
        <div className="row flex-md-center">
          <div className="col-md-11 col-lg-4 py-md-3 px-4 px-md-3 px-lg-0 px-xl-2 order-lg-1">
            <h1 className="fw-bold fs-md-3 fs-xl-5">
              Amazing places to enjoy your travel
            </h1>
            <hr
              className="text-primary my-4 my-lg-3 my-xl-4"
              style={{ height: "3px", width: "70px" }}
            />
            <p className="lh-lg">
              Etiam facilisis, sapien quis porta dignissim, orci nisi pharetra
              dui, varius vehicula ligula nulla sit amet lorem. Aenean in
              vestibulum quam. Cras commodo varius neque, non gravida diam
              ultrices nec. Cras nulla mauris, fermentum nec libero in.
            </p>
            <a
              className="btn btn-lg btn-primary hover-top"
              href="#"
              role="button"
            >
              Explore
            </a>
          </div>
          <div className="col-lg-8 order-lg-0 order-1 px-4 px-md-3 py-8 py-md-3">
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
                  <div className="col-md-4 mb-3 mb-md-0">
                    <div className="card h-100 text-white hover-top">
                      <picture>
                        <img
                          className="img-fluid h-100"
                          src="/img/gallery/maldives.png"
                          alt=""
                        />
                      </picture>
                      <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-dark-gradient">
                        <div className="pt-3">
                          <span className="badge bg-primary">$860</span>
                        </div>
                        <div className="ps-3 d-flex justify-content-between align-items-center">
                          <h5 className="text-white">Maldives</h5>
                          <h6 className="text-600">3 days</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                    <div className="card h-100 text-white hover-top">
                      <picture>
                        <img
                          className="img-fluid h-100"
                          src="/img/gallery/indonesia.png"
                          alt=""
                        />
                      </picture>
                      <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-dark-gradient">
                        <div className="pt-3">
                          <span className="badge bg-primary">$860</span>
                        </div>
                        <div className="ps-3 d-flex justify-content-between align-items-center">
                          <h5 className="text-white">Indonesia</h5>
                          <h6 className="text-600">7 days</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                    <div className="card h-100 text-white hover-top">
                      <picture>
                        <img
                          className="img-fluid h-100"
                          src="/img/gallery/kathmandu.png"
                          alt=""
                        />
                      </picture>
                      <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-dark-gradient">
                        <div className="pt-3">
                          <span className="badge bg-primary">$340</span>
                        </div>
                        <div className="ps-3 d-flex justify-content-between align-items-center">
                          <h5 className="text-white">Kathmandu</h5>
                          <h6 className="text-600">5 days</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row h-100">
                  <div className="col-md-4 mb-3 mb-md-0">
                    <div className="card h-100 text-white hover-top">
                      <picture>
                        <img
                          className="img-fluid h-100"
                          src="/img/gallery/maldives.png"
                          alt=""
                        />
                      </picture>
                      <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-dark-gradient">
                        <div className="pt-3">
                          <span className="badge bg-primary">$340</span>
                        </div>
                        <div className="ps-3 d-flex justify-content-between align-items-center">
                          <h5 className="text-white">Maldives</h5>
                          <h6 className="text-600">5 days</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                    <div className="card h-100 text-white hover-top">
                      <picture>
                        <img
                          className="img-fluid h-100"
                          src="/img/gallery/indonesia.png"
                          alt=""
                        />
                      </picture>
                      <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-dark-gradient">
                        <div className="pt-3">
                          <span className="badge bg-primary">$540</span>
                        </div>
                        <div className="ps-3 d-flex justify-content-between align-items-center">
                          <h5 className="text-white">Indonesia</h5>
                          <h6 className="text-600">5 days</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                    <div className="card h-100 text-white hover-top">
                      <picture>
                        <img
                          className="img-fluid h-100"
                          src="/img/gallery/kathmandu.png"
                          alt=""
                        />
                      </picture>
                      <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-dark-gradient">
                        <div className="pt-3">
                          <span className="badge bg-primary">$640</span>
                        </div>
                        <div className="ps-3 d-flex justify-content-between align-items-center">
                          <h5 className="text-white">Kathmandu</h5>
                          <h6 className="text-600">6 days</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row h-100">
                  <div className="col-md-4 mb-3 mb-md-0">
                    <div className="card h-100 text-white hover-top">
                      <picture>
                        <img
                          className="img-fluid h-100"
                          src="/img/gallery/kathmandu.png"
                          alt=""
                        />
                      </picture>
                      <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-dark-gradient">
                        <div className="pt-3">
                          <span className="badge bg-primary">$540</span>
                        </div>
                        <div className="ps-3 d-flex justify-content-between align-items-center">
                          <h5 className="text-white">Kathmandu</h5>
                          <h6 className="text-600">5 days</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                    <div className="card h-100 text-white hover-top">
                      <picture>
                        <img
                          className="img-fluid h-100"
                          src="/img/gallery/maldives.png"
                          alt=""
                        />
                      </picture>
                      <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-dark-gradient">
                        <div className="pt-3">
                          <span className="badge bg-primary">$860</span>
                        </div>
                        <div className="ps-3 d-flex justify-content-between align-items-center">
                          <h5 className="text-white">Maldives</h5>
                          <h6 className="text-600">3 days</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                    <div className="card h-100 text-white hover-top">
                      <picture>
                        <img
                          className="img-fluid h-100"
                          src="/img/gallery/indonesia.png"
                          alt=""
                        />
                      </picture>
                      <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-dark-gradient">
                        <div className="pt-3">
                          <span className="badge bg-primary">$860</span>
                        </div>
                        <div className="ps-3 d-flex justify-content-between align-items-center">
                          <h5 className="text-white">Indonesia</h5>
                          <h6 className="text-600">7 days</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="position-relative mt-5">
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
    </section>
  );
};

export default AboutSection;
