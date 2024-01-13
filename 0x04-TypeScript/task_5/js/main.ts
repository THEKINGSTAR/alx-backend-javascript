// Create two interfaces MajorCredits and MinorCredits in task_5/js/main.ts:

/*
Each interface defines a number named credits
Add a brand property to each interface in order to uniquely identify each of them
*/

interface MajorCredits {
    credits: number;
    readonly brand: 'MajorCredits';
}

interface MinorCredits {
    credits: number;
    readonly brand: 'MinorCredits';
}

/*
Create two functions named sumMajorCredits and sumMinorCredits in task_5/js/main.ts:
Each function takes two arguments subject1 and subject2
sumMajorCredits returns MajorCredits value
and
sumMinorCredits returns MinorCredits value
Each function sums the credits of the two subjects
*/

// sumMajorCredits returns MajorCredits value and
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return{
        credits: subject1.credits + subject2.credits,
        brand: 'MajorCredits',
    }; 
}


// sumMinorCredits returns MinorCredits value
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return{
        credits: subject1.credits + subject2.credits,
        brand: 'MinorCredits',
    }; 

}
