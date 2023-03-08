import React from "react";

const Contact = () => {
  return (
    <section className="contact container">
      <h2>Contact us</h2>
      <article>
        <div>
         <img src="img/contact.jpg" width="100%"/>
        </div>

        <div>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea cols="30" rows="10" placeholder="Message....."></textarea>
            <button>Send message</button>
          </form>
          <hr />
          <div>
            <span>Find us on:</span>
            <span>
              <a href=".">
                <i className="fab fa-facebook-square"></i>
              </a>
            </span>
            <span>
              <a href=".">
                <i className="fab fa-instagram"></i>
              </a>
            </span>
            <span>
              <a href=".">
                <i className="fab fa-twitter"></i>
              </a>
            </span>
            <span>
              <a href=".">
                <i className="fab fa-pinterest"></i>
              </a>
            </span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Contact;
