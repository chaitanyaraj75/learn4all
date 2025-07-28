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
        </button>
      </div>
    </div>
  );
}

export default Course_card;
