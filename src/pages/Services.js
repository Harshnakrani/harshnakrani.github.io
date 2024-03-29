import React from "react";

const Services = () => {
  return (
    <>
      <section
        data-scroll-index="1"
        className="section services-section bg-gray"
      >
        <div className="container">
          <div className="row section-heading justify-content-center">
            <div className="col-lg-6 text-center">
              <h3>
                <span>Elevating Digital Performance</span>
              </h3>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-md-6">
              <div className="feature-box-01 bg-1">
                <div className="icon">
                  <i className="fa fa-laptop" aria-hidden="true"></i>
                </div>
                <div className="feature-content">
                  <h5>Website Design</h5>
                  <p>
                    Offering website design services involves creating visually appealing,
                    user-friendly interfaces optimized for various devices and screen sizes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-box-01 bg-2">
                <div className="icon">
                  <i className="fa fa-code" aria-hidden="true"></i>
                </div>
                <div className="feature-content">
                  <h5>Full-Stack Development</h5>
                  <p>
                    Offering full-stack development encompassing HTML, CSS, JavaScript,
                    and backend technologies to deliver responsive, dynamic, and interactive web applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-box-01 bg-3">
                <div className="icon">
                  <i className="fa fa-file-code" aria-hidden="true"></i>
                </div>
                <div className="feature-content">
                  <h5>Website Optimization</h5>
                  <p>
                    Offering website optimization services involving the analysis and
                    enhancement of website performance, load times, and user experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-box-01 bg-4">
                <div className="icon">
                  <i className="fa fa-cloud" aria-hidden="true"></i>
                </div>
                <div className="feature-content">
                  <h5>Cloud Migration</h5>
                  <p>
                    Providing cloud optimization solutions encompassing the analysis
                    and enhancement of infrastructure performance, scalability, and cost efficiency.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-box-01 bg-5">
                <div className="icon">
                  <i className="fa fa-tablet" aria-hidden="true"></i>
                </div>
                <div className="feature-content">
                  <h5>Responsive design</h5>
                  <p>
                    Offering responsive design to create websites that seamlessly adapt to various screen sizes, 
                    ensuring users receive a consistent and optimal browsing experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-box-01 bg-6">
                <div className="icon">
                  <i className="fa fa-globe" aria-hidden="true"></i>
                </div>
                <div className="feature-content">
                  <h5>Cross-browser compatibility</h5>
                  <p>
                  Offering cross-browser compatibility services to guarantee seamless website 
                  functionality across diverse web browsers and platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
