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
        <form className="w-full mb-16 max-w-4xl mx-auto" name="Contact" method="POST" data-netlify="true" action="/success">
          <input type="hidden" name="form-name" value="Contact"/>
          <p className="text-lg leading-loose">
            Send a message and we will reply within 30 minutes.
          </p>
          <p className="text-lg font-bold mb-8">
              For free advice, please call <a className="text-blue-500 underline hover:no-underline" href="tel:0466 616 563 ">0466 616 563 </a>
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
            htmlFor="name"
          >
            Phone
          </label>

          <input
            name="phone"
            className="appearance-none block bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full"
            id="phone"
            type="text"
            placeholder="Your phone number"
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
            className="bg-teal-500 w-full hover:bg-teal-400 text-white uppercase font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded">
            Send
          </button>
        </form>

      </section>
    </Layout>
  );
}

export default ContactPage;
