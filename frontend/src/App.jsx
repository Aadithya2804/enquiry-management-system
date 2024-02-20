
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Login from './components/login'
import Signup from './components/signup'
// import Navbar from './components/navbar';
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
      </Routes>
      </BrowserRouter>
      </div>
      {/* <Navbar/> */}
      
    </>
  )
}

export default App
