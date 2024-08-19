import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col gap-12 items-center md:items-start md:flex-row md:justify-between">
        <ul className="flex gap-6 font-lato text-gray-400">
          <li>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Facebook
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Instagram
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Whatsapp
            </a>
          </li>
        </ul>
        <div className="flex gap-4 items-start">
          <img src="./src/assets/Help-Avatar.svg" alt="Help Avatar" className="w-12 h-12 md:w-16 md:h-16" />
          <div>
            <p className="font-playfair font-light text-lg">Have any Questions?</p>
            <a href="#" className="font-lato font-medium">Talk to a specialist</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
