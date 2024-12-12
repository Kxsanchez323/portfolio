import React from "react";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
            <p>Terms & Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>
        </div>
        <div className="flex gap-3">
            <a className="social-icon" href="https://github.com/Kxsanchez323" target="_blank">
                <img src="assets/github.svg" alt="github" className="w-1/2 h-1/2"/>
            </a>
            <a className="social-icon" href="https://www.linkedin.com/in/kevin-sanchez-005974224/" target="_blank">
                <img src="assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2"/>
            </a>
        </div>
        <p className="text-white-500">© 2024 Kevin Sanchez. All rights reserved.</p>
    </section>
  );
};

export default Footer;
