function Summary({ sgpa, cgpa }) {

  return (

    <div className="gpa-cards">

      <div className="gpa-card">

        <h3>SGPA (Semester GPA)</h3>

        <div className="gpa-value">

          {sgpa}

        </div>

      </div>

      <div className="gpa-card">

        <h3>CGPA (Cumulative GPA)</h3>

        <div className="gpa-value">

          {cgpa}

        </div>

      </div>

    </div>

  );

}

export default Summary;