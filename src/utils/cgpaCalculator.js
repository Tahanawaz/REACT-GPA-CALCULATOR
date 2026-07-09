export function calculateCGPA(

  currentGPA,

  previousCGPA,

  previousCredits,

  currentCredits,

  firstSemester

) {

  if (firstSemester) {

    return Number(currentGPA).toFixed(2);

  }

  const prevCGPA = Number(previousCGPA);

  const prevCredits = Number(previousCredits);

  const currCredits = Number(currentCredits);

  const currGPA = Number(currentGPA);

  if (prevCredits === 0) {

    return Number(currentGPA).toFixed(2);

  }

  const cgpa =

    (

      (prevCGPA * prevCredits) +

      (currGPA * currCredits)

    ) /

    (prevCredits + currCredits);

  return cgpa.toFixed(2);

}