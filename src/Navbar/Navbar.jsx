import React from 'react'
import { RiMenu3Line } from "react-icons/ri";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="/images/logo.svg" />
          </a>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <RiMenu3Line className='fs-3'/>
            {/* <span className="navbar-toggler-icon"></span> */}
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link
                  className="nav-link active fw-medium"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link active fw-medium"
                  aria-current="page"
                  to="/search"
                >
                 Search 
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
