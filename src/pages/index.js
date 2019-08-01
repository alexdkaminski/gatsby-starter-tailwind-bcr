import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import messageIcon from "../images/message-icon.svg";
import homeTechnician from "../images/home-technician.png";
import icon from "../images/icon.png"
import profilePhoto from "../images/profile-photo.jpg";
import serviceDesk from "../images/service-desk-800w-crop-grey.png";


function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

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

    <div className="py-20 w-auto block bg-gray-200">
      <div className="container mx-auto max-w-4xl">
      <div className="flex">
        <div className="max-w-md mx-auto my-auto flex p-6 bg-white rounded-lg shadow-xl">
          <div className="pt-1 mx-auto text-center">
            <p className="leading-loose">
              Computers
            </p>
          </div>
        </div>
        <div className="max-w-md mx-auto my-auto flex p-6 bg-white rounded-lg shadow-xl">
          <div className="pt-1 mx-auto text-center">
            <p className="leading-loose">
              Laptops
            </p>
          </div>
        </div>
        <div className="max-w-md mx-auto my-auto flex p-6 bg-white rounded-lg shadow-xl">
          <div className="pt-1 mx-auto text-center">
            <p className="leading-loose">
              Cloud
            </p>
          </div>
        </div>
        <div className="max-w-md mx-auto my-auto flex p-6 bg-white rounded-lg shadow-xl">
          <div className="pt-1 mx-auto text-center">
            <p className="leading-loose">
              Business
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>

    <div className="py-10 w-auto block">
      <div className="container mx-auto max-w-4xl">
      <div className="flex">
        <div className="max-w-md mx-auto my-auto flex p-6">
        <img className="rounded-full flex items-center justify-center h-64 shadow-2xl" src={profilePhoto} alt="Alex Kaminski Profile Photo" />
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

    <div className="w-auto block mb-48 ">
      <div className="container mx-auto">
      <div className="flex">
        <div className="bg-gray-500 w-48 flex-auto px-12 p-10 ml-6 border-b-8 border-gray-800">
          <div className="pt-1 mx-auto text-center text-grey-700">
            <h3 className="text-2xl mb-2 font-bold">
              Fast Repairs
            </h3>
            <p className="leading-loose">
            We can diagnose and repair any sort of computer or IT problem. Whether it is a computer that won't boot or a new device that you need help setting up, we are here to help.
            </p>
            <br></br>
            <p className="leading-loose">
            We can diagnose and repair any sort of computer or IT problem. Whether it is a computer that won't boot or a new device that you need help setting up, we are here to help.
            </p>
          </div>
        </div>
          <div className="flex">
            <img src={serviceDesk} alt="Alex Kaminski Profile Photo" />
          </div>
        </div>
      </div>
    </div>


    </Layout>
  );
}

export default IndexPage;
