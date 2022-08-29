import "./index.scss"
import data from "./data"
import Card from "./Cards"
const ProjectsPreview=()=>{
    const cards=data.map((x)=>{
        return(
            <span>
            <Card title={x.title} className="card-item" key={x.id}/>
            </span>
            )
    })
 return (
    <section className="projects-container">
    {cards}
    </section>
 )
}
export default ProjectsPreview;