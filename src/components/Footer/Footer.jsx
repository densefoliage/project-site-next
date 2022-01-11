import React from "react";

const Footer = () => {
  const year = new Date().getFullYear()
  return <footer><p>©{year} | Footer</p></footer>
};

export default Footer;
