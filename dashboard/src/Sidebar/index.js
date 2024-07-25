import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChartSimple,faHome,faFaceSmileBeam, faSignOut } from '@fortawesome/free-solid-svg-icons';

const Sidebar =() => {
  return (
    <nav className='sidebar'>
    <div className='logo-side'>
    <img src="/Assets/logo.jpg" className="logo" alt="Logo"/>
    <h4 className='name'>Edukeri</h4>
     </div>

      <ul className='sidenav' >
      <li>
          <Link to="/homepage">
          < FontAwesomeIcon icon={faHome} style={{ color: '#F1F2F4' }} /> Home
          </Link>
        </li>
       
        <li>
          <Link to="/teachersOverview">
            <FontAwesomeIcon icon={faChartSimple} style={{ color: "#FFFFFF" }} /> TeachersOverview
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <FontAwesomeIcon icon={faFaceSmileBeam} style={{ color: "#FFFFFF" }} /> Profile
          </Link>
        </li>
      </ul>
      <div className='logout'>
        <button className='button'>Logout </button>
        <FontAwesomeIcon icon={faSignOut} />
      </div>
    </nav>
  );
};
export default Sidebar;