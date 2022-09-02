import "./index.scss"
import data from "./data"
import Card from "./Cards"
import { Link, Outlet } from "react-router-dom"

const ProjectsPreview=()=>{
    const cards=data.map((x)=>{
        return(
           <Link className="card-item" to={x.path}>
           <Card title={x.title} description={x.description} className="card-item" key={x.id}/>
           </Link>
            
            )
    })
 return (
    <section className="projects-container">
    
        {cards}

      
    <Outlet/>
    </section>
 )
}
export default ProjectsPreview;