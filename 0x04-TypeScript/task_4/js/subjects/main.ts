// ./js/subjexts/main.ts

/*
for Cpp subject, log to the console C++, set cTeacher as the teacher,
call the two methods getRequirements and getAvailableTeacher and print the strings they return

for Java subject, log to the console Java, set cTeacher as the teacher,
call the two methods getRequirements and getAvailableTeacher, and print the strings they return

for React subject, log to the console React, set cTeacher as the teacher,
call the two methods getRequirements and getAvailableTeacher, and print the strings they return
*/

import { Cpp, Java, React, Subject } from './Subject';

// create and export a constant cpp for Cpp Subjects
export const cpp = new Cpp();

// create and export a constant java for Java Subjects
export const java = new Java ();

// create and export a constant react for React Subjects
export const react = new React();


// create and export one Teacher object cTeacher with experienceTeachingC = 10
export const cTeacher = {
    firstName: "cTeatcherFirstName",
    lastName: "cTeatcherLasttName",
    experienceTeachingC: 10,
};


// Usage example:
console.log("Cpp Subject:");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("Java Subject:");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log("React Subject:");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());