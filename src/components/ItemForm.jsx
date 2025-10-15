import React, { useState } from "react";
import axios from "axios";
import "./ItemForm.css";

const CATEGORIES = [
  "Electronics",
  "Clothing",
  "Documents",
  "Jewellery",
  "Keys",
  "Bags",
  "Books",
  "Personal Belonging",
  "Other",
];

export default function ItemForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Other",
    status: "lost",
    location: "",
    date: new Date().toISOString().split("T")[0],
    contact_name: "",
    contact_email: "",
    contact_phone: "",
  });

  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const imagePreviews = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setImages(imagePreviews);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // --- Basic validations ---
  if (!formData.contact_email.endsWith("@gmail.com")) {
    alert("❌ Please enter a valid Gmail address (must end with @gmail.com).");
    return;
  }

  const phoneDigits = formData.contact_phone.replace(/\D/g, ""); // remove non-numeric chars
  if (phoneDigits.length !== 10) {
    alert("❌ Please enter a valid 10-digit phone number.");
    return;
  }

  const data = new FormData();
  Object.entries(formData).forEach(([key, value]) => {
    data.append(key, value);
  });
  images.forEach((img) => data.append("images", img.file));

  try {
    const res = await axios.post("http://localhost:5000/api/items", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    alert("✅ Item uploaded successfully!");
    console.log("Response:", res.data);

    setFormData({
      title: "",
      description: "",
      category: "Other",
      status: "lost",
      location: "",
      date: new Date().toISOString().split("T")[0],
      contact_name: "",
      contact_email: "",
      contact_phone: "",
    });
    setImages([]);
    onCancel();
  } catch (err) {
    console.error(err);
    alert("❌ Failed to upload item. Check console for details.");
  }
};


  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Report Lost/Found Item</h2>
          <button className="close-btn" onClick={onCancel}>
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <label>
            Item Status:
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="lost">Lost</option>
              <option value="found">Found</option>
            </select>
          </label>

          <label>
            Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="e.g. Blue Backpack"
            />
          </label>

          <label>
            Category:
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              {CATEGORIES.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </label>

          <label>
            Description:
            <textarea
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              placeholder="Details, brand, color, unique features..."
            />
          </label>

          <label>
            Location:
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Where it was lost or found"
            />
          </label>

          <label>
            Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </label>

          <hr />
          <h3>Upload Image(s)</h3>
          <label className="file-upload-label">
            Select Images:
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
            />
          </label>

          {images.length > 0 && (
            <div className="image-preview-container">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img.url}
                  alt={`Preview ${index + 1}`}
                  className="image-preview"
                />
              ))}
            </div>
          )}

          <hr />
          <h3>Contact Details</h3>

          <label>
            Name:
            <input
              type="text"
              name="contact_name"
              value={formData.contact_name}
              onChange={handleChange}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="contact_email"
              value={formData.contact_email}
              onChange={handleChange}
            />
          </label>

          <label>
            Phone:
            <input
              type="tel"
              name="contact_phone"
              value={formData.contact_phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
            />
          </label>

          <div className="form-actions">
            <button type="button" onClick={onCancel} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
