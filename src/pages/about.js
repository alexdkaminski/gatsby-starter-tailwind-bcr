import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import profilePhoto from "../images/profile-photo.jpg";

function AboutPage() {
  return (
    <Layout>
      <SEO
        title="About"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <section className="flex flex-col md:flex-row items-center max-w-4xl mx-auto">
        <div className="md:w-2/3 md:mr-8">
          <blockquote className="border-l-4 border-gray-900 font-serif leading-loose pl-4 text-justify">
           I can get your computer or laptop fixed today. With over 15 years experience in the IT industry, I can provide expert advice at a reasonable price.
          </blockquote>

          <cite className="font-bold mt-4 text-right text-xs uppercase block">
            – Alex Kaminski
          </cite>
        </div>

        <img className="rounded-full flex items-center justify-center h-64" src={profilePhoto} alt="Alex Kaminski Profile Photo" />
      </section>
    </Layout>
  );
}

export default AboutPage;
