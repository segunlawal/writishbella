import { useState } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

import { Button } from "@material-tailwind/react";

function About() {
  /* eslint-disable no-unused-vars */
  const [allLoaded, setAllLoaded] = useState(true);
  /* eslint-enable no-unused-vars */
  return (
    <div className="about r-black h-50 px-6 sm:px-20 py-10 gap-4 lg:flex">
      <div className="flex lg:w-1/2 justify-center my-auto">
        <Fade top>
          {allLoaded && (
            <img
              className="imm-pic w-96 shadow-2xl hover:shadow-8xl hover:border-4"
              src={require("../assets/imm-pic.png")}
              alt="my pic"
              // onLoad={handleLoad}
            />
          )}
        </Fade>
      </div>
      <Fade>
        <div className="lg:w-1/2 pt-30 mt-5 ">
          <Fade big>
            <p className="font-bold text-2xl habout-head lg:text-left -mr-5 pt-8 tracking-tight leading-tight">
              Meet Immaculatar Chisom.
            </p>
            <p className="font-semibold text-xl habout-head lg:text-left tracking-tight leading-tight">
              Because you&#39;re amazing, you can call me Writish Bella!
            </p>
          </Fade>
          <Fade>
            <p className="py-2">
              I am a freelance writer with experience in Content creation,
              Copywriting Ghostwriting, Editing/Proofreading, Research, and
              Transcribing.
            </p>
          </Fade>
          <Fade>
            <p className="py-2">
              I am an author of{" "}
              <Link to="/portfolio/#my-books">
                <span className="text-blue-400 hover:underline">
                  three published books
                </span>
              </Link>
              . I am a creative with an exceptional ability to meet deadlines. I
              use my knowledge and skills to satisfy my clients.
            </p>
          </Fade>
          <a href="/about">
            <Button color="blue" size="md" className="my-3">
              <span className="text-white learn-btn normal-case">
                Learn More About Me
              </span>
            </Button>
          </a>
        </div>
      </Fade>
    </div>
  );
}

export default About;
