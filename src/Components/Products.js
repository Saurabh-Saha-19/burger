import React from "react";
import Productbox from "./Productbox";
import pimage1 from '../images/s1.png';
import pimage2 from '../images/s2.png'



function Products() {
  return (
    <div id="products">
      <h1>Choose & Enjoy</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis maxime
        veniam voluptate, quix nostrum aliquid!
      </p>

      <div className="a-container">
        <Productbox image={pimage1} title="Lurger Burger" />
        <Productbox image={pimage2} title="Lurger Burger" />
        <Productbox image={pimage1} title="Lurger Burger" />
      </div>
    </div>
  );
}

export default Products;
