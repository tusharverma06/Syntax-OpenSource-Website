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
      },    {
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
      },    {
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
      },    {
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
              <button className='flex items-center justify-between gap-2 px-5 py-2 text-white bg-black rounded-lg'>
                Connect <img alt='downArrow' src={downArrow} className='mt-[6px] w-4 h-2' />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
