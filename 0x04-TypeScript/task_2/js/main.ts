// 5. Advanced types Part 1
/* Create the DirectorInterface interface with the 3 expected methods:
workFromHome() returning a string
getCoffeeBreak() returning a string
workDirectorTasks() returning a string
*/

interface DirectorInterface{
  workFromHome(): string;
  getCoffeeBreak(): string ;
  workDirectorTasks(): string;
  }
  
  /*
  Create the TeacherInterface interface with the 3 expected methods:
  workFromHome() returning a string
  getCoffeeBreak() returning a string
  workTeacherTasks() returning a string
  */
  interface  TeacherInterface {
    workFromHome(): string ;
    getCoffeeBreak(): string ;
    workTeacherTasks(): string ;
  }
  
  /*
  Create a class Director that will implement DirectorInterface
  workFromHome should return the string Working from home
  getToWork should return the string Getting a coffee break
  workDirectorTasks should return the string Getting to director tasks
  */
  class Director implements DirectorInterface{
    workFromHome(): string {
      return "Working from home";
    }
    getToWrok(): string{
      return "Getting a coffee break";
    }
    workDirectorTasks(): string {
      return "Getting to director tasks";
    }
    getCoffeeBreak(): string {
      return this.getToWrok();
  }
  
  }
  
  /*
  Create a class Teacher that will implement TeacherInterface
  workFromHome should return the string Cannot work from home
  getCoffeeBreak should return the string Cannot have a break
  workTeacherTasks should return the string Getting to work
  */
  
  class Teacher implements TeacherInterface{
  workFromHome():string{  
      return  "Cannot work from home";
    }
  
    getCoffeeBreak():string{ 
      return  "Cannot have a break";
    }
    workTeacherTasks():string{
      return  "Getting to work";
    }
  }
  
  
  /*
  Create a function createEmployee with the following requirements:
  It can return either a Director or a Teacher instance
  It accepts 1 arguments:
  salary(either number or string)
  if salary is a number and less than 500 - It should return a new Teacher. Otherwise it should return a Director
  */
  function createEmployee(salary : number | string): Director | Teacher{
    if (typeof salary === 'number' && salary <  500) {
      return new Teacher;
    }
    else
    {
      return new Director;
    }
  }
  
  console.log(createEmployee(200)); // Teacher
  console.log(createEmployee(1000)); // Director
  console.log(createEmployee('$500')); // Director
  
  // Expected result:
  /*
  console.log(createEmployee(200));
  Teacher
  console.log(createEmployee(1000));
  Director
  console.log(createEmployee('$500'));
  Director
  */



  

//-------------------------------------------------------------------------------------------
// 6. Creating functions specific to employees
/*
Write a function isDirector:
it accepts employee as an argument
it will be used as a type predicate and if the employee is a director
*/
function isDirector(employee: Director | Teacher): employee  is Director {
  return employee instanceof Director;
}



/*
Write a function executeWork:
it accepts employee as an argument
if the employee is a Director, it will call workDirectorTasks
if the employee is a Teacher, it will call workTeacherTasks
*/
function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    this.workDirectorTasks(employee);
  }
  else{
    this.workTeacherTasks(employee);
  }
}

// Expected result:
/*
executeWork(createEmployee(200));
Getting to work
executeWork(createEmployee(1000));
Getting to director tasks
*/


//-------------------------------------------------------------------------------------------
// 7. String literal types

// Write a String literal type named Subjects allowing a variable to have the value Math or History only.
type Subjects =  'Math' | 'History';

// Write a function named teachClass:
/*
it takes todayClass as an argument
it will return the string Teaching Math if todayClass is Math
it will return the string Teaching History if todayClass is History
*/

function teachClass(todayClass: Subjects): 'Teaching Math' | 'Teaching History' {
  if (todayClass === 'Math')
  {
    return 'Teaching Math';
  }

  if( todayClass === 'History')
  {
    return 'Teaching History';
  }
}

// Expected result:

teachClass('Math');
// Teaching Math
teachClass('History');
// Teaching History
