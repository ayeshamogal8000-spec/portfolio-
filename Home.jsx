import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ backgroundColor: "#121212", minHeight: "100vh", color: "#fff" }}>
      {/* Carousel */}
      <div id="biryaniCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#biryaniCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#biryaniCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#biryaniCarousel" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a"
              className="d-block w-100"
              alt="Chicken Biryani"
              style={{ height: "620px", objectFit: "cover", filter: "brightness(45%)" }}
            />
            <div className="carousel-caption">
              <h1 className="display-3 fw-bold text-warning">Anushka's Biryani</h1>
              <p className="fs-4">Authentic taste, royal aroma, unforgettable flavor.</p>
              <Link className="btn btn-warning btn-lg" to='/order-now'>Order Now</Link>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd"
              className="d-block w-100"
              alt="Mutton Biryani"
              style={{ height: "620px", objectFit: "cover", filter: "brightness(45%)" }}
            />
            <div className="carousel-caption">
              <h1 className="display-3 fw-bold text-warning">Freshly Cooked Daily</h1>
              <p className="fs-4">Made with premium basmati rice and rich Indian spices.</p>
              <button className="btn btn-warning btn-lg">View Menu</button>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1596797038530-2c107229654b"
              className="d-block w-100"
              alt="Veg Biryani"
              style={{ height: "620px", objectFit: "cover", filter: "brightness(45%)" }}
            />
            <div className="carousel-caption">
              <h1 className="display-3 fw-bold text-warning">Veg & Non-Veg Varieties</h1>
              <p className="fs-4">Delicious biryani for every food lover.</p>
              <button className="btn btn-warning btn-lg">Explore Varieties</button>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#biryaniCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#biryaniCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Welcome Section */}
      <section className="container py-5">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <h2 className="fw-bold text-warning mb-3">Welcome to Anushka's Biryani</h2>
            <p className="text-light-emphasis fs-5">
              We serve hot, fresh, and flavorful biryanis prepared with traditional recipes,
              aromatic spices, and premium ingredients.
            </p>
            <p className="text-light-emphasis">
              From Chicken Dum Biryani to Veg Biryani, every plate is made with love and
              served with royal taste.
            </p>
            <button className="btn btn-warning px-4">Explore Menu</button>
          </div>

          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              alt="Restaurant Food"
              className="img-fluid rounded-4 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Special Cards */}
      <section className="container pb-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Our <span className="text-warning">Specials</span></h2>
          <p className="text-light-emphasis">Most loved biryanis by our customers</p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card bg-dark text-white border-0 shadow-lg h-100">
              <img
                src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a"
                className="card-img-top"
                alt="Chicken Dum Biryani"
                style={{ height: "230px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h4 className="text-warning">Chicken Dum Biryani</h4>
                <p className="text-light-emphasis">Classic dum cooked chicken biryani with rich spices.</p>
                <h5>₹199</h5>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card bg-dark text-white border-0 shadow-lg h-100">
              <img
                src="https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd"
                className="card-img-top"
                alt="Mutton Biryani"
                style={{ height: "230px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h4 className="text-warning">Mutton Biryani</h4>
                <p className="text-light-emphasis">Juicy mutton pieces layered with fragrant basmati rice.</p>
                <h5>₹299</h5>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card bg-dark text-white border-0 shadow-lg h-100">
              <img
                src="https://images.unsplash.com/photo-1596797038530-2c107229654b"
                className="card-img-top"
                alt="Veg Biryani"
                style={{ height: "230px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h4 className="text-warning">Veg Biryani</h4>
                <p className="text-light-emphasis">Aromatic veg biryani loaded with fresh vegetables.</p>
                <h5>₹129</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="container pb-5">
        <div
          className="text-center p-5 rounded-4 shadow-lg"
          style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)" }}
        >
          <h2 className="fw-bold text-dark">Hot Biryani Delivered Fresh 🍛</h2>
          <p className="text-dark fs-5 mb-3">
            Taste the perfect blend of spices, rice, and love at Anushka's Biryani.
          </p>
          <button className="btn btn-dark btn-lg">Order Your Plate</button>
        </div>
      </section>
    </div>
  );
}

export default Home;