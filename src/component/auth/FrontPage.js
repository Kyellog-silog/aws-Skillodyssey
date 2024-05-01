import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';


const FrontPage = () => {
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
                        <a href="login">
                        <button
                        onClick={() => setShowLoginCard(true)}
                        className="text-[#9CA3AF] mr-4 rounded-lg px-6 py-2 border border-transparent hover:border-blue-500 focus:outline-none"
                        >
                        Login
                        </button>
                        </a>
                    </li>
                    <li>
                        <a
                        href="/signup"
                        className="rounded-lg px-4 py-2 border-2 border-purple-500 border-opacity-75 hover:bg-purple-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-4 focus:ring-offset-slate-900 dark:focus:ring-offset-slate-900"
                        >
                        Sign Up
                        </a>
                    </li>
                    </ul>

            </div>

           
            <div className=' flex-direction: column; text-[#9CA3AF] mt-24 text-center items-center'>
                <div className='text-6xl font-bold mb-10'>Developer Roadmaps</div>
                <div className='mx-auto text-xl'>
                Skill Odyssey is an open-source educational platform offering precise roadmaps, guides, 
                and resources <br/>for frontend and backend development. Users can access curated pathways, watch video 
                tutorials,<br/> and review modules to guide their learning journey effectively.
                </div>

                <div className='mt-12 flex items-center'>
                    <div className='mt-5 w-1/2 border border-[#1E293C]'></div>
                    <div className='text-[#94A3B8] w-60 mt-5 border rounded-md px-4 py-2 inline-block border-[#1E293C]'>Role base roadmap</div>
                    <div className='mt-5 w-1/2 border border-[#1E293C]'></div>
                </div>
            </div>

            <div class="mt-5 flex items-center justify-center mb-60">
            <a href="/frontend" class="mr-3 w-60 mt-5 border rounded-lg px-4 py-4 inline-block border-gray-700 hover:border-blue-500 hover:text-white cursor-pointer">
                <div class="text-gray-400 justify-center text-center">Frontend</div>
            </a>
            <a href="/backend" class="ml-3 w-60 mt-5 border rounded-lg px-4 py-4 inline-block border-gray-700 hover:border-[#00df9a] hover:text-white cursor-pointer">
                <div class="text-gray-400 justify-center text-center">Backend</div>
            </a>
            </div>


            {/* <div className=' bg-[#1A2436] h-96 text-[#94A3B8]'>
                <div className='justify-between flex-direction:column items-center max-w-[1240px] mx-auto mt-24'>
                    <div className='w-full pt-10 text-2xl font-bold'>Download</div>
                    <div className='w-full mt-60 text-2xl font-bold'>Videos</div>
                </div>
            </div> */}
            <div className='w-full border border-[#1E293C]'></div>
            <div className='bg-[#000000]'>
                <div className='  text-[#94A3B8] h-40  justify-between flex items-center mx-auto max-w-[1240px]'>
                    <div className=''>© Skill Odessey </div>
                </div>
            </div>
        </div>
    );
};

export default FrontPage;
