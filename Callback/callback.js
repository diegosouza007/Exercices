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

function addNewStudent(name, birthDate, school, callback) {
    setTimeout(() => {
        students.push({ name, birthDate, school })
        callback();
    }, 1000);
}

addNewStudent("Cristiane", "02/15/1978", "Harvard University", viewStudents);