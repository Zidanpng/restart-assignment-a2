import React from "react";
import Container from "./Container";
import fbImg from "../assets/fb.png";
import twitterImg from "../assets/twitter.png";
import inImg from "../assets/linkedin.png";
import messageImg from "../assets/message.png";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-8 py-12 ">
      <Container>
        <div className="grid md:grid-cols-5 gap-8 border-b border-gray-700 py-12">
          <div>
            <h3 className="text-white font-semibold mb-2">
              CS — Ticket System
            </h3>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-sm text-[#a1a1aa]">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>contact Sales</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Services</h4>
            <ul className="space-y-1 text-sm text-[#a1a1aa]">
              <li>Products & Services</li>
              <li>Customer Stories</li>
              <li>Customer Stories</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Information</h4>
            <ul className="space-y-1 text-sm">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Join Us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Social Links</h4>
            <ul className="space-y-2 text-sm text-[#a1a1aa]">
              <li className="flex items-center gap-2">
                {" "}
                <img src={twitterImg} alt="" /> @CS — Ticket System
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <img src={inImg} alt="" /> @CS — Ticket System
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <img src={fbImg} alt="" /> @CS — Ticket System
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <img src={messageImg} alt="" /> support@cst.com
              </li>
            </ul>
          </div>
        </div>
        <div className="text-left md:text-center text-gray-500 text-sm mt-8">
          © 2025 CS — Ticket System.
          <br className="block md:hidden" /> All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
