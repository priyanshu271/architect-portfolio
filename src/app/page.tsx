import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import AboutExperience from "./components/About";
import Highlights from "./components/Highlights";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const Home: React.FC = () => {
  return (
    <div className="bg-cream mx-auto p-4">
      <Navbar />
      <div id="home">
        <Profile />
      </div>
      <div id="about">
        <AboutExperience />
      </div>
      <div id="highlights">
        <Highlights />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
