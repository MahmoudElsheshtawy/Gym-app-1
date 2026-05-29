import React from "react";
import Hero from "../components/Hero";
import { Link, NavLink } from "react-router-dom";
import About from "./About";
import Packages from "./Packages";
import Results from "./Results";
import ImportantNotes from "./ImportantNotes";
import ContactSection from "./ContactSection";

const Home = () => {
  return (
    <div >
      <Hero />

    <About />
     <Packages />
     <Results />
     <ImportantNotes/>
     <ContactSection />
      <NavLink
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      >
        <div className=" flex justify-center ">
        </div>
      </NavLink>
    </div>
  );
};

export default Home;
