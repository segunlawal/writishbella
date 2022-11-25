import React from "react";
import { ReactComponent as ErrorDoodle } from "../assets/error404.svg";

function ErrorPage() {
  return (
    <div className="mt-10">
      <ErrorDoodle className="w-96 mx-auto" />
      <p className="underline text-center text-blue-400  text-2xl">
        <a href="/">Return to homepage</a>
      </p>
    </div>
  );
}

export default ErrorPage;
