import React, { useState, useEffect } from 'react';

const BlogList = ({ onBlogSelect }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setBlogs(data));
    }, []);

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
