export default function getListStudents() {
  const students = new Map();

  students.set(1, { firstName: 'Guillaume', id: 1, location: 'San Francisco' });
  students.set(2, { firstName: 'Guillaume', id: 1, location: 'San Francisco' });
  students.set(3, { firstName: 'Guillaume', id: 1, location: 'San Francisco' });

  const studentArray = [];

  students.forEach((value) => {
    studentArray.push(value);
  });

  return studentArray;
}
