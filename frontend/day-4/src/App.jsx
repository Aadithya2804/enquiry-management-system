
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Login from './components/login'
import Signup from './components/signup'
import NavigationBar from './components/navbar'
import './assets/navbar.css'
// import Home from './components/home'
import About from './components/about'
import Courses from './components/courses'
import Enquiry from './components/enquiry'

// import LoginPage from './components/login';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import LoginPage from './LoginPage';
// import SignupPage from './SignupPage';

function App() {

  return (
    <>
    <div id='qwe'>
        
      <BrowserRouter>
      <Routes>
        
        <Route path ="/" element ={<Login/>}/>
        <Route path ="/signup" element={<Signup/>}/>
        <Route path ="/navbar" element={<NavigationBar/>}/>
        
       { <Route path="/about" element={<About/>} />} 
         { <Route path="/courses" element={<Courses/>} /> }
          { <Route path="/enquiry" element={<Enquiry/>} />}
        {/* <Route path="/home" exact component={<Home/>} /> */}
        
        
      </Routes>
      </BrowserRouter>
      </div>
      {/* {/* <Navbar/>} */}
      
    </>
  )
}

export default App;
