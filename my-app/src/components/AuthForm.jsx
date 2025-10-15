import React, { useState } from "react";
import "./AuthForm.css"; 

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false); 
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in:", { email: formData.email, password: formData.password });
      alert("Login successful!");
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log("Registered user:", formData);
      alert("Registration successful!");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
      <form className="form" onSubmit={handleSubmit}>
        <p className="titlee">{isLogin ? "Sign In" : "Register"}</p>
        <p className="message">
          {isLogin
            ? "Welcome back! Please sign in to continue."
            : "Signup now and get full access to our app."}
        </p>

        {!isLogin && (
          <label>
            <input
              className="input"
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              placeholder=""
              required
            />
            <span>Full Name</span>
          </label>
        )}

        <label>
          <input
            className="input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=""
            required
          />
          <span>Email</span>
        </label>

        <label>
          <input
            className="input"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder=""
            required
          />
          <span>Password</span>
        </label>

        {!isLogin && (
          <label>
            <input
              className="input"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder=""
              required
            />
            <span>Confirm Password</span>
          </label>
        )}

        <button className="submit" type="submit">
          {isLogin ? "Sign In" : "Register"}
        </button>

        <p className="signin">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsLogin(false);
                }}
              >
                Register
              </a>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsLogin(true);
                }}
              >
                Sign In
              </a>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
