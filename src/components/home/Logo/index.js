import './index.scss'
import LogoA from './../../../assets/images/logo-s.png'
import{motion} from "framer-motion"
import { useEffect,useRef,useState } from 'react'
const Logo=()=>{
  const transition = { duration: 4, yoyo: false, ease: "easeInOut" }
    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()
    // useEffect(() => {
    //   gsap.registerPlugin(DrawSVGPlugin)
  
    //   gsap.timeline().to(bgRef.current, {
    //       duration: 1,
    //       opacity: 1,
    //     })
    //     .from(outlineLogoRef.current, {
    //       drawSVG: 0,
    //       duration: 3,
          
    //     })
  
    //   gsap.fromTo(
    //     solidLogoRef.current,
    //     {
    //       opacity: 0,
    //     },
    //     {
    //       opacity: 1,
    //       delay: 3,
    //       duration: 3,
    //     }
    //   )
      
    // }, [])
    const[logoClass,setLogoClass]=useState('hidden-logo solid-logo')
    useEffect(()=>{
        
        return setTimeout(() => {
          setLogoClass("solid-logo")
        }, 10000)
    },[])
    return(
     <div className='logo-container' ref={bgRef}>
       <img className={logoClass} src={LogoA} alt='a' ref={solidLogoRef}/>
       
       <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
       width="610pt" height="610pt" viewBox="225 870 610 610"  xml="preserve">
    
    <g
              
              transform="translate(0 457) scale(3.35 3.35)"
              fill="none"
            />
            <motion.path
            className="svg-container"
            ref={outlineLogoRef}
            d="M586.99,1227.69c-1.49-4.16-2.65-7.73-4.04-11.21c-3.71-9.23-7.42-18.46-11.32-27.62
            c-5-11.75-10.31-23.37-15.26-35.15c-4.36-10.37-8.34-20.9-12.63-31.3c-4.42-10.73-9.05-21.38-13.51-32.09
            c-3.12-7.51-6.05-15.09-9.18-22.6c-3.94-9.46-8.18-18.8-11.97-28.32c-3.19-8-6.02-16.16-5.91-24.98c0.05-3.67,0-7.33,0.02-11
            c0.01-1.16-0.27-2.53,0.22-3.46c2.44-4.55,0.86-9.11,0.33-13.68c-2.3-19.69,3.15-36.9,16.68-51.42
            c12.28-13.18,27.62-20.19,45.28-23.36c9.84-1.77,19.19-1.05,28.65,1.12c17.56,4.03,29.97,14.91,38.49,30.22
            c4.76,8.56,8.51,17.71,12.33,26.75c9.85,23.32,19.48,46.73,29.21,70.1c13.57,32.59,27.13,65.19,40.73,97.77
            c18.08,43.34,36.2,86.67,54.29,130.01c9.37,22.44,18.84,44.83,28.05,67.34c5.15,12.59,6.49,25.68,4.17,39.16
            c-0.41,2.36-0.04,4.95,0.42,7.35c1.69,8.96,1.53,17.98-0.43,26.74c-1.86,8.28-5.89,15.83-10.9,22.79
            c-6.67,9.27-15.55,16.03-25.61,20.9c-10.16,4.92-20.9,8.54-32.52,8.32c-8.3-0.16-16.7,0.73-24.78-1.71
            c-13.85-4.19-24.67-12.45-32.84-24.5c-5.85-8.62-9.6-18.19-13.82-27.57c-2.45-5.45-4.93-10.89-7.28-16.38
            c-0.92-2.15-2.34-3.1-4.63-2.91c-0.99,0.08-2,0.01-3,0.01c-55.16,0-110.31,0-165.47,0c-1.33,0-2.78-0.31-3.97,0.12
            c-1.41,0.51-3.19,1.36-3.77,2.57c-3.9,8.08-7.48,16.31-11.24,24.46c-3.76,8.15-8.33,15.82-13.6,23.13
            c-4.17,5.79-9.36,10.34-15.28,14.08c-8.24,5.21-16.98,8.97-27.07,8.73c-9.46-0.23-18.95,0.47-28.23-2.19
            c-9.99-2.87-19.23-7.04-27.65-13.3c-6.82-5.07-11.85-11.56-16.81-18.21c-0.88-1.18-1.51-2.59-2.07-3.96
            c-3.7-9.12-6.73-18.36-5.91-28.46c0.31-3.81-0.81-7.92,0.25-11.43c1.74-5.74,0.05-11.07-0.23-16.59
            c-0.64-12.84,1.51-25.15,6.85-36.96c19.04-42.02,37.95-84.1,56.87-126.18c6.01-13.37,11.94-26.77,17.86-40.18
            c3.58-8.11,7.71-15.91,13.19-22.89c15.71-20.02,35.99-28.87,61.46-24.9c18.09,2.82,33.62,10.64,45.87,24.28
            c14.13,15.74,19.13,34.28,15.87,55.16c-0.45,2.88-0.5,5.99,0.07,8.83c1.4,7.05,1.55,14.02,0.06,21.05
            c-0.62,2.95,0.26,3.93,3.93,3.95c12.16,0.06,24.33,0.02,36.49,0C584.51,1228.12,585.31,1227.92,586.99,1227.69z"
            fill="transparent"
            strokeWidth="12"
            stroke="rgba(255, 255, 255, 0.69)"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
 
     </svg>
        


     </div>
    )
}
export default Logo