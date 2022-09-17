import {useState,useEffect,useRef} from 'react'
import AnimatedLetters from '../AnimatedLetter'
import './index.scss'
import gsap from 'gsap-trial'
import {MotionPathPlugin} from "gsap/MotionPathPlugin"; 
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
      //wheel GSAP code:
      gsap.registerPlugin(MotionPathPlugin);
      const boxRef = useRef();
      useEffect(() => {

        gsap.to("#ball1", {
     
                    duration: 2.5,
                    repeat: 0,            
                    repeatDelay: 0,
                    yoyo: false,
                    ease: "power1.in",
                    width:100,
                    height:100,
                    opacity:1,
                    
                    motionPath:{
                        path: "#path1",
                        align: "#path1",
                        autoRotate: false,
                        alignOrigin: [0.5, 0.5],
                        start:1,
                        end:0.7,

                    }
     
        });
      
        
     }, []);   
     useEffect(
      ()=>{
        gsap.to("#ball2", {
                    duration: 2.3,
                    repeat: 0,            
                    repeatDelay: 0,
                    yoyo: false,
                    ease: "power1.in",
                    width:100,
                    height:100,
                    opacity:1,
                    
                    motionPath:{
                        path: "#path2",
                        align: "#path2",
                        autoRotate: false,
                        alignOrigin: [0.5, 0.5],
                        start:1,
                        end:0.7, 
                    }
          
      });
     
      }
      ,[])
      useEffect(
        ()=>{
          gsap.to("#ball3", {
                      duration: 2.7,
                      repeat: 0,            
                      repeatDelay: 0,
                      yoyo: false,
                      ease: "power1.in",
                      width:100,
                      height:100,
                      opacity:1,
                      
                      motionPath:{
                          path: "#path3",
                          align: "#path3",
                          autoRotate: false,
                          alignOrigin: [0.5, 0.5],
                          start:1,
                          end:0.69, 
                      }
            
        });
       
        }
        ,[])

        useEffect(
          ()=>{
            gsap.to("#ball4", {
                        duration: 2.9,
                        repeat: 0,            
                        repeatDelay: 0,
                        yoyo: false,
                        ease: "power1.in",
                        width:100,
                        height:100,
                        opacity:1,
                        
                        motionPath:{
                            path: "#path4",
                            align: "#path4",
                            autoRotate: false,
                            alignOrigin: [0.5, 0.5],
                            start:1,
                            end:0.67, 
                        }
              
          });
         
          }
          ,[])
    
          useEffect(() => {
            return setTimeout(() => {
               setBallClass('wheel-card ball-swim')
             }, 1000)
           },[])
          const iconArr=[0,JsIcon,ReactIcon,JavaIcon,CIcon];
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
            
            <svg className='svg' height="400" version="1.1" width="470" xmlns="http://www.w3.org/2000/svg">
            <path id="path1" fill="none" stroke="#eeeeee" d="M1037,287S285,46,89,365" 
            stroke-width="3" 
            opacity="0.4" 
            />
            </svg>

            <svg className='svg' height="400" version="1.1" width="470" xmlns="http://www.w3.org/2000/svg">
            <path id="path2" fill="none" stroke="#eeeeee" d="M1037,287S285,46,89,365" 
            stroke-width="3" 
            opacity="0.4" 
            />
            </svg>

            <svg className='svg' height="400" version="1.1" width="470" xmlns="http://www.w3.org/2000/svg">
            <path id="path3" fill="none" stroke="#eeeeee" d="M1037,287S285,46,89,365" 
            stroke-width="3" 
            opacity="0.4" 
            />
            </svg>
          
            <svg className='svg' height="400" version="1.1" width="470" xmlns="http://www.w3.org/2000/svg">
            <path id="path4" fill="none" stroke="#eeeeee" d="M1037,287S285,46,89,365" 
            stroke-width="3" 
            opacity="0.4" 
            />
            </svg>
            

            </div>
           <div className='wheel'>
             <div id='ball1' className={ballClass}><img className='iconImg' src={iconArr[1]}/></div>
             <div id="ball2" className={ballClass}><img className='iconImg' src={iconArr[2]}/></div>
             <div id="ball3" className={ballClass}><img className='iconImg' src={iconArr[3]}/></div>
             <div id="ball4" className={ballClass}><img className='iconImg' src={iconArr[4]}/></div>
           </div>
           
         </div>
         
          </div>


          
    )
};
export default About