import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function NavBar(props) {
return (
<>
<nav
className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
style={{ fontWeight: 700 }}
>
<div className="container-fluid">
    <Link className="navbar-brand" to="/">
        {props.title}
    </Link>
    <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to="/home">
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about"> {props.aboutText}</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contactus"> Contact Us</Link>         
            </li>
        </ul>
       
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ marginRight: 10 }}>
            <input
                className="form-check-input"
                type="checkbox"
                onClick={()=>{props.toggleMode('null')}}
                role="switch"
                id="flexSwitchCheckDefault"
                style={{cursor:"pointer"}}
            />
            <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
            >
                Dark Mode
            </label>
        </div>
    </div>
</div>
</nav>
</>
);
}
NavBar.propTypes = {
title: PropTypes.string,
AboutText: PropTypes.string
};

// NavBar.defaultProps = {
//     title: 'Set title here',
//     AboutText: 'Set AboutText here'
// }
