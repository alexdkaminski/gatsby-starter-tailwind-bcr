import React from "react";

import Layout from "../components/layout";
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


function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

    <div className="w-full md:py-10 sm:py-5 bg">
      <div className="flex flex-wrap max-w-4xl mx-auto">
          <div className="container px-12 py-6 w-full md:w-1/2 my-auto">
            <h2 className="text-4xl font-bold mb-5 text-white leading-tight">
              Brisbane Computer Repair
            </h2>
            <h3 className="text-2xl mb-1 text-gray-200 leading-tight">
              Fill out the form for a free computer repair quote
            </h3>
          </div>
          <div className="container mx-auto px-6 w-full md:w-1/2">
            <div className="flex items-center h-auto w-full">
              <div className="w-full bg-white rounded shadow-2xl p-4 m-4 md:max-w-sm md:mx-auto">
                <h2 className="block w-full font-bold text-center text-gray-800 mb-6 text-2xl">Free Quote</h2>
                  <div className="flex flex-col mb-4 md:w-1/2">
                    <input className="border py-2 px-3 text-gray-800 md:mr-2" type="text" name="name" id="name" placeholder="Name"/>
                  </div>
                  <div className="flex flex-col mb-4 md:w-full">
                    <input className="border py-2 px-3 text-gray-800" type="email" name="email" id="email" placeholder="Email"/>
                  </div>
                  <div className="flex flex-col mb-6 md:w-full">
                    <textarea className="border py-2 px-3 text-gray-800" name="message" id="message" placeholder="Message"/>
                  </div>
                  <button className="block w-full bg-teal-500 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded font-bold" type="submit">Send</button>
              </div>
            </div>  
          </div>
      </div>
    </div>

    <div className="w-full bg-gray-200">
      <div className="flex flex-wrap max-w-4xl mx-auto m-10">
        <div className="lg:w-1/4 md:w-1/4 sm:w-full w-full">
          <div className="mx-10 mb-5 bg-white rounded-lg shadow-xl  p-6 h-36">
              <div className="pt-1 mx-auto text-center flex flex-wrap">
                <div className="flex pb-2">
                  <img src={computer}/>
                </div>
                <div className="flex my-auto mx-auto">
                  <span className="font-bold text-blue-700">Computers</span>
                </div>
              </div>
            </div>
        </div>
        <div className="lg:w-1/4 md:w-1/4 sm:w-full w-full">
          <div className="mx-10 my-5 bg-white rounded-lg shadow-xl p-6 h-36">
              <div className="pt-1 mx-auto text-center flex flex-wrap">
                <div className="flex pb-2">
                  <img src={laptop}/>
                </div>
                <div className="flex my-auto mx-auto">
                  <span className="font-bold text-blue-600">Laptops</span>
                </div>
              </div>
            </div>
        </div>
        <div className="lg:w-1/4 md:w-1/4 sm:w-full w-full">
          <div className="mx-10 my-5 bg-white rounded-lg shadow-xl p-6">
            <div className="pt-1 mx-auto text-center flex flex-wrap">
              <div className="flex pb-2">
                <img src={tools}/>
              </div>
              <div className="flex my-auto mx-auto">
                <span className="font-bold text-blue-500">Repairs</span>
              </div>
            </div>  
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/4 sm:w-full w-full">
          <div className="mx-10 mt-5 bg-white rounded-lg shadow-xl p-6">
            <div className="pt-1 mx-auto text-center flex flex-wrap">
              <div className="flex pb-2">
                <img src={virusProtection}/>
              </div>
              <div className="flex my-auto mx-auto">
                <span className="font-bold text-blue-400">Protection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="py-10 w-full ">
      <div className="container mx-auto max-w-4xl">
      <div className="flex flex-wrap">
        <div className="max-w-md mx-auto my-auto flex p-6">
          <img className="rounded-full flex items-center justify-center h-auto w-56 shadow-2xl" src={profilePhoto} alt="Alex Kaminski Profile Photo" />
        </div>

        <div className="max-w-md mx-auto my-auto flex p-6">
          <div className="pt-1 mx-auto text-center">
            <h3 className="text-2xl mb-2 font-bold">
              About Us
            </h3>
            <p className="leading-loose">
              
Brisbane Computer Repair will give you free advice on how to solve your computer problem. We have technicians across Brisbane that can come to your home or office and fix your computer or laptop today.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>

    <div className="w-full mb-16 max-w-4xl mx-auto">
      <div className="flex flex-wrap ">
        <div className="flex px-12 p-5 py-20 bg-gray-400">
          <div className="mx-auto text-center text-grey-700">
            <h3 className="text-2xl mb-2 font-bold">
              Fast Repairs
            </h3>
            <p className="leading-loose">
            We can diagnose and repair any sort of computer or IT problem. Whether it is a computer that won't boot or a new device that you need help setting up, we are here to help.
            We can diagnose and repair any sort of computer or IT problem. Whether it is a computer that won't boot or a new device that you need help setting up, we are here to help.
            </p>
          </div>
        </div>
        <div className="flex ">
          <img src={serviceDesk} alt="Alex Kaminski Profile Photo" />
        </div>
        </div>
    </div>


    </Layout>
  );
}

export default IndexPage;
