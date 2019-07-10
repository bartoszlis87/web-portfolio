import React from 'react';
import './Header.scss';
import logo from '../images/logo.png';


function Header() {
    return (
        <header className="page-header">
            <div className="container">
                    <img src={logo} className="page-logo" className="page-logo-img" alt="Bartosz Lis"/>


                <nav className="page-nav">
                    <ul className="page-nav-list">
                        <li><a href="#start">HOME PAGE</a></li>
                        <li><a href="#ourCourses">ABOUT</a></li>
                        <li><a href="#aboutUs">PORTFOLIO</a></li>
                        <li><a href="#mainContact">CONTACT</a></li>
                    </ul>
                </nav>

            </div>
        </header>
    );
}


export default Header;