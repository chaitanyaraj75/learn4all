// Final Version: Enhanced Contact Page with
// ✅ Light-Themed Left Panel
// ✅ Form with Image on Left
// ✅ Contact Info Section Retained
// ✅ Extra Heading Above Form + Cute Message Inside Form

import { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Feature from "../component/Feature";
import { FaUser, FaEnvelope, FaCommentDots, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [popup, setPopup] = useState({ show: false, message: "", type: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.email.trim() !== "") {
            setPopup({ show: true, message: "Message sent successfully!", type: "success" });
        } else {
            setPopup({ show: true, message: "Email is required!", type: "error" });
        }
        setTimeout(() => setPopup({ show: false, message: "", type: "" }), 3000);
    };

    return (
        <div className="min-h-screen bg-white text-gray-800">
            <Navbar heading="Contact" />

            {/* Popup */}
            {popup.show && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`fixed top-6 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg text-white shadow-lg z-50 ${popup.type === "success" ? "bg-green-600" : "bg-red-600"
                        }`}
                >
                    {popup.message}
                </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left Panel with Image and Info */}
                <div className="relative flex flex-col justify-center bg-blue-100 text-gray-800 p-10 space-y-6">
                    <div className="text-center">
                        <TypeAnimation
                            sequence={["Let’s Talk...", 1500, "We're Listening...", 1500]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="text-3xl font-bold"
                        />
                        <p className="mt-4 text-lg">We value your feedback and ideas </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="flex justify-center"
                    >
                        <img
                            src="http://jdmv.org.in/assets/img/contact.png"
                            alt="Contact Illustration"
                            className="w-full max-w-xs drop-shadow-xl"
                        />
                    </motion.div>

                    {/* Contact Info */}
                    <div className="text-lg space-y-3">
                        <div className="flex items-center space-x-3 bg-white p-3 rounded-md shadow">
                            <span className="text-xl"><FaMapMarkerAlt /></span>
                            <p>123 Learning St, Edu City, World</p>
                        </div>
                        <div className="flex items-center space-x-3 bg-white p-3 rounded-md shadow">
                            <span className="text-xl"><FaPhoneAlt /></span>
                            <p className="hover:text-blue-600 cursor-pointer">122-455-7390</p>
                        </div>
                        <div className="flex items-center space-x-3 bg-white p-3 rounded-md shadow">
                            <span className="text-xl"><IoIosMail />                            </span>
                            <p className="hover:text-blue-600 cursor-pointer">info@email.com</p>
                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <div className="relative flex flex-col items-center justify-center py-2 px-4">
                    <h1 className="text-6xl font-bold text-blue-900 mb-16">Contact Us</h1>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/30 backdrop-blur-xl p-8 rounded-xl shadow-2xl border border-white/20 w-full max-w-md z-10"
                    >
                        <h2 className="text-xl font-semibold text-blue-700 text-center mb-2">We are here to help you </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="flex items-center border border-gray-300 rounded px-3 py-2 bg-white">
                                <FaUser className="text-gray-400 mr-2" />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full focus:outline-none"
                                    required
                                />
                            </div>
                            <div className="flex items-center border border-gray-300 rounded px-3 py-2 bg-white">
                                <FaEnvelope className="text-gray-400 mr-2" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full focus:outline-none"
                                    required
                                />
                            </div>
                            <div className="flex items-start border border-gray-300 rounded px-3 py-2 bg-white">
                                <FaCommentDots className="text-gray-400 mt-2 mr-2" />
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full focus:outline-none resize-none"
                                    required
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition"
                                >
                                    Submit
                                </motion.button>
                            </div>
                            
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Features & Footer */}
            <div className="max-w-6xl mx-auto px-4 py-10">
                <Feature />
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
