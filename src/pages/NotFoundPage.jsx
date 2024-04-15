import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>Sorry</h1>
      this page doesnt exists
      <h1>404 {"((("}</h1>
      <Link to="/">Go home</Link>
    </div>
  );
};

export default NotFoundPage;
