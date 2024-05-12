import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const LandingPage = () => {
    const [showLoginCard, setShowLoginCard] = useState(false);
    const navigate = useNavigate();
    const { isLoggedIn, username, setIsLoggedIn, handleFetchUsername } = useLoginStatus();


    useEffect(() => {
        handleFetchUsername();
        
    }, []);

    

    const handleLogout = async () => {
        try {
            await axios.get('/logout');
            localStorage.removeItem('userLoggedIn');
            setIsLoggedIn(false);
            navigate('/login');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };
    
    const handleRedirect = (path) => {
        if (isLoggedIn) {
            navigate(path);
        } else {
            localStorage.setItem('intendedUrl', path);
            navigate('/login');
        }


    };

    return (
        <div>
            <div className='justify-between flex items-center max-w-[1240px] mx-auto text-white mt-8'>
                <div className='flex items-center'>
                    <div className='flex items-center px-5'><FontAwesomeIcon icon={faCube} style={{ color: "#38bcf5", fontSize: '5em' }} /></div>
                    <div className='text-3xl font-bold text-[#00df9a]'>SKILL ODESSEY</div>
                </div>
                <div className=''>
                {isLoggedIn && <p>{username}</p>}
                </div>

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

function useLoginStatus() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
  
    useEffect(() => {
      const storedUserLoggedIn = localStorage.getItem('userLoggedIn');
      if (storedUserLoggedIn === 'true') {
        setIsLoggedIn(true);
  
        const usernameFromStorage = localStorage.getItem('Username');
        if (usernameFromStorage) {
          setUsername(usernameFromStorage);
        } else {
          handleFetchUsername();
        }
      } else {
        setIsLoggedIn(false);
      }
    }, []);
  
    const handleFetchUsername = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/user'); // Replace with your endpoint
        setUsername(response.data.username);
      } catch (error) {
        console.error('Error fetching username:', error);
      }
    };
  
    return { isLoggedIn, username, handleFetchUsername };
  }

  
export default LandingPage;
