import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import icon from "../images/icon.png";
import phone from "../images/phone.png";

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="bg-white">
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-2 md:p-2">
      <img
          src={icon}
          className="block w-20"
          alt="Brisbane Computer Repair Logo"
        />

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-black text-lg"
          >
          <img
            className="fill-current h-12 w-12"
            src={phone}
            alt="Phone"
          />
            <title>Phone</title>
        </button>

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
          <div className="text-md">
            <Link
              to="/"
              className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-black"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-black"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="block md:inline-block mt-4 md:mt-0 no-underline font-bold text-grey-700"
            >
              Contact
            </Link>
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
