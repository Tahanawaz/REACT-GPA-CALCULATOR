import { calculateGPA } from "../utils/gradeCalculator";
import { calculateCGPA } from "../utils/cgpaCalculator";
import { gradeScale } from "../utils/gradeScale";

import Summary from "./Summary";
import SubjectTable from "./SubjectTable";

function Result({

  subjects,

  previousCGPA,

  previousCredits,

  firstSemester

}) {

  const result = calculateGPA(subjects);

  const cgpa = calculateCGPA(

    result.gpa,

    previousCGPA,

    previousCredits,

    result.totalCredits,

    firstSemester

  );

  const getGrade = (marks) => {

    const grade = gradeScale.find(

      item => marks >= item.min && marks <= item.max

    );

    return grade ? grade.grade : "-";

  };

  return (

    <div className="results-container">

      <h2>Results</h2>

      <Summary

        sgpa={result.gpa}

        cgpa={cgpa}

      />

      <SubjectTable

        subjects={subjects}

        getGrade={getGrade}

      />

    </div>

  );

}

export default Result;