import "./index.scss"
import React from "react"
import Loader from "react-loaders"
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState } from "react"
import decoHogar from "../../assets/images/LogoDH.png"
import cuantoEs from "../../assets/images/logoCuantoEs.png"
import whereToWatch from "../../assets/images/WhereToWatch.png"
import githubImg from "../../assets/images/github.png"
import CoffeeShop from "../../assets/images/CoffeeShop.jpg"
import Project from "../Project"

const project2 = {
  img: whereToWatch,
  link: "https://wheretowatch-72953.web.app/",
  name: "Where to Watch",
  desc: "Responsive mobile website to look up which platform has a given movie available, based on your country.",
  tech: "Technologies used: React, Tailwind CSS.",
}
const project3 = {
  img: decoHogar,
  link: "https://github.com/NicolasCornaglia/Portfolio/tree/main/proyecto-integrador-DecoHogar",
  name: "Deco Hogar",
  desc: "E-commerce website for furniture sellers.",
  tech: "Technologies used: JavaScript, HTML5, CSS, Node.js, MariaDB, React.",
}
const project4 = {
  img: cuantoEs,
  link: "https://nicolascornaglia.github.io/cuantoes-deploy/",
  name: "Cuanto Es",
  desc: "Mobile website to split expenses evenly among a group. Useful for situations like a dinner or a night out with friends.",
  tech: "Technologies used: React, JavaScript, SCSS, HTML5.",
}
const project5 = {
  img: CoffeeShop,
  link: "https://webempresagenerica.pythonanywhere.com/",
  name: "Coffee shop website",
  desc: "Responsive website built for coffee shops. Clients use the Django admin panel to create, modify, and delete categories, pages, users, services, and links.",
  tech: "Technologies used: Django, Python, HTML, CSS, SQLite. Uses class-based views.",
}
const project6 = {
  img: githubImg,
  link: "https://github.com/NicolasCornaglia/porfolio-generico",
  name: "Generic portfolio website",
  desc: "Responsive website built for anyone who needs a portfolio. Users can create, modify, and delete projects through the Django admin panel.",
  tech: "Technologies used: Django, Python, HTML, CSS, SQLite. Uses function-based views.",
}
const project7 = {
  img: githubImg,
  link: "https://github.com/NicolasCornaglia/PlaygroundDjango",
  name: "Playground website",
  desc: "Responsive website built to test Django concepts such as class-based views, authentication, registration, profiles, test-driven development, and messaging between users.",
  tech: "Technologies used: Django, Python, HTML, CSS, SQLite. Uses function-based views.",
}

const project8 = {
  img: githubImg,
  link: "https://github.com/NicolasCornaglia/Django-React-NotesApp",
  name: "Notes App",
  desc: "Fullstack responsive notes app with JWT authentication that allows users to organize their activities by adding and deleting notes.",
  tech: "Technologies used: Django, Python, JWT, HTML, CSS, SQLite, React, JavaScript. Uses class-based views.",
}
const projectsArr = [project4, project2, project3, project8, project7, project5, project6]

const LearningProjects = () => {
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
                strArray={["L", "e", "a", "r", "n", "i", "n", "g", " ", "P", "r", "o", "j", "e", "c", "t", "s"]}
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

export default LearningProjects
