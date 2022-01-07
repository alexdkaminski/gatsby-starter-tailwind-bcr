import React from "react";

import Layout from "../components/layout";
import Reviews from "../components/reviews";
import SEO from "../components/seo";
import messageIcon from "../images/message-icon.svg";
import homeTechnician from "../images/home-technician.png";
import icon from "../images/icon.png"
import profilePhoto from "../images/profile-photo.jpg";
import serviceDesk from "../images/service-desk.png";
import computer from "../images/computer.png";
import laptop from "../images/laptop.png";
import tools from "../images/tools.png";
import virusProtection from "../images/virus-protection.png";
import logo from "../images/logo-scaled.png";



function IndexPage() {
  return (
    <Layout>
      <SEO
      title="Brisbane Computer Repair"
      />
      <div className="md:py-10 sm:py-5 bg">
        <div className="flex flex-wrap max-w-4xl mx-auto">
          <div className="container px-6 py-6 md:w-1/3">
            <h2 className="text-3xl font-bold mb-5 text-white leading-tight">
              Brisbane Computer Repair
            </h2>
            <h3 className="text-2xl mb-1 text-gray-200 leading-tight">
              We can come to you and fix your laptop or computer today. Fill out the form for a free computer repair quote.<br /><br />For free advice call <a href="tel:0466 616 563 " className="font-bold underline hover:no-underline">0466 616 563 </a>
            </h3>
          </div>
          <div className="container mx-auto px-2 pb-6 w-full md:w-2/3">
            <div className="flex items-center h-auto w-full">
              <form className="w-full" name="Home" method="POST" data-netlify="true" action="/success">
                <input type="hidden" name="form-name" value="Home" />
                <div className="bg-white rounded shadow-2xl p-4 m-4 md:mx-auto">
                  <h2 className="block w-full font-bold text-center text-gray-700 mb-6 text-2xl">Free Quote</h2>
                  <div className="flex flex-col mb-4 md:w-full">
                    <input className="border py-2 px-3 text-gray-800 " type="text" name="name" id="name" placeholder="Name" />
                  </div>
                  <div className="flex flex-col mb-4 md:w-full">
                    <input className="border py-2 px-3 text-gray-800 " type="text" name="phone" id="phone" placeholder="Phone" />
                  </div>

                  <div className="flex flex-col mb-4 md:w-full">
                    <input className="border py-2 px-3 text-gray-800" type="email" name="email" id="email" placeholder="Email" />
                  </div>
                  <div className="flex flex-col mb-6 md:w-full">
                    <textarea className="border py-2 px-3 text-gray-800" name="message" id="message" placeholder="Message" />
                  </div>
                  <button className="bg-teal-500 w-full hover:bg-teal-400 text-white uppercase font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded" type="submit">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="container max-w-4xl mx-auto my-8">
          <div className="flex flex-wrap ">
            <div className="md:w-1/3 sm:w-full">
              <div className="m-5 bg-white rounded-lg shadow-xl p-4 h-36">
                <div className="pt-1 mx-auto text-center flex flex-wrap">
                  <img src={laptop} className="mx-auto" />
                  <div className="flex flex-col my-auto mx-auto">
                    <span className="font-bold text-blue-500">Repairs</span>
                    <p>We can diagnose and fix software and hardware problems for your computer, laptop or tablet.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 sm:w-full">
              <div className="m-5 bg-white rounded-lg shadow-xl p-4 h-36">
                <div className="pt-1 mx-auto text-center flex flex-wrap">
                  <img src={computer} className="mx-auto" />
                  <div className="flex flex-col my-auto mx-auto">
                    <span className="font-bold text-blue-500">Upgrades & Tune-Ups</span>
                    <p>You won’t believe it’s the same computer. Our tune-up will make your system work like it did when you first bought it!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 sm:w-full">
              <div className="m-5 bg-white rounded-lg shadow-xl p-4 h-36">
                <div className="pt-1 mx-auto text-center flex flex-wrap">
                  <div className="flex flex-col my-auto mx-auto">
                    <img src={tools} className="mx-auto" />
                    <span className="font-bold text-blue-500">Setup & Install</span>
                    <p>Have a new device that needs to be setup and installed? Leave it to the experts. We can come to your home or office.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Reviews/>


    </Layout>
  );
}

export default IndexPage;
