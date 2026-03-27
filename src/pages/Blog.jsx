import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost/adminside/api/get-blogs.php")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  console.log(blogs);
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
        {blogs.map((blog) => (
          <>
            <div key={blog.id} className="container justify-content-center align-items-center py-5">
              <div className="row justify-content-center align-items-center mb-5">
                <div className="col-md-6">
                   <img
                    src={`http://localhost/adminside/uploads/${blog.image}`}
                    alt={blog.title}
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-6">
                  <div className="blog-subtitle">{blog.subtitle}</div>

                  <div className="blog-title">{blog.title}</div>

                  <div className="blog-description">{blog.description}</div>
                </div>
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: cleanHtml(blog.blog_gallery),
              }}
            />

            <div className="container justify-content-center align-items-center py-5">
              <div
                className="row blog_content"
                dangerouslySetInnerHTML={{
                  __html: cleanHtml(blog.blog_content),
                }}
              />
            </div>
            <div
              className="row justify-content-center align-items-center mb-5"
              dangerouslySetInnerHTML={{
                __html: cleanHtml(blog.featured_gallery),
              }}
            />
          </>
        ))}
      </main>

      <Footer />
    </>
  );
}

export default Blog;
