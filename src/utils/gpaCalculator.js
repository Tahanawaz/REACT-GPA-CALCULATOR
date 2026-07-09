
export const calculateGPA = (subjects) => {
  let totalCredits = 0;
  let totalQualityPoints = 0;

  subjects.forEach((subject) => {
    totalCredits += Number(subject.creditHours);
    totalQualityPoints +=
      Number(subject.creditHours) * Number(subject.gradePoint);
  });

  const gpa =
    totalCredits === 0
      ? 0
      : (totalQualityPoints / totalCredits).toFixed(2);

  return {
    totalCredits,
    totalQualityPoints: totalQualityPoints.toFixed(2),
    gpa,
  };
};