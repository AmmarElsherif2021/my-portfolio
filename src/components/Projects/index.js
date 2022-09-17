import "./index.scss"
import data from "./data"
import Card from "./Cards"
import { Link, Outlet } from "react-router-dom"
import {useState,useEffect} from 'react'
import MemeCvr from './cvrImgs/logo4.png'
import NoteCvr from './cvrImgs/note.png'
import TenziCvr from './cvrImgs/tenzie.png'
import Loader from 'react-loaders'
const ProjectsPreview=()=>{
 
  
    const cards=data.map((x)=>{
        const arr=[0,MemeCvr,NoteCvr,TenziCvr]
        return(
           <Link className="card-item" to={x.path}>
             <Card title={x.title} description={x.description} className="card-item" cvr={arr[x.id]} key={x.id}/>
           </Link>
            
            )
    })
    
    // const useMousePosition = () => {
    //     const [
    //       mousePosition,
    //       setMousePosition
    //     ] = useState({ x: null, y: null });
      
    //     useEffect(() => {
    //       const updateMousePosition = ev => {
    //         setMousePosition({ x: ev.clientX, y: ev.clientY });
    //       };
          
    //       window.addEventListener('mousemove', updateMousePosition);
      
    //       return () => {
    //         window.removeEventListener('mousemove', updateMousePosition);
    //       };
    //     }, []);
      
    //     return mousePosition;
    //   };
    //   const mousePosition = useMousePosition();
    //   function handleOver(){
    //     if(mousePosition.y>350){
    //         this.scrollBy(0,100)
    //      }
    //   }

  
 return (
  
    <div className='container' >
    <section className="text-container">
      <h1>My React mini-projects </h1>
      <p>
        here are some of mini projects I built using React hooks like useState and useEffect.
      </p>
    </section>
    <section className="projects-container" onPointerOver={()=>this.handleOver()}>
    
    {cards}

  
    <Outlet/>
</section>
<Loader
loaded={false}
lines={13}
length={20}
width={100}
radius={30}
corners={1}
rotate={0}
direction={1}
color="#000"
speed={1}
trail={60}
shadow={false}
hwaccel={false}
className="spinner"
zIndex={2e9}
top="50%"
left="50%"
scale={1.0}
loadedClassName="loadedContent"
/>
    </div>
    
    
 )
}
export default ProjectsPreview;