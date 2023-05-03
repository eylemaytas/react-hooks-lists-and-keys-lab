import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
  <nav>
  <a key="link" href="#home">home</a>
  <a key="link" href="#about">about</a>
  <a key="link" href="#projects">projects</a>
  
  </nav>
  )
}

export default NavBar;
