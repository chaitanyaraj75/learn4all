import { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Feature from "../component/Feature";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [popup, setPopup] = useState({
        show: false,
        message: "",
        type: "", // 'success' or 'error'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.email.trim() !== "") {
            setPopup({ show: true, message: "Message sent successfully!", type: "success" });
        } else {
            setPopup({ show: true, message: "Failed to send. Email is required.", type: "error" });
        }

        // Hide popup after 3 seconds
        setTimeout(() => {
            setPopup({ show: false, message: "", type: "" });
        }, 3000);
    };

    return (
        <div className="text-gray-800 bg-white min-h-screen ">
            {/* Navbar */}
            <Navbar />

            {/* Contact Section */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    {/* Image (Left) */}
                    <div>
                        <img
                            src="http://jdmv.org.in/assets/img/contact.png"
                            alt="Contact Illustration"
                            className="w-full max-w-sm"
                        />
                    </div>

                    {/* Form (Right) */}
                    <div className="relative">

                        {/* Top Popup Message */}
                        {popup.show && (
                            <div
                                className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded shadow-md text-white z-50 ${popup.type === "success" ? "bg-green-500" : "bg-red-500"
                                    }`}
                            >
                                {popup.message}
                            </div>
                        )}

                        {/* Form */}
                        <div className="flex justify-center items-center relative min-h-[80vh]">
                            <div className="absolute w-[500px] h-[500px] bg-gray-100 rounded-full z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

                            <div className="relative z-10 w-full max-w-lg px-4">
                                <h2 className="text-5xl font-bold text-blue-900 mb-4 text-center">Get in Touch</h2>
                                <p className="mb-6 text-gray-600 text-center">We'd love to hear from you! Fill out the form and we'll get to you soon.</p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-0"
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-0"
                                        required
                                    />
                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-0"
                                        required
                                    />
                                    <div className="flex justify-center">
                                        <button
                                            type="submit"
                                            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Contact Info Section */}
                <div className="mt-16">
                    <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center">Contact Information</h3>
                    <div className="space-y-4 text-lg max-w-2xl mx-auto">
                        {/* Address  */}
                        <div className="flex items-center space-x-3 hover:bg-blue-50 p-3 rounded-md transition cursor-pointer">
                            <span className="text-xl">📍</span>
                            <p>123 Learning St, Edu City, World</p>
                        </div>

                        {/* Mobile Number*/}
                        <div className="flex items-center space-x-3 hover:bg-blue-50 p-3 rounded-md transition cursor-pointer">
                            <span className="text-xl">📞</span>
                            <p className="transition-colors duration-200 hover:text-blue-600">
                                +1 199-859-4850
                            </p>
                        </div>

                        {/* Email */}
                        <div className="flex items-center space-x-3 hover:bg-blue-50 p-3 rounded-md transition cursor-pointer">
                            <span className="text-xl">📧</span>
                            <p className="transition-colors duration-200 hover:text-blue-600">
                                info@etcrwall.com
                            </p>
                        </div>
                    </div>



                    {/* Feature Section */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 max-w-4xl mx-auto">
                        <Feature icon="📞" label="24/7 Support" />
                        <Feature icon="⚡" label="Quick Response" />
                        <Feature icon="🌍" label="Worldwide Reach" />
                        <Feature icon="🛠️" label="Tech Help Available" />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer/>
        </div>
    );
};



export default Contact;
