import { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home';
import Footer from './components/Footer';
import Description from './pages/Description'
import NavBar from './components/NavBar';
import SearchCharacter from './components/SearchCharacter';


class App extends Component {

  state= {
    searchTag: ''
  }

  handleSearch= (search) => {
    this.setState({searchTag: search})
  }
  
    render() {

      const searchTag = this.state.searchTag;

      return (
        <div>
          <BrowserRouter>
            <NavBar handleSearch= {this.handleSearch}/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/description/:handle' component={Description}/>
                <Route exact path='/search/:handle'>
                  <SearchCharacter searchTag= {searchTag}/>
                </Route>
            </Switch>
            <Footer/>
          </BrowserRouter>
        </div>
        
      );
    }
    
}

export default App;

