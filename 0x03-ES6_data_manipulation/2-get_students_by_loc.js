export default function getStudentsByLocation(Students, City) {
  const filteredArray = Students.filter((student) => student.location === City);

  return filteredArray;
}
