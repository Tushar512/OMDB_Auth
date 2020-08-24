import React from 'react';
import {Link} from 'react-router-dom';
export default function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/search" className="navbar-brand">
                {/* <img src="../../images/logo.png" alt="Logo" width="100"/> */}
                MovieSearch
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                    <Link to="/search" className="nav-link">Home</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/logout" className="nav-link">Log Out</Link>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}