import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialLinks = () => {
  return (
    <div>
      <h4 className="font-semibold mb-2 text-white">Social</h4>
      <div className="flex space-x-4 text-white text-xl">
        <Link
          to="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-300"
        >
          <FaLinkedin />
        </Link>
        <Link
          to="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-300"
        >
          <FaGithub />
        </Link>
        <Link
          to="https://twitter.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-300"
        >
          <FaTwitter />
        </Link>
        <Link
          to="https://www.instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-300"
        >
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;
