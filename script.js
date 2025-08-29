
// Opgave 1
// let person = {
//     firstname: "Rikke",
//     lastname: "Gleerup",
//     age: "19",
//     hometown: "Rønnede",
//     pet: "Kornsno",
//     petname: "Apollo"
// }

// console.log("Dot:", person.firstname);
// console.log("Dot:", person.lastname);
// console.log("Dot:", person.age);
// console.log("Dot:", person.hometown);
// console.log("Dot:", person.pet);
// console.log("Dot:", person.petname);

// console.log("Bracket:", person["firstname"]);
// console.log("Bracket:", person["lastname"]);
// console.log("Bracket:", person["age"]);
// console.log("Bracket:", person["hometown"]);
// console.log("Bracket:", person["pet"]);
// console.log("Bracket:", person["petname"]);


// Opgave 2
// let person = {
//     firstname: "Rikke",
//     lastname: "Gleerup",
//     age: "19",
//     hometown: "Rønnede",
//     hobbies: ["Tegne", "Spille", "Spejder"],
//     pet: {
//         type: "Kornsno",
//         name: "Apollo"
//     }
// }

// person.hobbies.forEach(function(hobby){
//     console.log(hobby);
// })

// console.log(person.pet.type);
// console.log(person.pet.name);


//Opgave 3

let animals = [
    { name: "Cloaked fairies", class: " Fresh Dragon", type: " Dracones" },
    { name: "Pixie biters", class: " Fresh Dragon", type: " Dracones" },
    { name: "Sirens", class: " Aqua Dragons", type: " Dracones" },
    { name: "Crystal Dragons", class: " Stem Dragons", type: " Dracones" },
    { name: "Ruin Gardiens", class: " Acient Dragons", type: " Dracones" }
]

let animalListDiv = document.querySelector(".animal-species")

animals.forEach(animal => {
    let animalDiv = document.createElement("div");
    // animalDiv.textContent = animal.name + ', Class:' + animal.class + ', Type:' + animal.type

    // Skrevet med template string / template lieral
    animalDiv.textContent = `${animal.name}, Class: ${animal.class}, Type: ${animal.type}`;
     console.log(animal);
    
    animalListDiv.appendChild(animalDiv);
});


