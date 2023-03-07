const BookingSection = () => {
  return (
    <section id="booking">
      <div
        className="bg-holder"
        style={{
          backgroundImage: "url(/img/gallery/booking.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="container">
        <div className="row">
          <div className="col-12 py-8 text-white">
            <div className="d-flex flex-column flex-center">
              <h2 className="text-white fs-2 fs-md-3">WE WILL SEE YOU</h2>
              <h1 className="text-white fs-2 fs-sm-4 fs-lg-7 fw-bold">
                Enjoy 30% Off On First Trip
              </h1>
            </div>
            <form className="row gy-2 gx-md-2 gx-lg-4 flex-center my-6">
              <div className="col-6 col-md-3">
                <label
                  className="visually-hidden"
                  htmlFor="inlineFormSelectPref"
                >
                  Destinations
                </label>
                <select className="form-select" id="inlineFormSelectPref">
                  <option selected>Destinations</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-6 col-md-3">
                <label className="visually-hidden" htmlFor="autoSizingSelect">
                  Package
                </label>
                <select className="form-select" id="autoSizingSelect">
                  <option selected>Package</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-6 col-md-3">
                <label className="visually-hidden" htmlFor="date">
                  Date
                </label>
                <div className="input-group">
                  <input className="form-control" id="date" type="date" />
                </div>
              </div>
              <div className="col-6 col-md-auto">
                <button className="btn btn-lg btn-primary" type="submit">
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
