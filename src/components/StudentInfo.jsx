function StudentInfo({

  firstSemester,

  setFirstSemester,

  previousCGPA,

  setPreviousCGPA,

  previousCredits,

  setPreviousCredits,

}) {

  return (

    <>

      <div className="semester-card">

        <div className="semester-text">

          <h3>Academic Status</h3>

          <p>Are you a 1st Semester Student?</p>

        </div>

        <div>

          <span className="status-text">

            {firstSemester ? "Yes" : "No"}

          </span>

          <label className="switch">

            <input

              type="checkbox"

              checked={firstSemester}

              onChange={() =>

                setFirstSemester(!firstSemester)

              }

            />

            <span className="slider"></span>

          </label>

        </div>

      </div>

      {!firstSemester && (

        <div className="card">

          <h3>Previous Academic Record</h3>

          <div className="subject-card">

            <div className="form-group">

              <label>Previous CGPA</label>

              <input

                type="number"

                step="0.01"

                placeholder="Enter Previous CGPA"

                value={previousCGPA}

                onChange={(e) =>

                  setPreviousCGPA(e.target.value)

                }

              />

            </div>

            <div className="form-group">

              <label>Completed Credit Hours</label>

              <input

                type="number"

                placeholder="Enter Credits"

                value={previousCredits}

                onChange={(e) =>

                  setPreviousCredits(e.target.value)

                }

              />

            </div>

          </div>

        </div>

      )}

    </>

  );

}

export default StudentInfo;