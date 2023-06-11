import React from 'react';
import aboutprofile from "../../assets/images/aboutprofile.png";
import aboutprofile2 from "../../assets/images/aboutprofile2.png";
import aboutprofile3 from "../../assets/images/aboutprofile3.png";
import downArrow from "../../assets/images/downArrow.svg";


const Card = () => {
  const array = [
    {
      image: aboutprofile,
      title: {
        head: 'Rohit Ghosh',
        designation: 'CEO and Cofounder',
        age: '19'
      },
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ab perferendis architecto, id incidunt quaerat, provident aliquid dolor nam distinctio odit, voluptate soluta sequi omnis velit magnam at suscipit culpa'
    },
    {
      image: aboutprofile2,
      title: {
        head: 'Arya Sawant',
        designation: 'CEO and Cofounder',
        age: '19'
      },
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ab perferendis architecto, id incidunt quaerat, provident aliquid dolor nam distinctio odit, voluptate soluta sequi omnis velit magnam at suscipit culpa'
    }, {
      image: aboutprofile3,
      title: {
        head: 'Vasudha Singh',
        designation: 'CEO and Cofounder',
        age: '19'
      },
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ab perferendis architecto, id incidunt quaerat, provident aliquid dolor nam distinctio odit, voluptate soluta sequi omnis velit magnam at suscipit culpa'
    },
    {
      image: aboutprofile,
      title: {
        head: 'Rohit Ghosh',
        designation: 'CEO and Cofounder',
        age: '19'
      },
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ab perferendis architecto, id incidunt quaerat, provident aliquid dolor nam distinctio odit, voluptate soluta sequi omnis velit magnam at suscipit culpa'
    }, {
      image: aboutprofile2,
      title: {
        head: 'Arya Sawant',
        designation: 'CEO and Cofounder',
        age: '19'
      },
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ab perferendis architecto, id incidunt quaerat, provident aliquid dolor nam distinctio odit, voluptate soluta sequi omnis velit magnam at suscipit culpa'
    },

    {
      image: aboutprofile3,
      title: {
        head: 'Vasudha Singh',
        designation: 'CEO and Cofounder',
        age: '19'
      },
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ab perferendis architecto, id incidunt quaerat, provident aliquid dolor nam distinctio odit, voluptate soluta sequi omnis velit magnam at suscipit culpa'
    }, {
      image: aboutprofile,
      title: {
        head: 'Rohit Ghosh',
        designation: 'CEO and Cofounder',
        age: '19'
      },
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ab perferendis architecto, id incidunt quaerat, provident aliquid dolor nam distinctio odit, voluptate soluta sequi omnis velit magnam at suscipit culpa'
    },
    // Rest of the array items...
  ];

  return (
    <div className="flex overflow-x-auto">
      {array.map((item, index) => (
        <div
          key={index}
          className='flex justify-center items-center bg-white w-[290px] h-max  sm:w-[350px] sm:h-[400px] text-black mx-auto rounded-2xl p-5 shadow-lg mr-6'
        >
          <div className='flex flex-col'>
            <div className='flex flex-row gap-5'>
              <img src={item.image} alt='' className='w-20 rounded-full sm:w-28' />
              <div className='flex flex-col'>
                <p className='font-semibold uppercase'>{item.title.head}</p>
                <p>{item.title.designation}</p>
                <p>Age: {item.title.age}</p>
              </div>
            </div>

            <div className='mt-5'>{item.description}</div>
            <div className='flex justify-center mt-5'>
              <button className='flex connect items-center justify-between gap-2 px-5 py-2 text-white transition-all duration-1000 bg-black rounded-lg hover:scale-[1.01] hover:text-black hover:bg-white hover:border hover:border-black'>
                Connect
                <svg className='mt-[6px] w-4 h-2 fill-black' viewBox="0 0 17 10" fill="black" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.1495 1.02803e-06L0.849052 2.36563e-06C0.694142 0.000383849 0.542298 0.0339522 0.409865 0.0970941C0.277431 0.160236 0.169423 0.250559 0.0974647 0.358343C0.0255061 0.466127 -0.00767599 0.587289 0.00149073 0.708788C0.0106575 0.830287 0.0618221 0.947521 0.149482 1.04787L7.7997 9.73002C8.11676 10.09 8.88008 10.09 9.19799 9.73002L16.8482 1.04787C16.9368 0.947729 16.9887 0.830436 16.9984 0.708735C17.008 0.587033 16.975 0.465579 16.903 0.357567C16.831 0.249555 16.7227 0.159116 16.5898 0.096076C16.457 0.0330372 16.3047 -0.000190674 16.1495 1.02803e-06ZM8.49927 8.17658L2.4709 1.33572L14.5276 1.33572L8.49927 8.17658Z" fill="white" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
