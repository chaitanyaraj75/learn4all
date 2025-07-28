<<<<<<< HEAD
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Course_card from '../component/Course_card';
import Filter from '../component/Filter';
import { motion } from 'framer-motion';
import courseData from '../data/courses';

function Courses() {
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
        <Filter />
      </div>

      {/* Course Cards */}
      <div className="flex flex-wrap justify-center gap-6 px-4 pb-10">
        {courseData.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Course_card
              title={course.title}
              classLevel={course.classLevel}
              subject={course.subject}
              description={course.description}
              image={course.image}
            />
          </motion.div>
=======
import Navbar from "../component/Navbar";
import Course_card from "../component/Course_card";
import Filter from "../component/Filter";
import Footer from "../component/Footer";
import courseData from "../data/courseData";

function Courses() {
  return (
    <div className="overflow-y-hidden courses-page bg-gray-100 min-h-screen">
      <Navbar heading="Courses" />
      <div className="courses flex flex-col items-center justify-center">
        <h1 className="text-blue-600 text-3xl md:text-4xl font-extrabold text-center mb-6 tracking-tight">
          📚 Available Courses
        </h1>
        <Filter />
      </div>

      <div className="justify-center m-3.5 space-x-3 space-y-3 flex flex-wrap course-cards">
        {courseData.map((course) => (
          <Course_card
            key={course.videoId}
            {...course}
          />
>>>>>>> 8fc0d4c21afe70bb4654f9cd58f47d567477aba1
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Courses;
