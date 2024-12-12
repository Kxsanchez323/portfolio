import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const formref = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send("service_otre8aq", "template_pya9g5s", {
        from_name: form.name,
        to_name: "Kevin",
        from_email: form.email,
        to_email: "Kxsanchez323@gmail.com",
        message: form.message,
      },
      'weLIEO56UxP9l6vMR'
    );
      setLoading(false);

      alert("Your message has been sent!");
    } catch (error) {
      console.log(error);

      alert("Something went wrong! Please try again.");
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you're looking to build a new website, improve your
            exisiting platform, or bring your own ideas to lie, I'm here to
            help.
            <form
              ref={formref}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col space-y-7"
            >
              <label className="space-y-3">
                <span className="field-label">Full Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="John Doe"
                />
              </label>
              <label className="space-y-3">
                <span className="field-label">Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="johndoe@gmail.com"
                />
              </label>
              <label className="space-y-3">
                <span className="field-label">Your Message</span>
                <textarea
                  type="text"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="Hi, I'm interested in..."
                  rows={5}
                />
              </label>

              <button className="field-btn" type="submit" disabled={loading}>
                {loading ? "Sending ..." : "Send Message"}

                <img
                  src="/assets/arrow-up.png"
                  alt="arrow-up"
                  className="field-btn_arrow"
                />
              </button>
            </form>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
