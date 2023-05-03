import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

 const eylem = links.map((link) => (
  <a key={link} href={"#" + link}>
    {link}
  </a>
 ))

  return (
  <nav>{eylem}</nav>
  )
}

export default NavBar;
