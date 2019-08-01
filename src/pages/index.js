import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import messageIcon from "../images/message-icon.svg";
import homeTechnician from "../images/home-technician.png";
import icon from "../images/icon.png"

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <div className="block">
        {/* <div className="w-1/4">
          <img
            src={icon}
            className="block mx-auto"
            alt="Brisbane Computer Repair Logo"
          />
        </div> */}
        <div className="py-20 bg w-auto block">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl font-bold mb-2 text-white">
              Brisbane Computer Repair
        </h2>
            <h3 className="text-2xl mb-8 text-gray-200">
              Call now for a free quote
        </h3>

            <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
              Call 0435 619 337
        </button>
          </div>
        </div>
      </div>


      {/* <div className="flex">
        <img
            src={icon}
            className="block mx-auto w-1/2"
            alt="Brisbane Computer Repair Logo"
          />
        <div className="max-w-md mx-auto my-auto flex p-6 bg-white rounded-lg shadow-xl">
          <div className="pt-1 mx-auto text-center">
            <h2 className="text-blue-400 text-2xl font-bold inline-block p-3">
              Brisbane Computer Repair
            </h2>

            <p className="leading-loose">
              Call now for a free quote {" "}
              <a href="tel:0435619337" className="font-bold no-underline text-blue-400">
                0435 619 337
              </a>
            </p>
            <p className="leading-loose">
              Or message us {" "}
              <a href="tel:0435619337" className="font-bold no-underline text-blue-400">
                Send message
              </a>
            </p>
          </div>
        </div>
      </div> */}


    </Layout>
  );
}

export default IndexPage;
