import React from "react";
import Fade from "react-reveal/Fade";
import PortfolioCarousel from "./PortfolioCarousel";
import Footer from "../home/Footer";

function Portfolio() {
  return (
    <div className="r-black portfolio">
      <p className="text-3xl font-bold sm:pl-20 pl-5 pt-5 pb-2 tracking-tight">
        My Portfolio
      </p>
      <Fade>
        <p className="px-5 md:px-20 text-left leading-7">
          My name is Immaculatar Chisom. I hold a degree in Economics and a
          certificate in Persuasive Writing. I have worked as a content creator,
          Editor, Copywriter, Ghostwriter, and researcher. I have more than two
          years working experience. It would be my honor to work with you.
        </p>
        <br />
        <p className="px-5 md:px-20 text-left leading-7">
          I have volunteered and worked as a copywriter in various
          organizations. In 2021, I worked with Dessi Media as a copywriter on
          Cryptocurrency. I&apos;ve edited and proofread two published books,
          &quot;Why Temptation&quot; and &quot;Prayer Manual&quot;. Currently, I
          am working with a client, Adline Nwankwo Bokesa on health care
          services in the United Kingdom.
        </p>
      </Fade>
      <div className="portfolio-books mt-5 pt-5">
        <p
          className="text-center text-white font-bold text-2xl tracking-tighter py-2"
          id="my-books"
        >
          I have three books!
        </p>

        <PortfolioCarousel />
      </div>
      <Fade>
        <p className="sm:text-3xl text-2xl font-bold sm:pl-20 pl-10 pt-7 pb-3 tracking-tighter">
          Featured Blog Posts
        </p>
      </Fade>
      <div className="">
        <Fade>
          <div className="mb-10 sm:flex md:mx-20 mx-10 gap-5">
            <img
              className=" w-40 h-40 border-2 shadow border-blue-400"
              src={require("../assets/blog-1.jpg")}
              alt="blog-pic"
            />
            <div>
              <p className="sm:text-2xl text-xl font-semibold tracking-tight">
                Letter To My Future Husband
              </p>
              <a
                href="https://m.facebook.com/story.php?story_fbid=pfbid0emzX6E1e4VqjtrFvyaZvkkqc3Sgu4KBpXSogZrKbMtkjRF51xsmVKtsnmLayqgxbl&id=100063556839722"
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-lg hover:underline"> Read this Article</p>
              </a>
            </div>
          </div>
        </Fade>
        <Fade>
          <div className="mb-10 sm:flex md:mx-20 mx-10 gap-5">
            <img
              className=" w-40 h-40 border-2 shadow border-blue-400"
              src={require("../assets/blog-2.png")}
              alt="blog-pic"
            />
            <div>
              <p className="sm:text-2xl text-xl font-semibold tracking-tight">
                The Frustrations Of Many Writers
              </p>
              <a
                href="https://m.facebook.com/story.php?story_fbid=pfbid02y73RqmhhNwXt39oqbzrRb8cPgqbJENEf6DxTrXqadc1AHXfxJRCCtYJKNEabeoH1l&id=100063556839722"
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-lg hover:underline">Read this Article</p>
              </a>
            </div>
          </div>
        </Fade>
        <Fade>
          <div className="mb-10 sm:flex md:mx-20 mx-10 gap-5">
            <img
              className=" w-40 h-40 border-2 shadow border-blue-400"
              src={require("../assets/blog-3.jpg")}
              alt="blog-pic"
            />
            <div>
              <p className="sm:text-2xl text-xl font-semibold tracking-tight">
                Now That We Are Married
              </p>
              <a
                href="https://m.facebook.com/story.php?story_fbid=pfbid02bdW2xLx5KcYhZaLAF72A1cCUBLDdVWJ34JvQUbMRxfK6Jp6rQeFUjs3dY5ZATTeil&id=100063556839722"
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-lg hover:underline"> Read this Article</p>
              </a>
            </div>
          </div>
        </Fade>
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
