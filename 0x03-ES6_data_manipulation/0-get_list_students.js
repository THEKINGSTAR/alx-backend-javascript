export default function getListStudents() {
  const students = new Map();

  students.set(1, { id: 1, firstName: 'Guillaume', location: 'San Francisco' });
  students.set(2, { id: 2, firstName: 'James', location: 'Columbia' });
  students.set(3, { id: 5, firstName: 'Serena', location: 'San Francisco' });

  const studentArray = Array.from(students.values());

  return studentArray;
}
