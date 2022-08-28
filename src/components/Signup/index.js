import './index.scss'
import axios from 'axios';
import {useState} from 'react' 

const Signup=()=>{
    const [formData, setFormData] = useState(
        {
            fullName: "", 
            email: "", 
            password: "", 
            confirmPassword:"",
            phone:""
        }
    )
    function handleChange(event) {
        const {name, value, type} = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }
    function handleSubmit(event){ 
        event.preventDefault();
     
        if(formData.password===formData.confirmPassword){
          const obj ={
            name:formData.name,
            email:formData.email,
            phone:formData.phone,
            password:formData.password,
            confirmPassword:formData.confirmPassword,
          };
         
          axios.post('http://localhost/my-portfolio/src/php/insert.php',obj)
          .then(res=> console.log(res.data))//maybe post it
          .catch(error => {
            console.log(error.response)
        });
       
      //To clear text box values 
        setFormData({
          fullName: '',
          email:'',
          phone:'',
          confirmPassword:'',
          password:'',       
        })
        }
       
        else{
          alert("Password mismatch")
        }
         
      }
    return(
    <div className="card">
    
    <form onSubmit={handleSubmit} className='card-content'>
        
        <h1>Sign up here</h1>
        
        <input
                type="text"
                placeholder="Full Name"
                onChange={handleChange}
                name="fullName"
                value={formData.fullName}
            />
        <input
                type="email"
                placeholder="example@mail.com"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
        <input
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
            value={formData.password}
        />
        <input
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
            name="confirmPassword"
            value={formData.confirmPassword}
        />
        <input
            type="text"
            placeholder="Phone"
            onChange={handleChange}
            name="phone"
            value={formData.phone}
        />
   
    
        <button className='flat-button' > Sign Up </button>
    
    </form>  
 
    </div>
    )
}
export default Signup