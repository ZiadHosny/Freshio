import React from 'react';

const Comment = ({ url, name, hours }) => {
  // const url = "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp";
  return (
    <>
      <div className="d-flex flex-start mt-4 mx-2">
        <a className="me-3" href="#">
          <img
            className="rounded-circle shadow-1-strong mt-3"
            src={url}
            alt="avatar"
            width="65"
            height="65"
          />
        </a>
        <div className="flex-grow-1 flex-shrink-1">
          <div>
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-1 fw-bold">
                {name} <span className="small">- {hours} hours ago</span>
              </p>
            </div>
            <p className="small ">
              Autem, totam debitis suscipit saepe sapiente magnam officiis
              quaerat necessitatibus odio assumenda.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Comment;
