import React from "react";

function Header() {
  return (
    <header className="bg-light py-3">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-4">
            <h5 className="mb-0 logo-text">
              Dharti Desai
            </h5>
          </div>

          <div className="col-md-8">
              <h5 className="mb-0 nav-text text-md-end text-center">
                sdharti24@gmail.com
              </h5>
            {/* <nav>
              <ul className="nav justify-content-md-end justify-content-center">

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    My Story
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Logo
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Illustration
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Advertising
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>

              </ul>
            </nav> */}
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;