import React from "react";
import Fade from "react-reveal/Fade";
import { Button } from "@material-tailwind/react";

import Carousel from "nuka-carousel";

function Portfoliocarousel() {
  return (
    <div className="pb-10 mx-auto">
      <Carousel
        // adaptiveHeight
        dragging
        defaultControlsConfig={{
          pagingDotsClassName: "hidden",
          prevButtonClassName:
            "oleo-font prev-button h-8 w-8 text-2xl font-semibold flex flex-col justify-center lg:ml-60 md:ml-20 sm:ml-5 mb-40 ml-2",
          nextButtonClassName:
            "oleo-font next-button h-8 w-8 text-2xl font-semibold flex flex-col justify-center lg:mr-60 md:mr-20 sm:mr-5 mb-40 mr-2",
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
        // wrapAround
      >
        <Fade right>
          <div className="cursor-grab">
            <img
              className="book-png w-52 mx-auto border-blue-400"
              src={require("../assets/transformed.png")}
              alt="book-pic"
            />
            <p className="text-white text-center mx-auto sm:w-96 pt-10 px-6">
              <span className="font-bold oleo-font text-lg">TRANSFORMED: </span>
              This book is centered on the life of a young lady whose experience
              of the transformational power of the Holy Ghost gave her a new
              life. Little did she know that her new life doesn&apos;t come
              without temptations and trials.
            </p>
            <div className="mt-2 flex justify-center">
              <a
                href="http://www.amazon.com/dp/B097J13H9R"
                target="_blank"
                rel="noreferrer"
              >
                <Button color="blue" size="md" className="contact-btni mb-2">
                  <span className="text-white">GET THE BOOK</span>
                </Button>
              </a>
            </div>
          </div>
        </Fade>
        <div className="cursor-grab">
          <img
            className="book-png w-80 mx-auto border-blue-400"
            src={require("../assets/girls-talk.png")}
            alt="book-pic"
          />
          <p className="text-white text-center mx-auto sm:w-96 pt-5 px-6">
            <span className="font-bold oleo-font text-lg">
              GIRL&apos;S TALK: Magic happens when girls talk
            </span>
          </p>
          <p className="text-white text-center mx-auto -mt-5 sm:w-96 pt-5 px-2">
            Girl&apos;s Talk is a detailed book of all that happens in a
            girl&apos;s life from childhood to adulthood and everything in
            between. This book was written out of a series of discussions with
            girls, adolescents, and adults. It is quite relatable and powerful.
          </p>
          <div className="mt-2 flex justify-center">
            <a
              href="http://www.amazon.com/dp/B08MCLK92C"
              target="_blank"
              rel="noreferrer"
            >
              <Button color="blue" size="md" className="contact-btni mb-2">
                <span className="text-white">GET THE BOOK</span>
              </Button>
            </a>
          </div>
        </div>
        <div className="cursor-grab">
          <img
            className="book-png w-48 mx-auto border-blue-400"
            src={require("../assets/wonderwomen.png")}
            alt="book-pic"
          />
          <p className="text-white text-center mx-auto sm:w-96 pt-5 px-6">
            <span className="font-bold oleo-font text-lg">
              WONDER WOMAN ATTITUDE
            </span>
          </p>
          <p className="text-white text-center mx-auto -mt-5 sm:w-96 pt-5 px-2">
            This book will expose you to attitudes that are capable of
            transforming you and making you the best in your chosen field. It
            also points out how you can maximize your &quot;strengths&quot; and
            &quot;weaknesses&quot; to achieve your goals and live a more
            fulfilling life.
          </p>
          <div className="mt-2 flex justify-center">
            <a
              href="http://www.amazon.com/dp/B0BHBM3G81"
              target="_blank"
              rel="noreferrer"
            >
              <Button color="blue" size="md" className="contact-btni mb-2">
                <span className="text-white">GET THE BOOK</span>
              </Button>
            </a>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Portfoliocarousel;
