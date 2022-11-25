import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Fade from "react-reveal/Fade";
import Footer from "../home/Footer";
import "../App.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_la5shxn",
        "template_2j8fb7k",
        form.current,
        "dxzNiEl7SJsW1ZXLi"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact r-black">
      <p className="sm:px-20  py-10 text-center font-bold text text-4xl tracking-tighter">
        Get In Touch With Me
      </p>
      <Fade left>
        <p className="text-left sm:text-center pl-10 font-semibold">
          Please send me a message about your event, project or interview.
        </p>
      </Fade>

      <div className="px-10 py-10">
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className=" block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your name
            </label>
            <input
              type="name"
              id="name"
              placeholder="Name"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              spellCheck="false"
              name="user_name"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className=" block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email address"
              required
              spellCheck="false"
              name="user_email"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className=" block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Message Title
            </label>
            <input
              type="name"
              id="password"
              placeholder="Subject of Message"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              name="user_email"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className=" block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Tell me about your project
            </label>
            <textarea
              className="p-2"
              placeholder="More about project"
              required
              name="message"
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
