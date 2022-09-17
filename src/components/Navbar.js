import React, { useState } from 'react'
import '../styles/Navbar.css'
import NavList from './NavList';
import '../styles/NavList.css'

function Navbar() {

const [navMenuOpen, setNavMenuOpen] = useState(false);

const toggleNavMenu = () => {
  setNavMenuOpen(!navMenuOpen);
}


  const onButtonClick = () => {
    fetch("Gatineau_Kaitlyn_Resume_Sept_2022.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Gatineau_Kaitlyn_Resume_Sept_2022.pdf";
        alink.click();
      });
    });
  };

  return (
    <div id='navbar'>
    <div class="animate__animated animate__fadeIn" id='navbar-container'>
    <div id='navbar-text'>
        <a className='link' onClick={onButtonClick} target="_blank">Resume</a>
        <a className='link' href='https://github.com/kngatineau' target="_blank">
        <img
                className="navbar-icon"
                id="github"
                src={require("../assets/github.png")}
              />
            GitHub
            </a>
        <a className='link' href='https://www.linkedin.com/in/kngatineau/' target="_blank">
        <img
                className="navbar-icon"
                id="linkedin"
                src={require("../assets/linkedin.png")}
              />
            LinkedIn</a>
        <a className='link' href="mailto:kngatineau@gmail.com">
        <img
                className="navbar-icon"
                id="email"
                src={require("../assets/email.png")}
              />
            Email</a>
    </div>
    <div className="menu-container">
      {
        !navMenuOpen ? 

              <p id="connect" onClick={toggleNavMenu}>
                  Connect</p>
      : <img
      className="menu-icon"
      id="close"
      onClick={toggleNavMenu}
      src={require("../assets/close.png")}
    />
    }
    <NavList isOpen={navMenuOpen}/>
    </div>
    <div id='logo'>
        <div id='logo-img'>
          <h1 id='txt'>K</h1>
        </div>
        <div id='logo-text'>
            <div id='first-name'>
                Kaitlyn 
            </div>
            <div id='last-name'>
                Gatineau
            </div>
        </div>
    </div>
    </div>
    
    </div>
  )
}

export default Navbar