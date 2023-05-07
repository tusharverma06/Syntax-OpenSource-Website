import React, { useState } from 'react'

const Participant = ({ link, icon, title }) => {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover(true);
  };
  const handleHoverGo = () => {
    setIsHover(false);
  };

  return (
    <div
      className={`w-[5.0625rem] rounded-full h-[5.0625rem] relative cursor-pointer circle`}
      style={{ filter: `drop-shadow(0px 0px 32.6316px #FFFFFF)` }}
      onClick={() => window.open(link, "_blank")}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverGo}
    >
      <img
        src={icon}
        alt=""
        className="object-contain w-full h-full rounded-full !-z-10"
      />
      <div
         className={`bg-white w-max px-3  py-2 rounded-xl text-black text-xl font-bold absolute top-16 left-12 transition-text `}
      >
        {title}
      </div>
    </div>
  );
};

export default Participant;
