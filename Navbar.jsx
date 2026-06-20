import React from 'react'
import bLOGO from '../assets/logoBiryani.jpeg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
          <img src={bLOGO} alt="Bootstrap" width="100" height="30"></img>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/variety">Variety</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link " to='/about-us' >About US</Link>
        </li>
           <li className="nav-item">
          <Link className="nav-link " to='/contact-us'>Conatct US</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-warning" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar