import LogoTitle from "../../assets/images/N.png"
import { Link } from 'react-router-dom'
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState } from 'react';
import Logo from './Logo'
import './index.scss'
import Loader from 'react-loaders'

const Home = () => {
   const [letterClass, setLetterClass] = useState('text-animate')
   const nameArray = ['i', 'c', 'o', 'l', 'a', 's']
   const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

   useEffect(() => {
      return setTimeout(() => {
         setLetterClass('text-animate-hover')
      }, 4000)
   }, [])

   return (
      <div>
         <div className="container home-page">
            <div className="text-zone">
               <h1>
                  <span className={letterClass}>H</span>
                  <span className={`${letterClass} _12`}>i,</span>
                  <br />
                  <span className={`${letterClass} _13`}>I</span>
                  <span className={`${letterClass} _14`}>'m</span>
                  <img src={LogoTitle} alt='developer' />
                  <AnimatedLetters letterClass={letterClass}
                     strArray={nameArray}
                     idx={15} />
                  <br />
                  <AnimatedLetters letterClass={letterClass}
                     strArray={jobArray}
                     idx={22} />
                  <br />
               </h1>
               <h2> Fullstack Developer / MERN (MongoDB ExpressJS ReactJS NodeJS) </h2>
               <Link to="/contact" className="flat-button" onClick={() => { window.location.href = "/contact" }}> CONTACT ME </Link>
            </div>
            <div className="logo">
               <Logo />
            </div>
         </div>

         <Loader type="pacman" />
      </div>
   );
}

export default Home