import js from '../../img/certificates/js.jpg';
import mern from '../../img/certificates/MERN.jpg';
import mrwr from '../../img/certificates/mrwr.jpg';
import rftb from '../../img/certificates/rftb.jpg';
import wdb from '../../img/certificates/wdb.jpg';

const Certificates = () => {
  const certificates = [
    {
      imgURL: js,
      title: 'JavaScript - Understanding The Weird Parts',
      courseContent:
        'Learning how JavaScript orks under the hood. This drastically improves my ability to debug problems. Objects and object literals, function expressions, prototypical inheritance, functional programming, scope chains, function constructors (plus new ES6 features), immediately invoked function expressions (IIFEs)',
      courseURL: 'https://www.udemy.com/course/understand-javascript/',
    },
    {
      imgURL: mern,
      title: 'MERN Front To Back',
      courseContent: `We built a fullstack web application using the MERN Stack. Built an extensive backend API with node.js and Express. Proteting routes/endpoints with JSON Web Tokens. Covered how to test an API's endpoints with Postman. Integrating React with the backend. Used Redux for application state management`,
      courseURL: 'https://www.udemy.com/course/mern-stack-front-to-back/',
    },
    {
      imgURL: mrwr,
      title: 'Modern React With Redux',
      courseContent:
        'mastering the fundamental features of React. Creating reusable components. Learning React v16 with Hooks. Extensive coverage of Redux and how to create Action Creators and Reducers',
      courseURL: 'https://www.udemy.com/course/react-redux/',
    },
    {
      imgURL: rftb,
      title: 'React Front To Back',
      courseContent:
        'The basics of React and what React is. ES6 Concepts. Using State and Props within an application. Class Based & Functional Components. JSX Syntax & Expressions. Managing State. Component Lifecycle. Context API basics. HTTP Requests. The basics of Redux and Redux Reducers & Actions',
      courseURL: 'https://www.udemy.com/course/modern-react-front-to-back/',
    },
    {
      imgURL: wdb,
      title: 'Web Developer Bootcamp',
      courseContent:
        'HTML5, CSS3, Flexbox, Responsive Design, JavaScript (ES6), Asynchronous JavaScript (Promises & async/await), Bootstrap 4, DOM manipulation, basics of NodeJS, NPM and developer best practices. This is the course best recommended for a person who wants to get into and start doing Web Development',
      courseURL: 'https://www.udemy.com/course/the-web-developer-bootcamp/',
    },
  ];

  const renderCertificates = () => {
    // return certificates.map(cert => (
    // ))
  };
  return (
    <section className="certification">
      <div className="certification__content w-full">
        <h2 className="heading-primary">Certifications</h2>
      </div>
    </section>
  );
};

export default Certificates;
