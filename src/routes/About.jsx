import { Helmet } from "react-helmet";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  FaBookOpen,
  FaUsers,
  FaRocket,
  FaChalkboardTeacher,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4">
          Empowering Education for Everyone
        </h1>
        <p className="text-xl max-w-3xl mx-auto">
          Learn4All is a free, open-source platform created to make quality
          learning resources accessible to students from all walks of life.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 text-gray-800">
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-4">
              🎯 Our Mission
            </h2>
            <p className="text-lg leading-relaxed">
              Our mission is to break barriers in education by offering free and
              easy access to high-quality learning material. Whether you're in a
              remote village or a bustling city, Learn4All brings education to
              your fingertips.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-purple-700 mb-4">
              🔭 Our Vision
            </h2>
            <p className="text-lg leading-relaxed">
              We envision a world where learning has no boundaries — where every
              curious mind gets the opportunity to grow, build, and succeed
              regardless of background, language, or resources.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-blue-800">
            Why Choose Learn4All?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-6 shadow hover:shadow-lg rounded-xl bg-gray-50">
              <FaBookOpen className="text-4xl text-purple-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Free Courses</h3>
              <p className="text-sm text-gray-600">
                Access a wide range of learning materials across subjects
                without paying a single rupee.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 shadow hover:shadow-lg rounded-xl bg-gray-50">
              <FaChalkboardTeacher className="text-4xl text-purple-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Expert Content</h3>
              <p className="text-sm text-gray-600">
                Content curated and contributed by educators, developers, and
                learners like you.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 shadow hover:shadow-lg rounded-xl bg-gray-50">
              <FaRocket className="text-4xl text-purple-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Career Focused</h3>
              <p className="text-sm text-gray-600">
                Practical learning to help you get internships, crack
                interviews, and grow professionally.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 shadow hover:shadow-lg rounded-xl bg-gray-50">
              <FaUsers className="text-4xl text-purple-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Community Driven</h3>
              <p className="text-sm text-gray-600">
                Learn4All is built and supported by a passionate community of
                learners and developers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-100 to-blue-100 text-center">
        <h2 className="text-4xl font-bold mb-6 text-blue-700">
          Join Our Learning Revolution
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-700 mb-8">
          Be part of a growing network of learners, mentors, and contributors
          who believe in open and equal education for all.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300">
          Become a Contributor
        </button>
      </section>

      <Footer />
    </div>
  );
};
export default About;
