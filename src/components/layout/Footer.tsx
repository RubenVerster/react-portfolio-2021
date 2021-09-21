import { FaGithubAlt, FaYoutube, FaChess, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer bottom-0 fixed bg-gray-700 text-center">
      <div className="footer__content flex md:p-6 p-3 mx-auto container flex-row justify-between items-center">
        <div className="footer__content__social flex items-center justify-between">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/channel/UCZjyZSG5C9EwyC_llEE0GCw"
            className="footer__content__social-icon youtube "
          >
            <FaYoutube />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://chess.com/play/RubenVerster314"
            className="footer__content__social-icon chess "
            aria-label="hidden"
          >
            <FaChess />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://https://github.com/RubenVerster/"
            className="footer__content__social-icon github "
          >
            <FaGithubAlt />
          </a>
        </div>
        <div className="footer__content__copyright flex">
          <p>&copy; Ruben Verster 2021</p>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:info@rubenverster.com"
            className="footer__content__social-icon github "
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
