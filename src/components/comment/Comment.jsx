import React from 'react'

const Comment = ({url,name,hours})=>{
    // const url = "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp";
    return(
        <>
            <div class="d-flex flex-start mt-4 mx-2">
                      <a class="me-3" href="#">
                        <img class="rounded-circle shadow-1-strong mt-3"
                          src={url} alt="avatar"
                          width="65" height="65" />
                      </a>
                      <div class="flex-grow-1 flex-shrink-1">
                        <div>
                          <div class="d-flex justify-content-between align-items-center">
                            <p class="mb-1 fw-bold">
                              {name} <span class="small">- {hours} hours ago</span>
                            </p>
                          </div>
                          <p class="small ">
                            Autem, totam debitis suscipit saepe sapiente magnam officiis
                            quaerat necessitatibus odio assumenda.
                          </p>
                        </div>
                      </div>
                    </div>
        </>
    )
}
export default Comment;