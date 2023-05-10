import './index.scss'
import React from 'react';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import logoDH from '../../assets/images/DH.png'
import logoUNR from '../../assets/images/unr.png'
import logoLP from '../../assets/images/laPlaza.jpg'
import { Link } from 'react-router-dom';

const Studies = () => {
   const [letterClass, setLetterClass] = useState('text-animate')

   useEffect(() => {
      setTimeout(() => {
         setLetterClass('text-animate-hover')
      }, 3000)
   }, [])

   return (
      <div>
         <div className="container studies-page">
            <div className="text-zone">
               <h1>
                  <AnimatedLetters
                     letterClass={letterClass}
                     strArray={['S', 't', 'u', 'd', 'i', 'e', 's']}
                     idx={15} />
               </h1>
               <div>
                  <h3>(2022) DIGITAL HOUSE COURSE</h3>
                  <p className='paragraph'>
                     While finishing my Physics degree, I started a Fullstack Web Developer course on the platform Digital House.
                     We had online clases with 20 other students where we were tought theory and implementation of Javascript, HTML5, CSS, ReactJS, NodeJS, SQL and more.
                     To pass this course we had to integrate all this technologies into an E-commerce website, you can see mine
                     <a target="_blank" rel="noreferrer" href="https://github.com/NicolasCornaglia/Portfolio/tree/main/proyecto-integrador-DecoHogar" className='link'>
                        <span>here</span>
                     </a>
                     .
                  </p>
               </div>
               <div>
                  <h3>(2015-2022) UNIVERSITY</h3>
                  <p className='paragraph'>
                     In 2015 I moved to Rosario, Argentina to study Physics at the National University of Rosario. It was a fulfilling experience where not only I lerned
                     about physics and some of its integrations with programming, but also made lots of friends and great memories.
                     You can download my academic results
                     <Link to="/files/historia_academica.pdf" target="_blank" download className='link' >here</Link>,
                     and my Physics thesis "Studies on Sticking probability of CH4 on Pt(110) with potentials obtained by Neuronal Networks"
                     <Link to="/files/TesinaNicolasCornaglia.pdf" target="_blank" download className='link' >here</Link>
                     .
                  </p>
               </div>
               <div>
                  <h3>(1999-2014) PRIMARY AND SECONDARY SCHOOL</h3>
                  <p className='paragraph'>
                     I attended a bilingual school called La Plaza, located in Rafaela, Argentina.
                     From a very young age we had curricular subjects in english which allowed me to have a fluent understading of different topics in this language.
                  </p>
               </div>

               <div className='logosContainerMobile'>
                  <div className='logoStudiesCont'>
                     <a target="_blank" rel="noreferrer" href="https://www.digitalhouse.com/ar">
                        <img src={logoDH} alt='DHLogo' className='logoStud' />
                     </a>
                  </div>
                  <div className='logoStudiesCont'>
                     <a target="_blank" rel="noreferrer" href="https://web.fceia.unr.edu.ar/es/">
                        <img src={logoUNR} alt='UNRLogo' className='logoStud' />
                     </a>
                  </div>
                  <div className='logoStudiesCont'>
                     <a target="_blank" rel="noreferrer" href="https://www.facebook.com/escuelaplaza/">
                        <img src={logoLP} alt='LaPlazaLogo' className='logoStud' />
                     </a>
                  </div>
               </div>
            </div>

            <div className='logosContainer'>
               <div className='logoStudiesCont'>
                  <a target="_blank" rel="noreferrer" href="https://www.digitalhouse.com/ar">
                     <img src={logoDH} alt='DHLogo' className='logoStud' />
                  </a>
               </div>
               <div className='logoStudiesCont'>
                  <a target="_blank" rel="noreferrer" href="https://web.fceia.unr.edu.ar/es/">
                     <img src={logoUNR} alt='UNRLogo' className='logoStud' />
                  </a>
               </div>
               <div className='logoStudiesCont'>
                  <a target="_blank" rel="noreferrer" href="https://www.facebook.com/escuelaplaza/">
                     <img src={logoLP} alt='LaPlazaLogo' className='logoStud' />
                  </a>
               </div>
            </div>



         </div>


         <Loader type="pacman" />
      </div>
   )
}

export default Studies