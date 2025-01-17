import React from "react";
import hero from "../img/hero.jpg";

const Herosection = () => {
  return (
    <div>
      <section
        class="st-hero st-style2 st-bg st-dynamic-bg st-ripple-version"
        // data-src="../img/hero.jpg"
        data-src={hero}
      >
        <div class="container">
          <div class="st-hero-text">
            <div class="st-author">
              <img src={hero} alt="" />
            </div>
            <h1>
              Hi, I am <span>Manjil Shakya</span>
            </h1>
            <p>
              I am a frontend web developer. I can provide clean code and pixel
              perfect design. <br />I also make website more & more interactive
              with web animations.
            </p>
            <div class="st-hero-social-links">
              <a href="#" class="st-social-btn">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="st-social-btn">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="st-social-btn">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Herosection;
