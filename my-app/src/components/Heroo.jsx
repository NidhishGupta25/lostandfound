import { useState } from "react";
import { Link } from "react-router-dom";
import "./Heroo.css";
import Carousel from "../components/Carousel";
import ItemForm from "../components/ItemForm";

export default function Hero() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <section className="hero-gradient">
        <div className="hero-container">
          <h1 className="hero-heading">Lost Something on Campus?</h1>
          <p className="hero-subheading">
            Your campus community is here to help! Report lost items, browse
            found belongings, and reunite students with their stuff.
          </p>

          <div className="hero-actions">
            <Link to="/BrowseItems">
              <button className="hero-btn lost">I Lost Something</button>
            </Link>

            <button
              className="hero-btn found"
              onClick={() => setShowForm(true)}
            >
              I Found Something
            </button>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <h2 className="title">How It Works</h2>
          <p className="subtitle">
            Simple steps to reunite lost items with their owners
          </p>

          <div className="steps">
            <div className="step">
              <div className="circle">1</div>
              <h3>Report Item</h3>
              <p>
                Create a detailed listing with photos and description of your
                lost or found item.
              </p>
            </div>

            <div className="step">
              <div className="circle">2</div>
              <h3>Get Matched</h3>
              <p>
                Our system helps match lost items with found items based on
                descriptions and location.
              </p>
            </div>

            <div className="step">
              <div className="circle">3</div>
              <h3>Reunite</h3>
              <p>
                Connect with the other party through our secure messaging system
                to arrange pickup.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Carousel />

      {showForm && (
        <ItemForm
          onCancel={() => setShowForm(false)}
          onSubmit={() => setShowForm(false)}
        />
      )}
    </>
  );
}
