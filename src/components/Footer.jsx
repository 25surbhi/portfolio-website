import React from "react";

function Footer() {
  return (
    <footer className="bg-light py-4 mt-5">

      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">
              sdharti24@gmail.com
            </p>
          </div>

          <div className="col-md-6 text-center text-md-end">

     <div className="footer-links">

          <a href="#" className="footer-link">
            <span>Linkedin</span>
            <img src="./images/Arrow.png"/>
          </a>

          <a href="#" className="footer-link">
            <span>Dribbble</span>
            <img src="./images/Arrow.png"/>
          </a>

          <a href="#" className="footer-link">
            <span>Behance</span>
            <img src="./images/Arrow.png"/>
          </a>

          <a href="#" className="footer-link">
            <span>Pinterest</span>
            <img src="./images/Arrow.png"/>
          </a>

          <a href="#" className="footer-link">
            <span>Instagram</span>
            <img src="./images/Arrow.png"/>
          </a>

          <a href="#top" className="top-btn">
            <img src="./images/Up.png"/>
          </a>

        </div>

          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;