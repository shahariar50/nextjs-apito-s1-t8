const HeroSection = () => {
  return (
    <section className="py-0">
      <div
        className="bg-holder d-none d-md-block"
        style={{
          backgroundImage: "url(/img/illustrations/hero.png)",
          backgroundPosition: "right bottom",
          backgroundSize: "contain",
        }}
      ></div>

      <div className="container position-relative">
        <div className="row align-items-center min-vh-75 my-lg-8">
          <div className="col-md-7 col-lg-6 text-center text-md-start py-8">
            <h1 className="mb-4 display-1 lh-sm">
              Travel around <br className="d-block d-lg-none d-xl-block" />
              the world
            </h1>
            <p className="mt-4 mb-5 fs-1 lh-base">
              Plan and book your perfect trip with expert advice,{" "}
              <br className="d-none d-lg-block" />
              travel tips, destination information and{" "}
              <br className="d-none d-lg-block" />
              inspiration from us.
            </p>
            <a
              className="btn btn-lg btn-primary hover-top"
              href="#"
              role="button"
            >
              Sign Up Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
