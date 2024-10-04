import React from "react";
import "./Contact.css";
import phone from "../../assets/phone.jpg";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="section-padding flex-center contact">
      <div className="contact-header">
        <div className="contact-header-img">
          <img src={phone} alt="phone" />
        </div>
        <div className="contact-header-text">
          <h2 className="h2-text">Contact Us</h2>
          <p className="p-alegreya">
            We’re here to help you on your journey to better health and fitness.
            Whether you have a question about our workouts, need advice on
            nutrition, or simply want to share your feedback, we’d love to hear
            from you. At PureMove, your experience is our top priority, and
            we’re committed to providing the support you need.
          </p>
        </div>
      </div>
      <div className="contact-content">
        <div className="contact-content-one">
          <h3 className="h3-text">Get in touch</h3>
          <p className="p-alegreya">
            If you have any questions, suggestions, or just want to say hello,
            feel free to reach out to us. You can contact us via email, phone,
            or through our social media channels. We strive to respond to all
            inquiries as quickly as possible, usually within 24-48 hours.
          </p>
          <h6 className="footer-subheading">Email</h6>
          <p className="footer-text">contact@puremove.com</p>
          <h6 className="footer-subheading">Phone</h6>
          <p className="footer-text">(555) 123-4567</p>
          <h6 className="footer-subheading">Social Media</h6>
          <FaFacebookF />
          <FaInstagram />
          <FaXTwitter />
        </div>
        <div className="contact-content-two">
          <h3 className="h3-text">Feedback and Suggestions</h3>
          <p className="p-alegreya">
            Your feedback is invaluable to us. Whether you have ideas for new
            workouts, recipes you'd like to see, or ways we can improve our
            site, we’re all ears. PureMove is constantly evolving, and your
            input helps us make sure we’re meeting your needs.
          </p>
        </div>
      </div>
      <div className="contact-cta">
        <h3 className="h3-text">Join Our Community</h3>
        <p className="p-alegreya">
          Stay connected with PureMove by signing up for our newsletter. Get the
          latest updates, tips, and exclusive content delivered straight to your
          inbox. We also invite you to join our social media community, where
          you can share your progress, connect with others, and stay motivated.
        </p>
        <form className="contact-cta-form">
          <div className="contact-form-control">
            <input
              type="text"
              id="text"
              className="contact-cta-form-input"
              placeholder="Email here"
            />
            <button className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
