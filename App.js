import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './components/pages/About';
import Home from './components/pages/Home';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import Contact from './components/pages/Contact';

function App() {

  return (
    <>

      <Router>
        <Header/>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About} exact/>
            <Route path="/contact" component={Contact} exact></Route>
          </Switch>
        <Footer/>
      </Router>

    </>  
  );
}

export default App;
