import { FaBookOpen, FaGlobe, FaVideo, FaLayerGroup } from 'react-icons/fa';

const features = [
  { icon: <FaBookOpen size={36} />, text: "Free Education" },
  { icon: <FaGlobe size={36} />, text: "Accessible Anywhere" },
  { icon: <FaVideo size={36} />, text: "Visual Learning" },
  { icon: <FaLayerGroup size={36} />, text: "Subject-Wise Resources" },
];

export default function Feature() {
  return (
    <div className="flex flex-wrap justify-center items-start gap-6 py-12">
      {features.map((item, index) => (
        <div
          key={index}
          className="group flex flex-col items-center text-center bg-white shadow-xl p-6 rounded-2xl w-60 hover:shadow-2xl hover:scale-105 transition-transform duration-300"
        >
          <div className="text-blue-800 mb-3">
            {item.icon}
          </div>
          <p className="text-lg font-semibold text-gray-700 group-hover:text-blue-700 transition-colors duration-300">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}