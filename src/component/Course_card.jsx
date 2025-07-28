<<<<<<< HEAD
function Course_card({ title, classLevel, subject, description, image }) {
  return (
    <div className="w-full sm:w-[280px] md:w-[250px] rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition duration-300">
      <img
        className="w-full h-36 object-cover"
        src={image}
        alt={title}
      />
      <div className="p-3">
        <h2 className="text-lg font-semibold text-gray-800 mb-1">{title}</h2>
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>Class: {classLevel}</span>
          <span>Subject: {subject}</span>
        </div>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <button
          className="cursor-pointer w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded-lg transform transition duration-300 hover:scale-105 active:scale-95"
          onClick={() => alert("Watch Now clicked!")}
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M3 22v-20l18 10-18 10z" />
          </svg>
          Watch Now
=======
import { useNavigate } from 'react-router-dom';

function Course_card({ title, subject, classLevel, description, thumbnail, videoId, videoLink }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/course/${videoId}`, {
      state: {
        title,
        subject,
        classLevel,
        description,
        thumbnail,
        videoLink,
        videoId
      },
    });
  };

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white cursor-pointer" onClick={handleClick}>
      <img className="w-full h-48 object-cover" src={thumbnail} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">Class: {classLevel} | Subject: {subject}</p>
        <p className="text-sm mt-1">{description}</p>
        <button className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded flex items-center">
          ▶ Watch Now
>>>>>>> 8fc0d4c21afe70bb4654f9cd58f47d567477aba1
        </button>
      </div>
    </div>
  );
}

export default Course_card;
