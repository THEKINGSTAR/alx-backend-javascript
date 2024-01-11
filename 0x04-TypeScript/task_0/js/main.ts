import * as StackUtils from "stack-utils";

interface Student
{ 
    firstName:string;
    lastName:string;
    age:number;
    location:string;
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 24,
    location: 'Miami'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 22,
    location: 'Miami'
};



let studentsList: Student[] = [student1, student2];

const table = document.createElement('table');


studentsList.forEach((student) => {
const row = table.insertRow();
const cell1 = row.insertCell(0);
const cell2 = row.insertCell(1);
const cell3 = row.insertCell(2);
const cell4 = row.insertCell(3);

cell1.textContent = student.firstName;
cell2.textContent = student.lastName;
// Convert age to string before assigning
cell3.textContent = student.age.toString();
cell4.textContent = student.location;




});


document.body.appendChild(table);