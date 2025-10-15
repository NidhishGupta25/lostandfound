import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Carousel.css";

const Carousel = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/items")
      .then((res) => setItems(res.data))
      .catch((err) => console.error("Error fetching items:", err));
  }, []);

  return (
    <section className="carousel-section">
      <h2 className="carousel-heading">Recently Posted Items</h2>

      {items.length === 0 ? (
        <p style={{ textAlign: "center" }}>No items available yet.</p>
      ) : (
        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            style={{
              animationDuration: `${items.length * 5}s`, 
            }}
          >
            {items.map((item) => (
              <div className="carousel-card" key={item._id}>
                <div
                  className={`status-badge ${
                    item.status?.toLowerCase() === "lost" ? "lost" : "found"
                  }`}
                >
                  {item.status ? item.status.toUpperCase() : "UNKNOWN"}
                </div>

                <img
                  src={item.images?.[0] || "/placeholder.png"}
                  alt={item.title}
                  className="carousel-image"
                />

                <div className="carousel-info">
                  <h3>{item.title}</h3>
                  <p>
                    <b>Type:</b> {item.category}
                  </p>
                  <p>
                    <b>Location:</b> {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Carousel;
