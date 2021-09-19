import HomePage from './components/layout/HomePage';
import Navigation from './components/layout/Navigation';
import Certificates from './components/layout/Certificates';
import Projects from './components/layout/Projects';
import Blogs from './components/layout/Blogs';
import Warp from './components/layout/Warp';
import Footer from './components/layout/Footer';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <Warp />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/certification" component={Certificates} />
          <Route path="/projects" component={Projects} />
          <Route path="/blogs" component={Blogs} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
