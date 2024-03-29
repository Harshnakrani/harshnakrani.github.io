import React from "react";

const Skills = () => {
  return (
    <>
      <section
        data-scroll-index="2"
        className="section experience-section"
        id="skill"
      >
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-7">
              <div className="section-heading">
                <h3 className="m-0">
                  <span>My Skills</span>
                </h3>
              </div>
              <div className="skill-box">
                <div className="row g-3">
                  <div className="col-6 col-md-4 col-lg-6">
                    <div className="feature-box-02 bg-1">
                      <div className="icon">
                        <i className="fab fa-html5"></i>
                      </div>
                      <h6>HTML</h6>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-6">
                    <div className="feature-box-02 bg-2">
                      <div className="icon">
                        <i className="fab fa-css3"></i>
                      </div>
                      <h6>CSS</h6>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-6">
                    <div className="feature-box-02 bg-6">
                      <div className="icon">
                        <i className="fab fa-js"></i>
                      </div>
                      <h6>JavaScript</h6>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-6">
                    <div className="feature-box-02 bg-3">
                      <div className="icon">
                        <i className="fab fa-react"></i>
                      </div>
                      <h6>React JS</h6>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-6">
                    <div className="feature-box-02 bg-4">
                      <div className="icon">
                        <i className="fab fa-node-js"></i>
                      </div>
                      <h6>Node JS</h6>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-6">
                    <div className="feature-box-02 bg-5">
                      <div className="icon">
                        <i className="fa fa-database"></i>
                      </div>
                      <h6>Mongo DB</h6>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
            <div className="col-lg-5 text-center skill-right">
              <img
                src="/assests/images/skill-img.png"
                title="Skill section image"
                alt="Skill section image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
