import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Heroo from "./components/Heroo";
import AuthForm from "./components/AuthForm";
import Footer from "./components/Footer";
import BrowseItems from "./components/BrowseItems";

const ReportItem = () => (
  <h2 style={{ textAlign: "center", marginTop: "120px" }}>Report Item Page</h2>
);
const Home = () => (
  <>
    <Heroo />
  </>
);

function App() {
  return (
    <Router>
      <Navbar />

      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reportitem" element={<ReportItem />} />
          <Route path="/browseitems" element={<BrowseItems />} />
          <Route path="/profile" element={<AuthForm />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;


