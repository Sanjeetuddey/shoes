import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/header";
import Main from "./component/main";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Shop from "./pages/shop";
import Login from "./pages/login";
import Footer from "./component/footer";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/about" element={<About />} />

          <Route path="/shop" element={<Shop />} />

          <Route path="/login" element={<Login />} />
        </Routes>

        <Main></Main>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
