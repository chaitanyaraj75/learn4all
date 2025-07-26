import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import Courses from './routes/Courses';
import Contact from './routes/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/courses" element={<Courses />}/>
      <Route path="/contact" element={<Contact />}/>
      {/* <Route path="/:type/:id" element={<Details />} /> */}
      {/* <Route path="/search/:query" element={<Search />} /> */}
    </Routes>
  )
}

export default App
