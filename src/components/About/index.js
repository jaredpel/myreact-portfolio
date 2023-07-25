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
          <p>Hi, my name is Jared Pelaez</p>
          <p>I was born in San Diego,CA , but was raised in a small town shelton. While living there i enjoyed the PNW, i like how quiet and calm things are and not so noisy, also like adventuring and hiking. Once i graduated from High School i moved to seattle and getting adjusted to the city wasnt too difficult, except for the non stop noise which kept me up at night, but overall started to enjoy it.</p>
          <p>I am a dedicated, organized and methodical individual. I have good interpersonal skills, am an excellent team worker and am keen and very willing to learn and develop new skills. I am reliable and dependable and often seek new responsibilities within a wide range of employment areas. I have an active and dynamic approach to work and getting things done. I am determined and decisive. I identify and develop opportunities</p>
        </div>
      </div>
    </section>
  );
}

export default About;