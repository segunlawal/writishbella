import React from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { Button } from "@material-tailwind/react";
import AboutCarousel from "./Aboutcarousel";
import Footer from "../home/Footer";

function About() {
  return (
    <div className="r-black">
      <Zoom>
        <p className="lg:text-left text-center md:pl-20 text-3xl font-bold pt-10 pb-5 text-xl tracking-tighter">
          GET TO KNOW ME!
        </p>
      </Zoom>
      <div className="xl:flex xl:mb-20">
        <div className="xl:w-1/2 md:px-20 px-5">
          <Fade>
            <p className="leading-7">
              I&apos;ve always been a lover of books and life. I often find
              myself lost in thought as to why people think and act the way they
              do.
            </p>
            <br />
            <p className="leading-7">
              I remember reading books as an eight year old kid and always
              pointing out errors or dreaming of how a story should end.
              I&apos;m passionate about what I do and writing is the fluid that
              runs through my vein.
            </p>
            <br />
            <p className="leading-7">
              I am unique and I believe in the uniqueness of my style. I am
              empathetic and it has allowed me as a writer, to understand the
              thought pattern of my clients and their targeted audience.
            </p>
            <br />
            <p className="leading-7">
              Enough about me, it&apos;s all about you. I&apos;m looking forward
              to meeting
              <span className="text-blue-400"> you</span>.
            </p>
          </Fade>
        </div>
        <div className="xl:-mt-20 flex justify-center">
          <img
            className="shadow-2xl border-8 border-white w-96 mt-5 sm:h-96"
            src={require("../assets/chisom-pic.jpg")}
            alt="a pic of me"
          />
        </div>
      </div>

      <div className="about-section2 mt-10">
        <p className="oleo-font text-center text-white text-4xl py-10 text-xl px-5">
          What I&#39;m Passionate About/ Fun Facts About Me
        </p>
        <AboutCarousel />
      </div>

      <div className="lg:flex py-10 lg:px-20  px-5">
        <div className="lg:w-1/2">
          <Fade>
            <p className="font-bold text-2xl pb-1 tracking-tight">
              You&#39;ll love to work with me because
            </p>

            <div className="flex">
              <BsFillPatchCheckFill className="text-blue-400 mt-3 sm:w-7 sm:h-7 w-14 h-14" />
              <div className="pb-2">
                <p className="px-5 font-bold text-lg">
                  I am passionate about writing
                </p>
                <p className="px-5 ">
                  Writing is the very thing that gives me a sense of purpose and
                  direction. I love writing; writing is my job; my life depends
                  on it.
                </p>
              </div>
            </div>

            <div className="flex">
              <BsFillPatchCheckFill className="text-blue-400 mt-3 sm:w-7 sm:h-7 w-14 h-14" />
              <div className="pb-2">
                <p className="px-5 font-bold text-lg">
                  I work to please my clients
                </p>
                <p className="px-5 ">
                  The essence of what I do is to ensure the satisfaction of my
                  clients after every job. I am capable of working tirelessly to
                  achieve this.
                </p>
              </div>
            </div>

            <div className="flex">
              <BsFillPatchCheckFill className="text-blue-400 mt-3 sm:w-7 sm:h-7 w-14 h-14" />
              <div className="pb-2">
                <p className="px-5 font-bold text-lg">I am reliable</p>
                <p className="px-5 ">
                  I&apos;m a freelancer you can trust to deliver quality work at
                  the right time. Trust me never to disappoint you.
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="sm:px-10 lg:w-1/2">
          <Fade>
            <p className="font-bold text-2xl tracking-tight pb-1 lg:mt-0 mt-10">
              Just a little about you
            </p>
            <p className="">
              You want the best. You deserve the best. Your satisfaction is my
              priority.
            </p>
          </Fade>
          <br />
          <a href="/contact">
            <Button
              color="blue"
              size="md"
              className="sm:w-70 w-64 contact-btni mb-2"
            >
              <span className=" text-white">YOU WANT TO WORK WITH ME</span>
            </Button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
