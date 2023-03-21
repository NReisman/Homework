// SL - ViewPosts? We usually name things by what they are, not what they do.
import React, { useState, useEffect } from 'react';

const ViewPosts = ({ blogId }) => {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState({});
    const [showComments, setShowComments] = useState({});

    console.log(showComments);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${blogId}`)
            .then(response => response.json())
            .then(data => setPosts(data));
    }, [blogId]);

    const handleShowComments = postId => {
        if (!comments[postId]) {
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
                .then(response => response.json())
                .then(data => setComments({ ...comments, [postId]: data }));
        }

        setShowComments({ ...showComments, [postId]: !showComments[postId] });
    };

    // SL - Rather then doing all this work in here, better would be sub components. Each post can be a post - and it would handle its comments. To much work going on here
    // and thats why you need ids for the true, false of showComments - since your doing everything here, need to know which posts are showing. If post would be a component, and handle it itself, would just be a simple true/false.
    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <button onClick={() => handleShowComments(post.id)}>
                        {showComments[post.id] ? 'Hide Comments' : ' Show Comments'}
                    </button>
                    {showComments[post.id] && comments[post.id] && (
                        <ul>
                            {comments[post.id].map(comment => (
                                <li key={comment.id}>
                                    <p>{comment.body}</p>
                                    <p>
                                        Commented by: {comment.name} ({comment.email})
                                    </p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ViewPosts;
