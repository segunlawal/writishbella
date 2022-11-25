import React from "react";
// import Slide from 'react-reveal/Slide';

import Intro from "../home/Home_intro";
import About from "../home/Home_about";
import Services from "../home/Home_services";
import Testimonials from "../home/Home_testimonials";
import Footer from "../home/Footer";

function Home() {
  return (
    <div>
      <Intro />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
