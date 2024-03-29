import React, { useEffect, useState } from "react";
import ScrollToTop from "react-scroll-to-top";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <ScrollToTop smooth color="#6f00ff" />
      <header className="main-header">
        <nav
          className={`navbar header-nav navbar-expand-lg one-page-nav ${
            isSticky ? "sticky-navbar" : ""
          }`}
        >
          <div className="container">
            <a className="navbar-brand logo-5 m-1" href="#">
              <h3 className="m-0">Harsh</h3>
              <p className="m-0">Nakrani</p>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar-collapse-toggle"
              aria-controls="navbar-collapse-toggle"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbar-collapse-toggle"
            >
              <ul className="navbar-nav mx-auto">
                <li>
                  <a
                    className="nav-link active"
                    data-scroll-nav="0"
                    href="#home"
                  >
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a className="nav-link" data-scroll-nav="1" href="#services">
                    <span>Background</span>
                  </a>
                </li>
                <li>
                  <a className="nav-link" data-scroll-nav="2" href="#skill">
                    <span>Skills</span>
                  </a>
                </li>
                <li>
                  <a className="nav-link" data-scroll-nav="3" href="#portfolio">
                    <span>Portfolio</span>
                  </a>
                </li>
                <li>
                  <a className="nav-link" data-scroll-nav="4" href="#contactus">
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="ms-auto d-none d-lg-block">
              <a
                class="px-btn px-btn-theme"
                data-scroll-nav="4"
                href="#contactus"
              >
                Contact Now
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
