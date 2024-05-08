import React from "react";

const About = () => {
  return (
    <div>
      <section id="about" class="st-about-wrap">
        <div class="st-height-b100 st-height-lg-b80"></div>
        <div class="container">
          <div class="st-section-heading st-style1">
            <h4 class="st-section-heading-title">ABOUT ME</h4>
            <h2 class="st-section-heading-subtitle">ABOUT ME</h2>
          </div>
          <div class="st-height-b25 st-height-lg-b25"></div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-6 wow fadeInLeft">
              <div class="st-about-img-wrap">
                <div
                  class="st-about-img st-dynamic-bg st-bg"
                  data-src="assets/img/section/about.jpg"
                ></div>
              </div>
              <div class="st-height-b0 st-height-lg-b30"></div>
            </div>
            <div class="col-lg-6">
              <div class="st-vertical-middle">
                <div class="st-vertical-middle-in">
                  <div class="st-text-block st-style1">
                    <h2 class="st-text-block-title">
                      Hi There! I'm Manjil Shakya.
                    </h2>
                    <h4 class="st-text-block-subtitle">Frontend developer</h4>
                    <div class="st-text-block-text">
                      <p>
                        I am a Frontend developer with a strong focus on digital
                        branding. Visul design seeks to attract, inspire, create
                        desires and motivate people to respond to messages, with
                        a view to making a favorable impact.
                      </p>
                    </div>
                    <ul class="st-text-block-details st-mp0">
                      <li>
                        <span>Birthday</span> : <span>2058-06-07</span>
                      </li>
                      <li>
                        <span>Phone</span> : <span>+977 9818706474</span>
                      </li>
                      <li>
                        <span>Email</span> :{" "}
                        <span>manzilshakya31@gmail.com</span>
                      </li>
                      <li>
                        <span>From</span> : <span>Balkumari, Lalitpur</span>
                      </li>
                      <li>
                        <span>Language</span> :{" "}
                        <span>English, Nepali, Newari, Hindi</span>
                      </li>
                      <li>
                        <span>Freelance</span> : <span>Available</span>
                      </li>
                    </ul>
                    <div class="st-text-block-btn">
                      <a href="#" class="st-btn st-style1 st-color1">
                        Download CV
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
