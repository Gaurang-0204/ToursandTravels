import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './Components/LandingPage';
import SignupPage from './Components/SignupPage';

function App() {
  

  return (
    <>
       <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Signup" element={<SignupPage />} />
        
      </Routes>
    </Router>
    </>
  )
}

export default App
