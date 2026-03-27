import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Blog Page */}
        <Route
          path="/blog"
          element={<Blog />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;