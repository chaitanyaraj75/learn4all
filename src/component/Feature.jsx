import { FaBookOpen, FaGlobe, FaVideo, FaLayerGroup } from 'react-icons/fa';

const features = [
  { icon: <FaBookOpen size={32} />, text: "Free Education" },
  { icon: <FaGlobe size={32} />, text: "Accessible Anywhere" },
  { icon: <FaVideo size={32} />, text: "Visual Learning" },
  { icon: <FaLayerGroup size={32} />, text: "Subject-Wise Resources" },
];

export default function Feature() {
  return (
    <div className="flex justify-around items-center gap-4 py-8 flex-wrap">
      {features.map((item, index) => (
        <div key={index} className="flex flex-col items-center text-center px-4">
          <div className="text-green-700 mb-2">{item.icon}</div>
          <p className="text-md font-medium">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
