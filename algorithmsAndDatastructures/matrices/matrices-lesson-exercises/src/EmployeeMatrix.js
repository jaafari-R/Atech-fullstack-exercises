const Matrix = require("./Matrix")

class EmployeeMatrix extends Matrix {
    constructor() {
        super()
    }

    loadData(salaryData) {
        this.matrix = [];
        for(const sd of salaryData) {
            this.matrix.push([
                sd._id, sd.name, sd.department, sd.salary
            ]);
        }
    }

    getEmployees(department) {
        const employees = [];
        for(const employee of this.matrix) {
            if(employee[2] === department) {
                employees.push(employee[1]);
            }
        }
        return employees;
    }

    getTotalSalary(department) {
        let totalSalary = 0;
        for(const employee of this.matrix) {
            if(employee[2] === department) {
                totalSalary += employee[3];
            }
        }
        return totalSalary;
    }

    findRichest() {
        let richest_index = 0;
        for(let i = 1; i < this.matrix.length; ++i) {
            if(this.matrix[i][3] > this.matrix[richest_index][3]) {
                richest_index = i;
            }
        }
        return this.matrix.length ? this.matrix[richest_index][1] : null;
    }
}

let data = [
    { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
    { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
    { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
    { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
    { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
    { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 }
]

// Ex3
const m = new EmployeeMatrix();
m.loadData(data)
m.print()

// Ex4
console.log(m.getEmployees("Finance")) //prints [ 'Gillian', 'Anisha' ]
console.log(m.getEmployees("Design")) //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]

// Ex5
console.log(m.getTotalSalary("Finance")) //prints 4300
console.log(m.getTotalSalary("Design")) //prints 5300

// Ex6
console.log(m.findRichest()) //prints Anisha

/* Do not remove the exports below */
module.exports = EmployeeMatrix