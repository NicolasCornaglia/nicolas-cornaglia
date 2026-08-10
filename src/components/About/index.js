
import AnimatedLetters from '../AnimatedLetters/index.js'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAws, faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faPython, faReact, faTrello, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faAtom, faBolt, faCode, faCubes, faDatabase, faInfinity, faKey, faLaptopCode, faLayerGroup, faNetworkWired, faPaperPlane, faPeopleGroup, faServer, faSitemap, faVial, faWind } from '@fortawesome/free-solid-svg-icons'
import './index.scss'
import Loader from 'react-loaders'
import picture from '../../assets/images/portrait.jpg'

const skillGroups = [
   {
      title: 'Frontend',
      skills: [
         { icon: faReact, color: '#61dafb', label: 'React' },
         { icon: faVuejs, color: '#4fc08d', label: 'Vue.js' },
         { icon: faCode, color: '#ffd700', label: 'TypeScript' },
         { icon: faJsSquare, color: '#efd81d', label: 'JavaScript' },
         { icon: faHtml5, color: '#f06529', label: 'HTML' },
         { icon: faCss3, color: '#28a4d9', label: 'CSS / SCSS' },
         { icon: faWind, color: '#ffd700', label: 'Tailwind' },
         { icon: faAtom, color: '#ffd700', label: 'Electron' },
      ],
   },
   {
      title: 'Backend',
      skills: [
         { icon: faPython, color: '#dd0031', label: 'Python' },
         { icon: faBolt, color: '#ffd700', label: 'FastAPI' },
         { icon: faNodeJs, color: '#339933', label: 'Node.js' },
         { icon: faServer, color: '#ffd700', label: 'Express' },
         { icon: faKey, color: '#ffd700', label: 'JWT' },
         { icon: faDatabase, color: '#ffd700', label: 'SQLAlchemy' },
         { icon: faLayerGroup, color: '#ffd700', label: 'Sequelize' },
      ],
   },
   {
      title: 'Data & APIs',
      skills: [
         { icon: faDatabase, color: '#ffd700', label: 'SQL' },
         { icon: faDatabase, color: '#336791', label: 'PostgreSQL' },
         { icon: faNetworkWired, color: '#ffd700', label: 'REST APIs' },
         { icon: faPaperPlane, color: '#ff6c37', label: 'Postman' },
      ],
   },
   {
      title: 'Practices & Tools',
      skills: [
         { icon: faGitAlt, color: '#ec4d28', label: 'Git' },
         { icon: faInfinity, color: '#ffd700', label: 'CI/CD' },
         { icon: faAws, color: '#ff9900', label: 'AWS' },
         { icon: faVial, color: '#ffd700', label: 'TDD' },
         { icon: faPeopleGroup, color: '#ffd700', label: 'Agile / Scrum' },
         { icon: faTrello, color: '#0079bf', label: 'Kanban' },
         { icon: faCubes, color: '#ffd700', label: 'OOP' },
         { icon: faSitemap, color: '#ffd700', label: 'MVC' },
         { icon: faLaptopCode, color: '#ffd700', label: 'VSCode' },
      ],
   },
]



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
                  Hi, I'm Nicolas Cornaglia. I was born in 1996 in Rafaela, Santa Fe, Argentina. I studied Physics at the National University of Rosario, and later trained as a web developer.
               </p>
               <p className='paragraph-about'>
                  I'm an ambitious fullstack developer looking for a backend-focused role at a company where I can work with the latest technologies on challenging and diverse projects.
               </p>
               <p className='paragraph-about'>
                  I'm quietly confident, naturally curious, and constantly working to improve both my skill set and myself as a person.
                  Studying physics taught me hard skills that translate directly to software development, along with valuable soft skills and a lasting sense of curiosity.
               </p>
               <p className='paragraph-about'>
                  If I had to define myself in one sentence: a family-oriented person with a drive to keep improving not only myself but also those around me, a sports enthusiast, and a technology enthusiast.
               </p>

               <div className="skills-section">
                  {skillGroups.map((group) => (
                     <div className="skills-group" key={group.title}>
                        <h4 className="skills-title">{group.title}</h4>
                        <div className="card-container">
                           {group.skills.map((skill) => (
                              <div className="card" key={skill.label}>
                                 <FontAwesomeIcon icon={skill.icon} color={skill.color} />
                                 <span>{skill.label}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  ))}
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