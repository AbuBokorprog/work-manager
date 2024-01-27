import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-500 py-8">
      <div className="lg:flex ps-2 lg:ps-0 gap-16 items-start">
        <div className="lg:ps-4 w-96 my-2">
          <h4 className="text-2xl">Welcome to work manager</h4>
          <p className="">Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div className="w-52 my-2">
          <ul>
            <p className="text-gray-200">Company</p>
            <li>About us</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="w-52 my-2">
          <ul>
            <p className="text-gray-200">Legal</p>
            <li>Terms of use</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div className="w-52 my-2">
          <ul>
            <p className="text-gray-200">Important Links</p>
            <li>Facebook</li>
            <li>YouTube</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
