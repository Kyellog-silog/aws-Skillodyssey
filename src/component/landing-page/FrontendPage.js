import React, { useState } from 'react';
import logoImage from './AAAAA (1).png';
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
          <img src={signout} alt="My Logo" style={{ maxWidth: '25px', height: 'auto' }} />
          <a href="/" className="block  ml-2 py-2 ">
            Home
          </a>
          </div>
          <div className='flex-row flex items-center hover:bg-neutral-700 pl-2   '>
          <img src={home} alt="My Logo" style={{ maxWidth: '25px', height: 'auto' }} />
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
        
</div>
    <div className="text-white flex flex-col items-center pt-10 relative mt-2">
      <h1 className='mb-4'>FRONTEND</h1>
      <div className="absolute top-0 left-0 right-0 flex flex-col items-center p-4">
        <button className='hover:border-2 p-2 rounded-xl mt-40  mb-24'>Fundamentals</button>
       

        <div className="grid grid-cols-3 gap-80">
       
          
          <div className="flex flex-col mt-64 "><button className="flex items-start text-center border-2 mt-5  p-2 justify-center rounded-xl ml-5">Vue</button>
            <button className="flex items-start text-start  border-2 p-2 mt-5 justify-center rounded-xl ml-5">React</button>
            <button className="flex items-start text-start border-2 p-2 mt-5 justify-center rounded-xl ml-5">Angular</button>

            <button className=" border-2 p-2 mt-32 justify-center rounded-xl ml-5">Jest</button>
            <button className="  border-2 p-2 mt-10 justify-center rounded-xl ml-5">Cypress</button>
          </div>

          <div className="flex flex-col justify-items-center items-center">
      <div className="flex">
        <button
          className="border-2 p-2 rounded-xl"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          HTML
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
   
  <button className="border-2 p-2 rounded-xl mt-24">CSS</button>
  <button className="border-2 p-2 rounded-xl mt-28">Javascript</button>
  <button className="hover:border-2 p-2 rounded-xl mt-[100px]">State Management<br/> Libraries</button>
  <button className="hover:border-2 p-2 rounded-xl mt-28">Testing</button>
  <button className="hover:border-2 p-2 rounded-xl mt-36">Development</button>

</div>


       
          
          <div className="flex flex-col justify-items-center mt-16  ">
          <button className="flex items-start text-start border-2 p-2 ml-5 justify-center rounded-xl">Tailwind</button>
          <button className="flex items-start text-start border-2 p-2 mt-5 justify-center rounded-xl ml-5">Bootstrap</button>

              <button className="flex items-start text-start border-2 p-2 ml-5 justify-center rounded-xl mt-16">Npm</button>
            <button className="flex items-start text-start border-2 p-2 mt-5 justify-center rounded-xl ml-5">Yarn</button>

            
            <button className="flex items-start text-start border-2 p-2 ml-5 justify-center rounded-xl mt-14 mb-5">Redux</button>
            <button className="flex items-start text-start border-2 p-2 mt-5 justify-center rounded-xl ml-5">XState</button>
          </div>
</div>
<div className="flex flex-row justify-items-center w-auto mt-4 ">
    <button className="border-2 p-2 rounded-xl mt-36  mr-2 ml-10 pl-12 pr-12 ">Git</button>
    <button className="border-2 p-2 rounded-xl mt-36 ml-14 pl-6 pr-6">Firebase</button>
 </div>






        


      </div>
      <img src={logoImage} alt="My Logo" style={{ width: '50%' }} className="mb-4" />
      
    </div>
    </div>
    
  );
}

export default FrontendPage;
