import  { useState } from 'react';
import { Link } from 'react-router-dom';
import "../assets/signup.css";

function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phonenumber, setPhonenumber] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signing up with:', username, email, password, address, phonenumber);
  };

  return (
    <div className='signup-container'>
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          {/* <div> */}
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          {/* </div> */}
          {/* <div> */}
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          {/* </div> */}
          {/* <div> */}
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          {/* </div> */}
          {/* <div> */}
            <label htmlFor="address">Address</label>
            <input
              type="address"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          {/* </div> */}
          {/* <div> */}
            <label htmlFor="phonenumber">Phone no</label>
            <input
              type="phonenumber"
              id="phonenumber"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
              required
            />
          {/* </div> */}
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <Link to="/">Login</Link></p>
      </div>
    </div>
  );
}

export default SignupPage;
