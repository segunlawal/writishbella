import React from "react";
import { BsWhatsapp, BsTwitter } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer py-10">
      <p className="text-center text-xl underline text-white my-3 ">
        <a
          href="https://www.facebook.com/WritishBella"
          target="_blank"
          rel="noreferrer"
        >
          Visit my blog
        </a>
      </p>
      <p className="text-center text-base  text-white my-3 ">
        LET&#39;S CONNECT ON SOCIAL MEDIA
      </p>
      <div className="flex gap-5 justify-center">
        <a href="https://wa.me/2347036768551" target="_blank" rel="noreferrer">
          <BsWhatsapp className="text-white w-6 h-6 " />
        </a>
        <a
          href="https://www.facebook.com/immaculatar.chisom"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook className="text-white w-6 h-6 " />
        </a>
        <a
          href="http://www.linkedin.com/in/immaculatar-chisom-6a049a1b4"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-white w-6 h-6 " />
        </a>
        <a
          href="https://twitter.com/immaculate71?t=P3Amt9m1pRoO68gDtvm5TA&s=09"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter className="text-white w-6 h-6 " />
        </a>{" "}
      </div>
      <p className="text-white text-sm text-center -mb-5 mt-10">
        COPYRIGHT © 2022 | writishbella.com
      </p>
    </div>
  );
}

export default Footer;
