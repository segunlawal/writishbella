import React from "react";
import Fade from "react-reveal/Fade";

import Carousel from "nuka-carousel";

function Aboutcarousel() {
  return (
    <div className="py-10 mx-auto">
      <Carousel
        adaptiveHeight
        dragging
        defaultControlsConfig={{
          pagingDotsClassName: "hidden",
          prevButtonClassName:
            "oleo-font prev-button h-8 w-8 text-2xl font-semibold flex flex-col justify-center lg:ml-60 md:ml-20 sm:ml-5 mb-40 ml-3",
          nextButtonClassName:
            "oleo-font next-button h-8 w-8 text-2xl font-semibold flex flex-col justify-center lg:mr-60 md:mr-20 sm:mr-5 mb-40 mr-3",
          prevButtonStyle: {
            background: "#2196f3",
            color: "#f2f2f2",
          },
          nextButtonStyle: {
            background: "#2196f3",
            color: "#f2f2f2",
          },
          prevButtonText: "<",
          nextButtonText: ">",
        }}
        speed={1800}
        swiping
        wrapAround
      >
        <div className="cursor-grab">
          <Fade right>
            <p className="text-white text-center oleo-font text-6xl">1</p>
            <p className="text-white text-center sm:w-96 w-80 mx-auto ">
              <span className="font-semibold text-lg">I love God. </span>I
              believe in God and He is the one that keeps me going. The Holy
              Spirit is my source of inspiration and all I want is to project
              God in all that I do.
            </p>
          </Fade>
        </div>
        <div className="cursor-grab">
          <p className="text-white text-center oleo-font text-6xl">2</p>
          <p className="text-white text-center sm:w-96 w-80 mx-auto ">
            <span className="font-semibold text-lg">I love people. </span>I find
            it intriguing to figure out why people act the way they do. Spending
            time meeting people or simply sitting in a corner observing them is
            the highlight of my day.
          </p>
        </div>
        <div className="cursor-grab">
          <p className="text-white text-center oleo-font text-6xl">3</p>
          <p className="text-white text-center sm:w-96 w-80 mx-auto ">
            <span className="font-semibold text-lg">I love writing. </span>I am
            passionate about writing. It&apos;s the one thing I can do for free
            all the days of my life. Writing feels like birthing greatness.
            It&apos;s an extraordinary feeling.
          </p>
        </div>
      </Carousel>
    </div>
  );
}

export default Aboutcarousel;
