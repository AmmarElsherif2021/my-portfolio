import './index.scss'
import { useEffect,useState,useCallback } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetter'
import Logo from './Logo'
const Home=()=>{
    const [letterClass,setLetterClass]= useState('text-animate');
    let hi=`Hi I'am`
    const hiArr=hi.split('');
    let name='mmar'
    const nameArr=name.split('');
    let jobName='web developer';
    const jobArr=jobName.split('');
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])
      
    return (
    <div className="container home-page">
       <div className="text-zone" >
        <h1>
         <span ><AnimatedLetters letterClass={letterClass} strArr={hiArr} index={0}/></span>
       <br />
         <span><img
           src={LogoTitle}
           alt="JavaScript Developer Name, Web Developer Name"
        /></span>    
         <span><AnimatedLetters letterClass={letterClass} strArr={nameArr} index={1}/></span>   
       <br />
       <AnimatedLetters letterClass={letterClass} strArr={jobArr} index={2}/>
       <br/>
       </h1>
      <h2>Front End Developer / JavaScript </h2>
      <Link to="/contact" className="flat-button">
        CONTACT ME
      </Link>
       </div>
       <Logo/>
    </div>
    )
}
export default Home