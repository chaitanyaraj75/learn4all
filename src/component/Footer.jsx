import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaGlobe, FaEnvelope, FaPhone, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-10 px-6 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Branding */}
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-bold mb-2">
            Learn<span className="text-green-400">4</span>All
          </h1>
          <p className="text-sm text-gray-300">
            Empowering open and accessible education for everyone.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h4 className="text-lg font-semibold mb-3 border-b pb-1 border-gray-400">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/courses" className="hover:underline">Courses</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center sm:text-left">
          <h4 className="text-lg font-semibold mb-3 border-b pb-1 border-gray-400">Contact</h4>
          <p className="text-sm flex items-center justify-center sm:justify-start gap-2">
            <FaEnvelope /> radheHari9922@gmail.com
          </p>
          <p className="text-sm flex items-center justify-center sm:justify-start gap-2 mt-2">
            <FaPhone /> +91 98745 63220
          </p>
        </div>

        {/* Social Media */}
        <div className="text-center sm:text-left">
          <h4 className="text-lg font-semibold mb-3 border-b pb-1 border-gray-400">Follow Us</h4>
          <div className="flex justify-center sm:justify-start gap-4 text-xl">
            <a href="#" className="hover:text-blue-300" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" className="hover:text-blue-300" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-300" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" className="hover:text-pink-400" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" className="hover:text-red-500" aria-label="YouTube"><FaYoutube /></a>
            <a href="#" className="hover:text-green-400" aria-label="Language"><FaGlobe /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-300 mt-10 border-t border-gray-600 pt-4">
        © 2025 Learn4All. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
