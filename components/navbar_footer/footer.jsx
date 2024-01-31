import React from "react";

const Footer = () => {
  return (
    <div className="">
      <footer className="bg-blue-500 pb-10 pt-5">
        <div className="lg:flex ps-2 lg:ps-0 gap-16 items-start">
          <div className="lg:ps-4 w-96 my-2">
            <h4 className="text-2xl">Welcome to work manager</h4>
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
      <div className="bg-gray-800 text-white pt-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; 2024 Work Manager. All rights reserved. |{" "}
            <a href="/privacy" className="underline">
              Privacy Policy
            </a>
            <a href="/terms" className="underline">
              Terms of Service
            </a>
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
