import { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home';
import Footer from './components/Footer';
import Description from './pages/Description'
import NavBar from './components/NavBar';


class App extends Component {
  
    render() {
      return (
        
        <BrowserRouter>
        <NavBar/>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/description/:handle' component={Description}/>
          </Switch>
          <Footer/>
        </BrowserRouter>
        
      );
    }
    
}

export default App;

