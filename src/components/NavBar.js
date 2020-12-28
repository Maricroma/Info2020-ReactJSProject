import React from 'react';
import { Link } from 'react-router-dom';


function NavBar() {
        return (
          <>
          <header>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark" style={{padding: '1rem'}}>
              <div className="container-fluid">
                  <Link to="/">
                    <button className="btn btn-outline-secondary text-white">Home</button>
                  </Link>
                  <ul className="navbar-nav float-right">
                    <form className="d-flex">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                      <button className="btn btn-outline-secondary text-white" type="submit">Search</button>
                    </form>
                  </ul>
              </div>
            </nav>
            
          </header>
          </>
        );
}

export default NavBar;
