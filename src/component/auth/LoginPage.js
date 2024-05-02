  import React, { useState } from 'react';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faCube } from '@fortawesome/free-solid-svg-icons';
  import axios from 'axios'

  function LoginPage() {
    const [formData, setFormData] = useState({
      username: '',
      password: '',
    });

    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const [error, setError] = useState(null);

    const handleSubmit = async(event) => {
      event.preventDefault(); 
      
      try{
        const response = await axios.post('http://localhost:3000/login', formData);
        console.log('Login successful:', response.data);  
        if (response.data && response.data.message === "Login Successful"){
          const intendedUrl = localStorage.getItem('intendedUrl') || '/'; 
          localStorage.removeItem('intendedUrl');
          window.location.href = intendedUrl;
          
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
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
      <div className='  mt-5 items-center text-center px-5 mb-3'><FontAwesomeIcon icon={faCube} style={{ color: "#38bcf5", fontSize: '5em' }} /></div>
        <h1 className=" text-2xl font-semibold text-center j">Login</h1>
        <div className=" text-base font-light mb-5 text-center j">Login your Account</div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="username"
              type="text"
              name="username"
              placeholder="Enter Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
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
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input id="remember" type="checkbox" className="h-5 w-5 text-blue-600 focus:ring-offset-0 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <label htmlFor="remember" className="text-gray-700 ml-2 text-sm">
                Remember me
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
