import React from "react";

import logo from "../../assets/images/SElogo.svg";
import { Element } from "react-scroll";

const Contactus = () => {
  return (
    <Element name="MainContact">


      {/* Contact Us Container */}
      <div className="flex justify-center px-5 mb-10 mt-28">
        {" "}
        {/* Main container */}
        <div className="rounded-2xl border-[1px] border-[#eee] flex flex-col justify-center items-center w-[400px] sm:w-full lg:w-[900px]  sm:p-16 lg:pb-[39px] backdrop-blur-md bg-[rgba(43,43,43,0.26)] ">
          {" "}
          {/* container */}
          <div className="uppercase font-Kanit font-semibold text-[35px] md:text-[70px] whitespace-nowrap leading-[121px]">
            Contact us
          </div>
          <div className="flex flex-col-reverse items-center justify-center gap-20 p-10 sm:flex-row sm:gap-36">
            <div>
              <div className="flex flex-col w-full gap-16 mx-auto mb-6 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="py-2.5 px-0 w-56 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-black-500 focus:outline-none  "
                  placeholder="xyz@mail.com"
                  required
                />

                <select id="countries" className="py-2.5 px-0 w-56 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-white-300 dark:bg-[#1A2935] dark:placeholder-gray-400 dark:text-white  dark:focus:border-black-500 focus:outline-none ">
                  <option selected>Select a Topic</option>
                  <option value="I Want To Make a Agency Website">I Want To Make a Agency Website</option>
                  <option value="I Want To Make a E-comm Website">I Want To Make a E-comm Website</option>
                  <option value="I Want To Make a Portfolio Website">I Want To Make a Portfolio Website</option>
                  <option value="other">Other</option>
                </select>


                <input
                  type="text"
                  name="floating_email"
                  id="floating_email"
                  className=" py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-black-500 focus:outline-none  "
                  placeholder="Enter your number"
                  required
                />



                <textarea id="message" rows="4" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-black-500 focus:outline-none  " placeholder="Write your message here..."></textarea>

              </div>
            </div>

            <div>
              <img src={logo} className="w-56 sm:w-full" alt="" />
            </div>
          </div>
          <div>
            <button className="p-2 pl-10 pr-10 text-lg font-bold tracking-widest text-white uppercase transition-all duration-700 border-2 border-white rounded-md hover:text-black hover:bg-white backdrop-blur-sm font-Kanit">
              Submit
            </button>
          </div>
          <div>
            <p className=" px-10 sm:py-0 pb-[25px] mt-8 text-sm sm:text-lg tracking-widest rounded-md w-max font-Kanit">
              Based in Mumbai, Maharashtra
            </p>
          </div>
        </div>
      </div>
      <div className="relative z-10 flex flex-col px-4 md:flex-row justify-start  gap-5 bg-[#24272D] bg-opacity-90 pt-8 pb-8 pr-5">
        <div className="mt-1 ml-5">
          <h1 className="whitespace-nowrap font-extrabold font-Kanit uppercase flex justify-center text-[31px] ">syntax erreur </h1>

        </div>
        <div>
          <p className="text-lg font-light text-left font-Kanit ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum .
          </p>

        </div>
      </div>
    </Element>
  );
};

export default Contactus;
