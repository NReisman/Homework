import React, { useEffect } from 'react';

const SetPage = ({ title, content }) => {
  const titleElem = React.useRef(null);
  const contentElem = React.useRef(null);

  useEffect(() => {
    titleElem.current.textContent = title;
    contentElem.current.innerHTML = content;
  }, [title, content]);

  return (
    <React.Fragment>
      <h2 ref={titleElem} />
      <div ref={contentElem} />
    </React.Fragment>
  );
};

export default SetPage;
