import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();
  const [error, setError]= useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const [showLoginCard, setShowLoginCard] = useState(false);
  
    const handleSubmit = async(event) => {
    event.preventDefault(); 
    
    try{
      const response = await axios.post('http://localhost:3000/login', formData);
      console.log('Login successful:', response.data);  
      if (response.data && response.data.isLoggedIn === true) {
        localStorage.setItem('userLoggedIn', 'true');
        navigate('/Landingpage');
      } else if (error.response && error.response.status === 401) {
        setError(error.response.data.message);
      } else {
        setError('An unexpected error occurred');
      }
    } catch(error){
      console.error('Login error', error.response ? error.response.data : error);
    } finally {

      setFormData({
        username:'', 
        password:''
      });
    }
  };

  return (
    <div>
    <div className='justify-between flex items-center max-w-[1240px] mx-auto text-white py-6'>
                <div className='flex items-center'>
                    <div className='flex items-center px-5'><FontAwesomeIcon icon={faCube} style={{ color: "#38bcf5", fontSize: '2em' }}  /></div>
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
    <div>
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-4 rounded-lg" style={{ marginTop: '-120px' }}>
      <div className='   items-center text-center px-5 mb-3'><FontAwesomeIcon icon={faCube} style={{ color: "#38bcf5", fontSize: '5em' }} /></div>
        <h1 className=" text-2xl font-semibold text-center j">Login</h1>
        <div className=" text-base font-light mb-5 text-center j">Login your Account</div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6 ">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2 ">
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="username"
              type="text"
              name="username"
              placeholder="Email Address"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input id="remember" type="checkbox" className="h-5 w-5 " />
              <label htmlFor="remember" className="text-gray-700 ml-2 text-sm">
                Remember me
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
          >
            Login
          </button>
          

          <button
            type="submit"
          className="bg-white mt-4 shadow appearance-none border rounded w-full py-2 px-3 ">
            Don't have an account? <a href="/signup" className="text-blue-700">Sign up!</a>
            
            </button>
        </form>
      </div>
    </div>
    </div>
    </div>
  );
}

export default LoginPage;
