import React, { useState, useEffect } from 'react';

const Blog = ({ blog }) => {
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);

    const handleShowCommentsClick = async () => {
        setShowComments(!showComments);
        if (!comments.length) {
            // Fetch the comments for the selected post
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${blog.id}`);
            const data = await response.json();
            setComments(data);
        }
    };

    return (
        <div>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
            <button onClick={handleShowCommentsClick}>
                {showComments ? 'Hide Comments' : 'Show Comments'}
            </button>
            {showComments && (
                <div>
                    <h4>Comments</h4>
                    {comments.map(comment => (
                        <div key={comment.id}>
                            <p>{comment.body}</p>
                            <p>By: {comment.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Blog;
