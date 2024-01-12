// These two attributes should only be modifiable when a Teacher is first initialized
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;

fullTimeEmployee: boolean; // this attribute should always be defined
yearsOfExperience? : number; // this attribute is optional
readonly location: string; // this attribute should always be defined

// Add the possibility to add any attribute to the Object like
// contract : boolean; //without specifying the name of the attribute
[key: string]: any;

}

// Example:
const teacher1: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  yearsOfExperience: 30,
  lastName: 'Wick',
  location: 'Italy',
  contract: false,
};
console.log(teacher1);

const teacher2: Teacher = {
  firstName: 'Alan',
  fullTimeEmployee: true,
  yearsOfExperience: 10,
  lastName: 'Eaa',
  location: 'Parix',
  contract: true,
};
console.log(teacher2);

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);
// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"

// Path: js/main.ts
interface Directors extends Teacher{
  readonly numberOfReports: number;
}

const teachersList: Teacher[] = [teacher1, teacher2, teacher3];

// eslint-disable-next-line no-undef
const table = document.createElement('table');

teachersList.forEach((teacher) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  const cell5 = row.insertCell(4);
  const cell6 = row.insertCell(5);

  cell1.textContent = teacher.firstName;
  cell2.textContent = teacher.lastName;
  cell3.textContent = teacher.fullTimeEmployee.toString();
  cell4.textContent = teacher.location;
  cell5.textContent = teacher.yearsOfExperience.toString();
  cell6.textContent = teacher.numberOfReports.toString();
});

// eslint-disable-next-line no-undef
document.body.appendChild(table);
