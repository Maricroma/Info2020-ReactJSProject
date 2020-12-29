import {Component} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state= {
      search: ""
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  handleSearchInput = (e) => {
    this.setState({search: e.target.value})
  }

  render(){

    const {handleSearch} = this.props
    const {search} = this.state

        return (
          <>
          <header>
            <Nav className="navbar navbar-expand-lg fixed-top">
              <div className="container-fluid">
                  <Link to="/">
                    <button className="btn btn-outline-secondary text-white">Home</button>
                  </Link>
                  <ul className="navbar-nav float-right"> 
                    <form className="d-flex">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={this.handleSearchInput}/>
                      <Link to={{pathname: `/search/${search}`}}>
                        <button className="btn btn-outline-secondary text-white" type="submit" onClick={()=>handleSearch(search)}>Search</button>
                      </Link>
                    </form>
                  </ul>
              </div>
            </Nav>
            
          </header>
          </>
        );
  }
}

export default NavBar;

const Nav = styled.nav`
    background-color: var(--mainDark);
    padding-top: 1rem;
    padding-bottom: 1rem;

`;