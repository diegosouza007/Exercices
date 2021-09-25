// try {
//     console.log(name);
// } catch (err) {
//     console.log("An error has ocorred", err)
// } finally {
//     console.log("Good evening!");
// }

let nickname = "";

try {

    if (nickname == "") {
        throw "The nickname cannot be blank"
    }

    console.log(nome);

} catch (err) {
    console.log("An error has ocorred", err)
} finally {
    console.log("Good evening!");
}

console.log("Bye");