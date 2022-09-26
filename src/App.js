
import './App.scss'
import {Route,Routes,Link,Switch} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/home'
import About from './components/About'
import Contact from './components/Contact'
//import Signup from './components/Signup'
import ProjectsPreview from './components/Projects'


import MemeGen from './components/Projects/ReactProjects/MemeGen/index'
import NoteApp from './components/Projects/ReactProjects/NoteApp/index'
import Tenzies from './components/Projects/ReactProjects/Tenzie/index'
function App() {
  return (
    
    
      <Routes>
      <Route path="/"  element= { <Layout/> }>
      <Route path="/"  forceRefersh={true} element={<Home/>}/>
      <Route path="about"  element={<About/>} />
      <Route path="contact" forceRefersh={true} element= { <Contact/> }/>
       
      <Route path="projects" forceRefersh={true} element= { <ProjectsPreview/> }/>
      <Route path="meme-gen"  element= { <MemeGen/> }/>
         <Route path="note-app"  element= { <NoteApp/> }/>
         <Route path="tenzies"  element= { <Tenzies/> }/>
     </Route>
      </Routes>
   
  
  );
}

export default App;
