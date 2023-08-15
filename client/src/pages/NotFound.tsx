import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className=" w-full min-h-screen lg:px-20 md:px10 px-5 flex items-center justify-center flex-col pb-20 text-center">
      <h2 className=" text-6xl font-semibold text-green-1 uppercase">404 - Page not found</h2>
      <p className=" my-6 text-lg">Oops! The page you're looking for is nowhere to be found.</p>
      <Link to="/" className=" px-8 py-2 rounded-xl bg-green-1 text-white">
        Go to Home
      </Link>
    </section>
  );
}

export default NotFound;
