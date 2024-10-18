import React from "react";

function Navigations() {
  return (
    <nav
      style={{
        width: "40%",
        display: "flex",
        justifyContent: "space-between",
        margin: "0  auto",
      }}
    >
      <Link to="/">See All Books</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navigations;
