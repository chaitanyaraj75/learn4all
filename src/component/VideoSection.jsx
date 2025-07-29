import React, { useState, useEffect } from "react";
import videoSectionData from "../data/videodata";
import { PlayCircle } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import courseData from "../data/courseData";

const VideoSection = () => {
  const [currentVideo, setCurrentVideo] = useState(videoSectionData[0]);
  const [completed, setCompleted] = useState(new Set());
  const [subjectFilter, setSubjectFilter] = useState("");
  const [classFilter, setClassFilter] = useState("");

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("lastWatched");
    if (saved) {
      const found = videoSectionData.find(
        (v) => v.videoId === JSON.parse(saved)?.videoId
      );
      if (found) setCurrentVideo(found);
    }
    const stored = JSON.parse(localStorage.getItem("completed")) || [];
    setCompleted(new Set(stored));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("lastWatched", JSON.stringify(currentVideo));
    const updated = new Set(completed).add(currentVideo.videoId);
    setCompleted(updated);
    localStorage.setItem("completed", JSON.stringify([...updated]));
  }, [currentVideo]);

  const filteredData = videoSectionData.filter((video) => {
    return (
      (subjectFilter === "" || video.subject === subjectFilter) &&
      (classFilter === "" || video.classLevel === classFilter)
    );
  });

  return (
    <section className="px-6 py-10 bg-gray-900 text-white min-h-screen">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        📚 Course Summary
      </h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select
          className="bg-gray-800 px-4 py-2 rounded text-white"
          onChange={(e) => setSubjectFilter(e.target.value)}
          value={subjectFilter}
        >
          <option value="">All Subjects</option>
          <option value="Mathematics">Mathematics</option>
          <option value="English">English</option>
          <option value="Science">Science</option>
          <option value="Hindi">Hindi</option>
          <option value="Social Science">Social Science</option>
          <option value="EVS">EVS</option>
          {/* <option value="Mathematics">Mathematics</option>
          <option value="English">English</option> */}
        </select>

        <select
          className="bg-gray-800 px-4 py-2 rounded text-white"
          onChange={(e) => setClassFilter(e.target.value)}
          value={classFilter}
        >
          <option value="">All Classes</option>
          <option value="1">Class 1</option>
          <option value="2">Class 2</option>
          <option value="3">Class 3</option>
          <option value="4">Class 4</option>
          <option value="5">Class 5</option>
          <option value="6">Class 6</option>
          <option value="7">Class 7</option>
          <option value="8">Class 8</option>
          <option value="9">Class 9</option>
          <option value="10">Class 0</option>
        </select>

        <Link to="/courses" className="ml-auto">
          <button className="px-6 py-2 bg-green-600 hover:bg-green-500 text-white rounded-full">
            Browse All Courses
          </button>
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Playlist */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/3 space-y-3 max-h-[70vh] overflow-y-scroll scrollbar-hide"
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE 10+
          }}
        >
          {filteredData.map((video, index) => (
            <button
              key={index}
              onClick={() => setCurrentVideo(video)}
              className={`w-full text-left flex items-start gap-3 px-4 py-3 rounded-lg transition duration-300 transform ${
                currentVideo.videoId === video.videoId
                  ? "bg-blue-700 text-white font-semibold"
                  : "bg-gray-800 hover:border-red-500 border border-transparent text-gray-300"
              }`}
            >
              <PlayCircle size={20} />
              <div className="flex-1">
                <h3 className="text-base">{video.title}</h3>
                <p className="text-sm text-gray-400">
                  {video.subject} • Class {video.classLevel}
                </p>
              </div>
              {completed.has(video.videoId) && (
                <span className="text-green-400 text-xs">✓</span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Video Player */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl mx-auto px-4"
        >
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src={`https://www.youtube.com/embed/${currentVideo.videoId}/?autoplay=1&controls=1&mute=1`}
              title="Shapes and Space"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{
                borderRadius: "12px",
                height: "70vh",
                boxShadow: "0 4px 40px rgba(0, 0, 0, 0.6)",
              }}
            ></iframe>
          </div>
          <h3 className="text-2xl font-semibold mt-6">{currentVideo.title}</h3>
          <p className="text-sm text-gray-400 mt-1">
            {currentVideo.subject} • Class {currentVideo.classLevel}
          </p>
          <p className="mt-4 text-gray-300">{currentVideo.description}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
