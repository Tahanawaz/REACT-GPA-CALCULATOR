function SemesterToggle({ firstSemester, setFirstSemester }) {
  return (
    <div className="semester-card">

      <div className="semester-text">
        <h3>Academic Status</h3>
        <p>
          Are you a <strong>1st Semester Student?</strong>
        </p>
      </div>

      <label className="switch">

        <input
          type="checkbox"
          checked={firstSemester}
          onChange={() => setFirstSemester(!firstSemester)}
        />

        <span className="slider"></span>

      </label>

      <span className="status-text">
        {firstSemester ? "Yes" : "No"}
      </span>

    </div>
  );
}

export default SemesterToggle;