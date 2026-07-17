// Student Class
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// Create 5 students
const students = [
    new Student("Riya", 20),
    new Student("Meet", 22),
    new Student("Rahul", 21),
    new Student("Priya", 19),
    new Student("Amit", 23)
];

// Destructuring
students.forEach(({ name, age }) => {
    console.log("Name:", name, "Age:", age);
});

// Arrow function to print names
const printNames = (list) => {
    list.forEach(student => console.log(student.name));
};

printNames(students);

// Promise
const loadStudents = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(students);
        }, 3000);
    });
};

// Async/Await
async function displayStudents() {
    console.log("Loading Student Data...");
    const data = await loadStudents();
    console.log("Student Data Loaded:");
    console.log(data);
}

displayStudents();