import React from "react";
import { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Course_card from "../component/Course_card";
import Filter from "../component/Filter";
import { motion } from "framer-motion";
import courseData from "../data/courseData.js";
import coursedata from "../data/videodata.js";

function Courses() {
  const [courses, setCourses] = React.useState(coursedata);
  function filterCourses(className, subject) {
    const filteredCourses = coursedata.filter((course) => {
      return (
        (className === "" || course.classLevel === className) &&
        (subject === "" || course.subject === subject)
      );
    });
    console.log(className,subject);
    setCourses(filteredCourses);
  }

  return (
    <div className="overflow-x-hidden bg-gray-100 min-h-screen">
      <Navbar heading="Courses" />

      {/* Heading Section */}
      <div className="text-center my-8">
        <h1 className="text-blue-600 text-3xl md:text-4xl font-extrabold tracking-tight">
          📚 Available Courses
        </h1>
      </div>

      {/* Filter Component */}
      <div className="flex justify-center mb-6">
        <Filter 
          onclicked= {filterCourses}
        />
      </div>

      {/* Course Cards */}
      <div className="flex flex-wrap justify-center gap-6 px-4 pb-10">
        {courses.map((course, index) => (
          <motion.div
            key={course.id || course.videoId || index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Course_card {...course} />
          </motion.div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Courses;
