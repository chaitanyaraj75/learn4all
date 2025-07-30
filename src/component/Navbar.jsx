import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import Nav_item from "./Nav_item";
import { Link } from "react-router-dom";

function Navbar({ heading }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header
      className={`sticky top-0 z-50 shadow-md transition-all duration-300 ${
        scrolled ? "bg-opacity-90 backdrop-blur-md" : ""
      } ${isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      <nav className="flex justify-between items-center px-6 py-4 relative">
        {/* Logo */}
        <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
          Learn4All
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-xl absolute left-1/2 transform -translate-x-1/2">
          <Nav_item heading={heading} title="Home" />
          <Nav_item heading={heading} title="Courses" />
          <Nav_item heading={heading} title="About" />
          <Nav_item heading={heading} title="Contact" />
        </ul>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="text-sm px-3 py-1 rounded-full border border-gray-400 dark:border-white"
          >
            {isDark ? "☀️ Light" : "🌙 Dark"}
          </button>

          <Link to="/login">
            <button className="text-sm px-4 py-1 border rounded-full hover:bg-green-600 hover:text-white transition">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="text-sm px-4 py-1 border rounded-full bg-green-600 text-white hover:bg-green-700 transition">
              Sign Up
            </button>
          </Link>

          <div className="relative">
            <FaUserCircle
              size={26}
              className="cursor-pointer hover:text-green-600"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 text-sm rounded shadow-md w-40 p-2 space-y-2 z-20">
                <button className="block w-full text-left px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                  Profile
                </button>
                <button className="block w-full text-left px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                  Dashboard
                </button>
                <button className="block w-full text-left px-3 py-1 hover:bg-red-100 dark:hover:bg-red-700 rounded">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden text-2xl text-green-700 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <ul
            className={`absolute top-full left-0 w-full ${
              isDark ? "bg-gray-900 text-white" : "bg-white"
            } flex flex-col items-center gap-4 py-4 shadow-md z-10 md:hidden`}
          >
            <Nav_item heading={heading} title="Home" />
            <Nav_item heading={heading} title="Courses" />
            <Nav_item heading={heading} title="About" />
            <Nav_item heading={heading} title="Contact" />

            <Link to="/login" className="w-full text-center">
              <button className="w-4/5 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
                Login
              </button>
            </Link>
            <Link to="/signup" className="w-full text-center">
              <button className="w-4/5 px-4 py-2 border rounded-full hover:bg-green-600 hover:text-white transition">
                Sign Up
              </button>
            </Link>

            <button
              onClick={toggleDarkMode}
              className="text-sm px-3 py-1 rounded-full border border-gray-400 dark:border-white"
            >
              {isDark ? "☀️ Light" : "🌙 Dark"}
            </button>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
