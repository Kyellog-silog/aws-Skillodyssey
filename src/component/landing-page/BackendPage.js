import React, { useState } from 'react';
import logoImage from './aaa.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';

function BackendPage() {
  const [showLoginCard, setShowLoginCard] = useState(false);

  return (
    <div>
    <div className='justify-between flex items-center max-w-[1240px] mx-auto text-white mt-8'>
                <div className='flex items-center'>
                    <div className='flex items-center px-5'><FontAwesomeIcon icon={faCube} style={{ color: "#38bcf5", fontSize: '5em' }} /></div>
                    <div className='text-3xl font-bold text-[#00df9a]'>SKILL ODESSEY</div>
                    </div>
                    <ul className="flex items-center">
                <li>
                        <a href="FrontPage">
                        <button
                        onClick={() => setShowLoginCard(true)}
                        className="text-[#9CA3AF] mr-1 rounded-lg px-6 py-2 border border-transparent hover:border-blue-500 focus:outline-none"
                        >
                        Home
                        </button>
                        </a>
                    </li>
                    <li>
                        <a href="login">
                        <button
                        onClick={() => setShowLoginCard(true)}
                        className="text-[#9CA3AF] mr-4 rounded-lg px-6 py-2 border border-transparent hover:border-blue-500 focus:outline-none"
                        >
                        Alysa E.
                        </button>
                        </a>
                    </li>
                    <li>
                        <a
                        href="/signup"
                        className="rounded-lg px-4 py-2 border-2 border-purple-500 border-opacity-75 hover:bg-purple-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-4 focus:ring-offset-slate-900 dark:focus:ring-offset-slate-900"
                        >
                        Logout
                        </a>
                    </li>
                    </ul>
                    </div>
    <div className="text-white flex flex-col items-center pt-10 relative">
      <h1 className='mb-4'>BACKEND</h1>
      <div className="absolute top-0 left-0 right-0 flex flex-col items-center p-4">
        <button className='border-2 p-2 rounded-xl mt-36  mb-20'>HTML</button>
        <button className='border-2 p-2 rounded-xl'>CSS</button>
      </div>
      <img src={logoImage} alt="My Logo" style={{ width: '50%' }} className="mb-4" />
      
    </div>
    </div>
    
  );
}

export default BackendPage;
