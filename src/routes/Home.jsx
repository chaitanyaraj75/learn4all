import { useState, useEffect } from "react";
import {
  FaBook,
  FaFlask,
  FaGlobe,
  FaBrain,
  FaStar,
  FaBookOpen
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import VideoSection from "../component/VideoSection";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import "./home.css";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";


const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
const features = [
  {
    title: "Free Education",
    icon: <FaBook size={24} />,
    desc: "Learn4All provides unrestricted access to all learning materials — completely free. No subscriptions, no hidden charges — just pure, quality education for everyone.",
  },
  {
    title: "Visual Learning",
    icon: <FaFlask size={24} />,
    desc: "We emphasize video-first content enriched with visual aids, infographics, and animations to make complex concepts more intuitive and engaging for all learners.",
  },
  {
    title: "Accessible Anywhere",
    icon: <FaGlobe size={24} />,
    desc: "Whether you’re on a laptop, tablet, or mobile device, Learn4All is built to offer seamless learning experiences from any location and at any time.",
  },
  {
    title: "Subject-Wise Resources",
    icon: <FaBrain size={24} />,
    desc: "All courses and videos are thoughtfully categorized by subject and grade, making it easy to navigate and find exactly what you need to master a topic.",
  },
];


  const testimonials = [
    {
      name: "Aman Verma",
      feedback:
        "This platform helped me revise science basics in a fun way. Highly recommended for kids!",
    },
    {
      name: "Neha Gupta",
      feedback:
        "Very easy to understand. Visual lessons made learning enjoyable and engaging.",
    },
    {
      name: "Ravi Singh",
      feedback:
        "This site is really helpful. Loved the course structure and ease of access!",
    },
  ];

  const courses = [
    { title: "Math for Beginners", subject: "Math", level: "Class 6" },
    { title: "Introduction to Science", subject: "Science", level: "Class 6" },
    { title: "World Geography", subject: "Social Science", level: "Class 7" },
  ];

  const heroImages = [
  "https://plus.unsplash.com/premium_vector-1750861667305-384f606ad1e5?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000", // student with book
  "https://plus.unsplash.com/premium_vector-1682305461721-c89763c76d6b?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000", // online class
  "https://plus.unsplash.com/premium_vector-1682301123418-edb39ebbf136?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8&ixlib=rb-4.0.3&q=60&w=3000", // teacher on screen
  "https://plus.unsplash.com/premium_vector-1682301589201-cd3295024b06?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8&ixlib=rb-4.0.3&q=60&w=3000", // group study
];
  return (
    <div
      className={`min-h-screen font-sans ${
        isDarkMode ? "bg-[#0D1117] text-white" : "bg-white text-black"
      }`}
    >
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
       <section className="relative flex flex-col md:flex-row items-center justify-between px-10 py-12 md:py-0 h-[75vh] overflow-hidden bg-[#0D1117] text-white">
      <div className="z-10 max-w-xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Empowering Every Mind to Learn Freely
        </h2>
        <p className="text-gray-300 mb-6 text-lg">
          Access visual, interactive, and inclusive education anytime, anywhere.
        </p>
        <div className="flex gap-4">
          <Link
            to="/courses"
            className="bg-gradient-to-r from-green-400 to-blue-500 px-6 py-3 rounded text-white font-medium hover:opacity-90"
          >
            Explore Courses
          </Link>
          <button className="px-6 py-3 border border-gray-300 rounded hover:bg-gray-800 transition">
            How It Works
          </button>
        </div>
      </div>

      {/* Swiper Slider for Hero Image */}
      <div className="absolute top-5 right-0 w-full md:w-1/2 h-[70vh] p-4 border-radius-lg overflow-hidden rounded-lg shadow-lg">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          className="w-full h-full rounded-lg shadow-lg overflow-hidden"
        >
          {heroImages.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={`${img}?auto=format&fit=crop&w=1200&q=80`}
                alt={`slide-${i}`}
                className="object-cover w-full h-full opacity-90"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>
    </section>

      {/* Why Learn4All */}
     <section
  className={`text-center px-6 py-12 transition-colors duration-500 ${
    isDarkMode ? "bg-[#0D1117] text-white" : "bg-white text-black"
  }`}
>
  <h3 className="text-3xl font-bold mb-12 tracking-wide">Why Learn4All</h3>

  <div className="grid md:grid-cols-4 gap-6">
    {features.map((feat, i) => (
      <div
        key={i}
        className="group bg-[#1E293B] hover:bg-[#273549] text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
      >
        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-white text-[#1E293B] group-hover:scale-110 transition-transform duration-300 mx-auto">
          {feat.icon}
        </div>
        <h4 className="text-xl font-semibold mb-3 tracking-wide">{feat.title}</h4>
        <p className="text-gray-300 text-sm leading-relaxed">{feat.desc}</p>
      </div>
    ))}
  </div>
</section>


      {/* Course Summary Swiper */}


    <section className="px-6 py-12">
      <motion.h3
        className="text-2xl font-semibold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.6 } }}
      >
        Course Summary
      </motion.h3>

      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className="pb-10"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
          <SwiperSlide key={item} className="flex justify-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.05, rotate: 0.5 }}
              className="group bg-[#1E293B] p-4 w-70 rounded-xl shadow-md h-full flex flex-col items-start justify-between transition-all duration-300 hover:shadow-2xl hover:bg-[#1f2937]"
            >
              <motion.div whileHover={{ rotate: 15 }} className="mb-4">
                <FaBookOpen className="text-4xl text-green-400" />
              </motion.div>
              <motion.h4
                whileHover={{ color: "#22c55e" }}
                className="text-lg font-semibold text-white"
              >
                Maths - Class {item}
              </motion.h4>
              <motion.p
                whileHover={{ opacity: 0.9 }}
                className="text-sm text-gray-400"
              >
                Video lessons and PDFs
              </motion.p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .swiper-pagination {
          position: relative;
          margin-top: 1rem;
          text-align: center;
        }

        .swiper-pagination-bullet {
          background-color: #94a3b8;
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background-color: #22c55e;
        }
      `}</style>
    </section>





      {/* Video Section */}
      <VideoSection />

      {/* Courses */}
      <section className="px-6 py-10">
        <h3 className="text-4xl font-bold mb-6 text-left">Top Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <div
              key={i}
              className="bg-gray-100 dark:bg-gray-800 p-4 shadow rounded-xl hover:shadow-lg transition"
            >
              <h4 className="text-lg font-semibold">{course.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {course.subject}
              </p>
              <p className="text-sm text-green-600 font-medium mt-1">
                {course.level}
              </p>
              <button className="mt-4 text-sm px-4 py-2 bg-green-700 text-white rounded-full hover:bg-green-600">
                Enroll
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Feedback Section */}
      <section className="px-6 py-10 bg-gray-200 dark:bg-gray-900">
        <h3 className="text-2xl font-bold mb-6 text-center">
          What Our Learners Say
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="text-yellow-500 flex mb-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-sm mb-2 italic">"{t.feedback}"</p>
              <p className="font-semibold">- {t.name}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Contact Section */}
      <section className="px-6 py-10 text-center bg-white dark:bg-gray-900">
        <h3 className="text-3xl font-bold mb-4">📬 Contact With Us</h3>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          Have questions or want updates? Drop us a message or subscribe to our
          newsletter.
        </p>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Full Name"
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-green-700 text-white rounded-full hover:bg-green-600 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

      
      <Footer />
    </div>
  );
};

export default Home;


