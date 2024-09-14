import "./index.scss"
import React from "react"
import Loader from "react-loaders"
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState } from "react"
import decoHogar from "../../assets/images/LogoDH.png"
import VBFitClub from "../../assets/images/VARIACIÓN-LOGO-GENERAL.png"
import cuantoEs from "../../assets/images/logoCuantoEs.png"
import whereToWatch from "../../assets/images/WhereToWatch.png"
import Project from "../Project"

const project1 = {
  img: VBFitClub,
  link: "https://virgiborgnafitclub.web.app/",
  name: "Virgi Borgna Fit Club",
  desc: "Gym website for searching classes and signing up for different activities.",
  tech: "Technologies used: React, Javascript, Sass, HTML5.",
}
const project2 = {
  img: whereToWatch,
  link: "https://wheretowatch-72953.web.app/",
  name: "Where to Watch",
  desc: "Responsive mobile website for looking up in which platform a certain movie is available given your country.",
  tech: "Technologies used: React, Tailwind css",
}
const project3 = {
  img: decoHogar,
  link: "https://github.com/NicolasCornaglia/Portfolio/tree/main/proyecto-integrador-DecoHogar",
  name: "Deco Hogar",
  desc: "E-commerce website for furniture sellers",
  tech: "Technologies used: Javascript, HTML5, CSS, NodeJS, MariaDB, React.",
}
const project4 = {
  img: cuantoEs,
  link: "https://nicolascornaglia.github.io/cuantoes-deploy/",
  name: "Cuanto Es",
  desc: "Mobile website to divide equally the spendings of many people in a reunion. Useful for situations like a meeting to have dinner or going out with friends.",
  tech: "Technologies used: React, Javascript, Sass, HTML5.",
}

const projectsArr = [project1, project2, project3, project4]

const Projects = () => {
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
                strArray={["P", "r", "o", "j", "e", "c", "t", "s"]}
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

export default Projects
