/* eslint-disable react/no-unescaped-entities */
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const ExperienceSection = () => {
  return (
    <section className="pt-5">
      <div className="container">
        <div className="row flex-center mb-5">
          <div className="col-lg-8 text-center">
            <h1 className="fw-bold fs-md-3 fs-lg-4 fs-xl-5">
              Traveller's Experiences
            </h1>
            <hr
              className="mx-auto text-primary my-4"
              style={{ height: "3px", width: "70px" }}
            />
          </div>

          <Swiper
            modules={[Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{ clickable: true }}
            loop={true}
            id="experienceSlider"
          >
            <SwiperSlide>
              <div className="row h-100 flex-center">
                <div className="col-12 col-lg-7 mb-3 mb-md-0">
                  <div className="card h-100">
                    <div className="card-body d-flex flex-center flex-column">
                      <p className="text-center card-text mb-5">
                        “Curabitur posuere ullamcorper pulvinar. Donec dignissim
                        bibendum leo, at faucibus enim aliquam eu. Nullam quis
                        pulvinar diam, ac elementum urna. Integer id vehicula
                        tortor, nec pulvinar libero. Ut elit elit, fringilla a
                        nisi ut, dapibus eleifend quam.”{" "}
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <picture>
                            <img
                              className="img-fluid"
                              src="/img/gallery/user-2.png"
                              alt=""
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="mt-3 text-center">
                        <h6 className="text-1000 fw-bold">Donquixote Law</h6>
                        <p className="fs--1 fw-normal mb-0">Traveller</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row h-100 flex-center">
                <div className="col-12 col-lg-7 mb-3 mb-md-0">
                  <div className="card h-100">
                    <div className="card-body d-flex flex-center flex-column">
                      <p className="text-center card-text mb-5">
                        “Curabitur posuere ullamcorper pulvinar. Donec dignissim
                        bibendum leo, at faucibus enim aliquam eu. Nullam quis
                        pulvinar diam, ac elementum urna. Integer id vehicula
                        tortor, nec pulvinar libero. Ut elit elit, fringilla a
                        nisi ut, dapibus eleifend quam.”{" "}
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <picture>
                            <img
                              className="img-fluid"
                              src="/img/gallery/user-1.png"
                              alt=""
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="mt-3 text-center">
                        <h6 className="text-1000 fw-bold">Viezh Robert</h6>
                        <p className="fs--1 fw-normal mb-0">Traveller</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row h-100 flex-center">
                <div className="col-12 col-lg-7 mb-3 mb-md-0">
                  <div className="card h-100">
                    <div className="card-body d-flex flex-center flex-column">
                      <p className="text-center card-text mb-5">
                        “Curabitur posuere ullamcorper pulvinar. Donec dignissim
                        bibendum leo, at faucibus enim aliquam eu. Nullam quis
                        pulvinar diam, ac elementum urna. Integer id vehicula
                        tortor, nec pulvinar libero. Ut elit elit, fringilla a
                        nisi ut, dapibus eleifend quam.”{" "}
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <picture>
                            <img
                              className="img-fluid"
                              src="/img/gallery/user-2.png"
                              alt=""
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="mt-3 text-center">
                        <h6 className="text-1000 fw-bold">Donquixote Law</h6>
                        <p className="fs--1 fw-normal mb-0">Traveller</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row h-100 flex-center">
                <div className="col-12 col-lg-7 mb-3 mb-md-0">
                  <div className="card h-100">
                    <div className="card-body d-flex flex-center flex-column">
                      <p className="text-center card-text mb-5">
                        “Curabitur posuere ullamcorper pulvinar. Donec dignissim
                        bibendum leo, at faucibus enim aliquam eu. Nullam quis
                        pulvinar diam, ac elementum urna. Integer id vehicula
                        tortor, nec pulvinar libero. Ut elit elit, fringilla a
                        nisi ut, dapibus eleifend quam.”{" "}
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <picture>
                            <img
                              className="img-fluid"
                              src="/img/gallery/user-1.png"
                              alt=""
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="mt-3 text-center">
                        <h6 className="text-1000 fw-bold">Viezh Robert</h6>
                        <p className="fs--1 fw-normal mb-0">Traveller</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
