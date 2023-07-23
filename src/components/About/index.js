import React from "react";
import profileImage from "../../assets/profile picture/CEB1206C-F653-456D-B84A-54951E92A85B_1_105_c.jpeg";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>

          </p>
          <p>about me</p>
          <p>about me</p>
          <p>about me</p>
        </div>
      </div>
    </section>
  );
}

export default About;