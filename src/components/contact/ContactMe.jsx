import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div className="contacts" id="contacts">
      <h2 style={{ justifySelf: "center" }}>Contact Me</h2>
      <form className="contact">
        <div className="form-control">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-control">
          {" "}
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            placeholder="Enter subject"
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="10"
            placeholder="Write your message here"
            required
          ></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactMe;
