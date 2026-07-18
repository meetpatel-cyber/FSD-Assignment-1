class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    showSalary() {
        console.log(this.name + " earns " + this.salary);
    }
}

const emp = new Employee("Riya", 50000);
emp.showSalary();