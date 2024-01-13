/*
Create a file Cpp.ts 
and 
make the following modifications in the same namespace.
*/

/*
Using declaration merging, 
add a 
new optional attribute experienceTeachingC (number) to the Teacher interface
*/
namespace Subjects{
    interface Teacher{
        experienceTeachingC?: number;
    }


    /*
    Create a class Cpp extending from Subject
    */
    class Cpp extends Subject {
        // Write a method named getRequirements that will return a string Here is the list of requirements for Cpp
         getRequirements(): string{
            return 'Here is the list of requirements for Cpp';
         }

        // Write a method named getAvailableTeacher 
        getAvailableTeacher(): string{
            // that will return a string Available Teacher: <first name of teacher>
            if(this.teacher && this.teacher.experienceTeachingC !== undefined) {
            return `Available Teacher: ${this.teacher.firstName}`;
            }
            // If the teacher doesn’t have any experience in teaching C,
            // then the method should return a string No available teacher
            else {
                return `No available teacher`;
            }
        }
        
    }

}
