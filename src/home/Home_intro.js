import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Button } from "@material-tailwind/react";

function Intro() {
  return (
    <div className="intro  flex overflow-x-hidden">
      <div className=" py-20 px-6 md:px-20 ">
        <Fade left>
          <p className="first-title text-white text-left text-6xl md:text-6xl font-bold drop-shadow-xl shadow-black">
            Freelance Writer
          </p>
          <p className="intro-info text-white text-left text-lg my-3">
            Welcome to Writish Bella!
          </p>
          <p className="intro-info text-white text-left text-lg -mt-1 mb-3 leading-tight">
            Let&#039;s get started. What&#039;s your budget?
          </p>
        </Fade>
        <a href="/contact">
          <Zoom>
            <Button color="blue" size="md" className="contact-btni mb-2">
              <span className=" text-white">WORK WITH ME</span>
            </Button>
          </Zoom>
        </a>
      </div>
      <Zoom>
        <div className="my-auto mx-auto hidden xl:flex gap-2 ">
          <div className="dot1 hover:animate-pulse shadow-xl my-auto" />
          <div className="dot2 hover:animate-pulse shadow-xl my-auto" />
          <div className="dot3 hover:animate-pulse shadow-xl my-auto" />
          <div className="dot4 hover:animate-pulse shadow-xl my-auto" />
          <div className="dot5 hover:animate-pulse shadow-xl my-auto" />
        </div>
      </Zoom>
    </div>
  );
}

export default Intro;
