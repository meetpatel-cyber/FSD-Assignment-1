class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const s1 = new Student("Riya", 20);
const s2 = new Student("Meet", 22);
const s3 = new Student("Rahul", 21);

const students = [s1, s2, s3];

students.forEach(student => {
    console.log("Name: " + student.name + ", Age: " + student.age);
});