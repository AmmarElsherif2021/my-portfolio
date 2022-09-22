
import './App.scss'
import {Route,Routes,Link} from 'react-router-dom'
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
      
      <Route path="/{app-name}"  element= { <Layout/> }>
       <Route index element={<Home/>}/>
       <Route path="/about"  element= { <About/> }></Route>
       <Route path="/contact"  element= { <Contact/> }></Route>
        
       <Route path="/projects"  element= { <ProjectsPreview/> }></Route>
       <Route path="/meme-gen"  element= { <MemeGen/> }> </Route>
          <Route path="/note-app"  element= { <NoteApp/> }></Route>
          <Route path="/tenzies"  element= { <Tenzies/> }></Route>
      </Route>
    </Routes>
  
  );
}

export default App;
