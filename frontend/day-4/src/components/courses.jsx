import '../assets/courses.css'
function SheCodes() {
  return (
    <div>
      <h1>SheCodes</h1>
      <h2>Coding Workshop</h2>
      <button>Apply now</button>
      <ul>
        <li>
          <a href="https://www.shecodes.io/students" target="_blank" className="coders">Coders</a>
        </li>
        <li>
          <a href="https://www.shecodes.io/courses" target="_blank" className="courses">Courses</a>
        </li>
        <li>
          <a href="https://www.shecodes.io/stories" target="_blank" className="stories">Stories</a>
        </li>
      </ul>
      <hr />
      <p>
        <strong>More info</strong>
      </p>
      <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/059/102/original/woman-coding.png?1671163830" width="300" alt="Woman Coding" />
    </div>
  );
}

export default SheCodes;
