import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  const  [home, setHome] = useState([]);
  useEffect(() => {
    fetch("http://localhost/adminside/api/get-home.php")
      .then((res) => res.json())
      .then((data) => {
        setHome(data);
      });
  }, []);

  console.log(home);
    const cleanHtml = (html) => {
    return html
      .replace(/<\/?p[^>]*>/gi, " ")
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/&nbsp;/gi, " ")
      .replace(/\s+/g, " ") // remove extra spaces
      .trim();
  };
  
  return (
    <>
    <Header />
    <main>
      {home.map((home) => (
        <>
           <div className="container">

        <div className="row justify-content-center align-items-center mb-5">

          <div className="col-md-6">
            <img
             src={`http://localhost/adminside/uploads/${home.image}`}
              alt={home.title}
              className="img-fluid"
            />
          </div>

          <div className="col-md-6">

            <div className="story-title">
              {home.title}
            </div>

            <div className="story-description">
              {home.description}
            </div>

          </div>

        </div>

      </div>
       <div className="row"
              dangerouslySetInnerHTML={{
                __html: cleanHtml(home.home_gallery),
              }}
            />

       <div 
              dangerouslySetInnerHTML={{
                __html: cleanHtml(home.contact_content),
              }}
            />
        </>

        
      ))}


   
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


    
    </main>
    <Footer />
    </>
  );
}

export default Home;
