/*
Create a file React.ts and write a React Class in the same namespace.
*/
namespace Subject{
    class React {
        // Add a new attribute experienceTeachingReact? (number) to the Teacher interface
        interface Teacher{
            experienceTeachingReact?: (number);
        }

        // In the class, write a method named getRequirements that will return a string Here is the list of requirements for React
        getRequirements(): string { 
            return  `Here is the list of requirements for React`;
        }
        // Write a method named getAvailableTeacher that 
        getAvailableTeacher(): string {
            //will return a string Available Teacher: <first name of teacher>
            if(this.teacher && this.teacher.experienceTeachingReact !== undefined){
            return  `Available Teacher: ${this.teacher.firstName}`;
        }
        // If the teacher doesn’t have any experience in teaching React,
        // then the method should return a string No available teacher 
        else{
            return `No available teacher`;
        }
        
        }
    }

