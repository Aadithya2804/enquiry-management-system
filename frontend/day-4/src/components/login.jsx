import  { useState } from 'react';
import { Link } from 'react-router-dom';
import "../assets/login.css";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [setIsLoggedIn, setIsLoggedIn] = useState(false);
  const[error,setError]=useState('');

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      // setIsLoggedIn(true);
      alert('Login successful');
    } else {
      setError('Invalid username or password');
    }
  };

  // const handleLogin = () => {
  //   // Basic validation
  //   if (!username.trim()) {
  //     setError('Please enter your username');
  //   } else if (!password.trim()) {
  //     setError('Please enter your password');
  //   } else if (username !== 'user' || password !== 'password') {
  //     setError('Invalid username or password');
  //   } else {
  //     setError(''); // Clear any previous errors
  //     // Proceed with login
  //     alert('Login successful');
  //   }
  // };

  // const handleLogout = () => {
  //   // setIsLoggedIn(false);
  //   setUsername('');
  //   setPassword('');
  // };

  return (
    <div className="login-container">
      <div id='box'>
        <h2>Login</h2>
        {error &&<p>{error}</p>}
        <input className='i1'
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <input 
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
       <Link to="/navbar">
        <button onClick={handleLogin}>Login</button></Link> 
        <p>Dont have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
}

export default Login;
