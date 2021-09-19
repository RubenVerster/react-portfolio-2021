import HomePage from './components/layout/HomePage';
import NavBar from './components/layout/NavBar';
import Warp from './components/layout/Warp';
import Footer from './components/layout/Footer';
import Test from './components/layout/Test';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        {/* <Warp /> */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/test" component={Test} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
