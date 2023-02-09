import React from "react";
import HeroImage from "../asset/HeroImage.gif";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-blue-300 to-blue-400"
    >
      <div className="px-15 gap-x-4 max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row">
        <div className="pr-20 flex flex-col justify-center ">
          <h2 className="text-4xl sm:text-7xl font-bold text-slate-900">
            Direct 2 Hostel
          </h2>
          <h3 className="py-3 text-3xl sm:text-3xl font-semibold text-slate-800">Quickest and Safest Delivery</h3>
          <p className="text-slate-800 text-justify py-3 max-w-md">
            LPU's 1st inhouse delivery service. Others deliver parcels we deliver emotions. 
            We take care of order fulfillment, collection, transport, tracking and delivery of parcels.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-indigo-700 cursor-pointer"
            >
              Get Started
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img src={HeroImage}
            alt="Delivery boy"
            className="rounded-2xl my-5 shadow-lg mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  )
}
// export default Home;