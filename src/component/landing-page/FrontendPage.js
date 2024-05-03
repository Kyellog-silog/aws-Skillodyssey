import React, { useState } from 'react';
import logoImage from './AAAAA (6).png';
import icon from './User_fill@2x.png';
import left from './Expand_left_double@2x.png';
import signout from './signout.png';
import home from './Home_fill@2x.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const FrontendPage = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showLoginCard, setShowLoginCard] = useState(false);

  const [selectedStatus, setSelectedStatus] = useState(null);

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    
    <div className='justify-between flex items-center max-w-[1240px] mx-auto text-white mt-8 '>
                <div className='flex items-center'>
                    <div className='flex items-center px-5'><FontAwesomeIcon icon={faCube} style={{ color: "#38bcf5", fontSize: '5em' }} /></div>
                    <div className='text-3xl font-bold text-[#00df9a]'>SKILL ODESSEY</div>
                    </div>
                    <div className="dropdown relative">
      <button
        className="flex items-center border-2 rounded-lg px-5 py-1 border-purple-500 border-opacity-75  hover:text-white focus:outline-none focus:ring-2"
        onClick={handleClick}
      >
        <img src={icon} alt="My Logo" style={{ maxWidth: '30px', height: 'auto' }} />
        <div className='ml-2'> Account</div>
       
      </button>
      {isOpen && (
        <div className="dropdown-content absolute top-full  bg-black rounded-lg shadow-md overflow-hidden z-50  mt-2 p-1 ">
          <div className='flex-row flex items-center hover:bg-neutral-700  pr-16 pl-2  '>
          <img src={home} alt="My Logo" style={{ maxWidth: '25px', height: 'auto' }} />
          <a href="/" className="block  ml-2 py-2 ">
            Home
          </a>
          </div>
          <div className='flex-row flex items-center hover:bg-neutral-700 pl-2   '>
          <img src={signout} alt="My Logo" style={{ maxWidth: '25px', height: 'auto' }} />
          <a href="/FrontPage" className="block ml-2 py-2 ">
            Logout
          </a>
        </div>
        </div>
      )}
    </div>
    

    </div>
    <div className='flex flex-col justify-between max-w-[1240px] mx-auto text-white mt-8 '>
      <div className='text-5xl ml-4 mt-10'>
      Frontend Developer
      </div>
      <div className='text-lg ml-4 mt-4'>
      Step by step guide to becoming a modern frontend developer in 2024
   </div>
    <div className='flex flex-row text-sm ml-4 mt-4 border w-36 p-2 rounded-lg items-center justify-center hover:border-yellow-400 cursor-pointer'>
      <div>
      <img src={left} alt="My Logo" style={{ maxWidth: '20px', height: 'auto' }} />
      </div>
      <a href="FrontPage"><button onClick={() => setShowLoginCard(true)} ml-2 >All Roadmaps</button>
      </a>
  
       
        </div>
        <div className='w-full border mt-8 border-[#1E293C]'></div>
        <div className=' h-40 mt-6 p-2 flex flex-col w-[350px] justify-center text-center border-purple-500 border'>
      </div>
</div>

    <div className="text-white flex flex-col items-center pt-10 relative mt-[-150px] ">
      
      <div className=' border-2 rounded-xl p-2 mr-12 px-6 '>Frontend</div>
      <div className="absolute top-0 left-0 right-0 flex flex-col items-center p-4 ">
        <div className='border-2 p-2 rounded-xl mt-[153px] mr-12 mb-24 px-6 '>Fundamentals</div>
       

        <div className="grid grid-cols-3 gap-80 ">
       
          
          <div className="flex flex-col mt-64  ">
            <button className="border-2 mt-5  p-2 rounded-xl ml-[220px] mr-[-70px] px-10  ">Vue</button>
            <button className=" border-2 p-2 mt-5  rounded-xl ml-[200px] mr-[-70px]">React</button>
            <button className=" border-2 p-2 mt-5  rounded-xl ml-[200px] mr-[-70px]">Angular</button>

            <button className=" border-2 p-2 mt-12 justify-center rounded-xl  ml-[280px] mr-[-100px]  ">Jest</button>
            <button className="  border-2 p-2 mt-14 justify-center rounded-xl  ml-[280px] mr-[-100px]">Cypress</button>
          </div>

          <div className="flex flex-col justify-items-center items-center ">
      <div className="flex">
        <button
          className="border-2 p-2  mr-16 mt-[-15px] rounded-xl"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          Html
        </button>
        {showSidebar && (
          <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950 text-black">
            <div className="flex justify-end p-4 mr-2 ">
            <button onClick={() => setShowSidebar(false)}>
                <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
              </button>
            </div>
            <div className='text-5xl font-bold p-4'>HTML</div>
            <p className="p-4 text-[#262d36]">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            <ul className='list-disc pl-14 underline leading-relaxed font-semibold'>
              <li><a href="https://www.w3schools.com/html/">W3Schools: Learn HTML</a></li>
              <li><a href="https://htmlreference.io/">htmlreference.io: All HTML elements at a glance</a></li>
              <li><a href="https://html.com/">HTML For Beginners The Easy Way</a></li>
              <li><a href="https://www.freecodecamp.org/news/web-development-basics-html/">Web Development Basics</a></li>
              <li><a href="https://www.codecademy.com/learn/learn-html">Codecademy - Learn HTML</a></li>
              <li><a href="https://www.khanacademy.org/computing/computer-programming/html-css">Interactive HTML Course</a></li>
              <li><a href="https://www.youtube.com/watch?v=pQN-pnXPaVg">HTML Full Course for Beginners | Complete All-in-One Tutorial</a></li>
              <li><a href="https://www.youtube.com/watch?v=UB1O30fR-EE">HTML Full Course - Build a Website Tutorial</a></li>
              <li><a href="https://www.youtube.com/watch?v=UB1O30fR-EE">HTML Tutorial for Beginners: HTML Crash Course</a></li>
            </ul>
          </div>
        )}
      </div>
   
  <button className="border-2 p-2 rounded-xl mt-[84px] px-6 mr-16">CSS</button>
  <button className="border-2 p-2 rounded-xl mt-[120px] mr-[55px] ">Javascript</button>
  <button className="border-2 py-1 px-2 rounded-xl mt-[86px] text-sm mr-14">State Management<br/> Libraries</button>
  <button className="border-2 p-2 rounded-xl mt-[105px] mr-16">Testing</button>
  <button className="border-2 p-2 rounded-xl mt-[106px] mr-14">Version Control</button>
  <button className="border-2 p-2 rounded-xl mt-[100px] mr-14 ">Deployment</button>

</div>


       
          
          <div className="flex flex-col justify-items-center  ">
          <button className=" border-2 p-2 ml-[-110px] justify-center rounded-xl mr-[250px] mt-10 mb-8 ">Tailwind</button>
          <button className=" border-2 p-2 ml-[-110px] justify-center rounded-xl mr-[250px]">Bootstrap</button>

              <button className="border-2 p-2  justify-center rounded-xl mt-4 ml-[-250px] mr-[440px]">Npm</button>
            <button className="border-2 p-2 mt-5 justify-center rounded-xl ml-[-250px] mr-[440px]">Yarn</button>

            
            <button className="border-2 p-2  justify-center rounded-xl mt-20 mb-12 ml-[-70px] mr-[260px]">Redux</button>
            <button className="border-2 p-2  justify-center rounded-xl ml-[-70px] mr-[260px] ">XState</button>

            <button className="border-2 p-2  justify-center rounded-xl ml-[-170px] mr-[300px] mt-[205px] ">XState</button>
          </div>
</div>
<div className="flex flex-row justify-items-center w-auto   ">
    <button className="border-2 p-2 rounded-xl mt-36 px-8 ml-[-60px] mr-[160px]  ">Git</button>
    <button className="border-2 p-2 rounded-xl mt-36 ">Firebase</button>
 </div>






        


      </div>
      <img src={logoImage} alt="My Logo" style={{ width: '50%' }} className="mb-40 " />
      
      
    </div>
    <div className='w-full border border-[#1E293C]'></div>
            <div className='bg-[#000000]'>
                <div className='  text-[#94A3B8] h-40  justify-between flex items-center mx-auto max-w-[1240px]'>
                    <div className=''>© Skill Odessey </div>
                </div>
            </div>
    </div>
 
    
  );
}

export default FrontendPage;
