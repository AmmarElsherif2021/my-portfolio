import './index.scss'
import AnimatedLetters from '../AnimatedLetter'
import {useState,useEffect,useRef} from 'react'
import emailjs from '@emailjs/browser'
import Gif from './Gif/R.gif'
const Contact=()=>{
    let contactStr='contact me';
    const contactArr=contactStr.split('');
    const [letterClass,setLetterClass]=useState('text-animate');
    useEffect(() => {
        return setTimeout(() => {
           setLetterClass('text-animate-hover')
         }, 3000)
       }, [])
       const formRef=useRef();
       const sendEmail=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_itjba26', 'template_183ev5m', formRef.current, 'oPwZCBN9WY04nIgX7')
        .then(
          () => {
            alert('Message successfully sent!')
            window.location.reload(false)
          },
          () => {
            alert('Failed to send the message, please try again')
          }
        )
       }
    return(
        <div className='container contact-page'>
          <div className='text-zone'>
             <h1><AnimatedLetters strArr={contactArr} idx={15} className={letterClass}/></h1>
             <p>
             I am interested in freelance opportunities - especially on ambitious
             or large projects. However, if you have any other requests or
             questions, don't hesitate to contact me using below form either.
           </p>
           <div className="contact-form">
             <form ref={formRef} onSubmit={sendEmail}>
               <ul>
                 <li className="half">
                   <input placeholder="Name" type="text" name="name" required />
                 </li>
                 <li className="half">
                   <input
                     placeholder="Email"
                     type="email"
                     name="email"
                     required
                   />
                 </li>
                 <li>
                   <input
                     placeholder="Subject"
                     type="text"
                     name="subject"
                     required
                   />
                 </li>
                 <li>
                   <textarea
                     placeholder="Message"
                     name="message"
                     required
                   ></textarea>
                 </li>
                 <li>
                   <input type="submit" className="flat-button" value="SEND" />
                 </li>
               </ul>
             </form>
           </div>
          </div> 
          <div className='gif-container'><img className='gif' src={Gif} alt="harry!!"/></div>
        </div>
        
    )
}
export default Contact;