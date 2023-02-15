import React, { useState } from 'react';
import BlogList from './BlogList';
import ViewPosts from './ViewPosts';
import Header from './Header';
import './App.css';
const App = () => {
  const [selectedBlog, setSelectedBlog] = useState({});

  const handleBlogSelect = blog => {
    setSelectedBlog(blog);
  };

  return (
    <div>
      <Header />
      {selectedBlog.id ? (
        <div>
          <ViewPosts blogId={selectedBlog.id} />
        </div>
      ) : (
        <BlogList onBlogSelect={handleBlogSelect} />
      )}
    </div>
  );
};

export default App;
