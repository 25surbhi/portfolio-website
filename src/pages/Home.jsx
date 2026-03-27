import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  return (
    <>
    <Header />
    <main>

      {/* My Story Section */}

      <div className="container">

        <div className="row justify-content-center align-items-center mb-5">

          <div className="col-md-6">
            <img
             src="/images/node-10.png"
              alt="Hola!"
              className="img-fluid"
            />
          </div>

          <div className="col-md-6">

            <div className="story-title">
              Namste!
            </div>

            <div className="story-description">
              Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
              Lorem Ipsum has been the industry's
              standard dummy text ever since the
              1500s.
            </div>

          </div>

        </div>

      </div>

      {/* GRID SECTION */}

      <div className="row">

        {/* Column 1 */}

        <div className="column">

          <Link to="/blog">
            <img
              src="/images/Group 3.png"
              alt="group3"
            />
          </Link>

          <Link to="/blog">
            <img
              src="/images/rectangle-14-13.png"
              alt="rectangle"
            />
          </Link>

          <Link to="/blog">
            <img
              src="/images/rectangle-68-38.png"
              alt="rectangle"
            />
          </Link>

          <Link to="/blog">
            <img
              src="/images/rectangle-69-40.png"
              alt="rectangle"
            />
          </Link>

        </div>

        {/* Column 2 */}

        <div className="column">

          <Link to="/blog">
            <img
              src="/images/rectangle-4-25.png"
              alt="img"
            />
          </Link>

          <Link to="/blog">
            <img
              src="/images/rectangle-11-27.png"
              alt="img"
            />
          </Link>

          <Link to="/blog">
            <img
              src="/images/Group 3.png"
              alt="img"
            />
          </Link>

          <Link to="/blog">
            <img
              src="/images/rectangle-67-36.png"
              alt="img"
            />
          </Link>

        </div>

        {/* Column 3 */}

        <div className="column">

          <Link to="/blog">
            <img
              src="/images/rectangle-5-15.png"
              alt="img"
            />
          </Link>

          <Link to="/blog">
            <img
              src="/images/rectangle-9-37.png"
              alt="img"
            />
          </Link>

          <Link to="/blog">
            <img
              src="/images/rectangle-54-33.png"
              alt="img"
            />
          </Link>

          <Link to="/blog">
            <img
              src="/images/rectangle-64-30.png"
              alt="img"
            />
          </Link>

          <Link to="/blog">
            <img
              src="/images/rectangle-66-34.png"
              alt="img"
            />
          </Link>

        </div>
             {/* Column 4 */}

        <div className="column">

          <Link to="/blog">
            <img
              src="/images/Group 3.png"
              alt="group3"
            />
          </Link>

          <Link to="/blog">
            <img
              src="/images/rectangle-14-13.png"
              alt="rectangle"
            />
          </Link>

          <Link to="/blog">
            <img
              src="/images/rectangle-68-38.png"
              alt="rectangle"
            />
          </Link>

          <Link to="/blog">
            <img
              src="/images/rectangle-69-40.png"
              alt="rectangle"
            />
          </Link>

        </div>

        {/* Column 5 */}

        <div className="column">

          <Link to="/blog">
            <img
              src="/images/rectangle-4-25.png"
              alt="img"
            />
          </Link>

          <Link to="/blog">
            <img
              src="/images/rectangle-11-27.png"
              alt="img"
            />
          </Link>

          <Link to="/blog">
            <img
              src="/images/Group 3.png"
              alt="img"
            />
          </Link>

          <Link to="/blog">
            <img
              src="/images/rectangle-67-36.png"
              alt="img"
            />
          </Link>

        </div>

        {/* Column 6 */}

        <div className="column">

          <Link to="/blog">
            <img
              src="/images/rectangle-5-15.png"
              alt="img"
            />
          </Link>

          <Link to="/blog">
            <img
              src="/images/rectangle-9-37.png"
              alt="img"
            />
          </Link>

          <Link to="/blog">
            <img
              src="/images/rectangle-54-33.png"
              alt="img"
            />
          </Link>

          <Link to="/blog">
            <img
              src="/images/rectangle-64-30.png"
              alt="img"
            />
          </Link>

          <Link to="/blog">
            <img
              src="/images/rectangle-66-34.png"
              alt="img"
            />
          </Link>

        </div>


        {/* Column 7 */
         <div className="column">

          <Link to="/blog">
            <img
              src="/images/rectangle-4-25.png"
              alt="img"
            />
          </Link>

          <Link to="/blog">
            <img
              src="/images/rectangle-11-27.png"
              alt="img"
            />
          </Link>

          <Link to="/blog">
            <img
              src="/images/Group 3.png"
              alt="img"
            />
          </Link>

          <Link to="/blog">
            <img
              src="/images/rectangle-67-36.png"
              alt="img"
            />
          </Link>

        </div>}

      </div>

      {/* LET'S CONNECT */}

      <div className="container">

        <div className="row">

          <div className="col-md-6">

            <div className="let-conncet">

              <div className="let-conncet-title">
                Let’s Connect
              </div>

              <div className="let-conncet-description">
                Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
    <Footer />
    </>
  );
}

export default Home;
