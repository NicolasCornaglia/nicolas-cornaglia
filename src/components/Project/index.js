import React from "react"
import "./index.scss"

const Project = (props) => {
  return (
    <>
      <div className="project-card">
        <div className="image-info">
          <a
            target="_blank"
            rel="noreferrer"
            href={props.link}
          >
            <img
              src={props.img}
              alt={`${props.img}`}
              className="imageStudies"
            />
          </a>
          <p className="description">
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
            <p>{props.tech} </p>
          </p>
        </div>
      </div>
    </>
  )
}

export default Project
