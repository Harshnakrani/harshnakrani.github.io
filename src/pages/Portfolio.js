import React from "react";

const Portfolio = () => {
  return (
    <>
      <section className="py-5 bg-dark">
        <div className="container">
          <div className="row gy-3">
            <div className="col-lg-8 col-md-7 text-center text-md-start">
              <h4 className="h1 m-0 text-white">Intrested working with me?</h4>
            </div>
            <div className="col-lg-4 col-md-5 text-center text-md-end">
              <a
                className="px-btn px-btn-theme2"
                data-scroll-nav="4"
                href="#contactus"
              >
                Contact Now
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        data-scroll-index="3"
        className="section work-section bg-gray text-start"
        id="portfolio"
      >
        <div className="container">
          <div className="row section-heading justify-content-center">
            <div className="col-lg-6 text-center">
              <h3>
                <span>Portfolio</span>
              </h3>
            </div>
          </div>
          <div className="lightbox-gallery portfolio-box">


            <div className="row gx-3 pb-3 mb-5 pb-lg-3 gy-4 portfolio-box justify-content-around align-items-center">
              <div className="col-md-6 col-lg-5">
                <div className="portfolio-img">
                  <img
                    src="./assests/images/work-3.png"
                    rel="noopener noreferrer"
                    title="Admin panel"
                    alt="Admin Panel"
                  />
                  <a
                    href="./assests/images/work-3.png"
                    className="gallery-link gallery-link-icon"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-5">
                <div className="portfolio-text">
                  <h6>
                    <span>Html + CSS + JS + PHP + Excel + XML + API</span>
                  </h6>
                  <h4>
                    Niterra India: Order Management System for Microsoft Dynamics AX
                  </h4>
                  <p>
                    Developed a hierarchical order management system for Nittera India from inception to completion,
                    meeting the specified deadline.
                    Integrated a middleware platform with Microsoft Dynamics AX,
                    implemented user approval workflows, and established API connections to
                    generate dynamic order XML for diverse user groups and portals. This end-to-end creation
                    ensured seamless communication and workflow management, culminating in significant improvements
                    to operational efficiency within the given timeframe.
                  </p>

                  <div className="btn-bar">
                    {/* <a
                      className="px-btn px-btn-theme"
                      data-scroll-nav="4"
                      href=""
                      target="_blank"
                    >
                      View Project
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="row gx-3 pb-3 mb-5 pb-lg-3 gy-4 portfolio-box justify-content-around align-items-center flex-row-reverse">
              <div className="col-md-6 col-lg-5">
                <div className="portfolio-img">
                  <img
                    src="./assests/images/work-4.png"
                    title="Job Search website"
                    alt="Job Search website"
                  />
                  <a
                    href="http://www.blockprotect.co.uk/"
                    rel="noopener noreferrer"
                    className="gallery-link gallery-link-icon"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-5">
                <div className="portfolio-text">
                  <h6>
                    <span>HTML + CSS +  + Node + API</span>
                  </h6>
                  <h4>
                    BlockProtect : Store art work on Blockchain / NFT
                  </h4>
                  <p>
                    BlockProtect is a platform designed to enable users to securely store their artwork on the blockchain.
                    Leveraging node and Solidity scripts, the platform facilitates the generation of non-fungible tokens (NFTs),
                    ensuring the safekeeping of digital assets. Throughout the development process, I collaborated closely with
                    a diverse team, overseeing intermediary operations and integrating frontend and backend processes.
                    This involved managing the seamless flow of data and operations to enable users to efficiently store
                    their artwork on the blockchain while safeguarding their digital assets.
                  </p>

                  <div className="btn-bar">
                    <a
                      className="px-btn px-btn-theme"
                      data-scroll-nav="4"
                      rel="noopener noreferrer"
                      href="http://www.blockprotect.co.uk/"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row gx-3 pb-3 mb-5 pb-lg-3 gy-4 portfolio-box justify-content-around align-items-center">
              <div className="col-md-6 col-lg-5">
                <div className="portfolio-img">
                  <img
                    src="./assests/images/work-1.png"
                    title="Coffee House"
                    alt="Coffee House"
                  />
                  <a
                    href="https://www.coachculture.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gallery-link gallery-link-icon"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-5">
                <div className="portfolio-text">
                  <h6>
                    <span>Backend API</span>
                  </h6>
                  <h4>CoachCulture - Virtual Fitness Platform</h4>
                  <p>
                    A Mobile Virtual Fitness platform catering to both trainees and coaches, featuring customizable workout plans, convenient class scheduling, and access to healthy recipes and nutrition guides. The platform aims to empower users in achieving their
                    fitness goals through structured routines, flexible scheduling, and valuable nutritional resources.
                  </p>
                  <div className="btn-bar">
                    <a
                      className="px-btn px-btn-theme"
                      data-scroll-nav="4"
                      href="https://www.coachculture.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row gx-3 pb-3 mb-5 pb-lg-3 gy-4 portfolio-box justify-content-around align-items-center flex-row-reverse">
              <div className="col-md-6 col-lg-5">
                <div className="portfolio-img">
                  <img
                    src="./assests/images/work-2.png"
                    title="UI Improved Work"
                    target="_blank"
                  />
                  <a
                    href="https://ahacentre.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gallery-link gallery-link-icon"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-5">
                <div className="portfolio-text">
                  <h6>
                    <span>UI Improvement + Wordpress</span>
                  </h6>
                  <h4>AHA Centre</h4>
                  <p>
                    Enhanced the UI design for the entire website of the AHA Centre,
                    an inter-governmental organization dedicated to fostering cooperation and coordination among ASEAN Member States,
                    the United Nations, and international organizations for
                    disaster management and emergency response in the ASEAN region.
                  </p>

                  <div className="btn-bar">
                    <a
                      className="px-btn px-btn-theme"
                      data-scroll-nav="4"
                      rel="noopener noreferrer"
                      href="https://ahacentre.org/"
                      target="_blank"
                    >
                      View Project
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

export default Portfolio;
