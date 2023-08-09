import React from "react";
import './App.css';
import Login from './screens/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './screens/Signup';
import ForgetPasword from "./screens/ForgetPasword";
import Home from "./screens/Home";
import Emailverification from "./screens/Emailverification";
function App() {
  
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/singnup" Component={Signup} />
          <Route path="/fogetpassword" Component={ForgetPasword} />
          <Route path="/home" Component={Home} />
          <Route path="/verify" Component={Emailverification} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
