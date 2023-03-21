import React, { useState, useEffect } from 'react';

const BlogList = ({ onBlogSelect }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
      // SL - what if something goes wrong? Also nothing wrong with .then but async await is much nore common nowadays
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setBlogs(data));
    }, []);

    // SL - better then blog jsx here would be to create a component
    return (
        <ul>
            {blogs.map(blog => (
                <li key={blog.id} onClick={() => onBlogSelect(blog)}>
                    <h3>{blog.name}</h3>
                    <p>Website: {blog.website}</p>
                    <p>
                        Company: {blog.company.name} ({blog.company.catchPhrase})
                    </p>
                </li>
            ))}
        </ul>
    );
};

export default BlogList;
