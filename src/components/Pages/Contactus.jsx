import React, { useEffect, useState } from "react";

import { Element } from "react-scroll";
import Footer from "./Footer";

const Contactus = () => {
  useEffect(() => {
    document.getElementById("Software To Cloud");
  }, []);
  // form details handling
  const [data, setData] = useState({
    name: '',
    from: '',
    topic: '',
    message: '',
    budget: '',
    email: ''
  })

  // form details
  const onInput = (e) => {
    e.preventDefault();
    setData(state => ({ ...state, [e.target.name]: e.target.value }));
  };
  const handleSubmit = () => {
    console.log(data)
    setData(prev => {
      return {
        ...prev,
        name: '',
        from: '',
        topic: '',
        message: '',
        budget: '',
        email: ''
      }
    })
  }
  return (
    <Element name="MainContact ">
      {/* Contact Us Container */}
      <div className="relative z-10 flex justify-center pt-20 pb-20 sm:z-auto md:z-10 sm:pt-0 font-Kanit ">
        {" "}
        {/* Main container */}
        <div className="rounded-2xl border-[1px] border-[#eee] flex flex-col sm:px-8 px-5 justify-start lg:h-[650px] md:h-[650px]  w-[400px] sm:w-full lg:w-[900px]  sm:p-16 pb-1  lg:pb-[39px] backdrop-blur-md bg-[rgba(43,43,43,0.26)] ">
          {" "}
          {/* container */}
          <div className=" font-Kanit sm:text-left text-center font-semibold text-[25px] sm:text-[35px] whitespace-nowrap pb-12 sm:pt-0 pt-10">
            Hello, Syntax Erreur team !
          </div>
          {/* All Inputs */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4 px-5 sm:px-0 sm:flex-row sm:justify-start lg:justify-start lg:items-center sm:items-start font-Kanit ">
              <div className="flex flex-col gap-4 sm:items-center sm:flex-row">
                <label className="text-xl sm:text-3xl whitespace-nowrap">My Name is </label>
                <input
                  type="email"
                  id="helper-text"
                  onChange={onInput}
                  name="name"
                  value={data.name}
                  aria-describedby="helper-text-explanation"
                  className="w-full pb-1 text-sm text-gray-900 border-b-2 border-solid focus:outline-none dark:bg-transparent dark:text-white"
                  placeholder="YOUR NAME IS"
                ></input>
              </div>

              <div className="flex flex-col w-full gap-4 sm:items-center sm:flex-row lg:w-2/3">
                <label className="text-xl sm:text-3xl">from </label>
                <input
                  type="email"
                  id="helper-text"
                  onChange={onInput}
                  name="from"
                  value={data.from}
                  aria-describedby="helper-text-explanation"
                  className="w-full pb-1 text-sm text-gray-900 border-b-2 border-solid focus:outline-none dark:bg-transparent dark:text-white"
                  placeholder="WEBSITE OR COMPANY NAME"
                ></input>
              </div>
            </div>

            <div className="flex flex-col px-5 sm:flex-row sm:px-0 sm: lg:justify-between lg:items-center sm:items-start font-Kanit ">
              <div className="flex flex-col justify-between w-full sm:w-[53%] gap-4 sm:items-center sm:flex-row">

                <h4 className="text-xl sm:text-3xl ">I'd like to discuss </h4>
                <div>
                  <select
                    id="countries"
                    onChange={onInput}
                    name="topic"
                    value={data.topic}
                    className="py-2.5 text-center px-2 lg:w-62 xl:w-48  md:w-40  text-sm sm:w-64 w-full text-gray-900 bg-transparent border-0 border-b-2 border-l-0 border-white-300 dark:bg-[#1A2935] dark:placeholder-gray-400 dark:text-white  dark:focus:border-black-500 focus:outline-none ">

                    <option selected className=" font-Kanit">
                      Select a Topic
                    </option>
                    <option value="I Want To Make a Agency Website" className="font-Kanit">
                      Software To Cloud
                    </option>
                    <option value="I Want To Make a E-comm Website" className="font-Kanit">
                      Web Application
                    </option>
                    <option value="I Want To Make a Portfolio Website" className="font-Kanit">
                      SaaS
                    </option>
                    <option value="Web & Corporate" className="font-Kanit">
                      Mobile
                    </option>
                    <option value="Web & Corporate" className="font-Kanit">
                      Others
                    </option>
                  </select>
                </div>
              </div>

              <div className="flex flex-row items-center gap-5 pt-8 sm:pt-0 w-190">
                <label className="text-xl sm:text-3xl font-Kanit lg:whitespace-nowrap md:whitespace-nowrap ">
                  project idea & design brief{" "}
                </label>
              </div>
            </div>
            <div className="px-5 sm:w-full sm:px-0">
              <textarea
                id="helper-text"
                onChange={onInput}
                name="message"
                value={data.message}
                aria-describedby="helper-text-explanation"
                rows={3}
                className="w-full pb-1 text-sm text-gray-900 border-b-2 border-solid resize-none whitespace-nowrap focus:outline-none dark:bg-transparent dark:text-white"
                placeholder="PITCH YOUR PROJECT IDEA (OPTIONAL)"
              ></textarea>
            </div>

            <div className="flex flex-col gap-4 px-5 sm:px-0 sm:flex-row sm:justify-start lg:justify-start lg:items-center sm:items-start font-Kanit ">
              <label className="text-xl sm:text-3xl whitespace-nowrap">
                A Budget for this project is{" "}
              </label>
              <input
                type="text"
                id="helper-text"
                onChange={onInput}
                name="budget"
                value={data.budget}
                aria-describedby="helper-text-explanation"
                className="w-full pb-1 text-sm text-gray-900 border-b-2 border-solid focus:outline-none dark:bg-transparent dark:text-white "
                placeholder="YOUR BUDGET"
              ></input>
            </div>


            <div className="flex flex-col gap-4 px-5 sm:px-0 sm:flex-row sm:justify-start lg:justify-start lg:items-center sm:items-start font-Kanit ">
              <label className="text-xl sm:text-3xl whitespace-nowrap">
                Contact me back at{" "}
              </label>
              <input
                type="email"
                id="helper-text"
                onChange={onInput}
                name="email"
                value={data.email}
                aria-describedby="helper-text-explanation"
                className="w-full pb-1 text-sm text-gray-900 border-b-2 border-solid focus:outline-none dark:bg-transparent dark:text-white "
                placeholder="YOUR EMAIL"
              ></input>
            </div>
          </div>

          <div className="flex justify-center ">
            <button onClick={handleSubmit} className=" w-32 h-32 z-20 px-5 py-5 backdrop-blur-lg bg-[#16212E] bg-opacity-100 sm:top-8 top-16  relative  text-lg font-bold  text-white uppercase transition-all duration-700 border-2 border-white rounded-full hover:text-black hover:bg-white  font-Kanit">
              Submit
            </button>
          </div>
          {/* <div>
            <p className=" px-10 sm:py-0 pb-[25px] mt-8 text-sm sm:text-lg tracking-widest rounded-md w-max font-Kanit">
              Based in Mumbai, Maharashtra
            </p>
          </div> */}
        </div>
      </div>
      <Footer />
    </Element>
  );
};

export default Contactus;
