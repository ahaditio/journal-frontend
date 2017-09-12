import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Menu extends Component{
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand active" to="#">Bookwide</Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/clients">Clients</Link></li>
                        <li><Link to="/contacts">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}