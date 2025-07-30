import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import Courses from "./routes/Courses";
import Contact from "./routes/Contact";
import "./App.css"; // You already imported it once; no need to import twice.

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        {/* Optional: Add a 404 fallback route */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
