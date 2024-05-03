import React, { useState } from 'react';
import backendlogo from './backend.drawio.png';
import icon from './User_fill@2x.png';
import left from './Expand_left_double@2x.png';
import signout from './signout.png';
import home from './Home_fill@2x.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const BackendPage = () => {

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
    <div div className='flex flex-col justify-between max-w-[1240px] mx-auto text-white mt-8 '>
      <div className='text-5xl ml-4 mt-10'>
      Backend Developer
      </div>
      <div className='text-lg ml-4 mt-4'>
      Step by step guide to becoming a modern backend developer in 2024
   </div>
    <div className='flex flex-row text-sm ml-4 mt-4 border w-36 p-2 rounded-lg items-center justify-center hover:border-yellow-400 cursor-pointer'>
      <div>
      <img src={left} alt="My Logo" style={{ maxWidth: '20px', height: 'auto' }} />
      </div>
      <a href="FrontPage"><button onClick={() => setShowLoginCard(true)} ml-2 >All Roadmaps</button>
      </a>
  
       
        </div>
        <div className='w-full  border mt-8 border-[#1E293C]'></div>
        <div className=' h-40 mt-6 p-2 flex flex-col w-[350px] justify-center text-center border-purple-500 border'>
      </div>
        <div className="text-white flex flex-col items-center pt-10 mt-[-150px]">
      <div className="flex flex-col items-center ">
        <div className='p-2 border-2 rounded-xl ml-2'>Backend</div>

        <div className='flex flex-row '> 
        <div>
          <div className='p-2 border-2 rounded-xl mt-28 ml-[350px]' >Fundamentals</div>
        </div>
        <div className='flex flex-col text-center '>
        <div className=' p-2 border-2 rounded-xl  ml-64 mb-4' >Java</div>
        <div className=' p-2 border-2 rounded-xl ml-64 mb-4 ' >PHP</div>
        <div className=' p-2 border-2 rounded-xl ml-64 mb-4' >Javascript</div>
        <div className=' p-2 border-2 rounded-xl ml-64' >Python</div>
        </div>
        </div>
        
        <div className='flex flex-row mr-52  '> 
        <div className='flex flex-col text-center mt-12 mr-20 '>
        <div className=' p-2 border-2 rounded-xl  mb-6 ' >Postgressql</div>
        <div className=' p-2 border-2 rounded-xl  mb-6' >Mysql</div>
        <div className=' p-2 border-2 rounded-xl  ' >MariaDb</div>
        </div>
        <div>
        <div className='p-2 border-2 rounded-xl mt-[54px] ml-[60px]' >Relational Database</div>
        </div>
        </div>
        
        <div className='flex flex-row '> 
        <div>
          <div className='p-2 border-2 rounded-xl mt-[-12px] ml-[440px]' >APIs</div>
        </div>
        <div className='flex flex-col text-center   '>
        <div className=' p-2 border-2 rounded-xl  ml-[350px] mb-4 mt-[-16px]' >Rest</div>
        <div className=' p-2 border-2 rounded-xl ml-[350px] mb-4 ' >Jason</div>
        <div className=' p-2 border-2 rounded-xl ml-[350px] mb-4' >Graphql</div>
        </div>
        </div>

        <div className='flex flex-row mr-52  '> 
        <div className='flex flex-col text-center mt-[-130px] mr-[300px] '>
        <div className=' p-2 border-2 rounded-xl  mb-6 ' >Jwt</div>
        <div className=' p-2 border-2 rounded-xl  mb-6' >Basic Auth</div>
        <div className=' p-2 border-2 rounded-xl  mb-6' >Token Auth</div>
        <div className=' p-2 border-2 rounded-xl  ' >Token Auth</div>
        </div>
        <div>
        <div className='p-2 border-2 rounded-xl mt-[-18px] mr-[170px]' >Authentication APIs</div>
        </div>
        </div>
   

        <div className='flex flex-row '> 
        <div>
          <div className='p-2 border-2 rounded-xl mt-[25px] ml-[425px]' >Caching</div>
        </div>
        <div className='flex flex-col text-center   '>
        <div className=' p-2 border-2 rounded-xl  ml-[325px] mb-12 mt-[-16px] ' >CDN</div>
        <div className=' p-2 border-2 rounded-xl ml-[325px]' >Client Side</div>
        </div>
        </div>

        <div className='flex flex-row mr-52  '> 
        <div className='flex flex-col text-center mt-[-55px] mr-[190px] '>
        <div className=' p-2 border-2 rounded-xl  mb-4 ' >Bcrypt</div>
        <div className=' p-2 border-2 rounded-xl  mb-4' >Scrypt</div>
        <div className=' p-2 border-2 rounded-xl  mb-4' >HTTPS</div>
        <div className=' p-2 border-2 rounded-xl  mb-4' >Cors</div>
        <div className=' p-2 border-2 rounded-xl  ' >Server Security</div>
        </div>
        <div>
        <div className='p-2 border-2 rounded-xl mt-[65px] mr-[90px]' >Web Security</div>
        </div>
        </div>

        <div className='flex flex-row '> 
        <div>
          <div className='p-2 border-2 rounded-xl mt-[-2px] ml-[440px]' >Testing</div>
        </div>
        <div className='flex flex-col text-center   '>
        <div className=' p-2 border-2 rounded-xl  ml-[250px] mb-4 mt-[-120px]' >Unit Testing</div>
        <div className=' p-2 border-2 rounded-xl ml-[250px] mb-4 ' >Integration Testing</div>
        <div className=' p-2 border-2 rounded-xl ml-[250px] mb-4' >Continous<br/> Integration/Continous <br/>Deployment</div>
        </div>
        </div>

        <div className='flex flex-row mr-52  '> 
        <div className='flex flex-col text-center mt-[-8px] mr-[320px] '>
        <div className=' p-2 border-2 rounded-xl  mb-6 ' >Database Indexes</div>
        <div className=' p-2 border-2 rounded-xl  mb-6' >Cap Theorem</div>
        <div className=' p-2 border-2 rounded-xl  ' >Sharding Strategies</div>
        </div>
        <div>
        <div className='p-2 border-2 rounded-xl mt-[56px] mr-[250px]' >Scaling Database</div>
        </div>
        </div>

        <div className='flex flex-row '> 
        <div>
          <div className='p-2 border-2 rounded-xl mt-[54px] ml-[280px]' >Web Serves</div>
        </div>
        <div className='flex flex-col text-center   '>
        <div className=' p-2 border-2 rounded-xl  ml-[195px] mb-4 mt-[-15px]' >Nginx</div>
        <div className=' p-2 border-2 rounded-xl ml-[195px] mb-4 ' >Apache</div>
        <div className=' p-2 border-2 rounded-xl ml-[195px] mb-4' >Caddy</div>
        </div>
        </div>


        <div className='flex flex-row mr-52  '> 
        <div className='flex flex-col text-center mt-[-20px] mr-[200px] '>
        <div className=' p-2 border-2 rounded-xl  mb-6 ' >Server Sent Events</div>
        <div className=' p-2 border-2 rounded-xl  mb-6' >Web Sockes</div>
        <div className=' p-2 border-2 rounded-xl  ' >Long and <br/> Short Polling</div>
        </div>
        <div>
        <div className='p-2 border-2 rounded-xl mt-[50px] mr-[135px]' >Real-Time Data</div>
        </div>
        </div>

        <div className='p-2 border-2 rounded-xl mt-[35px] ml-2'>Advance Knowledge</div>
      </div>
      <img
        src={backendlogo}
        alt="My Logo"
        style={{ width: '50%', position: 'absolute' }}
        className="mt-12"
      />
    </div>
    </div>
    <div className='w-full border border-[#1E293C] mt-40'></div>
            <div className='bg-[#000000]'>
                <div className='  text-[#94A3B8] h-40  justify-between flex items-center mx-auto max-w-[1240px]'>
                    <div className=''>© Skill Odessey </div>
                </div>
            </div>
    
    </div>
  
  );
};

export default BackendPage;
