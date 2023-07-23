import React from "react";
import myResume from "../../assets/files/95FA67A0-1BEB-4742-881A-90E34A314899_1_201_a.jpeg";
import { BsCloudDownload } from "react-icons/bs";
function Resume() {
  return (
    <div>
      <section id="welcome-section" className="download-intro">
        <div className="flex-row">
          <h2 className="section-title primary-border">My Resume</h2>
        </div>
        <div className="flex-row">
          <div className="download-info">
            <div className="download-text">
              <a href={myResume} className="download-logo" download>
                <BsCloudDownload />
              </a>
              <p>
                Download Resume
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;