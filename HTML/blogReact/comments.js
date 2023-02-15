import React, { useState, useEffect } from 'react';
import './css/comments.css';
import './css/blog.css';

function Comment({ comment }) {
  const { email, body } = comment;
  return (
    <div className="comment">
      <div className="body">{body}</div>
      <div className="email">{email}</div>
    </div>
  );
}

function Comments({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        const comments = await response.json();
        setComments(comments);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, [postId]);

  return (
    <>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
}

export default Comments;
