import React from "react";

function Header() {
  return (
    <div id="main">
      <div className="header-heading">
        <h3>It's Great time for a good taste of Burger</h3>
        <h1>
          <span>BURGER</span> FOR <br /> WEEK
        </h1>
        <div className="header-btns">
          <a href="#" className="header-btn">
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
