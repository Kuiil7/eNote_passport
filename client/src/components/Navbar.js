import React from 'react';
import {Link} from 'react-router-dom'


function Navbar () {

    return <div>
<nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">


      <a role="button" className="navbar-burger" href='/#' aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">




      </div>


    </div>
  </nav>

        </div>

}

export default Navbar;