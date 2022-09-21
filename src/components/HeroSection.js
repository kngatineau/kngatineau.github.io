import React from "react";
import "../styles/HeroSection.css";
import "../styles/Button.scss";
import "animate.css";

function HeroSection() {

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
    <div id="hero-section">
      <div
        class="animate__animated animate__fadeInLeftBig"
        id="hero-section-container"
      >
        <div id="portrait-container">
          <img id="portrait" src={require("../assets/kgsunflower.jpg")} />
        </div>
        <div id="hero-section-text-container">
          <div id="hero-section-text">
            <h3 id="job-title" className="hero-text">
              Software Developer
            </h3>
            <h1 id="title" className="hero-text">
              Kaitlyn Gatineau
            </h1>
            <h3 id="location" className="hero-text">
              <img id="pin" src={require("../assets/pin.png")} />
              Edmonton, AB
            </h3>
            <p id="content" className="hero-text">
              Hi! 👋 My name is Kaitlyn and I am a developer that is originally
              from the US but now calls Canada home. I enjoy the little
              things in life; such as that first sip of coffee each morning or
              finally squashing a small bug in a program. Please reach out— I
              would love to connect and chat all things programming.
            </p>

            <div className="button-container">
              <button id="button-1" onClick={onButtonClick}></button>
              <a href="mailto:kngatineau@gmail.com">
              <button id="button-2"></button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
