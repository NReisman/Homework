import React, { useState, useEffect } from 'react';
import './css/blogList.css';
import loadBlog from './blog';

function Blog({ blog }) {
  const { name, website, company: { name: companyName, catchPhrase, bs } } = blog;

  const handleClick = () => {
    loadBlog(blog);
  };

  return (
    <div className="blog" onClick={handleClick}>
      <div className="title">{name}</div>
      <div className="website">{website}</div>
      <div className="company">
        <div>{companyName}</div>
        <div>{catchPhrase}</div>
        <div>{bs}</div>
      </div>
    </div>
  );
}

function BlogList() {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data);
        setBlogs(data);
      } catch (e) {
        console.error(e);
      }
    };

    if (!blogs) {
      fetchData();
    }
  }, [blogs]);

  return (
    <div className="blogList">
      {blogs ? blogs.map(blog => <Blog key={blog.id} blog={blog} />) : null}
    </div>
  );
}

export default BlogList;
