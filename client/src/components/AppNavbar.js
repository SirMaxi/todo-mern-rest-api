import React, { Component } from 'react';
import { Link } from 'react-router-dom';
    

class AppNavbar extends Component {

    render(){
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-5">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            Shopping List
                        </Link>
                            <div className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="https://mywebsite-24f67.web.app/"> My Portfolio</a>
                                </li>
                            </div>
                        
                    </div>
                </nav>
            </div>
        )
    }
}




export default AppNavbar;