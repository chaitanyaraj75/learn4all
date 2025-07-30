import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

function Course_card({
  title,
  subject,
  classLevel,
  description,
  image,
  thumbnail,
  videoId,
  videoLink,
  rating = 4.5,
}) {
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
        videoId,
      },
    });
  };

  return (
   <motion.div
  onClick={handleClick}
  whileHover={{ scale: 1.06, zIndex: 50 }}
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ type: "spring", stiffness: 120 }}
  className="cursor-pointer w-full sm:w-[260px] md:w-[240px] rounded-2xl shadow-xl bg-gradient-to-br from-[#1e1e2f] to-[#2c2c3e] text-white hover:shadow-purple-400/30 flex flex-col justify-between h-[360px] z-30"
>

      <div>
        {/* Thumbnail */}
        <div className="relative">
          <div className="rounded-t-2xl overflow-hidden border-4 border-purple-500 shadow-md">
            <img
              src={thumbnail || image}
              alt={title}
              className="w-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="absolute top-2 left-2 bg-yellow-300 text-black text-xs px-2 py-[2px] rounded-full font-bold shadow-sm">
            🎒 Class {classLevel}
          </div>
        </div>

        <div className="p-3 space-y-1">
          <h2 className="text-sm font-semibold text-pink-400 leading-tight line-clamp-1">
            📚 {title}
          </h2>

          {/* Description */}
          <p className="text-xs text-gray-300 line-clamp-1">
            {description}
          </p>

          {/* Subject & Class */}
          <div className="flex justify-between text-[10px] text-purple-300">
            <span>📖 {subject}</span>
            <span>🎓 Level {classLevel}</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-[2px] text-yellow-400 text-xs mt-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < Math.floor(rating) ? "fill-current" : "opacity-30"}
              />
            ))}
            <span className="text-[10px] text-gray-400 ml-1">({rating})</span>
          </div>
        </div>
      </div>

      {/* Button always at bottom */}
      <div className="px-3 pb-3">
        <button className="w-full bg-pink-500 hover:bg-pink-600 text-white text-xs font-semibold py-1.5 px-3 rounded-full transition-transform hover:scale-105 active:scale-95">
          ▶️ Watch
        </button>
      </div>
    </motion.div>
  );
}

export default Course_card;
