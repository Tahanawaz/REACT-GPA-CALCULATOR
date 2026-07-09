function SubjectTable({ subjects, getGrade }) {

  return (

    <table className="result-table">

      <thead>

        <tr>

          <th>Subject</th>

          <th>Marks</th>

          <th>Credit Hours</th>

          <th>Grade</th>

        </tr>

      </thead>

      <tbody>

        {subjects.map(subject => (

          <tr key={subject.id}>

            <td>{subject.name || "-"}</td>

            <td>{subject.marks || "-"}</td>

            <td>{subject.credit}</td>

            <td>

              <span className="grade-badge">

                {getGrade(Number(subject.marks))}

              </span>

            </td>

          </tr>

        ))}

      </tbody>

    </table>

  );

}

export default SubjectTable;