import "./index.scss"
import React from "react"
import Loader from "react-loaders"
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState } from "react"
import VBFitClub from "../../assets/images/VARIACIÓN-LOGO-GENERAL.png"
import githubImg from "../../assets/images/github.png"
import Project from "../Project"

const project1 = {
  img: VBFitClub,
  link: "https://virgiborgnafitclub.web.app/",
  name: "Virgi Borgna Fit Club",
  desc: "Gym website for searching classes and signing up for different activities.",
  tech: "Technologies used: React, Javascript, Scss, HTML5.",
}
const project2 = {
  img: githubImg,
  link: "#",
  name: "Engracor",
  desc: "End-to-end production tracking tool for a metallurgic manufacturer, deployed on-premise.",
  tech: "Technologies used: Python, FastAPI, React.",
}
const project3 = {
  img: githubImg,
  link: "https://vibra-travel.com",
  name: "Vibra Travel",
  desc: "Responsive website for a travel agency, managing full project lifecycle from concept to deployment.",
  tech: "Technologies used: React, Javascript, HTML5, CSS.",
}
const projectsArr = [project1, project2, project3]

const FreelanceProjects = () => {
  const [letterClass, setLetterClass] = useState("text-animate")

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 3000)
  }, [])

  return (
    <div>
      <div className="container projects-page">
        <div className="text-zone content-container">
          <div className="title">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={["F", "r", "e", "e", "l", "a", "n", "c", "e", " ", "P", "r", "o", "j", "e", "c", "t", "s"]}
                idx={15}
              />
            </h1>
          </div>

          <div className="projectsContainer">
            {projectsArr.map((project) => (
              <Project
                img={project.img}
                link={project.link}
                name={project.name}
                desc={project.desc}
                tech={project.tech}
              />
            ))}
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </div>
  )
}

export default FreelanceProjects
