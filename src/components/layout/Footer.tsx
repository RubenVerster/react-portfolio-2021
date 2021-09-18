import { FaGithubAlt, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer container bg-gray-700 text-center p-6 w-auto">
      <div className="footer__content flex flex-col md:flex-row justify-between items-center">
        <div className="footer__content__social flex items-center justify-between">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://https://github.com/RubenVerster/"
            className="footer__content__social-icon"
          >
            <FaGithubAlt />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/channel/UCZjyZSG5C9EwyC_llEE0GCw"
            className="footer__content__social-icon"
          >
            <FaYoutube />
          </a>
        </div>
        <div className="footer__content__copyright">
          &copy; Ruben Verster 2021
        </div>
      </div>
    </footer>
  );
};

export default Footer;
