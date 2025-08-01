import React, { useState, useRef } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Course_card from "../component/Course_card";
import Filter from "../component/Filter";
import coursedata from "../data/videodata";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./courses.css";

function Courses() {
  const [courses, setCourses] = useState(coursedata);
  const scrollRefs = useRef({});
  // const isDark=false;
  const [isDark, setIsDark] = useState(false);

  function toggleDarkMode(dark) {
    setIsDark(dark);
    // isDark=dark;
    document.body.style.backgroundColor = !isDark ? "#121212" : "#f0f0f0";
    document.body.style.color = isDark ? "#121212" : "#f0f0f0";
  }

  const filterCourses = (className, subject) => {
    const filtered = coursedata.filter(course =>
      (className === "" || course.classLevel === className) &&
      (subject === "" || course.subject === subject)
    );
    setCourses(filtered);
  };

  const scroll = (classLevel, direction) => {
    const container = scrollRefs.current[classLevel];
    if (container) {
      container.scrollBy({ left: direction * 300, behavior: "smooth" });
    }
  };

  const groupedCourses = courses.reduce((acc, course) => {
    const { classLevel } = course;
    if (!acc[classLevel]) acc[classLevel] = [];
    acc[classLevel].push(course);
    return acc;
  }, {});

  return (
    <div className={` min-h-screen  overflow-x-hidden ${isDark ? "bg-[#121212]" : "bg-gray-100"}`}>
      <Navbar heading="Courses" darkmode={toggleDarkMode} />
      
      {/* Filter Section */}
      <section className="py-6 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Explore Video-Based Courses 🎓
          </motion.h1>
          <div className="mt-6">
            <Filter onclicked={filterCourses} />
          </div>
        </div>
      </section>

      {/* Class-wise Course Listings */}
      <section className="max-w-7xl mx-auto px-4 pb-16 space-y-12">
        {Object.keys(groupedCourses).map((classLevel, idx) => (
          <div key={idx} className="space-y-4">
            <h2 className="text-2xl font-semibold">Class {classLevel}</h2>
            <div className="relative overflow-visible z-0">
              <button
                onClick={() => scroll(classLevel, -1)}
                className={`absolute left-0 top-1/2 transform -translate-y-1/2 ${isDark ? "bg-[#2e254d] hover:bg-[#3d2f6c]" : "bg-[#d7d3e2] hover:bg-[#aba6bb]"}  p-2 rounded-full z-10`}
              >
              <FaChevronLeft />
              </button>

              <div
                ref={(el) => (scrollRefs.current[classLevel] = el)}
                className="flex gap-4 overflow-x-auto overflow-visible no-scrollbar px-10 scroll-smooth relative z-0"
              >
                {groupedCourses[classLevel].map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex-shrink-0 w-[250px]"
                  >
                    <Course_card {...course} />
                  </motion.div>
                ))}
              </div>

              <button
                onClick={() => scroll(classLevel, 1)}
                className={`absolute right-0 top-1/2 transform -translate-y-1/2 ${isDark ? "bg-[#2e254d] hover:bg-[#3d2f6c]" : "bg-[#d7d3e2] hover:bg-[#aba6bb]"} p-2 rounded-full z-10`}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        ))}

        {courses.length === 0 && (
          <div className="text-center mt-20 text-gray-400 text-lg">
            ⚠️ No courses found. Try another filter.
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}

export default Courses;
