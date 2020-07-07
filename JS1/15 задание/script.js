// //Local Storage Technology–––––––––––––––––––––––––––––––––––––
// localStorage.setItem("number", 1);

// console.log(localStorage.getItem("number"));// get Element

// localStorage.removeItem("number");// Remove certain element

// localStorage.clear();// Clearing all storage

// window.addEventListener("DOMContentLoaded", function () {
//     let checkBox = document.getElementById('rememberMe'),
//         change = document.getElementById('change'),
//         form = document.getElementsByTagName('form');

//     if (localStorage.getItem("isChecked") === "true") {
//         checkBox.checked = true;
//     }
//     if (localStorage.getItem("bg") === "changed") {
//         change.style.backgroundColor = "#FF4766";
//     }

//     checkBox.addEventListener('click', function () {
//         localStorage.setItem("isChecked", true);
//     });
//     change.addEventListener('click', function () {
//         localStorage.setItem('bg', 'changed');
//         change.style.backgroundColor = "#FF4766";
//     });

//     //Serilization of data
//     let person = {
//         name: "Zhoni",
//         age: 22,
//         tech: ['mobile', 'laptop']
//     };
//     let ser = JSON.stringify(person);
//     localStorage.setItem("Zhoni", ser);
//     console.log(JSON.parse(localStorage.getItem("Zhoni")));

// });

// //Local Storage Technology END–––––––––––––––––––––––––––––––––––––

// try{} catch(){} Technology–––––––––––––––––––––––––––––––––––––
// let json = '{"id":2}';
// try {
//     //     console.log(`Normal`);
//     //     console.log(`${a}`);
//     let user = JSON.parse(json);
//     console.log(user);
//     if (!user.name) {
//         throw new Error("In this data no name!!!");//Testing the error
//     }
// } catch (e) {
//     console.log(`Error ${e.name} , ${e.message}, ${e.stack}`);
//     console.log(`We got a error: ${e.name}`);
// } finally {
//     console.log("I do this every time!");
// }
// console.log(`Hey whats up?`);

// try{} catch(){} Technology END–––––––––––––––––––––––––––––––––––––