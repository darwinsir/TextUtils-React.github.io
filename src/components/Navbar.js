import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.siteName}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">{props.navItem1}</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Usage Guide
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li>
                    <hr className="dropdown-divider"/>
                  </li>
                  <li>

                  <a className="dropdown-item" href="/">Something else here</a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
  <input className="form-check-input" type="checkbox" role='switch' aria-checked="true" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'}Mode</label>
</div>
          </div>
        </div>
      </nav>
    </div>
  )
}

            // <form className="d-flex" role="search">
            //   <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            //   <button className="btn btnnpm-primary" type="submit">Search</button>
            // </form>
Navbar.propTypes = {
  siteName: PropTypes.string.isRequired,
  navItem1: PropTypes.string,
  navItem2: PropTypes.string
}

Navbar.defaultProps = {
  siteName: 'siteName',
  navItem1: 'naveItem1',
  navItem2: 'naveItem2'
}
              // <li className="nav-item">
              //   <Link className="nav-link" to="/about">{props.navItem2}</Link>
              // </li>