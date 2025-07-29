import Navbar from "../component/Navbar";
import Course_card from "../component/Course_card";
import Filter from "../component/Filter";
import Footer from "../component/Footer";
import courseData from "../component/courseData.json";

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
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Courses;
