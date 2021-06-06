import React from "react";

function Footer() {
  var curr_yr = new Date().getFullYear();
  return (
    <div>
      <footer>
        <p> Copyright @ {curr_yr} </p>
      </footer>
    </div>
  );
}

export default Footer;