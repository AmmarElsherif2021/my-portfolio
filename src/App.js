
import './App.scss'
import {Route,Routes} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/home'
import About from './components/About'
import Contact from './components/Contact'
import Signup from './components/Signup'
function App() {
  return (
    
    <Routes>
      
      <Route path="/"  element= { <Layout/> }>
       <Route index element={<Home/>}/>
       <Route path="/about"  element= { <About/> }></Route>
       <Route path="/contact"  element= { <Contact/> }></Route>
       <Route path="/signup"  element= { <Signup/> }></Route>

      </Route>
    </Routes>
  
  );
}

export default App;
