import React from "react";
import disclogo from "../../assets/images/discordlogo.svg";
import instalogo from "../../assets/images/instalogo.svg";
import logo from "../../assets/images/SElogo.svg";
import { Element } from "react-scroll";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
const Contactus = () => {
  return (
    <Element name="MainContact">
      <div className="flex flex-col items-center justify-center  sm:flex-row gap-36">
        <div className="p-10 rounded-lg bg-[#4a4a4a]  bg-opacity-50 w-[361px] h-[320px] flex flex-col justify-center items-center">
          <div className="flex flex-row justify-center items-center gap-5 font-Kanit ">
            <img src={disclogo} className="w-[120px]" alt="" />
            <div className="flex flex-col gap-5">

              <p>Join Us on Discord</p>
              <div className="flex justify-start">
                <button className="bg-[#4a4a4a] bg-opacity-30 flex px-3 justify-center items-center gap-2 rounded-sm ">Join <HiOutlineArrowNarrowRight width={50} /> </button>
              </div>
            </div>
          </div>
          <p className="w-[300px] ">
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto cum
            commodi expedita velit eum amet! Laudantium nemo distinctio magnam
            at.
          </p>
        </div>
        <div className="p-10  rounded-lg bg-[#4a4a4a]  bg-opacity-50 w-[361px] h-[320px] flex flex-col justify-center items-center">
          <div className="flex flex-row justify-center items-center gap-5 font-Kanit">
            <div>   <img src={instalogo} width="120px" className="mt-5 mb-6" alt="" /> </div>
            <div className="flex flex-col gap-5 whitespace-nowrap">

              <p>Join Us on Instagram</p>
              <div className="flex justify-start">
                <button className="bg-[#4a4a4a] bg-opacity-30 flex px-3 justify-center items-center gap-2 rounded-sm ">Join <HiOutlineArrowNarrowRight width={50} /> </button>
              </div>
            </div>
          </div>
          <p className="w-[300px] ">
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto cum
            commodi expedita velit eum amet! Laudantium nemo distinctio magnam
            at.
          </p>
        </div>
      </div>

      {/* Contact Us Container */}
      <div className="flex justify-center mt-28 mb-10 px-5 ">
        {" "}
        {/* Main container */}
        <div className="rounded-2xl border-[1px] border-[#eee] flex flex-col justify-center items-center w-[400px] sm:w-full lg:w-[934px] sm:p-16 lg:pb-[39px] backdrop-blur-md bg-[rgba(43,43,43,0.26)] ">
          {" "}
          {/* container */}
          <div className="uppercase font-Kanit font-semibold text-[35px] md:text-[81px] whitespace-nowrap leading-[121px]">
            Contact us
          </div>
          <div className="flex flex-col-reverse items-center justify-center p-10 sm:flex-row gap-20 sm:gap-36">
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
              <img src={logo} className="sm:w-full w-56" alt="" />
            </div>
          </div>
          <div>
            <button className="rounded-md pl-10 pr-10 bg-[#24272D] backdrop-blur-sm bg-opacity-80 font-Kanit text-lg tracking-widest uppercase p-2">
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
          <p className="text-lg font-light text-left font-Kanit  ">
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
