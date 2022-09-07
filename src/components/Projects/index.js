import "./index.scss"
import data from "./data"
import Card from "./Cards"
import { Link, Outlet } from "react-router-dom"
import {useState,useEffect} from 'react'
import MemeCvr from './cvrImgs/logo4.png'
import NoteCvr from './cvrImgs/note.png'
const ProjectsPreview=()=>{
    const cards=data.map((x)=>{
        const arr=[0,MemeCvr,NoteCvr,MemeCvr]
        return(
           <Link className="card-item" to={x.path}>
             <Card title={x.title} description={x.description} className="card-item" cvr={arr[x.id]} key={x.id}/>
           </Link>
            
            )
    })
    
    const useMousePosition = () => {
        const [
          mousePosition,
          setMousePosition
        ] = useState({ x: null, y: null });
      
        useEffect(() => {
          const updateMousePosition = ev => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
          };
          
          window.addEventListener('mousemove', updateMousePosition);
      
          return () => {
            window.removeEventListener('mousemove', updateMousePosition);
          };
        }, []);
      
        return mousePosition;
      };
      const mousePosition = useMousePosition();
      function handleOver(){
        if(mousePosition.y>350){
            this.scrollBy(0,100)
         }
      }

  
 return (
    <div className='container' >
    <section className="text-container">
      <h1>My React Projects {JSON.stringify(mousePosition)}</h1>
      <p>
        here are some of mini projects I built using React hooks like useState and useEffect.
      </p>
    </section>
    <section className="projects-container" onPointerOver={()=>this.handleOver()}>
    
    {cards}

  
    <Outlet/>
</section>
    </div>
    
 )
}
export default ProjectsPreview;