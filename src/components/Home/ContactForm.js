import React from "react";
import emailjs from "@emailjs/browser";
const ContactForm = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm("service_je5v46w", "template_z94prbd", e.target, "lYpZLeRzAA4j2Tdju")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div
      className="container border"
      style={{
        marginTop: "50px",
        width: "50%",
        backgroundImage: `url('https://i.pinimg.com/originals/16/2a/36/162a36561536d6ed738e0ef1dac537d0.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1 style={{ marginTop: "25px" }}>Contact Form</h1>
      <form onSubmit={sendEmail} className="row" style={{ margin: "25px 85px 75px 100px" }}>
        <label>Name</label>
        <input type="text" name="name" className="form-control mb-2" />

        <label>Email</label>
        <input type="email" name="user_email" className="form-control mb-2" />

        <label>Message</label>
        <textarea name="message" rows="4" className="form-control" />
        <input type="submit" value="Send" className="form-control btn btn-primary mt-2" />
      </form>
    </div>
  );
};

export default ContactForm;
