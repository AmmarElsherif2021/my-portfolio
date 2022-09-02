import "./index.scss"
export default function Card (props){
    return(
        <div className="card-container">
          <div className='project-cvr'></div>
           <span className='txt-area' >
           <h1>{props.title}</h1>
           <h2>
             {props.desciption}
           </h2>
           </span>
          
        </div>
    )
}