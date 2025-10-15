import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BrowseItems.css";

const BrowseItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/items")
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => console.error("Error fetching items:", err));
  }, []);

  return (
    <div className="browse-items">
      <div className="item-grid">
        {items.length > 0 ? (
          items.map((item) => (
            <div className="item-card" key={item._id}>
              <div
                className={`status-badge ${
                  item.status?.toLowerCase() === "lost"
                    ? "lost"
                    : "found"
                }`}
              >
                {item.status ? item.status.toUpperCase() : "UNKNOWN"}
              </div>

              <img
                src={item.images[0] || "/placeholder.png"}
                alt={item.title}
                className="item-image"
              />

              <div className="item-info">
                <h3>{item.title}</h3>
                <p>
                  <b>Type:</b> {item.category}
                </p>
                <p>
                  <b>Location:</b> {item.location}
                </p>
                <p>
                  <b>Description:</b> {item.description}
                </p>
                <p>
                  <b>Contact:</b> {item.contact_name} | {item.contact_email} |{" "}
                  {item.contact_phone}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No items reported yet.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseItems;
