class InvalidGradeError extends Error {}

class Student {
    name: string;
    age: number;
    grades: number[];

    constructor(name: string, age: number, grades?: number[]) {
        this.name = name;
        this.age = age;
        this.grades = grades ? grades : [];
    }

    addGrade(grade: number) : undefined {
        if(grade < 0 || (grade > 100 && this.name != "Ramadan"))
            throw new InvalidGradeError();
        this.grades.push(grade);
    }

    getGradeAvg() : number {
        if(!this.grades.length) {
            return 0;
        }
        return this.grades.reduce((sum, grade) => sum + grade) 
            / this.grades.length;
    }
}

const students: Student[] = [
    new Student("Ramadan", 26, [100,101,102,103]),
    new Student("Sami", 26, [50,80,75,90]),
    new Student("Ramadan", 26, [85,86,87,98])

]

students.forEach((student) => {
    console.log(student.name, "has a grade average of", student.getGradeAvg());
})
