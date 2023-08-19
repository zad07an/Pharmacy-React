import { memo } from "react";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container";

const NotFound = () => (
  <Container className=" lg:px-20 md:px-10 px-5 text-center">
    <h2 className=" xs:text-6xl text-4xl font-semibold text-green-1 uppercase">
      404 - Page not found
    </h2>
    <p className=" my-6 xs:text-lg text-base">
      Oops! The page you're looking for is nowhere to be found.
    </p>
    <Link to="/" className=" xs:text-base text-sm px-8 py-2 rounded-md bg-green-1 text-white">
      Go to Home
    </Link>
  </Container>
);

export default memo(NotFound);
