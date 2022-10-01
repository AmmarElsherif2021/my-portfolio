import {useState,useEffect,useRef} from 'react'
import AnimatedLetters from '../AnimatedLetter'
import './index.scss'
import { motion } from "framer-motion"

import JsIcon from './imgs/jsIcon.png'
import ReactIcon from './imgs/ReactIcon.png'
import JavaIcon from './imgs/java.jpg'
import CIcon from './imgs/c.jpg'

// import Loader from 'react-loaders'
const About=()=>{
  
    const [letterClass,setLetterClass]=useState('text-animate');
    let aboutStr='About me'
    const aboutArr=aboutStr.split('');

    useEffect(() => {
       return setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

      const[ballClass,setBallClass]=useState('wheel-card');
      //wheel Motion code:

      
    
  
     
    //                 duration: 2.5,
    //                 repeat: 0,            
    //                 repeatDelay: 0,
    //                 yoyo: false,
    //                 ease: "power1.in",
    //                 width:100,
    //                 height:100,
    //                 opacity:1,
                    
    //                 motionPath:{
    //                     path: "#path1",
    //                     align: "#path1",
    //                     autoRotate: false,
    //                     alignOrigin: [0.5, 0.5],
    //                     start:1,
    //                     end:0.7,

  
    useEffect(() => {
      return setTimeout(() => {
         setBallClass('wheel-card ball-swim')
       }, 1000)
     },[])
     
     
          const transition = { duration: 4, yoyo: false, ease: "easeInOut"}
          
        

          const pathsId=[];
          for(let i=1;i<5;i++){
             pathsId.push(`path${i}`);
          }
          const paths=pathsId.map((x)=>{
            return(
              <svg className='svg' height="400" version="1.1" width="470" xmlns="http://www.w3.org/2000/svg">
                <motion.path 
                id={x} 
                fill="none" 
                stroke="#eeeeee" 
                d="M1037,287S285,46,89,365" 
                
                opacity="1" 
               
                strokeWidth="5"
                
                strokeLinecap="round"
                initial={{ pathLength: 1 }}
                animate={{ pathLength: 1 }}
                transition={transition}
                />
                </svg>
            )
          });
          
          let iconArr=[
            {id:'wheel1',src:JsIcon},
            {id:'wheel2',src:ReactIcon},
            {id:'wheel3',src:JavaIcon},
            {id:'wheel4',src:CIcon}];

          const Icons=iconArr.map((icon,i)=>{
            return(
              <motion.div id={icon.id} 
                          className={ballClass}
                          initial={{ x:'-267px' ,y:'-60px', scale: 1 }}
                            animate={{x: `${200*Math.sin(i*45)}px`,y:`${200*Math.cos(i*-45)}px`, scale:4 }}
                            transition={{ duration: 1+i, yoyo: false, ease: "easeInOut"}}
                            ><img className='iconImg' src={icon.src}/></motion.div>
            )
           })
          ;
          // {<div 
          //   id={x.id} className={ballClass} ><img className='iconImg' src={x.src}/></div>}
          //initial={{ offsetDistance: "100%", scale: 2.5 }}
          //{<h1>Important links</h1>
          //<a href="https://www.javaguides.net/2020/07/understanding-react-app-folder-structure.html">understanding react app folder</a>}
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

           <div className='wheel-container'>
            <div className='path-container'>
              
            
              
            
            

            </div>
           <div className='wheel'>
               {Icons}
         </div>
         </div>
          </div>


          
    )
};
export default About;