import React, {useState, useEffect} from 'react'
import axios from 'axios';
import FrontPage from './component/auth/FrontPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const checkLoginStatus = async() => {
      try{
        const response = await axios.get('http://localhost:3000/api/user-status', {
          withCredentials: true
        });
        if (response.data && response.data.isLoggedIn){
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error(error);
      }
      };
      checkLoginStatus();
  })


  return (
    <div>
      
      <FrontPage />
    </div>
  );
}

export default App;
