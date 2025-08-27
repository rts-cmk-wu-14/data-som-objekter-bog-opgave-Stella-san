
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
let person = {
    firstname: "Rikke",
    lastname: "Gleerup",
    age: "19",
    hometown: "Rønnede",
    hobbies: ["Tegne", "Spille", "Spejder"],
    pet: {
        type: "Kornsno",
        name: "Apollo"
    }
}

person.hobbies.forEach(function(hobby){
    console.log(hobby);
})

console.log(person.pet.type);
console.log(person.pet.name);


