import React, { useState, useEffect } from 'react';
import logoImage from './AAAAA (6).png';
import icon from './User_fill@2x.png';
import mortar from './Mortarboard_light@2x.png';
import left from './Expand_left_double@2x.png';
import qs1 from './Question@2x.png';
import signout from './signout.png';
import home from './Home_fill@2x.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const FrontendPage = () => {
  const [showSidebarFundamentals, setShowSidebarFundamentals] = useState(false);
  const [showSidebarFrontend, setShowSidebarFrontend] = useState(false);
  const [showSidebarCss, setShowSidebarCss] = useState(false);
  const [showSidebarJavascript, setShowSidebarJavascript] = useState(false);
  const [showSidebarNpm, setShowSidebarNpm] = useState(false);
  const [showSidebarYarn, setShowSidebarYarn] = useState(false);
  const [showSidebarTailwind, setShowSidebarTailwind] = useState(false);
  const [showSidebarBootstrap, setShowSidebarBootstrap] = useState(false);
  const [showSidebarAngular, setShowSidebarAngular] = useState(false);
  const [showSidebarVue, setShowSidebarVue] = useState(false);
  const [showSidebarReact, setShowSidebarReact] = useState(false);
  const [showSidebarJest, setShowSidebarJest] = useState(false);
  const [showSidebarRedux, setShowSidebarRedux] = useState(false);
  const [showSidebarXState, setShowSidebarXstate] = useState(false);
  const [showSidebarGithub, setShowSidebarGithub] = useState(false);
  const [showSidebarStateManagementLibraries, setShowSidebarStateManagementLibraries] = useState(false);
  const [showSidebarGit, setShowSidebarGit] = useState(false);
  const [showSidebarFirebase, setShowSidebarFirebase] = useState(false);
  const [showSidebarVersionControl, setShowSidebarVersionControl] = useState(false);
  const [showSidebarCypress, setShowSidebarCypress] = useState(false);
  const [showSidebarDeployment, setShowSidebarDeployment] = useState(false);
  const [showSidebarTesting, setShowSidebarTesting] = useState(false);
  const [showSidebarQs1, setShowSidebarQs1] = useState(false);
  const [showSidebarQs2, setShowSidebarQs2] = useState(false);
  const [showSidebarQs3, setShowSidebarQs3] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showLoginCard, setShowLoginCard] = useState(false);

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const handleSelect = (value) => {
    setSelectedOption(value);
    const buttonElement = document.getElementById('tailwindButton');
    if (value === 'Done') {
      buttonElement.classList.add('line-through', 'text-red-500'); // Adding line-through and red text color
      localStorage.setItem('selectedOption', value); // Store the selected option in localStorage
    } else if (value === 'Reset') {
      buttonElement.classList.remove('bg-blue-500', 'text-black', 'border-none', 'line-through', 'text-red-500'); // Removing all classes
      localStorage.removeItem('selectedOption'); // Remove the stored option from localStorage
    } else if (value === 'In progress') {
      buttonElement.classList.add('bg-yellow-500', 'text-black', 'border-none'); // Adding yellow background for "In progress"
      buttonElement.classList.remove('line-through', 'text-red-500'); // Removing line-through and red text color
      localStorage.setItem('selectedOption', value); // Store the selected option in localStorage
    } else {
      buttonElement.classList.remove('line-through', 'text-red-500', 'bg-yellow-500'); // Removing all other classes
      buttonElement.classList.add('bg-blue-500', 'text-black', 'border-none'); // Adding default classes
      localStorage.removeItem('selectedOption'); // Remove the stored option from localStorage
    }
  };
  
 

  const navigate = useNavigate();
  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('userLoggedIn');
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await axios.get('/logout');
      sessionStorage.removeItem('userLoggedIn');
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

 
  

  return (
    <div>
    <div className=" h-screen  ">
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
          <a href="/Landingpage" className="block  ml-2 py-2 ">
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
    <div div className='flex flex-col justify-between max-w-[1240px] mx-auto text-white mt-8 '>
      <div className='text-5xl ml-4 mt-10'>
      Frontend Developer
      </div>
      <div className='text-lg ml-4 mt-4'>
      Step by step guide to becoming a modern backend developer in 2024
   </div>
    <div className='flex flex-row text-sm ml-4 mt-4 border w-36 p-2 rounded-lg items-center justify-center hover:border-yellow-400 cursor-pointer'>
      <div>
      <img src={left} alt="My Logo" style={{ maxWidth: '20px', height: 'auto' }} />
      </div>
      <a href="/Landingpage"><button onClick={() => setShowLoginCard(true)} ml-2 >All Roadmaps</button>
      </a>
        </div>
       

        <div className="flex flex-col ">
        <div className='border border-[#1E293C] text-base cursor-pointer hover:border-slate-600 m-4 mt-8 p-[2px] rounded-lg'
        onClick={() => setShowSidebarFrontend(!showSidebarFrontend)}>
      <div className="flex items-center">
        <img
          src={mortar}
          alt="My Logo"
          style={{ maxWidth: '50px', height: 'auto' }}
        />
        <div
          className='ml-4 font-semibold'
        >
          What is Frontend Development?
        </div>
      </div>
    {showSidebarFrontend && (
  <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-gray-200 bg-opacity-10 z-50 ">
     <div className="w-2/3 md:w-1/2 lg:w-1/2 bg-white rounded-lg shadow-2xl overflow-y-auto max-h-screen p-4">
      
      <div className='flex flex-row justify-between items-center'>
      <div className="text-2xl font-semibold text-black ml-[10px]">What is Frontend Development?</div>
      <div className="flex justify-end mr-4 ">
        <button onClick={() => setShowSidebarFrontend(false)}>
          <FontAwesomeIcon icon={faTimes} className="text-[#687688] text-2xl" />
        </button>
      </div>
      </div>
      <hr className='mt-2'></hr>
      <p className="p-4 text-[#1a1c1f]">
      Front-end development is the development of visual and interactive elements of a website
       that users interact with directly. It's a combination of HTML, CSS and JavaScript, where 
       HTML provides the structure, CSS the styling and layout, and JavaScript the dynamic behaviour and interactivity.
      </p>
      <div className='text-black ml-4'>
        <p className='font-semibold'>
        What does a Frontend Developer do?
        </p>
      <p className='text-[#1a1c1f] mt-2'>
      As a front-end developer, you'll be responsible for creating the user interface of a website, to ensure it looks good and is easy to use, with great focus on design principles and user experience. You'll be working closely with designers, back-end developers, and project managers to make sure the final product meets the client's 
      needs and provides the best possible experience for the end-users.
      </p>
      </div>
    </div>
  </div>
)}

  </div>
</div>
    
        <div className=' ml-4 h-32 mt-6 p-2 flex flex-col w-[300px] text-sm justify-center text-center '>
          <div className='flex flex-row gap-2 items-center ml-4 '>
            <div className='p-2 bg-yellow-300 px-2 h-2'></div>
            <div className=''>Personal Recommendation / Opinion</div>
          </div>
          <div className='flex flex-row gap-2 mt-2 items-center ml-4  '>
            <div className='p-2 bg-green-400 px-2 h-2'></div>
            <div className=''>Alternative Option</div>
          </div>
          <div className='flex flex-row gap-2 mt-2 items-center ml-4 '>
            <div className='p-2 bg-white px-2 h-2'></div>
            <div className=''>Learn Anytime</div>
          </div>
      </div>
</div>

    <div className="text-white flex flex-col items-center pt-10 relative mt-[-150px] ">
      
      <div className=' text-xl rounded-xl p-2 mr-16 px-6 '>Frontend</div>
      <div className="absolute top-0 left-0 right-0 flex flex-col items-center p-4 ">

      <div className="flex flex-col justify-items-center items-center ">
          <div className="flex">
        <button className='border-2 p-2 rounded-xl mt-[153px] mr-12 mb-24 px-6'
        onClick={() => setShowSidebarFundamentals(!showSidebarFundamentals)}>
          Fundamentals</button>
          {showSidebarFundamentals && (
  <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-gray-200 bg-opacity-10 z-50">
     <div className="w-2/3 md:w-1/2 lg:w-1/2 bg-white rounded-lg shadow-2xl overflow-y-auto max-h-screen p-4">
      
      <div className='flex flex-row justify-between items-center'>
      <div className="text-2xl font-semibold text-black ml-[10px]">Fundamentals</div>
      <div className="flex justify-end mr-4 ">
        <button onClick={() => setShowSidebarFundamentals(false)}>
          <FontAwesomeIcon icon={faTimes} className="text-[#687688] text-2xl" />
        </button>
      </div>
      </div>
      <hr className='mt-2'></hr>
      <p className="p-4 text-[#262d36]">
        Software development fundamentals are provided by programming languages, which also include syntax.
         Clear and effective code writing in any language requires a solid understanding of basic concepts 
         such as variables, functions, control structures, and data kinds. Developers that comprehend these 
         fundamentals are better equipped to solve challenges creatively and effectively by adapting to new 
         languages and technologies.
      </p>
    </div>
  </div>
)}

  </div>
</div>
       

        <div className="grid grid-cols-3 gap-80 ">
       
          
          <div className="flex flex-col mt-64  ">
          <div className="flex flex-col justify-items-center items-center ">
          <div className="flex">
            <button className="border-2 mt-5  p-2 rounded-xl ml-[220px] mr-[-70px] px-10  "
            onClick={() => setShowSidebarVue(!showSidebarVue)}>
              Vue</button>
              {showSidebarVue && (
          <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950 text-black">
            <div className="flex justify-end p-4 mr-2 ">
            <button onClick={() => setShowSidebarVue(false)}>
                <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
              </button>
            </div>
            <div className='text-5xl font-bold p-4'>Vue</div>
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
      </div>
      <div className="flex flex-col justify-items-center items-center ">
          <div className="flex">
            <button className=" border-2 p-2 mt-5  rounded-xl ml-[200px] mr-[-70px] border-yellow-300"
            onClick={() => setShowSidebarReact(!showSidebarReact)}>
              React</button>
              {showSidebarReact && (
          <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950 text-black">
            <div className="flex justify-end p-4 mr-2 ">
            <button onClick={() => setShowSidebarReact(false)}>
                <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
              </button>
            </div>
            <div className='text-5xl font-bold p-4'>React</div>
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
      </div>
      <div className="flex flex-col justify-items-center items-center ">
          <div className="flex">
            <button className="border- border-2 p-2 mt-5 rounded-xl ml-[200px] mr-[-70px] border-green-400 "
             onClick={() => setShowSidebarAngular(!showSidebarAngular)}>
              Angular</button>
              {showSidebarAngular && (
          <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950 text-black">
            <div className="flex justify-end p-4 mr-2 ">
            <button onClick={() => setShowSidebarAngular(false)}>
                <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
              </button>
            </div>
            <div className='text-5xl font-bold p-4'>Angular</div>
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
      </div>
      <div className="flex flex-col justify-items-center items-center ">
          <div className="flex">
            <button className=" border-2 p-2 mt-12 justify-center rounded-xl  ml-[280px] mr-[-100px] border-yellow-300 "
            onClick={() => setShowSidebarJest(!showSidebarJest)}>
              Jest</button>
              {showSidebarJest && (
          <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950 text-black">
            <div className="flex justify-end p-4 mr-2 ">
            <button onClick={() => setShowSidebarJest(false)}>
                <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
              </button>
            </div>
            <div className='text-5xl font-bold p-4'>Jest</div>
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
      </div>
      <div className="flex flex-col justify-items-center items-center ">
          <div className="flex">
            <button className="  border-2 p-2 mt-14 justify-center rounded-xl  ml-[280px] mr-[-100px]"
             onClick={() => setShowSidebarCypress(!showSidebarCypress)}
             >Cypress</button>
             {showSidebarCypress && (
          <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950 text-black">
            <div className="flex justify-end p-4 mr-2 ">
            <button onClick={() => setShowSidebarCypress(false)}>
                <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
              </button>
            </div>
            <div className='text-5xl font-bold p-4'>Cypress</div>
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
      </div>
          </div>

          <div className="flex flex-col justify-items-center items-center ">
          <div className="flex">
          <button
          className="border-2 p-2  mr-16 mt-[-15px] rounded-xl"
          onClick={() => setShowSidebar(!showSidebar)}>
          Html
        </button>
        {showSidebar && (
  <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-gray-200 bg-opacity-10 z-50">
     <div className="w-2/3 md:w-1/2 lg:w-1/2 bg-white rounded-lg shadow-2xl overflow-y-auto max-h-screen p-4">
      
      <div className='flex flex-row justify-between items-center'>
      <div className="text-2xl font-semibold text-black ml-[10px]">Html</div>
      <div className="flex justify-end mr-4 ">
        <button onClick={() => setShowSidebar(false)}>
          <FontAwesomeIcon icon={faTimes} className="text-[#687688] text-2xl" />
        </button>
      </div>
      </div>
      <hr className='mt-2'></hr>
      <p className="p-4 text-[#262d36]">
        Software development fundamentals are provided by programming languages, which also include syntax.
         Clear and effective code writing in any language requires a solid understanding of basic concepts 
         such as variables, functions, control structures, and data kinds. Developers that comprehend these 
         fundamentals are better equipped to solve challenges creatively and effectively by adapting to new 
         languages and technologies.
      </p>
    </div>
  </div>
)}

  </div>

      <div className="flex flex-col justify-items-center items-center ">
      <div className="flex">
        <button
          className="border-2 p-2  mr-16 mt-[85px] rounded-xl "
          onClick={() => setShowSidebarCss(!showSidebarCss)}
        >
          css
        </button>
        {showSidebarCss && (
  <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-gray-200 bg-opacity-10 z-50">
     <div className="w-2/3 md:w-1/2 lg:w-1/2 bg-white rounded-lg shadow-2xl overflow-y-auto max-h-screen p-4">
      
      <div className='flex flex-row justify-between items-center'>
      <div className="text-2xl font-semibold text-black ml-[10px]">Css</div>
      <div className="flex justify-end mr-4 ">
        <button onClick={() => setShowSidebarCss(false)}>
          <FontAwesomeIcon icon={faTimes} className="text-[#687688] text-2xl" />
        </button>
      </div>
      </div>
      <hr className='mt-2'></hr>
      <p className="p-4 text-[#262d36]">
        Software development fundamentals are provided by programming languages, which also include syntax. Clear and effective code writing in any language requires a solid understanding of basic concepts such as variables, functions, control structures, and data kinds. Developers that comprehend these fundamentals are better equipped to solve challenges creatively and effectively by adapting to new languages and technologies.
      </p>
    </div>
  </div>
)}

  </div>
</div>

      <div className="flex flex-col justify-items-center items-center ">
      <div className="flex">
  <button className="border-2 p-2 rounded-xl mt-[120px] mr-[55px] "
  onClick={() => setShowSidebarJavascript(!showSidebarJavascript)}
  >Javascript</button>
  {showSidebarJavascript && (
  <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-gray-200 bg-opacity-10 z-50">
     <div className="w-2/3 md:w-1/2 lg:w-1/2 bg-white rounded-lg shadow-2xl overflow-y-auto max-h-screen p-4">
      
      <div className='flex flex-row justify-between items-center'>
      <div className="text-2xl font-semibold text-black ml-[10px]">Javascipt</div>
      <div className="flex justify-end mr-4 ">
        <button onClick={() => setShowSidebarJavascript(false)}>
          <FontAwesomeIcon icon={faTimes} className="text-[#687688] text-2xl" />
        </button>
      </div>
      </div>
      <hr className='mt-2'></hr>
      <p className="p-4 text-[#262d36]">
        Software development fundamentals are provided by programming languages, which also include syntax. Clear and effective code writing in any language requires a solid understanding of basic concepts such as variables, functions, control structures, and data kinds. Developers that comprehend these fundamentals are better equipped to solve challenges creatively and effectively by adapting to new languages and technologies.
      </p>
    </div>
  </div>
)}

  </div>
</div>

      <div className="flex flex-col justify-items-center items-center ">

      <div className="flex">
      <button className="border-2 py-1 px-2 rounded-xl mt-[86px] text-sm mr-14"
      onClick={() => setShowSidebarStateManagementLibraries(!showSidebarStateManagementLibraries)}>
      State Management<br/> Libraries</button>
      
      {showSidebarStateManagementLibraries && (
  <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-gray-200 bg-opacity-10 z-50">
     <div className="w-2/3 md:w-1/2 lg:w-1/2 bg-white rounded-lg shadow-2xl overflow-y-auto max-h-screen p-4">
      
      <div className='flex flex-row justify-between items-center'>
      <div className="text-2xl font-semibold text-black ml-[10px]">State Management Libraries</div>
      <div className="flex justify-end mr-4 ">
        <button onClick={() => setShowSidebarStateManagementLibraries(false)}>
          <FontAwesomeIcon icon={faTimes} className="text-[#687688] text-2xl" />
        </button>
      </div>
      </div>
      <hr className='mt-2'></hr>
      <p className="p-4 text-[#262d36]">
        Software development fundamentals are provided by programming languages, which also include syntax. Clear and effective code writing in any language requires a solid understanding of basic concepts such as variables, functions, control structures, and data kinds. Developers that comprehend these fundamentals are better equipped to solve challenges creatively and effectively by adapting to new languages and technologies.
      </p>
    </div>
  </div>
)}

  </div>
</div>
  
      <div className="flex flex-col justify-items-center items-center ">
      <div className="flex">
      <button className="border-2 p-2 rounded-xl mt-[105px] mr-16"
      onClick={() => setShowSidebarTesting(!showSidebarTesting)}>
        Testing</button>
        {showSidebarTesting && (
  <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-gray-200 bg-opacity-10 z-50">
     <div className="w-2/3 md:w-1/2 lg:w-1/2 bg-white rounded-lg shadow-2xl overflow-y-auto max-h-screen p-4">
      
      <div className='flex flex-row justify-between items-center'>
      <div className="text-2xl font-semibold text-black ml-[10px]">Testing</div>
      <div className="flex justify-end mr-4 ">
        <button onClick={() => setShowSidebarTesting(false)}>
          <FontAwesomeIcon icon={faTimes} className="text-[#687688] text-2xl" />
        </button>
      </div>
      </div>
      <hr className='mt-2'></hr>
      <p className="p-4 text-[#262d36]">
        Software development fundamentals are provided by programming languages, which also include syntax. Clear and effective code writing in any language requires a solid understanding of basic concepts such as variables, functions, control structures, and data kinds. Developers that comprehend these fundamentals are better equipped to solve challenges creatively and effectively by adapting to new languages and technologies.
      </p>
    </div>
  </div>
)}

  </div>
</div>

      <div className="flex flex-col justify-items-center items-center ">
      <div className="flex">
      <button className="border-2 p-2 rounded-xl mt-[106px] mr-14"
      onClick={() => setShowSidebarVersionControl(!showSidebarVersionControl)}>
        Version Control</button>
        {showSidebarVersionControl && (
  <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-gray-200 bg-opacity-10 z-50">
     <div className="w-2/3 md:w-1/2 lg:w-1/2 bg-white rounded-lg shadow-2xl overflow-y-auto max-h-screen p-4">
      
      <div className='flex flex-row justify-between items-center'>
      <div className="text-2xl font-semibold text-black ml-[10px]">Version Control</div>
      <div className="flex justify-end mr-4 ">
        <button onClick={() => setShowSidebarVersionControl(false)}>
          <FontAwesomeIcon icon={faTimes} className="text-[#687688] text-2xl" />
        </button>
      </div>
      </div>
      <hr className='mt-2'></hr>
      <p className="p-4 text-[#262d36]">
        Software development fundamentals are provided by programming languages, which also include syntax. Clear and effective code writing in any language requires a solid understanding of basic concepts such as variables, functions, control structures, and data kinds. Developers that comprehend these fundamentals are better equipped to solve challenges creatively and effectively by adapting to new languages and technologies.
      </p>
    </div>
  </div>
)}

  </div>
</div>

      <div className="flex flex-col justify-items-center items-center ">
      <div className="flex">
      <button className="border-2 p-2 rounded-xl mt-[100px] mr-14 "
      onClick={() => setShowSidebarDeployment(!showSidebarDeployment)}>
        Deployment</button>
        {showSidebarDeployment && (
  <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-gray-200 bg-opacity-10 z-50">
     <div className="w-2/3 md:w-1/2 lg:w-1/2 bg-white rounded-lg shadow-2xl overflow-y-auto max-h-screen p-4">
      
      <div className='flex flex-row justify-between items-center'>
      <div className="text-2xl font-semibold text-black ml-[10px]">Deployment</div>
      <div className="flex justify-end mr-4 ">
        <button onClick={() => setShowSidebarDeployment(false)}>
          <FontAwesomeIcon icon={faTimes} className="text-[#687688] text-2xl" />
        </button>
      </div>
      </div>
      <hr className='mt-2'></hr>
      <p className="p-4 text-[#262d36]">
        Software development fundamentals are provided by programming languages, which also include syntax. Clear and effective code writing in any language requires a solid understanding of basic concepts such as variables, functions, control structures, and data kinds. Developers that comprehend these fundamentals are better equipped to solve challenges creatively and effectively by adapting to new languages and technologies.
      </p>
    </div>
  </div>
)}

  </div>
</div>

</div>

          <div className="flex flex-col justify-items-center  ">
          <div className="flex flex-col justify-items-center">
          <div className="flex">
          <button
            id="tailwindButton"
            className="border-2 p-2 ml-[-110px] justify-center rounded-xl mr-[250px] mt-10 mb-8 border-yellow-300 "
            onClick={() => setShowSidebarTailwind(!showSidebarTailwind)}
          >
            Tailwind
          </button>
            {showSidebarTailwind && (
          <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950 text-black">
            <div className="flex justify-end p-4 mr-2 ">
            <button onClick={() => setShowSidebarTailwind(false)}>
                <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
              </button>
            </div>
            <div className="ml-6 mt-[-20px] mb-4 dropdown relative w-52 py-2 flex flex-row  px-2 rounded-md shadow-sm border border-gray-300 hover:border-gray-400 text-sm">
  <div className="selected-option overflow-hidden whitespace-nowrap pr-10 border-r border-gray-300"> 
    {selectedOption ? selectedOption : "Pending"}
  </div>
  <div className="dropdown-icon absolute right-2 top-1/2 transform -translate-y-1/2  ">
  Update Status
    <span className="h-5 w-5 text-gray-400 inline-flex items-center justify-center ml-[2px]">&#9660;</span>  
  </div>

  <button type="button" aria-haspopup="true" aria-expanded="false" className="w-full h-full focus:outline-none  ">
    <select onChange={(e) => handleSelect(e.target.value)} className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer ">
      <option value="">Update Status</option>
      <option value="Done">Done</option>
      <option value="In progress">In progress</option>
      <option value="Reset">Reset</option>
    </select>
  </button>
</div>
<div className='ml-8'>
            <div className='text-5xl font-bold '>Tailwind</div>
            <p className=" text-[#262d36] mt-4">HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.</p>
            <p className=' text-[#262d36] mt-4'>Visit the following resources to learn more:</p>
            </div>
            <ul className='list-disc pl-20 mt-4 underline leading-relaxed font-semibold'>
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
      </div>

      <div className="flex flex-col justify-items-center">
          <div className="flex">
          <button className=" border-2 p-2 ml-[-110px] justify-center rounded-xl mr-[250px] border-green-400 "
           onClick={() => setShowSidebarBootstrap(!showSidebarBootstrap)}
            >Bootstrap</button>
            {showSidebarBootstrap && (
          <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950 text-black">
            <div className="flex justify-end p-4 mr-2 ">
            <button onClick={() => setShowSidebarBootstrap(false)}>
                <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
              </button>
            </div>
            <div className='text-5xl font-bold p-4'>Bootstrap</div>
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
      </div>
      <div className="flex flex-col justify-items-center">
          <div className="flex">
              <button className="border-2 p-2  justify-center rounded-xl mt-4 ml-[-250px] mr-[440px] border-yellow-300"
              onClick={() => setShowSidebarNpm(!showSidebarNpm)}
              >Npm</button>
              {showSidebarNpm&& (
          <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950 text-black">
            <div className="flex justify-end p-4 mr-2 ">
            <button onClick={() => setShowSidebarNpm(false)}>
                <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
              </button>
            </div>
            <div className='text-5xl font-bold p-4'>Npm</div>
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
      </div>

      <div className="flex flex-col justify-items-center">
          <div className="flex">
            <button className="border-2 p-2 mt-5 justify-center rounded-xl ml-[-250px] mr-[440px] border-green-400 "
             onClick={() => setShowSidebarYarn(!showSidebarYarn)}
             >Yarn</button>
             {showSidebarYarn&& (
          <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950 text-black">
            <div className="flex justify-end p-4 mr-2 ">
            <button onClick={() => setShowSidebarYarn(false)}>
                <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
              </button>
            </div>
            <div className='text-5xl font-bold p-4'>Yarn</div>
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
      </div>

      <div className="flex flex-col justify-items-center">
          <div className="flex">
            <button className="border-2 p-2  justify-center rounded-xl mt-20 mb-12 ml-[-70px] mr-[260px] border-yellow-300"
            onClick={() => setShowSidebarRedux(!showSidebarRedux)}
            >Redux</button>
            {showSidebarRedux&& (
          <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950 text-black">
            <div className="flex justify-end p-4 mr-2 ">
            <button onClick={() => setShowSidebarRedux(false)}>
                <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
              </button>
            </div>
            <div className='text-5xl font-bold p-4'>Redux</div>
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
      </div>
      <div className="flex flex-col justify-items-center">
          <div className="flex">
            <button className="border-2 p-2  justify-center rounded-xl ml-[-70px] mr-[260px] "
            onClick={() => setShowSidebarXstate(!showSidebarXState)}
            >XState</button>
            {showSidebarXState&& (
          <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950 text-black">
            <div className="flex justify-end p-4 mr-2 ">
            <button onClick={() => setShowSidebarXstate(false)}>
                <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
              </button>
            </div>
            <div className='text-5xl font-bold p-4'>XState</div>
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
      </div>

      <div className="flex flex-col justify-items-center">
          <div className="flex">
            <button className="border-2 p-2  justify-center rounded-xl ml-[-170px] mr-[300px] mt-[205px] "
             onClick={() => setShowSidebarGit(!showSidebarGit)}
             >Git</button>
             {showSidebarGit&& (
          <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950 text-black">
            <div className="flex justify-end p-4 mr-2 ">
            <button onClick={() => setShowSidebarGit(false)}>
                <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
              </button>
            </div>
            <div className='text-5xl font-bold p-4'>Git</div>
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
      </div>
          </div>
</div>
<div className="flex flex-row justify-items-center w-auto   ">
<div className="flex flex-col justify-items-center">
          <div className="flex">
    <button className="border-2 p-2 rounded-xl mt-36 px-8 ml-[-60px] mr-[160px]  border-yellow-300 "
    onClick={() => setShowSidebarGithub(!showSidebarGithub)}
    >Github</button>
    {showSidebarGithub&& (
          <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950 text-black">
            <div className="flex justify-end p-4 mr-2 ">
            <button onClick={() => setShowSidebarGithub(false)}>
                <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
              </button>
            </div>
            <div className='text-5xl font-bold p-4'>Github</div>
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
      </div>
      <div className="flex flex-col justify-items-center">
          <div className="flex">
    <button className="border-2 p-2 rounded-xl mt-36 px-4 "
    onClick={() => setShowSidebarFirebase(!showSidebarFirebase)}
    >Firebase</button>
    {showSidebarFirebase&& (
          <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950 text-black">
            <div className="flex justify-end p-4 mr-2 ">
            <button onClick={() => setShowSidebarFirebase(false)}>
                <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
              </button>
            </div>
            <div className='text-5xl font-bold p-4'>Firebase</div>
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
      </div>
 </div>

 

      </div>

      <img src={logoImage} alt="My Logo" style={{ width: '50%' }} className="mb-40 " />
      
      
    </div>
    

    <div className="flex flex-col max-w-[1240px] mx-auto mb-10 ">
    <div className='flex flex-row text-center items-center'>
  <div className='text-3xl ml-4 mb-4 text-white'>Frequently Asked Question</div>
</div>

    <div className="flex flex-col">
          <div className="flex">
  <div className=' text-white ml-4 w-full border mt-2 border-[#1E293C] p-4 text-base cursor-pointer hover:border-slate-600 rounded-lg'
  onClick={() => setShowSidebarQs1(!showSidebarQs1)}>
      What are the Job titles of a Frontend Developer?
    </div>
    {showSidebarQs1 && (
          <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950 text-black z-50 ">
            <div className="flex justify-end p-4 mr-2 ">
            <button onClick={() => setShowSidebarQs1(false)}>
                <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
              </button>
            </div>
            <div className='text-3xl font-bold p-4 text-black'>What are the Job titles of a Frontend Developer?</div>
            <p className="p-4 text-[#262d36]">
              Front-end development is the development of visual and interactive elements of a website that users 
              interact with directly. It's a combination of HTML, CSS and JavaScript, where HTML provides the structure, 
              CSS the styling and layout, and JavaScript the dynamic behaviour and interactivity.</p>
            <p className='p-4 text-[#262d36] text-2xl font-bold'>What does Frontend Do?</p>
            <p className='p-4 text-[#262d36]'>As a front-end developer, you'll be responsible for creating the 
            user interface of a website, to ensure it looks good and is easy to use, with great focus on design
             principles and user experience. You'll be working closely with designers, back-end developers, and
              project managers to make sure the final product meets the client's needs and provides the best
               possible experience for the end-users.</p>
            
          </div>
        )}
      </div>
</div>
<div className="flex flex-col">
          <div className="flex">
    <div className='text-white ml-4 w-full border mt-2 border-[#1E293C] p-4 text-base cursor-pointer hover:border-slate-600 rounded-lg'
    onClick={() => setShowSidebarQs2(!showSidebarQs2)}>
      How to become a frontend developer?
    </div>
    {showSidebarQs2 && (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950 text-black z-50">
        <div className="flex justify-end p-4 mr-2 ">
        <button onClick={() => setShowSidebarQs2(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" />
          </button>
        </div>
        <div className='text-3xl font-bold p-4 text-black'>How to become a frontend developer?</div>
        <p className="p-4 text-[#262d36]">
          Front-end development is the development of visual and interactive elements of a website that users 
          interact with directly. It's a combination of HTML, CSS and JavaScript, where HTML provides the structure, 
          CSS the styling and layout, and JavaScript the dynamic behaviour and interactivity.</p>
        <p className='p-4 text-[#262d36] text-2xl font-bold'>What does Frontend Do?</p>
        <p className='p-4 text-[#262d36]'>As a front-end developer, you'll be responsible for creating the 
        user interface of a website, to ensure it looks good and is easy to use, with great focus on design
         principles and user experience. You'll be working closely with designers, back-end developers, and
          project managers to make sure the final product meets the client's needs and provides the best
           possible experience for the end-users.</p>
        
      </div>
    )}
  </div>
</div>
<div className="flex flex-col">
          <div className="flex">
    <div className='text-white ml-4 w-full border mt-2 border-[#1E293C] p-4 text-base cursor-pointer hover:border-slate-600 rounded-lg'
    onClick={() => setShowSidebarQs3(!showSidebarQs3)}>
      What are the frontend developer salaries?
    </div>
    {showSidebarQs3 && (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950 text-black z-50">
        <div className="flex justify-end p-4 mr-2 ">
        <button onClick={() => setShowSidebarQs3(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-3xl font-bold p-4 text-black'>What are the frontend developer salaries?</div>
        <p className="p-4 text-[#262d36]">
          Front-end development is the development of visual and interactive elements of a website that users 
          interact with directly. It's a combination of HTML, CSS and JavaScript, where HTML provides the structure, 
          CSS the styling and layout, and JavaScript the dynamic behaviour and interactivity.</p>
        <p className='p-4 text-[#262d36] text-2xl font-bold'>What does Frontend Do?</p>
        <p className='p-4 text-[#262d36]'>As a front-end developer, you'll be responsible for creating the 
        user interface of a website, to ensure it looks good and is easy to use, with great focus on design
         principles and user experience. You'll be working closely with designers, back-end developers, and
          project managers to make sure the final product meets the client's needs and provides the best
           possible experience for the end-users.</p>
        
      </div>
    )}
  </div>
</div>
    

    
</div>

<div className="flex flex-col max-w-[1240px] mx-auto mb-10 ">
    <div className='text-3xl ml-4 mb-4 text-white '> Test your Knowledge</div>
    <div className='text-white ml-4 w-full border mt-2 border-[#1E293C] p-4 text-base cursor-pointer hover:border-slate-600 rounded-lg'>
    <a href = 'https://quizlet.com/914418080/learn'>Javascipt</a>
      
    </div>
    <div className='text-white ml-4 w-full border mt-2 border-[#1E293C] p-4 text-base cursor-pointer hover:border-slate-600 rounded-lg'>
    <a href = 'https://quizlet.com/914572776/learn'>React</a>
     
    </div>
    <div className='text-white ml-4 w-full border mt-2 border-[#1E293C] p-4 text-base cursor-pointer hover:border-slate-600 rounded-lg'>
    <a href = 'https://quizlet.com/914572952/learn'>Tailwind</a>
        </div>

    
</div>

    <div className='w-full border border-[#1E293C] mt-40'></div>
            <div className='bg-[#000000]'>
                <div className='  text-[#94A3B8] h-40  justify-between flex items-center mx-auto max-w-[1240px]'>
                    <div className=''>© Skill Odessey </div>
                </div>
            </div>
      
            </div>
            </div>
            
  );
}

export default FrontendPage;
