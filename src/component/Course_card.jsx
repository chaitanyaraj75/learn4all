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
        </button>
      </div>
    </div>
  );
}

export default Course_card;
