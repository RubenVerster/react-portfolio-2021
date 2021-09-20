import { Link } from 'react-router-dom';

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
                className="navigation__link"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                onClick={() => handleLinkClick()}
                className="navigation__link"
                to="/certification"
              >
                Certificates
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                onClick={() => handleLinkClick()}
                className="navigation__link"
                to="/projects"
              >
                Projects
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                onClick={() => handleLinkClick()}
                className="navigation__link"
                to="/blogs"
              >
                Blog Posts
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                onClick={() => handleLinkClick()}
                className="navigation__link"
                to="/admin"
              >
                Admin
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
