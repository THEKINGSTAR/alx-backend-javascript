
class HolbertonCourse{
    get name(){
        return this.name;
    }
    set name(newName){
        this._name = newName;
    }

    get lenght(){
        return this.lenght;
    }
    set lenght(newLenght){
        this._lenght = newLenght;
    }

    get students(){
        return this.students;
    }
    set students(newStudents){
        this._students = this.students;
    }

    constructor(name, lenght, students){
        this.name = name;
        this.lenght = lenght;
        this.students = students;

    }
}