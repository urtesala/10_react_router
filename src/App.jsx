import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/nav/Nav';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import './reset.css';

function App() {
  return (
    <div className='App container'>
      <Nav />
      <Switch>
        <Route path={'/about'}>
          <About />
        </Route>
        <Route path={'/contacts'}>
          <Contact />
        </Route>
        <Route path={'/'}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
