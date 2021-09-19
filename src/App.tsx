import HomePage from './components/layout/HomePage';
import NavBar from './components/layout/NavBar';
import Certificates from './components/layout/Certificates';
import Projects from './components/layout/Projects';
import Warp from './components/layout/Warp';
import Footer from './components/layout/Footer';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        {/* <Warp /> */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/certification" component={Certificates} />
          <Route path="/projects" component={Projects} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
