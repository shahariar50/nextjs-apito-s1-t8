/* eslint-disable react/no-unescaped-entities */
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
          <div
            className="carousel slide"
            id="carouselExampleDark"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <div className="row h-100 flex-center">
                  <div className="col-12 col-lg-7 mb-3 mb-md-0">
                    <div className="card h-100">
                      <div className="card-body d-flex flex-center flex-column">
                        <p className="text-center card-text mb-5">
                          “Curabitur posuere ullamcorper pulvinar. Donec
                          dignissim bibendum leo, at faucibus enim aliquam eu.
                          Nullam quis pulvinar diam, ac elementum urna. Integer
                          id vehicula tortor, nec pulvinar libero. Ut elit elit,
                          fringilla a nisi ut, dapibus eleifend quam.”{" "}
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
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <div className="row h-100 flex-center">
                  <div className="col-12 col-lg-7 mb-3 mb-md-0">
                    <div className="card h-100">
                      <div className="card-body d-flex flex-center flex-column">
                        <p className="text-center card-text mb-5">
                          “Curabitur posuere ullamcorper pulvinar. Donec
                          dignissim bibendum leo, at faucibus enim aliquam eu.
                          Nullam quis pulvinar diam, ac elementum urna. Integer
                          id vehicula tortor, nec pulvinar libero. Ut elit elit,
                          fringilla a nisi ut, dapibus eleifend quam.”{" "}
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
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <div className="row h-100 flex-center">
                  <div className="col-12 col-lg-7 mb-3 mb-md-0">
                    <div className="card h-100">
                      <div className="card-body d-flex flex-center flex-column">
                        <p className="text-center card-text mb-5">
                          “Curabitur posuere ullamcorper pulvinar. Donec
                          dignissim bibendum leo, at faucibus enim aliquam eu.
                          Nullam quis pulvinar diam, ac elementum urna. Integer
                          id vehicula tortor, nec pulvinar libero. Ut elit elit,
                          fringilla a nisi ut, dapibus eleifend quam.”{" "}
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
              </div>
              <div className="carousel-item">
                <div className="row h-100 flex-center">
                  <div className="col-12 col-lg-7 mb-3 mb-md-0">
                    <div className="card h-100">
                      <div className="card-body d-flex flex-center flex-column">
                        <p className="text-center card-text mb-5">
                          “Curabitur posuere ullamcorper pulvinar. Donec
                          dignissim bibendum leo, at faucibus enim aliquam eu.
                          Nullam quis pulvinar diam, ac elementum urna. Integer
                          id vehicula tortor, nec pulvinar libero. Ut elit elit,
                          fringilla a nisi ut, dapibus eleifend quam.”{" "}
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
              </div>
            </div>
            <div className="row px-3 px-md-0">
              <div className="col-12 position-relative d-flex flex-center">
                <ol className="carousel-indicators">
                  <li
                    className="active"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="0"
                  ></li>
                  <li
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="1"
                  ></li>
                  <li
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="2"
                  ></li>
                  <li
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="3"
                  ></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
