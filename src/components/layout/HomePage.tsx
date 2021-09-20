import { GiTechnoHeart } from 'react-icons/gi';

const HomePage = () => {
  return (
    <header className="header">
      <div className="header__content w-full">
        <h2 className="greeting heading-primary">Hello There</h2>
        <div className="messages flex justify-between flex-col mx-auto">
          <div className="messages__single">
            <p className="messages-single-text">My name is Ruben Verster</p>
          </div>
          <div className="messages__single">
            <p className="messages-single-text">
              I've been a Web Developer since 2018
            </p>
          </div>
          <div className="messages__single">
            <p className="messages-single-text">
              Self-Taught through YouTube and Udemy
            </p>
          </div>
          <div className="messages__single">
            <p className="messages-single-text">
              I fucking <GiTechnoHeart className="inline" /> anything related to
              techology!
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomePage;
