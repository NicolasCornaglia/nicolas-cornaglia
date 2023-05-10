
import AnimatedLetters from '../AnimatedLetters/index.js'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faPython } from '@fortawesome/free-brands-svg-icons'
import './index.scss'
import Loader from 'react-loaders'
import picture from '../../assets/images/portrait.jpg'



const About = () => {

   const [letterClass, setLetterClass] = useState('text-animate')

   useEffect(() => {
      return setTimeout(() => {
         setLetterClass('text-animate-hover')
      }, 3000)
   }, [])

   return (
      <>
         <div className="container about-page">

            <div className="text-zone">
               <h1>
                  <AnimatedLetters
                     letterClass={letterClass}
                     strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                     idx={15}
                  />
               </h1>
               <div className="pictureContainerMobile">
                  <img src={picture} alt='foto de perfil' className='profilePicture' />
               </div>
               <p className='paragraph-about'>
                  Hi, I'm Nicolas Cornaglia and I was born in 1996 in Rafaela, Santa Fe, Argentina. I studied Physics at the National University of Rosario and later I took courses to develop myself as web developer.
               </p>
               <p className='paragraph-about'>
                  I'm a very ambitious fullstack developer looking for a front-end role in an IT company with the opportunity to work on with the latest technologies on challenging and diverse projects.
               </p>
               <p className='paragraph-about'>
                  I'm quietly confident, naturally curious and continuously working on improving my skillset and myself as a person.
                  While studying physics I learnt not only hard skills that can be aplied to web develpment but also lots of soft skills and the power of curiosity.
               </p>
               <p className='paragraph-about'>
                  If I need to define myself in one sentence that would be a family person, curious with an attitud towards improving not only myself but also the people that surround me, a sports fanatic, and tech-obsessed.
               </p>

               <div className="card-container">
                  <div className="card">
                     <FontAwesomeIcon icon={faHtml5} color="#f06529" />
                  </div>
                  <div className="card">
                     <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
                  </div>
                  <div className="card">
                     <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
                  </div>
                  <div className="card">
                     <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
                  </div>
                  <div className="card">
                     <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
                  </div>
                  <div className="card">
                     <FontAwesomeIcon icon={faPython} color="#dd0031" />
                  </div>
               </div>
            </div>

            <div className="pictureContainer">
               <img src={picture} alt='foto de perfil' className='profilePicture' />
            </div>
         </div>

         <Loader type="pacman" />
      </>
   )
}

export default About