import './index.scss'
import { useEffect,useState,useCallback } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetter'
import Logo from './Logo'
// import Loader from 'react-loaders'
const Home=()=>{
    const [letterClass,setLetterClass]= useState('text-animate');
    let hi=`Hi I'am`
    const hiArr=hi.split('');
    let name='mmar'
    const nameArr=name.split('');
    let jobName='web developer';
    const jobArr=jobName.split('');
    useEffect(() => {
      return setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])
      
    return (
    <div className=" home-page">
       <div className="text-zone" >
        <h1>
         <span ><AnimatedLetters letterClass={letterClass} strArr={hiArr} idx={10}/></span>
       <br />
         <span><img
           src={LogoTitle}
           alt="JavaScript Developer Name, Web Developer Name"
        /></span>    
         <span><AnimatedLetters letterClass={letterClass} strArr={nameArr} idx={13}/></span>   
       <br />
       <AnimatedLetters letterClass={letterClass} strArr={jobArr} idx={15}/>
       <br/>
       </h1>
      <h2>Front End Developer / JavaScript </h2>
      
      <span>
      <Link to="/contact" className="flat-button" onClick={() => { 
        setTimeout(() => {
         window.location.reload();
         }, 500)
        }}>
        CONTACT ME
      </Link>
      </span>
      <span>
     
      </span>
      <span>
      <Link to="/projects" className="flat-button" onClick={() => { 
        setTimeout(() => {
         window.location.reload();
         }, 500)
        }}>
       Explore my projects 
      </Link>
      </span>
      
       </div>
       <div className='logo'>
         <Logo/>
       </div>
      
    </div>
    )
}
export default Home