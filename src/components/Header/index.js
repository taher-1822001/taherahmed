import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faTools, faCertificate, faTrophy, faProjectDiagram, faBriefcase, faGraduationCap, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light background" style={{ position: 'fixed', zIndex: 1000, left:"0", right:"0", top:"0" }}>
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleToggle}
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
        <ul className="navbar-nav mx-auto">
          <li className="nav-item" onClick={closeNavbar}>
            <a className="nav-link" href="#home"><span className='theme-color'><FontAwesomeIcon icon={faHome} /></span></a>
          </li>
          <li className="nav-item" onClick={closeNavbar}>
            <a className="nav-link" href="#about"><span className='theme-color'><FontAwesomeIcon icon={faUser} /></span></a>
          </li>
          <li className="nav-item" onClick={closeNavbar}>
            <a className="nav-link" href="#skills"><span className='theme-color'><FontAwesomeIcon icon={faTools} /></span></a>
          </li>
          <li className="nav-item" onClick={closeNavbar}>
            <a className="nav-link" href="#experience"><span className='theme-color'><FontAwesomeIcon icon={faBriefcase} /></span></a>
          </li>
          <li className="nav-item" onClick={closeNavbar}>
            <a className="nav-link" href="#education"><span className='theme-color'><FontAwesomeIcon icon={faGraduationCap} /></span></a>
          </li>
          <li className="nav-item" onClick={closeNavbar}>
            <a className="nav-link" href="#certificate"><span className='theme-color'><FontAwesomeIcon icon={faCertificate} /></span></a>
          </li>
          <li className="nav-item" onClick={closeNavbar}>
            <a className="nav-link" href="#projects"><span className='theme-color'><FontAwesomeIcon icon={faProjectDiagram} /></span></a>
          </li>
          <li className="nav-item" onClick={closeNavbar}>
            <a className="nav-link" href="#achievements"><span className='theme-color'><FontAwesomeIcon icon={faTrophy} /></span></a>
          </li>
          <li className="nav-item" onClick={closeNavbar}>
            <a className="nav-link" href="#contact"><span className='theme-color'><FontAwesomeIcon icon={faEnvelope} /></span></a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
