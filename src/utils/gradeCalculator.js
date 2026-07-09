import { gradeScale } from "./gradeScale";

export function calculateGPA(subjects) {

  let totalCredits = 0;

  let totalPoints = 0;

  subjects.forEach(subject => {

    const marks = Number(subject.marks);

    const credits = Number(subject.credit);

    const grade = gradeScale.find(

      item => marks >= item.min && marks <= item.max

    );

    if (grade) {

      totalCredits += credits;

      totalPoints += grade.point * credits;

    }

  });

  const gpa =

    totalCredits === 0

      ? "0.00"

      : (totalPoints / totalCredits).toFixed(2);

  return {

    gpa,

    totalCredits

  };

}