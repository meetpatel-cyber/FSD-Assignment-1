const marks = 40;

const result = new Promise((resolve, reject) => {
    if (marks >= 35) {
        resolve("Student Passed");
    } else {
        reject("Student Failed");
    }
});

result
    .then((message) => console.log(message))
    .catch((message) => console.log(message));