import  { useState } from 'react';
import { Link } from 'react-router-dom';
import "../assets/login.css"
// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (username === 'admin' && password === 'password') {
//       console.log('Login successful');
      
      
//     } else {
//       setError('Invalid username or password');
//     }
//   };

//   return (
//     <div className='login'>
//     <div>

//       <h2>Login</h2>
//       {error && <p>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <br></br>
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       {/* <p>Dont  have an account? <a href="/signup">Sign Up</a></p> */}
//       <p>Dont have an account? <Link to="/signup">Sign Up</Link></p>

//     </div>
//     </div>
//   );
// }

// export default Login;


// import  { useState } from 'react';



function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleLogin = () => {

     if (username === 'user' && password === 'password') {
    setIsLoggedIn(true);
    } else {
       alert('Invalid username or password');
    }
  };


    const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };


  return (
    <div >
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {username}!</h2>
         <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div id='box'>
          <h2>Login</h2>
           <input
           type="text"
           placeholder="Username"
            value={username}
           onChange={(e) => setUsername(e.target.value)}
        />
         <br />
          <br/>
         <br/>
            <input
             type="password"
             placeholder="Password"
             value={password}
            onChange={(e) => setPassword(e.target.value)}
           />
         <br />
         <br/>
        
         <button onClick={handleLogin}>Login</button>
         <p>Dont have an account? <Link to="/signup">Sign Up</Link></p>
       </div>
      )}
    </div>
  );
}


export default LoginPage; 
