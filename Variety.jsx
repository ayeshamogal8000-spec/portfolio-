import React from 'react'

const biryaniVarieties = [
  {
    id: 1,
    title: "Chicken Dum Biryani",
    type: "Non-Veg",
    price: 199,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a",
  },
  {
    id: 2,
    title: "Mutton Biryani",
    type: "Non-Veg",
    price: 299,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd",
  },
  {
    id: 3,
    title: "Egg Biryani",
    type: "Non-Veg",
    price: 149,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1642821373181-696a54913e93",
  },
  {
    id: 4,
    title: "Paneer Biryani",
    type: "Veg",
    price: 179,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b",
  },
  {
    id: 5,
    title: "Veg Biryani",
    type: "Veg",
    price: 129,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84",
  },
  {
    id: 6,
    title: "Special Hyderabadi Biryani",
    type: "Non-Veg",
    price: 249,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
  },
];

function Variety() {
  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "#121212", minHeight: "100vh", color: "#fff" }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge bg-warning text-dark px-3 py-2 mb-3">
            Our Menu
          </span>
          <h1 className="fw-bold">
            Anushka's <span className="text-warning">Biryani Varieties</span>
          </h1>
          <p className="text-light-emphasis">
            Explore our delicious range of veg and non-veg biryanis.
          </p>
        </div>

        <div className="row g-4">
          {biryaniVarieties.map((item) => (
            <div className="col-md-6 col-lg-4" key={item.id}>
              <div className="card bg-dark text-white border-0 shadow-lg h-100">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                  style={{ height: "230px", objectFit: "cover" }}
                />

                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span
                      className={`badge ${
                        item.type === "Veg" ? "bg-success" : "bg-danger"
                      }`}
                    >
                      {item.type === "Veg" ? "🟢 Veg" : "🔴 Non-Veg"}
                    </span>

                    <span className="text-warning">⭐ {item.rating}</span>
                  </div>

                  <h4 className="fw-bold">{item.title}</h4>

                  <p className="text-light-emphasis">
                    Freshly prepared with aromatic basmati rice, rich spices,
                    and authentic biryani flavors.
                  </p>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <h5 className="text-warning mb-0">₹{item.price}</h5>
                    <button className="btn btn-warning btn-sm">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-5 p-4 rounded-4 text-center"
          style={{ backgroundColor: "#1e1e1e" }}
        >
          <h3 className="text-warning fw-bold">Taste the Royal Flavor 🍛</h3>
          <p className="text-light-emphasis mb-0">
            From spicy chicken biryani to rich veg biryani, every plate is made
            with love at Anushka's Biryani.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Variety;