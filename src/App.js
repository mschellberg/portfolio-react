import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/home';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import Resume from './components/resume';

function App() {
  return (
<Router>
  <Switch>
  <Route exact path="/" component = { Home }/>
  <Route path="/portfolio" component = { Portfolio }/>
  <Route path="/resume" component = { Resume }/>
  <Route path="/contact" component = { Contact }/>
  </Switch>
</Router>
  );
}

export default App;
