import React from "react";
import projectBoredImage from "../../assets/snaps/projectbored.jpeg";
import quizImage from "../../assets/snaps/quiz.jpeg";
import passwordGenImage from "../../assets/snaps/passwordgen.jpeg";
import schedulerImage from "../../assets/snaps/scheduler.jpeg";


function Portfolio() {
  return (
    <div>
      <section id="work" className="ports">
        <div className="flex-row">
          <h2 className="section-title secondary-border"></h2>
        </div>

        <div className="port">
          <div className="port info">
            <div className="port-img">
              <a href="https://badermah.github.io/bulletin-bored/">
                {" "}
                <img
                  src={projectBoredImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Project Bored"
                />
              </a>
            </div>
            <div className="port-text">
              <h4>Bulletin Bored</h4>
              <p>
                about the project{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="port">
          <div className="port-info">
            <div className="port-img">
              <a href="https://jaredpel.github.io/my-quiz/">
                {" "}
                <img
                  src={quizImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Quiz"
                />
              </a>
            </div>
            <div className="port-text">
              <h4>Quiz Challenge</h4>
              <p>
                About project{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="port">
          <div className="port-info">
            <div className="port-img">
              <a href="https://jaredpel.github.io/My-Passwordv2/">
                {" "}
                <img
                  src={passwordGenImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Password Generator"
                />
              </a>
            </div>
            <div className="port-text">
              <h4>Password Generator</h4>
              <p>
                about{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="port">
          <div className="port-info">
            <div className="port-img">
              <a href="https://jaredpel.github.io/My-schedule/">
                {" "}
                <img
                  src={schedulerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Scheduler"
                />
              </a>
            </div>
            <div className="port-text">
              <h4>Work day Scheduler</h4>
              <p>
                about {" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;