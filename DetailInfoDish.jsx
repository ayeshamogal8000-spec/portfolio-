import React from "react";
import { useParams } from "react-router-dom";

function DetailInfoDish({biryanis}) {
  
    const {ID} = useParams()

    const dish = biryanis.find((v,i)=>v.id == ID)



  return (
    <div
      className="container-fluid py-5"
      style={{
        backgroundColor: "#121212",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Image */}
          <div className="col-lg-6">
            <img
              src={dish.image}
              alt={dish.title}
              className="img-fluid rounded-4 shadow-lg w-100"
              style={{
                height: "430px",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Dish Info */}
          <div className="col-lg-6">
            <span
              className={`badge mb-3 px-3 py-2 ${
                dish.type === "Veg" ? "bg-success" : "bg-danger"
              }`}
            >
              {dish.icon} {dish.type}
            </span>

            <h1 className="fw-bold display-5 text-warning mb-3">
              {dish.title}
            </h1>

            <p className="text-light-emphasis fs-5">
              A delicious biryani prepared with premium ingredients, aromatic
              spices, and traditional cooking style.
            </p>

            <div className="card bg-dark text-white border-0 shadow-lg my-4">
              <div className="card-body">
                <h4 className="text-warning mb-3">Dish Details</h4>

                <p>
                  <strong>Ingredients:</strong>
                  <br />
                  <span className="text-light-emphasis">
                    {dish.ingredients}
                  </span>
                </p>

                <p>
                  <strong>Rating:</strong>{" "}
                  <span className="text-warning">⭐ {dish.ratings}</span>
                </p>

                <p>
                  <strong>Price:</strong>{" "}
                  <span className="text-warning fs-4 fw-bold">
                    ₹{dish.price}
                  </span>
                </p>
              </div>
            </div>

            <div className="d-flex gap-3">
              <button className="btn btn-warning btn-lg px-4">
                Order Now
              </button>
              <button className="btn btn-outline-light btn-lg px-4">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Extra Section */}
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card bg-dark text-white border-0 shadow h-100">
              <div className="card-body text-center">
                <h2>🍚</h2>
                <h5 className="text-warning">Premium Basmati</h5>
                <p className="text-light-emphasis">
                  Made with long grain aromatic rice.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card bg-dark text-white border-0 shadow h-100">
              <div className="card-body text-center">
                <h2>🌶️</h2>
                <h5 className="text-warning">Rich Spices</h5>
                <p className="text-light-emphasis">
                  Blended with authentic Indian masalas.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card bg-dark text-white border-0 shadow h-100">
              <div className="card-body text-center">
                <h2>🔥</h2>
                <h5 className="text-warning">Freshly Cooked</h5>
                <p className="text-light-emphasis">
                  Served hot and fresh for every order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailInfoDish;