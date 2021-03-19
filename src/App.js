import React, { createContext, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MyRouter from './Components/MyRouter/MyRouter';
import Navbar from './Components/Navbar/Navbar';


// creating a context api
export const UserContext = createContext()

function App() {

  const [loggedInUser, setLoggedInUser] = useState({})
  return (
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <BrowserRouter>
              <Navbar />
              <MyRouter />
          </BrowserRouter>
      </UserContext.Provider>
  );
}

export default App;
