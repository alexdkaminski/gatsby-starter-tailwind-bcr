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

      <section className="text-center">
        <img
          src={icon}
          className="block mx-auto w-1/2"
          alt="Brisbane Computer Repair Logo"
        />
      </section>
      
      <section>
        <div className="max-w-md mx-auto flex p-6 bg-white rounded-lg shadow-xl">
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
      </section>

    </Layout>
  );
}

export default IndexPage;
