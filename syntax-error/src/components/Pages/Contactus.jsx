import React from "react";
import disclogo from "../../assets/images/discordlogo.svg";
import instalogo from "../../assets/images/instalogo.svg";
import logo from "../../assets/images/SElogo.svg";
const Contactus = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-20 gap-36">
        <div className="p-10 rounded-lg bg-[#24272D]  bg-opacity-50 w-[361px] h-[391px] flex flex-col justify-center items-center">
          <img src={disclogo} width="157px" alt="" />
          <p className="w-[300px] ">
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto cum
            commodi expedita velit eum amet! Laudantium nemo distinctio magnam
            at.
          </p>
        </div>
        <div className="p-10  rounded-lg bg-[#24272D]  bg-opacity-50 w-[361px] h-[391px] flex flex-col justify-center items-center">
          <img src={instalogo} width="173px" className="mt-5 mb-6" alt="" />
          <p className="w-[300px] ">
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto cum
            commodi expedita velit eum amet! Laudantium nemo distinctio magnam
            at.
          </p>
        </div>
      </div>

      {/* Contact Us Container */}
      <div className="flex justify-center mt-28">
        {" "}
        {/* Main container */}
        <div className="flex flex-col justify-center items-center w-[934px] p-16 backdrop-blur-md">
          {" "}
          {/* container */}
          <div className="uppercase font-Kanit font-semibold text-[81px] leading-[121px]">
            Contact us
          </div>
          <div className="flex items-center justify-center p-10 gap-36">
            <div>
              <div class="  w-full mb-6  group flex flex-col gap-16">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  class="py-2.5 px-0 w-56 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-black-500 focus:outline-none  "
                  placeholder="xyz@mail.com"
                  required
                />

                <input
                  type="text"
                  name="floating_email"
                  id="floating_email"
                  class=" py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-black-500 focus:outline-none  "
                  placeholder="Enter your number"
                  required
                />

                <input
                  type="text"
                  name="floating_email"
                  id="floating_email"
                  class=" py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-black-500 focus:outline-none  "
                  placeholder="Message"
                  required
                />
              </div>
            </div>

            <div>
              <img src={logo} alt="" />
            </div>
          </div>
          <div>
            <button className="rounded-md pl-10 pr-10 bg-[#24272D] backdrop-blur-sm bg-opacity-80 font-Kanit text-lg tracking-widest uppercase p-2">
              Submit
            </button>
          </div>
          <div>
            <p className="p-2 pl-10 pr-10 mt-8 text-lg tracking-widest rounded-md font-Kanit">
              Based in Mumbai, Maharashtra
            </p>
          </div>
        </div>
      </div>
      <div className="relative z-10 flex flex-row justify-start  gap-5 bg-[#24272D] bg-opacity-90 pt-8 pb-8 pr-5">
        <div className="mt-1 ml-5">
          <h1 className="whitespace-nowrap font-extrabold font-Kanit uppercase flex justify-center text-[31px] ">syntax erreur </h1>

        </div>
          <div>
          <p className="text-lg font-light text-left font-Kanit">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum .
          </p>
            
          </div>
      </div>
      </div>
  );
};

export default Contactus;
