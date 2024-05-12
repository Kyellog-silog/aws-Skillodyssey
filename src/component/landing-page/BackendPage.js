import React, { useState, useEffect } from 'react';
import backendlogo from './backend.drawio.png';
import icon from './User_fill@2x.png';
import left from './Expand_left_double@2x.png';
import signout from './signout.png';
import home from './Home_fill@2x.png';
import mortar from './Mortarboard_light@2x.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const BackendPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSidebarCaching, setShowSidebarCaching] = useState(false);
  const [showSidebarFundamentals, setShowSidebarFundamentals] = useState(false);
  const [showSidebarJava, setShowSidebarJava] = useState(false);
  const [showSidebarBcrypt, setShowSidebarBcrypt] = useState(false);
  const [ShowSidebarWebSecurity, setShowSidebarWebSecurity] = useState(false);
  const [showSidebarHttps, setShowSidebarHttps] = useState(false);
  const [showSidebarCors, setShowSidebarCors] = useState(false);
  const [showSidebarServerSecurity, setShowSidebarServerSecurity] = useState(false);
  const [showSidebarUnitTesting, setShowSidebarUnitTesting] = useState(false);
  const [showSidebarIntegrationTesting, setShowSidebarIntergrationTesting] = useState(false);
  const [showSidebarContinous, setShowSidebarContinous] = useState(false);
  const [showSidebarTesting, setShowSidebarTesting] = useState(false);
  const [showSidebarScalingDatabase, setShowSidebarScalingDatabase] = useState(false);
  const [showSidebarCapTheorem, setShowSidebarCapTheorem] = useState(false);
  const [showSidebarDatabaseIndexes, setShowSidebarDatabaseIndexes] = useState(false);
  const [showSidebarShardingStrategies, setShowSidebarShardingStrategies] = useState(false);
  const [showSidebarNginx, setShowSidebarNginx] = useState(false);
  const [showSidebarApache, setShowSidebarApache] = useState(false);
  const [showSidebarCaddy, setShowSidebarCaddy] = useState(false);
  const [showSidebarWebServers, setShowSidebarWebServers] = useState(false);
  const [showSidebarServerScent, setShowSidebarServerScent] = useState(false);
  const [showSidebarWebStocks, setShowSidebarWebStocks] = useState(false);
  const [showSidebarLongShort, setShowSidebarLongShort] = useState(false);
  const [showSidebarRealtime, setShowSidebarRealtime] = useState(false);
  const [showSidebarScrypt, setShowSidebarScrypt] = useState(false);
  const [showSidebarAuthenticationAPIs, setShowSidebarAuthenticationAPIs] = useState(false);
  const [showSidebarBasicAuth, setShowSidebarBasicAuth] = useState(false);
  const [showSidebarTokenAuth, setShowSidebarTokenAuth] = useState(false);
  const [showSidebarQs1, setShowSidebarQs1] = useState(false);
  const [showSidebarQs2, setShowSidebarQs2] = useState(false);
  const [showSidebarQs3, setShowSidebarQs3] = useState(false);
  const [showSidebarAuth, setShowSidebarAuth] = useState(false);
  const [showSidebarPhp, setShowSidebarPhp] = useState(false);
  const [showSidebarJavascript, setShowSidebarJavascript] = useState(false);
  const [showSidebarPython, setShowSidebarPython] = useState(false);
  const [showSidebarPostgressql, setShowSidebarPostgressql] = useState(false);
  const [showSidebarMariaDb, setShowSidebarMariaDb] = useState(false);
  const [showSidebarMysql, setShowSidebarMysql] = useState(false);
  const [showSidebarJwt, setShowSidebarJwt] = useState(false);
  const [showSidebarRest, setShowSidebarRest] = useState(false);
  const [showSidebarJason, setShowSidebarJason] = useState(false);
  const [showSidebarGraphql, setShowSidebarGraphql] = useState(false);
  const [showSidebarCDN, setShowSidebarCDN] = useState(false);
  const [showSidebarRelationalDatabase, setShowSidebarRelationalDatabase] = useState(false);
  const [showSidebarAPIS, setShowSidebarAPIS] = useState(false);
  const [showSidebarClientSide, setShowSidebarClientSide] = useState(false);

  const navigate = useNavigate();
  const [showLoginCard, setShowLoginCard] = useState(false);

  const [selectedStatus, setSelectedStatus] = useState(null);

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  const handleClick = () => {
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
      localStorage.removeItem('userLoggedIn');
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
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
      Backend Developer
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
        onClick={() => setShowSidebar(!showSidebar)}>
      <div className="flex items-center">
        <img
          src={mortar}
          alt="My Logo"
          style={{ maxWidth: '100px', height: 'auto' }}
        />
        <div
          className='ml-4 font-semibold'
          
        >
          What is Backend Development?
        </div>
      </div>
    {showSidebar && (
  <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-gray-200 bg-opacity-10 z-50">
     <div className="w-2/3 md:w-1/2 lg:w-1/2 bg-white rounded-lg shadow-2xl overflow-y-auto max-h-screen p-4">
      
      <div className='flex flex-row justify-between items-center'>
      <div className="text-2xl font-semibold text-black ml-[10px]">What is Backend Development?</div>
      <div className="flex justify-end mr-4 ">
        <button onClick={() => setShowSidebar(false)}>
          <FontAwesomeIcon icon={faTimes} className="text-[#687688] text-2xl" />
        </button>
      </div>
      </div>
      <hr className='mt-2'></hr>
      <p className="p-4 text-[#1a1c1f]">
      Backend development is the unseen workhorse of websites and apps. 
      It handles data storage, processing, and server maintenance, ensuring everything runs smoothly behind the scenes. 
      While front-end developers craft what you see, backend developers are the engineers building the engine that powers it all.
      </p>
      <div className='text-black ml-4'>
        <p className='font-semibold'>
        What does a Frontend Developer do?
        </p>
      <p className='text-[#1a1c1f] mt-2'>
      A frontend developer is the architect of the visual and interactive experience you have on a website or web application. They translate designs and ideas into reality using programming languages like HTML, CSS, and JavaScript. 
      Their main focus is to create user-friendly interfaces that are both visually appealing and functional across different devices and browsers.
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
        <div className="text-white flex flex-col items-center pt-10 mt-[-150px]">
      <div className="flex flex-col items-center ">
        <div className='p-2 text-xl ml-2'>Backend</div>

        <div className='flex flex-row '> 
        <div className="flex flex-col ">
  <div className="flex">
        <button className='p-2 border-2 rounded-xl mt-[108px] ml-[350px] h-[45px] cursor-pointer z-40 '
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
        Software development fundamentals are provided by programming languages, which also include syntax. Clear and effective code writing in any language requires a solid understanding of basic concepts such as variables, functions, control structures, and data kinds. Developers that comprehend these fundamentals are better equipped to solve challenges creatively and effectively by adapting to new languages and technologies.
      </p>
    </div>
  </div>
)}

  </div>
</div>

<div>
  <div className="flex flex-col ">
  <div className="flex">
  <button className=' p-2 border-2 rounded-xl  px-[30px] ml-64 mb-4 border-green-400 cursor-pointer z-40'
    onClick={() => setShowSidebarJava(!showSidebarJava)}>
    Java</button>
    {showSidebarJava && (
  <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
  <div className="flex justify-end p-4 mr-2">
    <button onClick={() => setShowSidebarJava(false)}>
      <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
    </button>
  </div>
  <div className='ml-8'>   
  <div className='text-5xl font-bold p-4'>Java</div>
      <p className="p-4 text-[#262d36]">Java is a popular, flexible programming language that is scalable and platform independent. Its reliability and large standard library make it a preferred choice for a wide range of applications, including Android app development and corporate software. Java emphasizes object-oriented concepts heavily, which makes it possible to create sophisticated and dependable software systems.</p>
      <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
    </div>
      <ul className='list-disc pl-20 mt-4 underline leading-relaxed font-semibold'>
        <li><a href="https://www.tutorialspoint.com/java/index.htm">TutorialsPoint: Java Tutorial</a></li>
        <li><a href="https://youtube.com/playlist?list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5&si=qFCOT_CAvSASc-l_">Telusko: Java Tutorial For beginners</a></li>
        </ul>
  </div>
)}
  </div>
</div>
         
<div className="flex flex-col ">
  <div className=" flex ">
        <div className=' p-2 border-2 rounded-xl ml-64 mb-4 z-40 px-8 cursor-pointer'
         onClick={() => setShowSidebarPhp(!showSidebarPhp)}>
          PHP</div>
          
          {showSidebarPhp && (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarPhp(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>PHP</div>
            <p className="p-4 text-[#262d36]">PHP is a popular server-side scripting language for web development that blends seamlessly with HTML and is easy to use. For dynamic online content, such as forms, databases, and content management systems, it is perfect. It is a great option for dynamic web applications because of its widespread use and robust community support..</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            <ul className='list-disc pl-20 mt-4 underline leading-relaxed font-semibold'>
        <li><a href=" https://www.php.net/manual/en/language.types.php">PHP: Types - Manual</a></li>
        <li><a href="https://www.youtube.com/playlist?list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-">Learn PHP The Right Way - Full PHP Tutorial For Beginners</a></li>
        </ul>
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl ml-64 mb-4 border-yellow-300 z-40 cursor-pointer' 
        onClick={() => setShowSidebarJavascript(!showSidebarJavascript)}>
          Javascript</div>
          {showSidebarJavascript && (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarJavascript(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Javascipt</div>
            <p className="p-4 text-[#262d36]">JavaScript runs directly in browsers and adds interaction to webpages. It's necessary for contemporary web development since it makes features like animation and form validation possible. With server-side programming frameworks like Node.js, its usefulness goes beyond the web.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            <ul className='list-disc pl-20 mt-4 underline leading-relaxed font-semibold'>
        <li><a href=" https://www.simplilearn.com/tutorials/javascript-tutorial/introduction-to-javascript">Simplilearn: An Introduction to JavaScript</a></li>
        <li><a href="https://www.youtube.com/watch?v=8dWL3wF_OMw">Bro Code - JavaScript Full Course for free </a></li>
        </ul>
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl ml-64 border-yellow-300 z-40 cursor-pointer'
         onClick={() => setShowSidebarPython(!showSidebarPython)}>
          Python</div>
          {showSidebarPython && (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarPython(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Python</div>
            <p className="p-4 text-[#262d36]">Python is a high-level, multipurpose language with a reputation for readability and simplicity. AI, data analysis, web development, and other fields all use it. Python's extensive library and clear syntax facilitate quick creation and upkeep. Its versatility for a range of jobs and strong community support are the main reasons for its appeal.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            <ul className='list-disc pl-20 mt-4 underline leading-relaxed font-semibold'>
        <li><a href="https://www.programiz.com/python-programming">Programiz: Learn Python Programmingt</a></li>
        <li><a href="https://www.youtube.com/watch?v=XKHEtdqhLK8">Bro Code - Python Full Course </a></li>
        </ul>
          </div>
    )}
  </div>
</div>
        </div>
        </div>
        
        <div className='flex flex-row mr-52  '> 
        <div className='flex flex-col mt-12 mr-20 '>
        <div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  mb-6 cursor-pointer z-40 ' 
        onClick={() => setShowSidebarPostgressql(!showSidebarPostgressql)}>
          Postgressql
        </div>
        {showSidebarPostgressql&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarPostgressql(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Postgressql</div>
            <p className="p-4 text-[#262d36]">Reliability and cutting-edge functionality are hallmarks of PostgreSQL, an open-source relational database. Small projects to large-scale business systems can benefit from its support for a variety of data formats, indexing strategies, and SQL extensions. It is a well-liked option for developers looking for a reliable database solution because of its emphasis on standards compliance and vibrant community support.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            <ul className='list-disc pl-20 mt-4 underline leading-relaxed font-semibold'>
        <li><a href="https://www.ibm.com/topics/postgresql">IBM: What is PostgreSQL?</a></li>
        <li><a href="https://www.w3schools.com/postgresql/index.php">W3Schools: PostgreSQL Tutorial</a></li>
        <li><a href="https://www.youtube.com/watch?v=6a24yzO1-ZU">𝑷𝒓𝒐𝒇𝒆𝒔𝒔𝒊𝒐𝒏𝒂𝒍 𝒄𝒐𝒖𝒓𝒔𝒆𝒔 𝒘𝒊𝒕𝒉 𝑲𝑴: PostgreSQL Tutorial </a></li>
        </ul>
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  mb-6 border-yellow-300  text-center cursor-pointer z-40'
        onClick={() => setShowSidebarMysql(!showSidebarMysql)}>
          Mysql</div>
          {showSidebarMysql&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarMysql(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Mysql</div>
            <p className="p-4 text-[#262d36]">Well-known for its speed, scalability, and user-friendliness, MySQL is an open-source relational database. Medium-sized databases and web applications frequently use it because of its features, which include multiple storage engines for performance optimization and high availability. Businesses and developers looking for stability and efficiency can trust MySQL because of its large user base and comprehensive documentation.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            <ul className='list-disc pl-20 mt-4 underline leading-relaxed font-semibold'>
        <li><a href="https://www.ibm.com/topics/postgresql">Hostinger: What Is MySQL and How Does It Work</a></li>
        <li><a href="https://www.youtube.com/watch?v=5OdVJbNCSso">Bro Code: MySQL Full Course </a></li>
        </ul>
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl border-green-400  text-center cursor-pointer z-40'
        onClick={() => setShowSidebarMariaDb(!showSidebarMariaDb)}>
          MariaDb</div>
          {showSidebarMariaDb&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarMariaDb(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>MariaDb</div>
            <p className="p-4 text-[#262d36]">With the goal of preserving compatibility while introducing new features and performance enhancements, MariaDB is an open-source database that forked from MySQL. While it has the same functionality as MySQL, it has security, scalability, and reliability improvements. MariaDB, which prioritizes robustness, is a good option for companies looking for a strong and safe database solution.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            <ul className='list-disc pl-20 mt-4 underline leading-relaxed font-semibold'>
        <li><a href="https://www.mariadbtutorial.com/getting-started/what-is-mariadb/">MariaDB: What is MariaDB?</a></li>
        <li><a href="https://builtin.com/data-science/mariadb">Builtin: What Is MariaDB?</a></li>
        <li><a href="https://www.youtube.com/watch?v=5OdVJbNCSso">Java Code Junkie:MariaDB for Beginners </a></li>
        </ul>
            
          </div>
    )}
  </div>
</div>
        </div>
        <div>
        <div className="flex flex-col ">
  <div className="flex">
        <div className='p-2 border-2 rounded-xl mt-[54px] ml-[60px] cursor-pointer z-40'
         onClick={() => setShowSidebarRelationalDatabase(!showSidebarRelationalDatabase)}>
          Relational Database</div>
          {showSidebarRelationalDatabase && (
  <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-gray-200 bg-opacity-10 z-50">
     <div className="w-2/3 md:w-1/2 lg:w-1/2 bg-white rounded-lg shadow-2xl overflow-y-auto max-h-screen p-4">
      
      <div className='flex flex-row justify-between items-center'>
      <div className="text-2xl font-semibold text-black ml-[10px]">Relational Database</div>
      <div className="flex justify-end mr-4 ">
        <button onClick={() => setShowSidebarRelationalDatabase(false)}>
          <FontAwesomeIcon icon={faTimes} className="text-[#687688] text-2xl" />
        </button>
      </div>
      </div>
      <hr className='mt-2'></hr>
      <p className="p-4 text-[#262d36]">
      Relational databases are a kind of database management system (DBMS) that creates
       associations between data by arranging it into tables with rows and columns. They are
        frequently used to store structured data and make effective administration and querying possible. 

      </p>
    </div>
  </div>
)}

  </div>
</div>

        </div>
        </div>
        
        <div className='flex flex-row '> 
        <div>
        <div className="flex flex-col ">
  <div className="flex">
          <div className='p-2 border-2 rounded-xl mt-[-12px] ml-[440px] cursor-pointer z-40'
          onClick={() => setShowSidebarAPIS(!showSidebarAPIS)}
          >APIs</div>
          {showSidebarAPIS&& (
  <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-gray-200 bg-opacity-10 z-50">
     <div className="w-2/3 md:w-1/2 lg:w-1/2 bg-white rounded-lg shadow-2xl overflow-y-auto max-h-screen p-4">
      
      <div className='flex flex-row justify-between items-center'>
      <div className="text-2xl font-semibold text-black ml-[10px]">APIs</div>
      <div className="flex justify-end mr-4 ">
        <button onClick={() => setShowSidebarAPIS(false)}>
          <FontAwesomeIcon icon={faTimes} className="text-[#687688] text-2xl" />
        </button>
      </div>
      </div>
      <hr className='mt-2'></hr>
      <p className="p-4 text-[#262d36]">
      An API is a set of rules (interface) that two separate systems or programs—one on 
      a publishing side and one on an accessing side—agree to follow. The company publishing
       the API then implements their side by writing a program and putting it on a server.


      </p>
    </div>
  </div>
)}

  </div>
</div>
        </div>
        <div className='flex flex-col   '>
        <div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  ml-[350px] mb-4 mt-[-16px] border-yellow-300 cursor-pointer z-40'
        onClick={() => setShowSidebarRest(!showSidebarRest)} >Rest</div>
        {showSidebarRest&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarRest(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Rest</div>
            <p className="p-4 text-[#262d36]">A REST API (also called a RESTful API or RESTful web API) is an application programming interface (API) that conforms to the design principles of the representational state transfer (REST) architectural style. REST APIs provide a flexible, lightweight way to integrate applications and to connect components in microservices architectures.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            <ul className='list-disc pl-20 mt-4 underline leading-relaxed font-semibold'>
        <li><a href="https://www.ibm.com/topics/rest-apis#:~:text=the%20next%20step-,What%20is%20a%20REST%20API%3F,transfer%20(REST)%20architectural%20style">IBM: What is a REST API?</a></li>
        <li><a href="https://www.youtube.com/watch?v=lsMQRaeKNDk&feature=youtu.be">IBM Technology: What is a REST API?</a></li>
        <li><a href="https://www.youtube.com/watch?v=WXsD0ZgxjRw&feature=youtu.be"> freeCodeCamp.org: APIs for Beginners </a></li>
        </ul>
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl ml-[350px] mb-4 border-green-400  cursor-pointer z-40' 
        onClick={() => setShowSidebarJason(!showSidebarJason)}>Jason</div>
        {showSidebarJason&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarJason(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Json</div>
            <p className="p-4 text-[#262d36]">JSON (JavaScript Object Notation) API is an application programming interface designed for lightweight data interchange (text-based data exchange format) between two computer applications operating on the same hardware device or between different computers in different geographical areas.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            <ul className='list-disc pl-20 mt-4 underline leading-relaxed font-semibold'>
        <li><a href="https://rapidapi.com/blog/api-glossary/what-is-json-api-json-vs-graphql-vs-rest-api-comparison/">What is JSON API? JSON vs GraphQL vs REST API Comparison</a></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON">Working with JSON</a></li>
        <li><a href="https://www.youtube.com/watch?v=iiADhChRriM">Web Dev Simplified: Learn JSON in 10 Minutes </a></li>
        <li><a href="https://www.youtube.com/watch?v=N-4prIh7t38">TheAdimar: JSON API: Explained in 4 minutes (+ EXAMPLES) </a></li>
        </ul>
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl ml-[350px] mb-4 cursor-pointer z-40' 
        onClick={() => setShowSidebarGraphql(!showSidebarGraphql)}
         >Graphql</div>
         {showSidebarGraphql&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarGraphql(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Graphql</div>
            <p className="p-4 text-[#262d36]">GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            <ul className='list-disc pl-20 mt-4 underline leading-relaxed font-semibold'>
        <li><a href="https://graphql.org">Graphql: A query language for your API</a></li>
        <li><a href="https://docs.gitlab.com/ee/api/graphql/">GitLab: GraphQL API</a></li>
        <li><a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9gUxtblNUahcsg0WLxmrK_y">Net Ninja: GraphQL Crash Course </a></li>
        <li><a href="https://www.youtube.com/watch?v=eIQh02xuVw4">Fireship: GraphQL Explained in 100 Seconds </a></li>
        </ul>
          </div>
    )}
  </div>
</div>
        </div>
        </div>

        <div className='flex flex-row mr-52  '> 
        <div className='flex flex-col  mt-[-130px] mr-[300px] '>
        <div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  mb-6 border-green-400  cursor-pointer z-40' 
        onClick={() => setShowSidebarJwt(!showSidebarJwt)}>
          Jwt</div>
          {showSidebarJwt&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarJwt(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Jwt</div>
            <p className="p-4 text-[#262d36]">JSON Web Token (JWT) is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            <ul className='list-disc pl-20 mt-4 underline leading-relaxed font-semibold'>
        <li><a href="https://jwt.io/introduction">Introduction to JSON Web Tokens</a></li>
        <li><a href="https://www.alibabacloud.com/help/en/api-gateway/user-guide/jwt-based-authentication">Alibaba Cloud: JWT-based authentication</a></li>
        <li><a href="https://www.youtube.com/watch?v=7Q17ubqLfaM ">Web Dev Simplified: What Is JWT and Why Should You Use JWT </a></li>
        <li><a href="https://www.youtube.com/watch?v=dLxCpd3IGys">PostMan: How to Use JWT Authorization </a></li>
        </ul>
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  mb-6 border-green-400 cursor-pointer z-40'
        onClick={() => setShowSidebarBasicAuth(!showSidebarBasicAuth)}>
          Basic Auth</div>
          {showSidebarBasicAuth&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarBasicAuth(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Basic Auth</div>
            <p className="p-4 text-[#262d36]">Basic access authentication is a way for a user to provide a username and password or username and API key when making an API request.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            <ul className='list-disc pl-20 mt-4 underline leading-relaxed font-semibold'>
        <li><a href="https://apipheny.io/basic-auth/">Apipheny: What Is Basic Authentication & How To Do It</a></li>
        <li><a href= "https://swagger.io/docs/specification/authentication/basic-authentication/">Swagger: Basic Authentication</a></li>
        <li><a href="https://www.youtube.com/watch?v=rhi1eIjSbvk">Oktadev: "Basic Authentication" in Five Minutes </a></li>
        </ul>
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  mb-6 border-yellow-300 cursor-pointer z-40 ' 
        onClick={() => setShowSidebarBasicAuth(!showSidebarBasicAuth)}>
          Token Auth</div>
          {showSidebarBasicAuth&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarBasicAuth(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Token Auth</div>
            <p className="p-4 text-[#262d36]">An API token is similar to a password and allows you to authenticate to Dataverse Software APIs to perform actions as you. Many Dataverse Software APIs require the use of an API token.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            <ul className='list-disc pl-20 mt-4 underline leading-relaxed font-semibold'>
        <li><a href="https://guides.dataverse.org/en/latest/api/auth.html">Dataverse: API Tokens and Authentication</a></li>
        <li><a href="https://www.wallarm.com/what/what-is-an-api-token-quick-guide#:~:text=FAQ-,What%20is%20an%20API%20token%3F,authorize%20access%20to%20protected%20resources">Wallarm: What Is An API Token? Quick Guide</a></li>
        <li><a href="https://www.youtube.com/watch?v=hDOMgZelKYA&feature=youtu.be">Gary Clarke: API Token Authentication </a></li>
        <li><a href="https://www.youtube.com/watch?v=DanUVSlOSQQ&feature=youtu.be">Dave Hollingworth: API access tokens: how do they work, and how do they compare to authentication using API keys? </a></li>
        </ul>
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  border-yellow-300  cursor-pointer z-40' 
        onClick={() => setShowSidebarAuth(!showSidebarAuth)}>
           Auth</div>
           {showSidebarAuth&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarAuth(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>OAuth</div>
            <p className="p-4 text-[#262d36]">OAuth is an open standard that enables secure data sharing and access delegation between applications. It allows users to grant limited access to their accounts and data to third-party applications without compromising their passwords.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            <ul className='list-disc pl-20 mt-4 underline leading-relaxed font-semibold'>
        <li><a href="https://www.ramotion.com/blog/what-is-oauth-authentification/#section-defining-oauth">Ramotion: Defining OAuth</a></li>
        <li><a href="https://developer.okta.com/blog/2017/06/21/what-the-heck-is-oauth">Oktadev: What the Heck is OAuth?</a></li>
        <li><a href="https://www.youtube.com/watch?v=VZH_lGxqFYU">It k Funde:oAuth for Beginners - How oauth authentication🔒 works ? </a></li>
        <li><a href="https://www.youtube.com/watch?v=ZV5yTm4pT8g&feature=youtu.be">ByteByteGo: OAuth 2 Explained In Simple Terms </a></li>
        </ul>
          </div>
    )}
  </div>
</div>
        </div>
        <div>
        <div className="flex flex-col ">
  <div className="flex">
        <div className='p-2 border-2 rounded-xl mt-[-18px] mr-[170px] cursor-pointer z-40'
         onClick={() => setShowSidebarAuthenticationAPIs(!showSidebarAuthenticationAPIs)}>
          Authentication APIs</div>
          {showSidebarAuthenticationAPIs&& (
  <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-gray-200 bg-opacity-10 z-50">
     <div className="w-2/3 md:w-1/2 lg:w-1/2 bg-white rounded-lg shadow-2xl overflow-y-auto max-h-screen p-4">
      <div className='flex flex-row justify-between items-center'>
      <div className="text-2xl font-semibold text-black ml-[10px]">APIs</div>
      <div className="flex justify-end mr-4 ">
        <button onClick={() => setShowSidebarAuthenticationAPIs(false)}>
          <FontAwesomeIcon icon={faTimes} className="text-[#687688] text-2xl" />
        </button>
      </div>
      </div>
      <hr className='mt-2'></hr>
      <p className="p-4 text-[#262d36]">
      API authentication is a combination of technology and process that proves
       or verifies the identities of users who want access to an API. Specifically, 
       API authentication involves the use of a software protocol to verify that users 
       are who they claim to be when a client makes an API call.



      </p>
    </div>
  </div>
)}

  </div>
</div>
        </div>
        </div>
   

        <div className='flex flex-row '> 
        <div>
        <div className="flex flex-col ">
  <div className="flex">
          <div className='p-2 border-2 rounded-xl mt-[25px] ml-[425px] cursor-pointer z-40' 
          onClick={() => setShowSidebarCaching(!showSidebarCaching)}>
            Caching</div>
            {showSidebarCaching&& (
  <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-gray-200 bg-opacity-10 z-50">
     <div className="w-2/3 md:w-1/2 lg:w-1/2 bg-white rounded-lg shadow-2xl overflow-y-auto max-h-screen p-4">
      <div className='flex flex-row justify-between items-center'>
      <div className="text-2xl font-semibold text-black ml-[10px]">Caching</div>
      <div className="flex justify-end mr-4 ">
        <button onClick={() => setShowSidebarCaching(false)}>
          <FontAwesomeIcon icon={faTimes} className="text-[#687688] text-2xl" />
        </button>
      </div>
      </div>
      <hr className='mt-2'></hr>
      <p className="p-4 text-[#262d36]">
      Caching is a technique used in computing to store frequently accessed
       data temporarily in order to reduce access time and improve overall system 
       performance. It involves storing copies of data locally so that future requests 
       for that data can be served more quickly




      </p>
    </div>
  </div>
)}

  </div>
</div>
        </div>
        <div className='flex flex-col    '>
        <div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  ml-[325px] mb-12 mt-[-16px] cursor-pointer z-40 '
        onClick={() => setShowSidebarCDN(!showSidebarCDN)}>
          CDN</div>
          {showSidebarCDN&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarCDN(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>CDN</div>
            <p className="p-4 text-[#262d36]">A CDN is a network of servers distributed geographically to deliver content more efficiently to users. It caches static content, such as images, videos, CSS, and JavaScript files, on servers located closer to the user's location. CDNs improve the performance of websites and applications by reducing latency and speeding up content delivery. When a user requests content, the CDN serves it from the nearest server rather than the origin server, resulting in faster load times.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            <ul className='list-disc pl-20 mt-4 underline leading-relaxed font-semibold'>
        <li><a href="https://www.pingdom.com/blog/a-beginners-guide-to-using-cdns-2/">SolarWinds: What is a CDN?</a></li>
        <li><a href="https://www.cloudflare.com/learning/cdn/what-is-a-cdn/">CloudFlare: What is a content delivery network (CDN)? | How do CDNs work?</a></li>
        <li><a href="https://www.youtube.com/watch?v=0QKjnCu6tAM">DumbTurtorials: What is CDN [Content Delivery Network]? and How It Works? </a></li>
        <li><a href="https://www.youtube.com/watch?v=OvzvhWj7bj0">Simplilearn: What Is CDN ? | CDN Explained | Content Delivery Network </a></li>
        </ul>
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl ml-[325px] border-yellow-300 cursor-pointer z-40'
        onClick={() => setShowSidebarClientSide(!showSidebarClientSide)}>
          Client Side</div>
          {showSidebarClientSide&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarClientSide(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> {/* Increase size to 2x */}
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Client Side</div>
            <p className="p-4 text-[#262d36]">Client-side caching involves storing data on the client's device, such as a web browser or mobile app, to reduce the need for repeated requests to the server. This can include caching of HTML, CSS, JavaScript files, images, and other resources. It improves the user experience by reducing page load times and decreasing server load. It works by storing copies of resources locally on the client's device, allowing subsequent requests for the same resources to be served more quickly.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            <ul className='list-disc pl-20 mt-4 underline leading-relaxed font-semibold'>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching">mdn Webdocs: HTTP caching</a></li>
        <li><a href="https://redis.io/docs/latest/develop/use/client-side-caching/">Redis: Client-side caching in Redis</a></li>
        <li><a href="https://medium.com/@ashalabi13/persistent-data-client-side-caching-843ee00ff514">Medium: Persistent Data — Client-Side Caching </a></li>
        <li><a href="https://www.youtube.com/watch?v=UZ8MEkKip98">tutorialsEU: ASP.NET 7 Enabling Client Side Caching </a></li>
        <li><a href="https://www.youtube.com/watch?v=M51ogjOU5Zs">Software Develepment and Architecture: Learn to Code | Browser caching | Client side caching using IndexedDB </a></li>
        </ul>
          </div>
    )}
  </div>
</div>
        </div>
        </div>

        <div className='flex flex-row mr-52  '> 
        <div className='flex flex-col mt-[-55px] mr-[190px] '>
        <div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  mb-4 border-yellow-300  cursor-pointer z-40'
        onClick={() => setShowSidebarBcrypt(!showSidebarBcrypt)}>
          Bcrypt</div>
          {showSidebarBcrypt&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarBcrypt(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Bcrypt</div>
            <p className="p-4 text-[#262d36]">BCrypt is a password-hashing function designed to securely store passwords. It uses a cryptographic hash function to generate a salted hash of the password, making it difficult for attackers to reverse-engineer the original password.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            <ul className='list-disc pl-20 mt-4 underline leading-relaxed font-semibold'>
        <li><a href="https://github.com/kelektiv/node.bcrypt.js">node.bcrypt.js</a></li>
        <li><a href="https://www.youtube.com/watch?v=O6cmuiTBZVs">Hack Reactor: Bcrypt & Password Security - An Introduction</a></li>
        </ul>
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  mb-4 border-green-400 cursor-pointer z-40'
        onClick={() => setShowSidebarScrypt(!showSidebarScrypt)}>
          Scrypt</div>
          {showSidebarScrypt&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarScrypt(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Scrypt</div>
            <p className="p-4 text-[#262d36]">Scrypt is another password-based key derivation function similar to BCrypt but with a focus on being memory-intensive, thereby increasing the difficulty and cost of brute-force attacks.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            <ul className='list-disc pl-20 mt-4 underline leading-relaxed font-semibold'>
        <li><a href="https://github.com/barrysteyn/node-scrypt">Scrypt for Node</a></li>
        <li><a href="https://www.youtube.com/watch?v=vH64vqnt4vM">TroubleFree: Web Security Considerations in Cryptography |CNS|</a></li>
                </ul>
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  mb-4 border-yellow-300 cursor-pointer z-40' 
        onClick={() => setShowSidebarHttps(!showSidebarHttps)}>
          HTTPS</div>
          {showSidebarHttps&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarHttps(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Https</div>
            <p className="p-4 text-[#262d36]">HTTPS is the secure version of HTTP, providing encrypted communication between a web browser and a web server. It ensures the confidentiality and integrity of data exchanged over the network by using SSL/TLS protocols.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            <ul className='list-disc pl-20 mt-4 underline leading-relaxed font-semibold'>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#http_and_https">mdn web docs: An overview of HTTP</a></li>
        <li><a href="https://www.youtube.com/watch?v=iYM2zFP3Zn0">Traversy Media: HTTP Crash Course & Exploration</a></li>

        </ul>
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  mb-4 border-yellow-300 cursor-pointer z-40'
         onClick={() => setShowSidebarCors(!showSidebarCors)}>
          Cors</div>
          {showSidebarCors&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarCors(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Cors</div>
            <p className="p-4 text-[#262d36]">CORS is a security mechanism that controls access to resources on a web server from a different origin domain. It prevents malicious websites from making unauthorised requests to access sensitive data.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            <ul className='list-disc pl-20 mt-4 underline leading-relaxed font-semibold'>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">mdn web docs: Cross-Origin Resource Sharing (CORS)</a></li>
        <li><a href="https://www.youtube.com/watch?v=t5FBwq-kudw">Rana Khalil: Cross-Origin Resource Sharing (CORS) | Complete Guide</a></li>
        </ul>
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl cursor-pointer z-40 '
         onClick={() => setShowSidebarServerSecurity(!showSidebarServerSecurity)}>
          Server Security</div>
          {showSidebarServerSecurity&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarServerSecurity(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Server Security</div>
            <p className="p-4 text-[#262d36]">Server security involves securing the underlying infrastructure and software components of a web server to protect against various threats such as unauthorised access, malware, DDoS attacks, and data breaches</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            <ul className='list-disc pl-20 mt-4 underline leading-relaxed font-semibold'>
        <li><a href="https://www.plesk.com/blog/various/web-server-security-beginners-guide/">Plesk: Web Server Security – Beginner’s Guide</a></li>
        <li><a href="https://www.youtube.com/watch?v=hXSFdwIOfnE">Simplilearn: Cyber Security Full Course 2023 | Cyber Security Course Training For Beginners 2023</a></li>
        </ul>
          </div>
    )}
  </div>
</div>
        </div>
        <div>
        <div className="flex flex-col ">
  <div className="flex">
        <div className='p-2 border-2 rounded-xl mt-[65px] mr-[90px] cursor-pointer z-40'
        onClick={() => setShowSidebarWebSecurity(!ShowSidebarWebSecurity)}>
          Web Security</div>
          {ShowSidebarWebSecurity&& (
  <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-gray-200 bg-opacity-10 z-50">
     <div className="w-2/3 md:w-1/2 lg:w-1/2 bg-white rounded-lg shadow-2xl overflow-y-auto max-h-screen p-4">
      <div className='flex flex-row justify-between items-center'>
      <div className="text-2xl font-semibold text-black ml-[10px]">Web Security</div>
      <div className="flex justify-end mr-4 ">
        <button onClick={() => setShowSidebarWebSecurity(false)}>
          <FontAwesomeIcon icon={faTimes} className="text-[#687688] text-2xl" />
        </button>
      </div>
      </div>
      <hr className='mt-2'></hr>
      <p className="p-4 text-[#262d36]">
      Web security encompasses various practices, technologies, and
       measures implemented to protect websites, web applications, 
       and web services from threats and vulnerabilities. It involves 
       safeguarding sensitive data, preventing unauthorised access, 
       ensuring data integrity, and maintaining user privacy.
      </p>
    </div>
  </div>
)}

  </div>
</div>
        </div>
        </div>

        <div className='flex flex-row '> 
        <div>
        <div className="flex flex-col ">
  <div className="flex">
          <div className='p-2 border-2 rounded-xl mt-[-2px] ml-[440px] cursor-pointer z-40' 
           onClick={() => setShowSidebarTesting(!showSidebarTesting)}>
            Testing</div>
            {showSidebarTesting&& (
  <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-gray-200 bg-opacity-10 z-50">
     <div className="w-2/3 md:w-1/2 lg:w-1/2 bg-white rounded-lg shadow-2xl overflow-y-auto max-h-screen p-4">
      <div className='flex flex-row justify-between items-center'>
      <div className="text-2xl font-semibold text-black ml-[10px]">Testing </div>
      <div className="flex justify-end mr-4 ">
        <button onClick={() => setShowSidebarTesting(false)}>
          <FontAwesomeIcon icon={faTimes} className="text-[#687688] text-2xl" />
        </button>
      </div>
      </div>
      <hr className='mt-2'></hr>
      <p className="p-4 text-[#262d36]">
      Testing is the process of evaluating a system or its components to 
      verify that it meets specified requirements and works as expected. 
      It involves executing a program or application with the intent of finding
       errors and ensuring its quality. Testing is crucial for identifying defects
        early in the development cycle, reducing the cost of fixing them, and ensuring
         the reliability and performance of the software.

      </p>
    </div>
  </div>
)}

  </div>
</div>
        </div>
<div className='flex flex-col  '>
        <div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  ml-[250px] mb-4 mt-[-120px] border-yellow-300 cursor-pointer z-40 text-center h-[45px]'
        onClick={() => setShowSidebarUnitTesting(!showSidebarUnitTesting)}>
          Unit Testing</div>
          {showSidebarUnitTesting&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarUnitTesting(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Unit Testing</div>
            <p className="p-4 text-[#262d36]">Unit testing is the practice of testing individual units or components of a software application in isolation from the rest of the system. A unit can be a function, method, or class. Unit tests are typically written and executed by developers during the development phase. It helps verify that each unit of code functions correctly in isolation. It ensures that the individual units perform as expected according to the specifications. Popular unit testing frameworks include JUnit for Java, XCTest for Swift, NUnit for .NET, and Jest for JavaScript.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            <ul className='list-disc pl-20 mt-4 underline leading-relaxed font-semibold'>
        <li><a href="https://builtin.com/software-engineering-perspectives/unit-testing">Builtin: What Is Unit Testing?</a></li>
        <li><a href="https://www.hypertest.co/unit-testing/what-is-unit-testing">Hyper Test: What is Unit testing? A Complete Step By Step Guide</a></li>
        <li><a href="https://www.youtube.com/watch?v=3kzHmaeozDI&feature=youtu.be">Andy Sterkowitz: What is Unit Testing? Why YOU Should Learn It + Easy to Understand Examples </a></li>
        <li><a href="https://www.youtube.com/watch?v=MMWXr2Ddzow">Sfotware Testing Mentor: Software Testing Tutorial #12 - What is Unit Testing/Component Testing </a></li>
        <li><a href="https://www.youtube.com/watch?v=fl8MSpK5dJg&feature=youtu.be">CS & IT Tutorial:SE 45 : Unit Testing with Example | Software Engineering Full Course   </a></li>
        </ul>
          </div>
    )}
  </div>
</div>
<div className='flex flex-col  '>
        <div className="flex flex-col ">
        <div className=' p-2 border-2 rounded-xl ml-[250px] mb-4 border-yellow-300  cursor-pointer z-40 mt-[-60px] text-center'
        onClick={() => setShowSidebarIntergrationTesting(!showSidebarIntegrationTesting)}>
          Integration Testing</div>
          {showSidebarIntegrationTesting&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarIntergrationTesting(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Integration Testing</div>
            <p className="p-4 text-[#262d36]">Integration testing is the process of testing the interactions and interfaces between different components or modules of a software system. It aims to verify that integrated units work together as expected and communicate correctly. Integration testing ensures that various components of a system collaborate correctly when combined. It identifies issues related to data communication, interface compatibility, and dependencies between modules. Additionally, Integration testing can be conducted using different approaches such as top-down, bottom-up, and sandwich testing. Tools for integration testing vary depending on the technology stack and framework being used. Some popular tools include Selenium for web applications, Postman for API testing, and SOAPUI for web services. </p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            <ul className='list-disc pl-20 mt-4 underline leading-relaxed font-semibold'>
        <li><a href="https://www.guru99.com/integration-testing.html">Guru99: What is Integration Testing?</a></li>
        <li><a href="https://www.lambdatest.com/learning-hub/integration-testing">LambDatest: Next-Gen App & Browser Testing Cloud</a></li>
        <li><a href="https://www.youtube.com/watch?v=QYCaaNz8emY&feature=youtu.be">Guru99: What is Integration Testing? </a></li>
        <li><a href="https://www.youtube.com/watch?v=gkUA-Ou4wV8">CS & IT Tutorial:Integration Testing with Examples </a></li>
        </ul>
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl ml-[250px] mb-4 cursor-pointer z-40 text-center'
         onClick={() => setShowSidebarContinous(!showSidebarContinous)} >
          Continous<br/> Integration/Continous <br/>Deployment</div>
          {showSidebarContinous&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarContinous(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Continous Integration/Continous Deployment</div>
            <p className="p-4 text-[#262d36]">CI/CD automates the software development process. Developers frequently merge code changes and automated checks ensure everything works smoothly. This leads to faster, more reliable software releases.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            <ul className='list-disc pl-20 mt-4 underline leading-relaxed font-semibold'>
        <li><a href="https://resources.github.com/devops/ci-cd/">CI/CD: The what, why, and how</a></li>
        <li><a href="https://developers.redhat.com/articles/2022/10/20/ultimate-cicd-resource-guide">RedHat Developer: The ultimate CI/CD resource guide</a></li>
        <li><a href="https://www.youtube.com/watch?v=h9K1NnqwUvE">SimpliLearn: CI/CD Full Course | CI/CD Tutorial | Continuous Integration And Continuous Delivery </a></li>
        </ul>
          </div>
    )}
  </div>
</div>
        </div>
        </div>

        <div className='flex flex-row mr-52  '> 
        <div className='flex flex-col mt-[-8px] mr-[320px] '>
        <div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  mb-6 border-yellow-300 cursor-pointer z-40 text-center'
        onClick={() => setShowSidebarDatabaseIndexes(!showSidebarDatabaseIndexes)} >
          Database Indexes</div>
          {showSidebarDatabaseIndexes&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarDatabaseIndexes(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Database Indexes</div>
            <p className="p-4 text-[#262d36]">Database indexes are data structures that improve the speed of data retrieval operations on a database table. They work by providing a quick lookup mechanism for finding rows in a table based on the values of certain columns. Indexes can significantly enhance the performance of database queries, especially for large datasets.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            <ul className='list-disc pl-20 mt-4 underline leading-relaxed font-semibold'>
        <li><a href="https://planetscale.com/blog/how-do-database-indexes-work">How do Database Indexes Work?</a></li>
        <li><a href="https://learnsql.com/blog/what-is-an-index/">Learn SQL: What Is a Database Index? </a></li>
        <li><a href="https://www.databasestar.com/sql-indexes/">Database Star: SQL Indexes – The Definitive Guide </a></li>
        <li><a href="https://www.youtube.com/watch?v=-qNSXK7s7_w&feature=youtu.be">Database Indexing Explained (with PostgreSQL)</a></li>
        <li><a href="https://www.youtube.com/watch?v=YuRO9-rOgv4">Kudvenkat: How do SQL Indexes Work </a></li>
        </ul>
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  mb-6 cursor-pointer z-40 '
        onClick={() => setShowSidebarCapTheorem(!showSidebarCapTheorem)} > 
        Cap Theorem</div>
        {showSidebarCapTheorem&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarCapTheorem(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Cap Theorem</div>
            <p className="p-4 text-[#262d36]">The CAP theorem, also known as Brewer's theorem, states that in a distributed data store, it's impossible to simultaneously achieve consistency (all nodes have the same data at the same time), availability (every request receives a response), and partition tolerance (the system continues to operate despite network partitions). According to CAP, distributed systems can only guarantee two out of the three properties.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            <ul className='list-disc pl-20 mt-4 underline leading-relaxed font-semibold'>
        <li><a href="https://towardsdatascience.com/cap-theorem-and-distributed-database-management-systems-5c2be977950e">Medium: CAP Theorem and Distributed Database Management Systems</a></li>
        <li><a href="https://www.baeldung.com/cs/brewers-cap-theorem">BaelDung: Brewer’s CAP Theorem</a></li>
        <li><a href="https://www.youtube.com/watch?v=d7Kl4doUB8g">Educative: What is CAP Theorem </a></li>
        <li><a href="https://www.youtube.com/watch?v=BHqjEjzAicA">ByteByteGo: CAP Theorem Simplified </a></li>
        </ul>
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl cursor-pointer z-40  '
        onClick={() => setShowSidebarShardingStrategies(!showSidebarShardingStrategies)} >  
        Sharding Strategies</div>
        {showSidebarShardingStrategies&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarShardingStrategies(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Sharding Strategies</div>
            <p className="p-4 text-[#262d36]">Sharding is a technique used to horizontally partition data across multiple servers or databases. It involves breaking up a large dataset into smaller, more manageable chunks called shards, and distributing these shards across different nodes. Sharding helps distribute the workload evenly, improves scalability, and enhances performance. There are various sharding strategies, including range-based sharding, hash-based sharding, and composite sharding, each suited for different types of applications and data distributions. </p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            <ul className='list-disc pl-20 mt-4 underline leading-relaxed font-semibold'>
        <li><a href="https://www.linode.com/docs/guides/sharded-database/">Akamai: Database Sharding: Concepts, Examples, and Strategies</a></li>
        <li><a href="https://www.digitalocean.com/community/tutorials/understanding-database-sharding">Digital Ocean: Understanding Database Sharding</a></li>
        <li><a href="https://www.youtube.com/watch?v=XP98YCr-iXQ">Anton Putra: What is Database Sharding? </a></li>
        </ul>
          </div>
    )}
  </div>
</div>
        </div>
        <div>
        <div className="flex flex-col ">
  <div className="flex">
        <div className='p-2 border-2 rounded-xl mt-[56px] mr-[250px] cursor-pointer z-40'
        onClick={() => setShowSidebarScalingDatabase(!showSidebarScalingDatabase)} > 
         Scaling Database</div>
         {showSidebarScalingDatabase&& (
  <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-gray-200 bg-opacity-10 z-50">
     <div className="w-2/3 md:w-1/2 lg:w-1/2 bg-white rounded-lg shadow-2xl overflow-y-auto max-h-screen p-4">
      <div className='flex flex-row justify-between items-center'>
      <div className="text-2xl font-semibold text-black ml-[10px]">Scaling Database </div>
      <div className="flex justify-end mr-4 ">
        <button onClick={() => setShowSidebarScalingDatabase(false)}>
          <FontAwesomeIcon icon={faTimes} className="text-[#687688] text-2xl" />
        </button>
      </div>
      </div>
      <hr className='mt-2'></hr>
      <p className="p-4 text-[#262d36]">
      Scaling a database refers to the process of increasing its capacity 
      to handle more data, requests, and users as the application grows. 
      Scaling can be done vertically by adding more resources to a single 
      server (like increasing CPU, RAM, or storage), or horizontally by 
      distributing the workload across multiple servers.

      </p>
    </div>
  </div>
)}

  </div>
</div>
        </div>
        </div>

        <div className='flex flex-row '> 
        <div>
        <div className="flex flex-col ">
  <div className="flex">
          <div className='p-2 border-2 rounded-xl mt-[54px] ml-[280px] cursor-pointer z-40' 
          onClick={() => setShowSidebarWebServers(!showSidebarWebServers)} >
            Web Servers</div>
            {showSidebarWebServers&& (
  <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-gray-200 bg-opacity-10 z-50">
     <div className="w-2/3 md:w-1/2 lg:w-1/2 bg-white rounded-lg shadow-2xl overflow-y-auto max-h-screen p-4">
      <div className='flex flex-row justify-between items-center'>
      <div className="text-2xl font-semibold text-black ml-[10px]">Web Servers</div>
      <div className="flex justify-end mr-4 ">
        <button onClick={() => setShowSidebarWebServers(false)}>
          <FontAwesomeIcon icon={faTimes} className="text-[#687688] text-2xl" />
        </button>
      </div>
      </div>
      <hr className='mt-2'></hr>
      <p className="p-4 text-[#262d36]">
      A web server is a software application that serves web pages to 
      clients over the internet or an intranet. It processes requests
       from clients (usually web browsers) and returns the requested 
       web pages along with any associated resources, such as images, 
       scripts, and stylesheets. Web servers use various protocols, 
       such as HTTP and HTTPS, to communicate with clients and deliver web content.


      </p>
    </div>
  </div>
)}

  </div>
</div>
        </div>
        <div className='flex flex-col  '>
        <div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  ml-[195px] mb-4 mt-[-15px] cursor-pointer z-40 text-center  '
        onClick={() => setShowSidebarNginx(!showSidebarNginx)} >
          Nginx</div>
          {showSidebarNginx&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarNginx(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Nginx</div>
            <p className="p-4 text-[#262d36]">NGINX is a high-performance, open-source web server and reverse proxy server. It's known for its speed, scalability, and flexibility. NGINX is often used as a reverse proxy to handle incoming requests and distribute them to backend servers or to serve static content directly. It's commonly used for serving websites, applications, and APIs. NGINX also offers additional features like load balancing, caching, and SSL/TLS termination.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            <ul className='list-disc pl-20 mt-4 underline leading-relaxed font-semibold'>
        <li><a href="https://kinsta.com/knowledgebase/what-is-nginx/">What Is Nginx? A Basic Look at What It Is and How It Works</a></li>
        <li><a href="https://www.freecodecamp.org/news/the-nginx-handbook/">freeCodeCamp: The NGINX Handbook – Learn NGINX for Beginners</a></li>
        <li><a href="https://medium.com/free-code-camp/an-introduction-to-nginx-for-developers-62179b6a458f">Medium: An Introduction to NGINX for Developers   </a></li>
        <li><a href="https://www.youtube.com/watch?v=9t9Mp0BGnyI">freeCodeCamp: NGINX Tutorial for Beginners </a></li>
        </ul>
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl ml-[195px] mb-4 border-yellow-300 text-center cursor-pointer z-40  '
        onClick={() => setShowSidebarApache(!showSidebarApache)} >
          Apache</div>
          {showSidebarApache&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarApache(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Apache</div>
            <p className="p-4 text-[#262d36]">Apache is one of the oldest and most widely used web servers. It's an open-source, cross-platform web server software that powers many websites on the internet. Apache is known for its stability, reliability, and extensive module support. It supports various programming languages and technologies, including PHP, Perl, and Python. Apache is highly configurable and can be customized to suit different use cases and requirements.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            <ul className='list-disc pl-20 mt-4 underline leading-relaxed font-semibold'>
        <li><a href="https://kinsta.com/knowledgebase/what-is-apache/">Kinsta: What Is Apache Web Server? A Basic Look at What It Is and How It Works</a></li>
        <li><a href="https://www.guru99.com/apache.html">Guru99: Apache Tutorials for Beginners</a></li>
        <li><a href="https://www.youtube.com/watch?v=2lCR0FGLn2c">Udacity: Apache Web Server</a></li>
        </ul>
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl ml-[195px] mb-4 border-green-400 text-center cursor-pointer z-40  ' 
        onClick={() => setShowSidebarCaddy(!showSidebarCaddy)} >
          Caddy</div>
        {showSidebarCaddy&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarCaddy(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Caddy</div>
            <p className="p-4 text-[#262d36]">Caddy is a modern, open-source web server with automatic HTTPS. It's designed to be easy to use and configure, with a focus on simplicity and security. Caddy automatically provides SSL/TLS certificates for websites using Let's Encrypt, making it easy to set up secure connections by default. It also includes features like virtual hosting, reverse proxying, and HTTP/2 support out of the box. Caddy's configuration is written in a simple and human-readable format, making it accessible to users of all levels of expertise.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            <ul className='list-disc pl-20 mt-4 underline leading-relaxed font-semibold'>
        <li><a href="https://betterstack.com/community/guides/web-servers/caddy/">BetterStack: Deploying Web Apps with Caddy: A Beginner's Guide</a></li>
        <li><a href="https://blog.logrocket.com/comparing-best-web-servers-caddy-apache-nginx/">LogRocket: Comparing the best web servers: Caddy, Apache, and Nginx</a></li>
        <li><a href="https://webhostinggeeks.com/blog/caddy-web-server-explained/">Caddy Web Server Explained in Simple Terms </a></li>
        <li><a href="https://www.youtube.com/watch?v=t4naLFSlBpQ">Getting started with Caddy the HTTPS Web Server from scratch </a></li>
        </ul>
          </div>
    )}
  </div>
</div>
        </div>
        </div>


        <div className='flex flex-row mr-52  '> 
        <div className='flex flex-col mt-[-20px] mr-[200px] '>
        <div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  mb-6 border-green-400  cursor-pointer z-40  text-center' 
         onClick={() => setShowSidebarServerScent(!showSidebarServerScent)} >
          Server Sent Events</div>
          {showSidebarServerScent&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarServerScent(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Server Sent Events</div>
            <p className="p-4 text-[#262d36]">Server-Sent Events is a standard that enables servers to push data updates to web clients over HTTP in real-time. With SSE, a client establishes a persistent connection to the server, and the server can then continuously send updates whenever new data becomes available. SSE is well-suited for scenarios where the server needs to regularly update clients with fresh data, such as news feeds or social media timelines.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            <ul className='list-disc pl-20 mt-4 underline leading-relaxed font-semibold'>
        <li><a href="https://www.w3schools.com/html/html5_serversentevents.asp">W3Schools: HTML SSE API</a></li>
        <li><a href="https://medium.com/deliveryherotechhub/what-is-server-sent-events-sse-and-how-to-implement-it-904938bffd73">Medium: What is Server-Sent Events (SSE) and how to implement it?</a></li>
        <li><a href="https://javascript.info/server-sent-events">Javascript.INFO: Server Sent Events </a></li>
        <li><a href="https://www.youtube.com/watch?v=KkI3yHjKjqs">The Best Way to Send Data From Backend to Frontend: Server Sent Events </a></li>
        <li><a href="https://www.youtube.com/watch?v=piEYV-fsYbA">Server-Sent Events (SSE) - Implement Client and Server (Express.js) </a></li>
        </ul>
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl  mb-6 border-green-400 cursor-pointer z-40  text-center'
         onClick={() => setShowSidebarWebStocks(!showSidebarWebStocks)} >
          Web Sockes</div>
          {showSidebarWebStocks&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarWebStocks(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Web Sockes</div>
            <p className="p-4 text-[#262d36]">It is a communication protocol that provides full-duplex communication channels over a single, long-lived connection between a client and a server. Unlike traditional HTTP requests, WebSockets allow for bidirectional communication, meaning both the client and server can send data to each other at any time without waiting for a request. WebSockets are ideal for applications requiring real-time, interactive communication, such as online gaming, collaborative drawing tools, or financial trading platforms.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            <ul className='list-disc pl-20 mt-4 underline leading-relaxed font-semibold'>
        <li><a href="https://javascript.info/websocket">Javascipt.INFO: WebSocket</a></li>
        <li><a href="https://web.dev/articles/websockets-basics">Web Dev: Introducing WebSockets - Bringing Sockets to the Web</a></li>
        <li><a href="https://www.youtube.com/watch?v=8ARodQ4Wlf4">freeCodeCamp: A Beginner's Guide to WebSockets </a></li>
        <li><a href="https://www.youtube.com/watch?v=pnj3Jbho5Ck&feature=youtu.be">How Web Sockets work | System Design Interview Basics </a></li>
        </ul>
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
        <div className=' p-2 border-2 rounded-xl border-green-400 cursor-pointer z-40  text-center'
        onClick={() => setShowSidebarLongShort(!showSidebarLongShort)} >
          Long and <br/> Short Polling</div>
          {showSidebarLongShort&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarLongShort(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>Long and Short Polling</div>
            <p className="p-4 text-[#262d36]">Long polling is a technique where a client sends a request to the server, and the server keeps the request open until new data is available or a timeout occurs. If new data is available, the server responds with the data immediately. If not, the server holds the request open until new data becomes available or until the connection times out. Long polling is useful for scenarios where real-time updates are required but maintaining persistent connections (like WebSockets) is not feasible or desired.</p>
            <p className="p-4 text-[#262d36]">Short polling is a simpler version of polling where the client sends periodic requests to the server at regular intervals to check for updates. Unlike long polling, the server responds immediately to each request, regardless of whether new data is available or not. Short polling is less efficient compared to long polling or WebSockets since it involves frequent requests and responses, but it can still be suitable for certain use cases where real-time updates are not critical or where WebSocket support is unavailable.</p>
            <p className='p-4 text-[#262d36]'>Visit the following resources to learn more:</p>
            <ul className='list-disc pl-20 mt-4 underline leading-relaxed font-semibold'>
        <li><a href="https://javascript.info/long-polling">Javascript.INFO: Long Polling</a></li>
        <li><a href="https://www.youtube.com/watch?v=AdAycLzyD7A&feature=youtu.be">Long Polling in NodeJS</a></li>
        <li><a href="https://www.youtube.com/watch?v=LD0_-uIsnOE">What is Long Polling? || HTTP Long Polling </a></li>
        <li><a href="https://www.geeksforgeeks.org/what-is-long-polling-and-short-polling/">GeeksforGeeks: What is Long Polling and Short Polling ? </a></li>
        <li><a href="https://medium.com/@SejalPande1994/exploring-short-polling-in-javascript-a-real-time-approach-to-data-updates-643d5c016d99">Medium: Exploring Short Polling in JavaScript: A Real-Time Approach to Data Updates</a></li>
        <li><a href="https://www.youtube.com/watch?v=ZBM28ZPlin8">Short Polling vs Long Polling vs WebSockets - System Design</a></li>
        
        </ul>
          </div>
    )}
  </div>
</div>
        </div>
        <div>
        <div className="flex flex-col ">
  <div className="flex">
        <div className='p-2 border-2 rounded-xl mt-[50px] mr-[135px] cursor-pointer z-40  text-center' 
         onClick={() => setShowSidebarRealtime(!showSidebarRealtime)} >
          Real-Time Data</div>
          {showSidebarRealtime&& (
  <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-gray-200 bg-opacity-10 z-50">
     <div className="w-2/3 md:w-1/2 lg:w-1/2 bg-white rounded-lg shadow-2xl overflow-y-auto max-h-screen p-4">
      <div className='flex flex-row justify-between items-center'>
      <div className="text-2xl font-semibold text-black ml-[10px]">Real-Time Data</div>
      <div className="flex justify-end mr-4 ">
        <button onClick={() => setShowSidebarRealtime(false)}>
          <FontAwesomeIcon icon={faTimes} className="text-[#687688] text-2xl" />
        </button>
      </div>
      </div>
      <hr className='mt-2'></hr>
      <p className="p-4 text-[#262d36]">
      Real-time data refers to information that is transmitted and received instantly,
       enabling immediate updates or reactions without any significant delay. 
       This type of data communication is crucial for applications where timely 
       information is essential, such as chat applications, live sports updates, 
       stock market tracking, and collaborative editing tools.


      </p>
    </div>
  </div>
)}

  </div>
</div>
        </div>
        </div>

        <div className='p-2 border-2 rounded-xl mt-[35px] ml-2'>Advance Knowledge</div>
      </div>
      <img
  src={backendlogo}
  alt="My Logo"
  style={{ width: '50%', position: 'absolute', zIndex: '10' }} // Set zIndex to control stacking order
  className="mt-12"
/>

    </div>
    </div>
    
    <div className="flex flex-col max-w-[1240px] mx-auto mb-10 mt-40 ">
    <div className='text-3xl ml-4 mb-4 text-white cursor-pointer z-40'>
       Frequently Asked Question</div>
       
<div className="flex flex-col ">
  <div className="flex">
  <div className='text-white ml-4 w-full border mt-2 border-[#1E293C] p-4 text-base cursor-pointer hover:border-slate-600 p z-40 rounded-lg'
   onClick={() => setShowSidebarQs1(!showSidebarQs1)} >
      What are the Job titles of a Backend Developer?
    </div>
    {showSidebarQs1&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50  ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarQs1(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>What are the Job titles of a Backend Developer</div>
            <p className="p-4 text-[#262d36]">Backend developers can wear many hats, and their job titles can reflect that! Here are some common titles you might see, depending on experience level and specialization:
                                              General Titles:
                                              Backend Developer
                                              Software Engineer (Backend)
                                              Back-End Developer (Less common variation)
                                              Application Developer (Can lean towards backend or full-stack)
                                              Titles by Experience:
                                              Junior Backend Engineer
                                              Mid-Level Backend Engineer
                                              Senior Backend Engineer
                                              Lead Backend Engineer
                                              Titles by Specialization:
                                              API Developer
                                              (Language-specific) Developer (e.g., Java Developer, Python Developer)
                                              Cloud Backend Engineer
                                              DevOps Engineer (More operations-focused backend role)</p>
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
    <div className='text-white ml-4 w-full border mt-2 border-[#1E293C] p-4 text-base cursor-pointer hover:border-slate-600 z-40 rounded-lg'
    onClick={() => setShowSidebarQs2(!showSidebarQs2)} >
      How to become a Backend developer?
    </div>
    {showSidebarQs2&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50 ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarQs2(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>How to become a Backend Developer</div>
            <p className="p-4 text-[#262d36]">Backend development is a rewarding career path. To become one, you'll need to learn a programming language like Python or Java, along with databases and frameworks. Build projects to practice and showcase your skills. Network with other developers and keep learning to stay current. With dedication and practice, you can land your dream backend developer job!</p>
          </div>
    )}
  </div>
</div>
<div className="flex flex-col ">
  <div className="flex">
    <div className='text-white ml-4 w-full border mt-2 border-[#1E293C] p-4 text-base cursor-pointer hover:border-slate-600 z-40 rounded-lg'
     onClick={() => setShowSidebarQs3(!showSidebarQs3)} >
      What are the backend developer salaries?
    </div>
    {showSidebarQs3&& (
      <div className="bg-gray-200 w-2/5 h-screen fixed top-0 right-0 overflow-y-auto shadow-2xl shadow-slate-950  text-black z-50  ">
        <div className="flex justify-end p-4 mr-2">
          <button onClick={() => setShowSidebarQs3(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-[#687688]" /> 
          </button>
        </div>
        <div className='text-5xl font-bold p-4'>What are the backend developer salaries?</div>
            <p className="p-4 text-[#262d36]">Backend developer salaries can vary significantly. In the US, experienced developers can make well over $100,000 annually. In the Philippines, the average is around ₱630,000 per year, with entry-level earning less and senior developers earning more.  No matter the location, your experience and skills will significantly impact your earning potential.</p>
          </div>
    )}
  </div>
</div>

    
</div>

<div className="flex flex-col max-w-[1240px] mx-auto mb-10 ">
    <div className='text-3xl ml-4 mb-4 text-white '> Test your Knowledge</div>
    <div className='text-white ml-4 w-full border mt-2 border-[#1E293C] p-4 text-base cursor-pointer hover:border-slate-600 rounded-lg'>
    <a href = 'https://quizlet.com/914418080/learn'>
      Javascipt  </a>
    </div>
    <div className='text-white ml-4 w-full border mt-2 border-[#1E293C] p-4 text-base cursor-pointer hover:border-slate-600 rounded-lg'>
     <a href = 'https://quizlet.com/914573326/learn'>Mysql
     </a>
    </div>
    <div className='text-white ml-4 w-full border mt-2 border-[#1E293C] p-4 text-base cursor-pointer hover:border-slate-600 rounded-lg'>
   <a href = 'https://quizlet.com/914573548/learn'> Rest
    </a>
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
