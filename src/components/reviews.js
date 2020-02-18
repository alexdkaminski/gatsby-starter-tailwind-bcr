import React from "react"
import JSONData from "../content/reviews.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Reviews = () => (
    <div className="container max-w-4xl mx-auto">
        <div className="flex flex-wrap">
            <div className="md:w-full text-center pt-12">
                <h3 className="block w-full font-bold text-center text-gray-700 mb-6 text-2xl">We're proud to have a perfect <span className="inline-block"><FontAwesomeIcon icon={faStar} className="orange"/><FontAwesomeIcon icon={faStar} className="orange"/><FontAwesomeIcon icon={faStar} className="orange"/><FontAwesomeIcon icon={faStar} className="orange"/><FontAwesomeIcon icon={faStar} className="orange"/> </span> rating on Google</h3>
            </div>
        {JSONData.map((data, index) => {
            return (
                <div className="lg:w-72 md:w-1/2 sm:w-full" key={`content_item_${index}`}>
                    <div className="m-5 bg-white rounded-lg shadow-xl p-4 h-36 text-center">
                        <p>{data.text}</p>
                        <div className="pt-2">
                            <img src={data.profile_photo_url} className="w-12 mx-auto"/>
                            <span className="font-bold text-blue-500">{data.author_name}</span>
                        </div>
                    </div>
                </div>
            )
        })}
        </div>
  </div>
)
export default Reviews