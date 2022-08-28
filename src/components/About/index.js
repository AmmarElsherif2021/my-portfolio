import {useState,useEffect} from 'react'
import AnimatedLetters from '../AnimatedLetter'
import './index.scss'
import Loader from 'react-loaders'
const About=()=>{
    const [letterClass,setLetterClass]=useState('text-animate');
    let aboutStr='About me'
    const aboutArr=aboutStr.split(''); 
    useEffect(() => {
       return setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])
    return(
        <div className='container about-page'>
          <div className='text-zone'>
            <h1>
              <AnimatedLetters strArr={aboutArr} idx={15} className={letterClass}/>
            </h1>
            <p>
            I'm a front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
            </p>
          <p align="LEFT">
            I'm a CS student looking forward my first job in tech field and perpetually working on
            improving my coding skills.
          </p>
          
          </div>
          
        </div>
    )
};
export default About