import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showLoginCard, setShowLoginCard] = useState(false);
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 

  
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      alert('Please fill in all required fields.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/signup', formData);

      if (response.status === 201) {
        window.alert('Signup successful!');
        window.location.href = 'http://localhost:3001/Landing-Page';
      } else {
        console.error('Unexpected response:', response);
      }
    } catch (error) {
      console.error('Signup error:', error.response ? error.response.data : error);
    } finally {
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    }
  };

  return (
    <div>
    <div className='justify-between flex items-center max-w-[1240px] mx-auto text-white py-6'>
                <div className='flex items-center'>
                    <div className='flex items-center px-5'><FontAwesomeIcon icon={faCube} style={{ color: "#38bcf5", fontSize: '2em' }} /></div>
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
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-4 ">
      <div className='  text-customFont mt-5 items-center text-center px-5 mb-3'><FontAwesomeIcon icon={faCube} style={{ color: "#38bcf5", fontSize: '5em' }} /></div>
        <h1 className=" text-2xl font-semibold text-center j">Sign Up</h1>
        <div className=" text-base font-light mb-5 text-center j">Register an Account</div>
        
       
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="name"
              type="text"
              name="name"
              placeholder="Juan Dela Cruz"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="email"
              type="email"
              name="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="password"
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Sign Up
          </button>
          <button
            type="submit"
          className="bg-white mt-4 shadow appearance-none border rounded w-full py-2 px-3 ">
            Already have an account? <a href="/login" className="text-blue-700">Login!</a>
            
            </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SignupPage;
