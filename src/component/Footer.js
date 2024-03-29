import React from "react";

const Footer = () => {

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 py-2">
              <div className="nav justify-content-center justify-content-md-start">
                <a
                  href="https://github.com/harshnakrani"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/harshnakrani"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                
                <a
                  href="https://www.instagram.com/heer.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 py-2 text-center text-md-end">
              <p className="m-0">
                © {currentYear} Harsh Nakrani{" "}
                <i className="fa fa-code" aria-hidden="true"></i>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
