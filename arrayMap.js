const Animals = [
    { name: "Fluffykins", species: "rabbit" },
    { name: "Caro", species: "dog" },
    { name: "Hamilton", species: "dog" },
    { name: "Harold", species: "fish" },
    { name: "Ursula", species: "cat" },
    { name: "Jimmy", species: "fish" }
]
function filterNames(arr) {
    let names = []
    for (i=0; i < arr.length; i++) {
        names.push(arr[i].name)
    }
    return names
}

animalNames = filterNames(Animals)

console.log(animalNames)