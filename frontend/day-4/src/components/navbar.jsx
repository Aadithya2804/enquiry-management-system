import { Link } from "react-router-dom";


const NavigationBar = () => {
       return (
        <div className="navbox">
  
  
              <nav className="navbar">
              <ul className="nav-list">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><a href="/enquiry">Enquiry</a></li>
             </ul>
              <div className="rightNav">
              <input type="text" name="search"
              id="search" placeholder="Search"></input>

              {/* <button className="btn btn-sm">Search</button> */}
      </div>
      </nav>
      </div>
      );
  };
  
  
  export default NavigationBar;
