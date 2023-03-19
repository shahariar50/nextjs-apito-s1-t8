import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const navEl = document.querySelector("nav");
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 0) {
        navEl?.classList.add("not-top");
      } else {
        navEl?.classList.remove("not-top");
      }
    });
  }, []);
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top py-3 backdrop"
      data-navbar-on-scroll="data-navbar-on-scroll"
    >
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center fw-bold fs-2"
          href="#"
        >
          <picture>
            <img
              className="d-inline-block align-top img-fluid"
              src="assets/img/gallery/logo-icon.png"
              alt=""
              width="50"
            />
          </picture>
          <span className="text-primary fs-4 ps-2">Rhea</span>
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto pt-2 pt-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-600" href="#featuresVideos">
                Video
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-600" href="#places">
                Destinations
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-600" href="#booking">
                Booking{" "}
              </a>
            </li>
          </ul>
          <form className="ps-lg-5">
            <button
              className="btn btn-lg btn-outline-primary order-0"
              type="submit"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
