import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Navbar, Footer} from './components';
import Home from './pages/HomePage/Home';
import Aboutus from './pages/Aboutus/Aboutus';
import Prodviewer from './pages/Prodviewer/Prodviewer';
import SignUp from './pages/SignUp/Signup';
import Contactus from './pages/Contactus/Contactus';
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/aboutus" exact component={Aboutus} />
        <Route path="/prodviewer" exact component={Prodviewer} />
        <Route path="/contactus" exact component={Contactus} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
      <Footer />
      
    </Router>
  );
}

export default App;
