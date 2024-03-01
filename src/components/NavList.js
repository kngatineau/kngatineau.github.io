import React, { useState } from 'react'
import '../styles/NavList.css'

function NavList({ isOpen }) {
    const onButtonClick = () => {
        fetch("kaitlyn_gatineau_resume_mar_2024.pdf").then((response) => {
          response.blob().then((blob) => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "kaitlyn_gatineau_resume_mar_2024.pdf";
            alink.click();
          });
        });
      };

  return (
    <div id="navlist">
    <div className='list-content-container'>
        <ul>
            <a onClick={onButtonClick} target="_blank">
            <li>Resume</li>
            </a>
            <a href='https://www.github.com/kngatineau/' target="_blank">

            <li>GitHub</li>
            </a>
            <a href='https://www.linkedin.com/in/kngatineau/' target="_blank">
            <li>LinkedIn</li>
            </a>
            <a href="mailto:kngatineau@gmail.com" target="_blank">
            <li>Email</li>
            </a>
        </ul>
    </div>
    <style jsx>{`
        #navlist {
            display: ${ isOpen ? 'block' : 'none'}
        }
        @media (min-width: 1001px){
            #navlist {
                display: none;
            }
        }
        `}
    </style>
    </div>
  )
}

export default NavList