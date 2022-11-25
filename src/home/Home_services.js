import React from "react";
import Fade from "react-reveal/Fade";

function Services() {
  return (
    <div className="services py-20 text-center">
      <p className=" text-white text-4xl font-bold mx-10">
        I am a seasoned writer.
      </p>
      <p className="text-white mx-20">
        The services I render include but are not limited to:
      </p>
      <Fade>
        <div className="my-7 mx-20 ">
          <svg
            aria-hidden="true"
            className="a-star cursor-pointer w-12 h-12 mx-auto text-blue-400 hover:text-yellow-400 dark:text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>You are a star!</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <p className="text-white font-bold text-lg">Copywriting</p>
          <p className="text-white  text-lg">
            With a professional certificate in Persuasive Writing, I guarantee
            you a copy that will <i>wow</i> your clients and have them sailing
            with you.
          </p>
        </div>
      </Fade>
      <Fade>
        <div className="my-7 mx-20">
          <svg
            aria-hidden="true"
            className="cursor-pointer w-12 h-12 mx-auto text-blue-400 hover:text-yellow-400 dark:text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>You are a star!</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <p className="text-white font-bold text-lg">Editing/ Proof-Reading</p>
          <p className="text-white  text-lg">
            I love reading and adding spice to the literature I get my hands on.
            I&apos;m patient and can point out any form of error. I&apos;ve
            edited and proofread two published books.
          </p>
        </div>
      </Fade>
      <Fade>
        <div className="my-7 mx-20">
          <svg
            aria-hidden="true"
            className="cursor-pointer w-12 h-12 mx-auto text-blue-400 hover:text-yellow-400 dark:text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>You are a star!</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <p className="text-white font-bold text-lg">Virtual Assistance</p>
          <p className="text-white  text-lg">
            I can do all your &quot;laundry&quot; virtually. I have knowledge of
            Microsoft Office. Let me know how you&apos;ll be needing my
            assistance.
          </p>
        </div>
      </Fade>
      <Fade>
        <a href="/services">
          <p className="text-blue-400">
            Check a full list of my services <i className="arrow right" />
          </p>
        </a>
      </Fade>
    </div>
  );
}

export default Services;
