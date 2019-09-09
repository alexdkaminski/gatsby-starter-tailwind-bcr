import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import logo from "../images/logo-scaled.png";
import phone from "../images/phone.png";

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="bg-white">
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-2 md:p-2">
     
      <Link
              to="/"
              className="w-56"
            >
              <img
                src={logo}
                className="block"
                alt="Brisbane Computer Repair Logo"
              />
            </Link>


        <a
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-black text-lg"
          href="tel:0435 619 337"
          >
          <img
            className="fill-current h-12 w-12"
            src={phone}
            alt="Phone"
          />
            <title>Phone</title>
        </a>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-black text-lg"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-12 w-12"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          <div className="text-md text-right">
            <Link
              to="/"
              className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline font-bold text-gray-800 text-2xl"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-gray-800 text-2xl"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-gray-800 text-2xl"
            >
              Contact
            </Link>

            {/* <Link
              to="/reviews"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-gray-800 text-2xl"
            >
              Reviews
            </Link>
            <Link
              to="/reviews"
              className="block mb-4 md:inline-block mt-4 md:mt-0 mr-6 no-underline text-gray-800 text-2xl"
            >
              Blog
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
