export default function getStudentIdsSum(Students) {
  const sum = Students.reduce((sumtion, curntValue) => sumtion + curntValue.id, 0);
  return sum;
}
