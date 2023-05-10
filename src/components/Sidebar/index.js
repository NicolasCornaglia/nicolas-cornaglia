import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faProjectDiagram, faUniversity, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './index.scss'

const Sidebar = () => {

   return (
      <div className='nav-bar'>
         <Link className='logo' to='/' onClick={() => {window.location.href="/home"}}>
         </Link>
         <nav>
            <NavLink
               exact="true"
               activeClassName="active"
               to="/home"
               onClick={() => {window.location.href="/home"}}
               >
               <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink
               exact="true"
               activeClassName="active"
               className="about-link"
               to="about"
               onClick={() => {window.location.href="/about"}}>
               <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink
               exact="true"
               activeClassName="active"
               className="contact-link"
               to="/contact"
               onClick={() => {window.location.href="/contact"}}>
               <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <NavLink
               exact="true"
               activeClassName="active"
               className="studies-link"
               to="/studies"
               onClick={() => {window.location.href="/studies"}}>
               <FontAwesomeIcon icon={faUniversity} color="#4d4d4e" />
            </NavLink>
            <NavLink
               exact="true"
               activeClassName="active"
               className="projects-link"
               to="/projects"
               onClick={() => {window.location.href="/projects"}}>
               <FontAwesomeIcon icon={faProjectDiagram} color="#4d4d4e" />
            </NavLink>
         </nav>
         <ul>
            <li>
               <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nicolas-cornaglia/">
                  <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
               </a>
            </li>
            <li>
               <a target="_blank" rel="noreferrer" href="https://github.com/NicolasCornaglia/">
                  <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
               </a>
            </li>
         </ul>
      </div>
   )
}


export default Sidebar