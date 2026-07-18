class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const students = [
    new Student("Riya", 20),
    new Student("Meet", 22),
    new Student("Rahul", 21),
    new Student("Priya", 19),
    new Student("Amit", 23)
];

students.forEach(({ name, age }) => {
    console.log("Name:", name, "Age:", age);
});

const printNames = (list) => {
    list.forEach(student => console.log(student.name));
};

printNames(students);

const loadStudents = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(students);
        }, 3000);
    });
};

async function displayStudents() {
    console.log("Loading Student Data...");
    const data = await loadStudents();
    console.log("Student Data Loaded:");
    console.log(data);
}

displayStudents();