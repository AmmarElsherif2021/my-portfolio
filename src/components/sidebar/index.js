import './index.scss'
import {Link, NavLink,useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react'
import LogoS from '../../assets/images/logo-s.png'
//import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome , faUser } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faTwitter,
  
} from '@fortawesome/free-brands-svg-icons'


// const OnCustomButtonAboutClick = () => {
//   const navigate = useNavigate();
//   navigate('/my-portfolio/about')
  
// }
// const OnCustomButtonHomeClick = () => {
//   const navigate = useNavigate();
//   navigate('/my-portfolio/home')
  
// }
// const OnCustomButtonContactsClick = () => {
//   const navigate = useNavigate();
//   navigate('/my-portfolio/contacts')
  
// }


const Sidebar=()=>(
    <div className='nav-bar'>
      <Link className='logo' to='/' onClick={() => { 
        setTimeout(() => {
         window.location.reload();
         }, 500)
        }} >
        <img src ={LogoS} alt="logo" />
        
      </Link>
      <nav>
       <NavLink
         exact="true"
         activeclassname="active"
         to="/"
         onClick={() => { 
          setTimeout(() => {
           window.location.reload();
           }, 500)
          }}
       >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
       </NavLink>
       <NavLink
         exact="true"
         activeclassname="active"
         className="about-link"
         to="about"
         onClick={() => { 
           setTimeout(() => {
            window.location.reload();
            }, 500)
           }}
       >
        
         <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
      
          
         
       </NavLink>
       <NavLink
         exact="true"
         activeclassname="active"
         className="contact-link"
         to="contact"
         onClick={() => { 
          setTimeout(() => {
           window.location.reload();
           }, 500)
          }}
       >
        
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
      
          
       </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/ammar-alshareef-6a085212a/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/AmmarElsherif2021"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/cartoonammar"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
          </a>
        </li>
        
      </ul>
    </div>)
export default Sidebar