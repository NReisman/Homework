import React, { useState, useEffect } from 'react';
import './css/blog.css';
import setPage from './page';
import loadComments from './comments';

function createPost(post) {
  const { title, body, id } = post;
  const [comments, setComments] = useState(null);
  const [commentsShowing, setCommentsShowing] = useState(false);

  const handleShowCommentsClick = async () => {
    if (!commentsShowing) {
      if (!comments) {
        const loadedComments = await loadComments(id);
        setComments(loadedComments);
      }
    }
    setCommentsShowing(!commentsShowing);
  };

  return (
    <div className="post">
      <div className="title">{title}</div>
      <div className="body">{body}</div>
      <div className="comments">
        <button onClick={handleShowCommentsClick}>
          {commentsShowing ? 'hide' : 'show'} comments
        </button>
        {commentsShowing && comments}
      </div>
    </div>
  );
}

export default function LoadBlog({ blog }) {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${blog.id}`
        );
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        const fetchedPosts = await response.json();
        setPosts(fetchedPosts);
      } catch (e) {
        console.error(e);
      }
    };
    fetchPosts();
  }, [blog.id]);

  useEffect(() => {
    setPage({
      title: `${blog.name}'s blog`,
      content: posts && posts.map(post => createPost(post))
    });
  }, [blog, posts]);

  return null;
}
