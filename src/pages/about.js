import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import profilePhoto from "../images/profile-photo.jpg";
import logo from "../images/logo-scaled.png"

function AboutPage() {
  return (
    <Layout>
      <SEO
        title="About"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <section className="items-center max-w-4xl mx-auto p-6 pt-12 ">
        <div>
          <blockquote className="border-l-4 border-gray-900 leading-loose pl-4 text-justify bg-gray-200 p-6">
           I can get your computer or laptop fixed today. With over 15 years experience in the IT industry, I can provide expert advice at a reasonable price. We have a passion for problem solving and will do our best to fix your IT problems as quickly as possible. We are committed to constantly training to perfect our service so that we can ensure every customer walks away satisfied.
          </blockquote>

          <cite className="font-bold mt-4 text-right text-xl block mb-4 mr-2">
            – Alex Kaminski<br/>
            Owner and Technician
          </cite>
          
        </div>
        <div className="flex justify-end content-apart items-center">
          <div className="w-1/2 justify-start mr-auto">
            <img className="p-2" src={logo} alt="Alex Kaminski Profile Photo" />
          </div>
          <div className="w-1/4 justify-end ml-auto">
            <img className="rounded-full p-2" src={profilePhoto} alt="Alex Kaminski Profile Photo" />
          </div>
        </div>
      </section>
      
    </Layout>
  );
}

export default AboutPage;
