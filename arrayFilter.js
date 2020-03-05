const Animals = [
    { name: "Fluffykins", species: "rabbit" },
    { name: "Caro", species: "dog" },
    { name: "Hamilton", species: "dog" },
    { name: "Harold", species: "fish" },
    { name: "Ursula", species: "cat" },
    { name: "Jimmy", species: "fish" }
]

function filtering(arr) {
    let output = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i].species == "dog"){
        output.push(arr[i])
        }
    }
    return output
}

let dogs = filtering(Animals);

console.log(dogs)



function filterDogs(pet) {
    return pet.species == "dog"
}

console.log(Animals.filter(filterDogs))