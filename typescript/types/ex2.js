var Student = /** @class */ (function () {
    function Student(name, age, grades) {
        this.name = name;
        this.age = age;
        this.grades = grades ? grades : [];
    }
    Student.prototype.addGrade = function (grade) {
        this.grades.push(grade);
    };
    Student.prototype.getGradeAvg = function () {
        if (!this.grades.length) {
            return 0;
        }
        return this.grades.reduce(function (sum, grade) { return sum + grade; })
            / this.grades.length;
    };
    return Student;
}());
var students = [
    new Student("Ramadan", 26, [100, 101, 102, 103]),
    new Student("Sami", 26, [50, 80, 75, 90]),
    new Student("Ramadan", 26, [85, 86, 87, 98])
];
students.forEach(function (student) {
    console.log(student.name, "has a grade average of", student.getGradeAvg());
});
