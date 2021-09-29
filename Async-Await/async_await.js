// Using Async / Await

const students = [{
    name: "Robson",
    birthDate: "07/20/1992",
    school: "University of Toronto"
}]

function viewStudents() {
    students.forEach(student => {
        console.log(student.name, student.birthDate, student.school);
    });
}

function addNewStudent(name, birthDate, school) {

    let promisse = new Promise((resolve, reject) => {

        setTimeout(() => {

            let status = false;
            students.push({ name, birthDate, school })

            if (!status) {
                resolve();
            } else {
                reject({ message: "An error has ocorred!" })
            }

        }, 1000);

    })

    return promisse;

}

async function runProcess() {
    await addNewStudent("Cristiane", "02/15/1978", "Harvard University");
    viewStudents();
}

runProcess();