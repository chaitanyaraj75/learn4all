import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function CourseDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl text-red-500">No course data available.</h2>
        <button onClick={() => navigate(-1)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Go Back</button>
      </div>
    );
  }

  const { title, subject, classLevel, description, thumbnail, videoLink } = state;

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar heading="Course Details" />

      <div className="max-w-4xl mx-auto p-8 bg-white mt-8 rounded shadow-md">
        <img src={thumbnail} alt={title} className="w-full h-64 object-cover rounded mb-6" />
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">Class: {classLevel}</p>
        <p className="text-gray-600">Subject: {subject}</p>
        <p className="mt-4 text-gray-700">{description}</p>

        <a
          href={videoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded"
        >
          ▶ Watch on YouTube
        </a>
      </div>

      <Footer />
    </div>
  );
}

export default CourseDetails;
