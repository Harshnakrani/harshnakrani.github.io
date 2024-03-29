import React from "react";
// import ReactTyped  from "react-typed";
import { Typed } from "react-typed";
import { useEffect, useRef } from "react";

const Main = () => {


  const handleDownloadPdf = async () => {
    window.open("https://docs.google.com/feeds/download/documents/export/Export?id=15CZ-jEks74G7RYu2a2wobdwJx3RcTj2P64WTHSHXW2Y&exportFormat=pdf");
  };

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer.", "Wait", "Full Stack Developer."],

      startDelay: 300,
      typeSpeed: 150,
      backSpeed: 50,
      backDelay: 100,
      loop: false,
      showCursor: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <section data-scroll-index="0" id="home" className="bg-gray home-section">
        <div className="container">
          <div className="row gy-5 align-items-center">
            <div className="col-lg-6">
              <div className="home-intro one-page-nav text-center text-lg-start">
                <div className="hero">
                  <div className="shape shape--1 path--1"></div>
                  <div className="shape shape--2 path--1"></div>
                  <div className="shape shape--3 path--1"></div>
                  <div className="shape shape--4 path--1"></div>
                  <div className="shape shape--5 path--1"></div>
                  <div className="shape shape--6 path--1"></div>
                </div>
                <h6>👋, My name is Harsh Nakrani</h6>
                <h1>
                  I'm a <span ref={el}></span>
                </h1>
                <p>Based in Canada.</p>
                <div className="btn-bar">
                  <button className="px-btn px-btn-theme" onClick={handleDownloadPdf} >
                    View Resume
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 mt-0">
              <div className="home-image text-center">
                <img
                  src="./assests/images/main.png"
                  alt="Header"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section about-section" id="services">
        <div className="container">
          <div className="row gy-5 align-items-center">
            <div className="col-sm-4 col-lg-4 mt-lg-5 pt-lg-5 order-2 order-md-0 text-center">
              <img
                src="./assests/images/about-img.png"
                title="About section image"
                alt="About section"
              />
            </div>
            <div className="col-sm-7 col-lg-7 ps-lg-5 offset-md-1">
              <div className="about-right">
                {/* <div className="bulb-bunch">
                  <div className="bulb-holder">
                    <div className="bulb">
                      <div className="light"></div>
                    </div>
                  </div>

                  <div className="bulb-holder" id="b1">
                    <div className="bulb">
                      <div className="light"></div>
                    </div>
                  </div>
                  <div className="bulb-holder" id="b2">
                    <div className="bulb">
                      <div className="light"></div>
                    </div>
                  </div>
                </div> */}

                <div className="about-text mt-lg-5 pt-lg-5">
                  <h2 className="about-header text-start">
                    I'm a Web Developer with over 2 years of experience.
                  </h2>
                  <p className="text-start">
                    Web developer with a demonstrated history of optimizing website functionality,
                    enhancing user experiences, and delivering impactful results. Proficient in backend technologies, cloud solutions,
                    and Design Thinking principles. Strong communicator dedicated to client satisfaction and ongoing professional growth.
                  </p>
                  <div className="row pt-2 text-start">
                    <div className="col-6 col-md-4">
                      <h5>+30%</h5>
                      <span>User Satisfaction</span>
                    </div>
                    <div className="col-6 col-md-4">
                      <h5>+25%</h5>
                      <span>Application Speed</span>
                    </div>
                  </div>
                  <div className="btn-bar pt-4 text-start">
                    <a
                      className="px-btn px-btn-theme me-3 me-md-4"
                      href="#contactus"
                    >
                      Contact Me
                    </a>
                    <a
                      className="px-btn px-btn-dark"
                      onClick={handleDownloadPdf}
                      target="_blank"
                    >
                      See Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
