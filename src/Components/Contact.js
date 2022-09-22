import React from "react";

function Contact() {
  return (
    <div id="contact">
      <h1>BOOK YOUR TABLE</h1>

      <form>
        <input type="text" placeholder="FULL NAME" />

        <input type="email" placeholder="YOUR EMAIL" />

        <textarea placeholder="Write your message here ...."></textarea>

        <input type="submit" value="BOOK" />
      </form>
    </div>
  );
}

export default Contact;
