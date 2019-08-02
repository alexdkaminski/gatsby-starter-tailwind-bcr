import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        title="Contact"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <section className="pt-12 p-6">

        <form className="mx-auto md:w-1/2" name="contact" method="POST" netlify>
          <p className="leading-loose mb-8">
            Send a message and we will reply within 30 minutes.
          </p>

          <label
            className="block font-bold mb-2 text-xs uppercase"
            htmlFor="name"
          >
            Name
          </label>

          <input
            name="name"
            className="appearance-none block bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full"
            id="name"
            type="text"
            placeholder="Your name"
          />

          <label
            className="block font-bold mb-2 text-xs uppercase"
            htmlFor="email"
          >
            Email
          </label>

          <input
            name="email"
            className="appearance-none block bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full"
            id="email"
            type="email"
            placeholder="Your email"
          />

          <label
            className="block font-bold mb-2 text-xs uppercase"
            htmlFor="message"
          >
            Message
          </label>

          <textarea
            name="message"
            className="appearance-none bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full"
            id="message"
            placeholder="What needs repairing?"
            rows="8"
          />

          <button
            className="border-b-4 border-gray-800 hover:border-gray-700 bg-gray-700 hover:bg-gray-600 font-bold px-4 py-2 rounded text-sm text-white">
            Submit
          </button>
        </form>

      </section>
    </Layout>
  );
}

export default ContactPage;
