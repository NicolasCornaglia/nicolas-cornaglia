import "./index.scss"
import React from "react"
import Loader from "react-loaders"
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState } from "react"
import VBFitClub from "../../assets/images/VARIACIÓN-LOGO-GENERAL.png"
import vibraTravelLogo from "../../assets/images/vibra-travel-logo.svg"
import engracorLogo from "../../assets/images/engracor-logo.png"
import Project from "../Project"

const project1 = {
  img: VBFitClub,
  link: "https://virgiborgnafitclub.web.app/",
  name: "Virgi Borgna Fit Club",
  desc: "Gym website for browsing classes and signing up for different activities.",
  tech: "Technologies used: React, JavaScript, SCSS, HTML5.",
}
const project2 = {
  img: engracorLogo,
  link: "#",
  name: "Engracor",
  desc: "End-to-end production tracking tool for a metallurgic manufacturer, deployed on premises and accessible via a web interface, allowing for real-time monitoring of production processes.",
  tech: "Technologies used: Python, FastAPI, React.",
}
const project3 = {
  img: vibraTravelLogo,
  link: "https://vibra-travel.com/",
  name: "Vibra Travel",
  desc: "Responsive website for a travel agency, managing the full project lifecycle from concept to deployment.",
  tech: "Technologies used: React, JavaScript, HTML5, CSS.",
}
const projectsArr = [project2, project3, project1]

const FreelanceWork = () => {
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
                strArray={["F", "r", "e", "e", "l", "a", "n", "c", "e", " ", "W", "o", "r", "k"]}
                idx={15}
              />
            </h1>
          </div>

          <div className="projectsContainer freelanceContainer">
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

export default FreelanceWork
