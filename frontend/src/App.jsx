
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import AboutMe from "./pages/AboutMe";

// import Login from "./pages/Login";
// import PlaceOrder from "./pages/PlaceOrder";
// import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Packages from "./pages/Packages";
import Results from "./pages/Results";
import Resultsforme from "./pages/Resultsforme";
import ImportantNotes from "./pages/ImportantNotes";
import ContactSection from "./pages/ContactSection";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  
  useEffect(() => {
    const visited = localStorage.getItem("visited");

    if (!visited) {
      axios.post(`${backendUrl}/visit`)
        .then(res => {
          if (res.data.success) console.log("تم تسجيل الزيارة");
        })
        .catch(err => console.error(err));

      localStorage.setItem("visited", "true");
    }
  }, []);


  return (
    <div>
      <div className=" ">
        <ToastContainer />
        <Navbar  />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/results" element={<Results />} />
          <Route path="/results-for-me" element={<Resultsforme />} />
          <Route path="/important-notes" element={<ImportantNotes />} />
          <Route path="/contact-section" element={<ContactSection/>} />
       </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
