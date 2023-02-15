import React, { useEffect } from "react";
import "./css/index.css";
import loadBlogList from "./blogList";

const App = () => {
  useEffect(() => {
    loadBlogList();
  }, []);

  return (
    <div>
      <header>
        <h1>PCS Blogs</h1>
        <h2 id="subtitle">subtitle</h2>
        <nav>
          <ul>
            <li>
              <a id="homeLink" href="#" onClick={loadBlogList}>
                blog list
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      <div id="content">content goes here</div>
    </div>
  );
};

export default App;