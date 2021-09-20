import { Link } from 'react-router-dom';
import {
  FaBlog,
  FaUsersCog,
  FaCertificate,
  FaTools,
  FaHome,
} from 'react-icons/fa';

const Navigation = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const checkbox = document.getElementById('navi-toggle');
    checkbox?.click();
  };

  return (
    <div>
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon"></span>
        </label>

        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link
                onClick={() => handleLinkClick()}
                className="navigation__link mx-auto"
                to="/"
              >
                Home
                <FaHome />
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                onClick={() => handleLinkClick()}
                className="navigation__link mx-auto"
                to="/certification"
              >
                Certificates
                <FaCertificate />
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                onClick={() => handleLinkClick()}
                className="navigation__link mx-auto"
                to="/projects"
              >
                Projects
                <FaTools />
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                onClick={() => handleLinkClick()}
                className="navigation__link mx-auto"
                to="/blogs"
              >
                Blog Posts
                <FaBlog />
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                onClick={() => handleLinkClick()}
                className="navigation__link mx-auto"
                to="/admin"
              >
                Admin
                <FaUsersCog />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
