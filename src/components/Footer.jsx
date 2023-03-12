import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
      <footer>
        <p>Copyright Ofir wysboomⓒ {year}</p>
      </footer>
    );
  }

export default Footer;