export default function getListStudentIds(Students) {
  let idsArray = [];

  if (!Array.isArray(Students)) {
    return idsArray;
  }
  idsArray = Students.map((student) => student.id);
  return idsArray;
}
