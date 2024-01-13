/*
Create a file Java.ts and write a Java Class in the same namespace.
*/

namespace Subject{
    class Java{
        // Add a new attribute experienceTeachingJava? (number) to the Teacher interface
        interface Teacher {
            experienceTeachingJava?: (number);
        }

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
        }
        // If the teacher doesn’t have any experience in teaching Java,
        // then the method should return a string No available teacher
        else{
            return `No available teacher`;
        }
    }
}