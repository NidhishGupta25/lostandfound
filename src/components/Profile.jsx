import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <aside className="sidebar">
        <div className="profile-card">
          <img
            src="https://via.placeholder.com/100"
            alt="profile"
            className="profile-img"
          />
          <h2>John Doe</h2>
          <p className="member-since">Member since Jan 2024</p>
          <div className="rating">
            ⭐ 4.9 <span className="verified">Verified</span>
          </div>
        </div>

        <nav className="menu">
          <button className="menu-item active">Overview</button>
          <button className="menu-item">My Posts</button>
          <button className="menu-item">Saved Items</button>
          <button className="menu-item">
            Notifications <span className="badge">2</span>
          </button>
          <button className="menu-item">Settings</button>
        </nav>

        <button className="post-btn">+ Post New Item</button>
      </aside>

      <main className="dashboard">
        <h1>Dashboard Overview</h1>
        <p className="subtitle">Track your lost & found activity</p>

        <div className="stats">
          <div className="stat-card">
            <h2>12</h2>
            <p>Items Posted</p>
            <span>+2 this week</span>
          </div>
          <div className="stat-card">
            <h2>8</h2>
            <p>Items Reunited</p>
            <span>+3 this month</span>
          </div>
          <div className="stat-card">
            <h2>156</h2>
            <p>Profile Views</p>
            <span>+12 today</span>
          </div>
          <div className="stat-card">
            <h2>94%</h2>
            <p>Success Rate</p>
            <span>Above average</span>
          </div>
        </div>

        <div className="recent-section">
          <div className="recent-card">
            <h3>Recent Posts</h3>
            <ul>
              <li>
                <img src="https://via.placeholder.com/40" alt="item" />
                <div>
                  <p>iPhone 14 Pro</p>
                  <span>Central Park · 2 hours ago</span>
                </div>
                <span className="tag found">found</span>
              </li>
              <li>
                <img src="https://via.placeholder.com/40" alt="item" />
                <div>
                  <p>Brown Leather Wallet</p>
                  <span>Downtown · 1 day ago</span>
                </div>
                <span className="tag lost">lost</span>
              </li>
              <li>
                <img src="https://via.placeholder.com/40" alt="item" />
                <div>
                  <p>Blue Backpack</p>
                  <span>University · 3 days ago</span>
                </div>
                <span className="tag found">found</span>
              </li>
            </ul>
          </div>

          {/* Recent Notifications */}
          <div className="recent-card">
            <h3>Recent Notifications</h3>
            <ul>
              <li>
                <span className="dot blue"></span>
                <div>
                  <p>
                    <b>Potential match found!</b>
                  </p>
                  <span>
                    Someone posted a similar item to your lost iPhone · 30
                    minutes ago
                  </span>
                </div>
              </li>
              <li>
                <span className="dot blue"></span>
                <div>
                  <p>
                    <b>New message</b>
                  </p>
                  <span>
                    Sarah Johnson sent you a message about your wallet · 2 hours
                    ago
                  </span>
                </div>
              </li>
              <li>
                <span className="dot gray"></span>
                <div>
                  <p>
                    <b>Item reunited!</b>
                  </p>
                  <span>
                    Your blue backpack was successfully returned · 1 day ago
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
