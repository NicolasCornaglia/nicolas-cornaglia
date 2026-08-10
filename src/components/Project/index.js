import React from "react"
import "./index.scss"

const Project = (props) => {
  return (
    <a className="project-card" target="_blank" rel="noreferrer" href={props.link}>
      <div className="image-info">
        <img
          src={props.img}
          alt={`${props.name} logo`}
          className="imageStudies"
        />
        <div className="description">
          <h3>{props.name}</h3>
          <p>{props.desc}</p>
          <p>{props.tech}</p>
        </div>
      </div>
    </a>
  )
}

export default Project
