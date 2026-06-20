import React from "react";

function AboutUs() {
  return (
    <div
      className="container-fluid py-5"
      style={{
        backgroundColor: "#121212",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      <div className="container">

        {/* Hero Section */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <span className="badge bg-warning text-dark mb-3 px-3 py-2">
              Authentic Taste Since 2024
            </span>

            <h1 className="display-4 fw-bold mb-4">
              Welcome to
              <span className="text-warning"> Anushka's Biryani</span>
            </h1>

            <p className="lead text-secondary">
              Serving authentic, flavorful, and freshly prepared biryanis made
              with premium ingredients and traditional recipes.
            </p>

            <p className="text-light-emphasis">
              At Anushka's Biryani, every plate is prepared with passion,
              aromatic spices, premium basmati rice, and carefully selected
              ingredients to bring you the true taste of Indian biryani.
            </p>

            <button className="btn btn-warning btn-lg mt-3">
              Explore Our Menu
            </button>
          </div>

          <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <img
              src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a"
              alt="Biryani"
              className="img-fluid rounded-4 shadow-lg"
              style={{
                maxHeight: "450px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="row text-center g-4 mb-5">
          <div className="col-md-3">
            <div className="card bg-dark border-warning border-1 shadow-lg">
              <div className="card-body">
                <h2 className="text-warning fw-bold">10+</h2>
                <p className="text-light mb-0">Biryani Varieties</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card bg-dark border-warning border-1 shadow-lg">
              <div className="card-body">
                <h2 className="text-warning fw-bold">1000+</h2>
                <p className="text-light mb-0">Happy Customers</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card bg-dark border-warning border-1 shadow-lg">
              <div className="card-body">
                <h2 className="text-warning fw-bold">100%</h2>
                <p className="text-light mb-0">Fresh Ingredients</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card bg-dark border-warning border-1 shadow-lg">
              <div className="card-body">
                <h2 className="text-warning fw-bold">4.8★</h2>
                <p className="text-light mb-0">Customer Rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-5">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              alt="Restaurant"
              className="img-fluid rounded-4 shadow-lg"
            />
          </div>

          <div className="col-lg-7 mt-4 mt-lg-0">
            <h2 className="fw-bold text-warning mb-3">Our Story</h2>

            <p className="text-light-emphasis">
              Anushka's Biryani was started with a simple mission — to bring
              authentic biryani flavors to food lovers. We combine traditional
              cooking techniques with fresh ingredients to create unforgettable
              meals.
            </p>

            <p className="text-light-emphasis">
              Whether it's our Chicken Dum Biryani, Mutton Special Biryani, or
              flavorful Veg Biryani, every dish is prepared with care and served
              fresh.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card bg-dark h-100 border-0 shadow-lg">
              <div className="card-body text-center p-4">
                <div className="display-5 mb-3">🍚</div>
                <h4 className="text-warning">Premium Rice</h4>
                <p className="text-light-emphasis">
                  Finest long-grain basmati rice for authentic taste and aroma.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card bg-dark h-100 border-0 shadow-lg">
              <div className="card-body text-center p-4">
                <div className="display-5 mb-3">🌶️</div>
                <h4 className="text-warning">Rich Spices</h4>
                <p className="text-light-emphasis">
                  Carefully blended spices for the perfect biryani flavor.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card bg-dark h-100 border-0 shadow-lg">
              <div className="card-body text-center p-4">
                <div className="display-5 mb-3">🚚</div>
                <h4 className="text-warning">Fast Delivery</h4>
                <p className="text-light-emphasis">
                  Hot, fresh, and delicious biryani delivered to your doorstep.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div
          className="mt-5 p-5 rounded-4 text-center shadow-lg"
          style={{
            background:
              "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
          }}
        >
          <h2 className="fw-bold text-dark">
            Every Biryani Tells a Story 🍛
          </h2>

          <p className="text-dark fs-5 mb-0">
            Experience the perfect blend of tradition, taste, and aroma only at
            Anushka's Biryani.
          </p>
        </div>

      </div>
    </div>
  );
}

export default AboutUs;