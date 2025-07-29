import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import Courses from "./routes/Courses";
import Contact from "./routes/Contact";
import CourseDetails from "./routes/CourseDetails"; // ✅ New import

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/course/:videoId" element={<CourseDetails />} />
    </Routes>
  );
}

export default App;
