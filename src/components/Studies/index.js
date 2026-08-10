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
                  <h3>(2023) Computer Science Coursework</h3>
                  <p className='paragraph'>
                     While working, my interest in computer science never faded, so I decided to keep studying to deepen my knowledge in the field.
                     I completed Programming I and II and Data Structures and Algorithms I and II, focusing mainly on Python, good practices, data structures, algorithmic complexity, Big O notation, hash tables, binary trees, and graphs.
                     The study plan can be viewed
                     <a target="_blank" rel="noreferrer" href="https://web.fceia.unr.edu.ar/images/PDF/planes_de_estudio/Plan_LCC_CD_41043_2023_2.pdf" className='link'>
                        <span>here</span>
                     </a>
                     .
                  </p>
               </div>
               <div>
                  <h3>(2022) DIGITAL HOUSE COURSE</h3>
                  <p className='paragraph'>
                     While finishing my Physics degree, I started a Fullstack Web Development course on the Digital House platform.
                     We attended online classes with 20 other students, where we were taught the theory and implementation of JavaScript, HTML5, CSS, React, Node.js, SQL, and more.
                     To pass the course, we had to integrate all these technologies into an e-commerce website, which you can see
                     <a target="_blank" rel="noreferrer" href="https://github.com/NicolasCornaglia/Portfolio/tree/main/proyecto-integrador-DecoHogar" className='link'>
                        <span>here</span>
                     </a>
                     .
                  </p>
               </div>
               <div>
                  <h3>(2015-2022) UNIVERSITY</h3>
                  <p className='paragraph'>
                     In 2015 I moved to Rosario, Argentina to study Physics at the National University of Rosario. It was a fulfilling experience in which I not only learned
                     about physics and some of its intersections with programming, but also made lots of friends and great memories.
                     You can download my academic transcript
                     <Link to="/files/historia_academica.pdf" target="_blank" download className='link' >here</Link>,
                     and my Physics thesis, "Studies on the Sticking Probability of CH4 on Pt(110) with Potentials Obtained by Neural Networks,"
                     <Link to="/files/TesinaNicolasCornaglia.pdf" target="_blank" download className='link' >here</Link>
                     .
                  </p>
               </div>
               <div>
                  <h3>(1999-2014) PRIMARY AND SECONDARY SCHOOL</h3>
                  <p className='paragraph'>
                     I attended a bilingual school called La Plaza, located in Rafaela, Argentina.
                     From a very young age, I had curricular subjects taught in English, which gave me a fluent understanding of a wide range of topics in the language.
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