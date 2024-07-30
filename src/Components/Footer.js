import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";
import logo from "../images/Logo.png";
const Footer = () => {
  return (
    <footer>
      <h4>By Aryan Wadhe</h4>
      {/* <h4>Copyright &copy; 2024 AW</h4>
       */}
      <h4>
        Copyright &copy; 2024
        <img
          src={logo}
          alt="Logo"
          className="small-logo"
          style={{
            verticalAlign: "middle",
            width: "10%",
            height: "5%",
            marginLeft: "1%",
          }}
        />
      </h4>

      <div className="footerLinks">
        <a href="https://github.com/AryanWadhe" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/aryan-wadhe-12b2a1229/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="mailTo:aryanwadhe@gmail.com" target="_blank">
          <GrMail />
        </a>
        <a href="https://leetcode.com/u/aryanwadhe/" target="_blank">
          <SiLeetcode />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
