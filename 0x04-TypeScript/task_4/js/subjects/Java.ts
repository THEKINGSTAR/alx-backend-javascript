// ./js/subjexts/Jave.ts
/*
Create a file Java.ts and write a Java Class in the same namespace.
*/

namespace Subject{
    interface Teacher {
        experienceTeachingJava?: (number);
    }
    export class Java extends Subject{
        // Add a new attribute experienceTeachingJava? (number) to the Teacher interface
       

        // In the class, write a method named getRequirements that will return a string Here is the list of requirements for Java
        getRequirements(): string{ 
            return  'Here is the list of requirements for Java';
        }

        // Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
        getAvailableTeacher(): string{
            if(this.teacher && this.teacher.experienceTeachingJava !== undefined)
            {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            // If the teacher doesn’t have any experience in teaching Java,
            // then the method should return a string No available teacher
            else{
                return `No available teacher`;
            }
        }
        // create and export a constant java for Java Subjects
        // export const java = new Java ();
    }
}