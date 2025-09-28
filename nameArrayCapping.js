// Create a function that accepts an array of names, and returns an array of each name with its first letter capitalized and the remainder in lowercase.

// Examples
// ["jo", "nelson", "jurie"] -->  ["Jo", "Nelson", "Jurie"]
// ["KARLY", "DANIEL", "KELSEY"] --> ["Karly", "Daniel", "Kelsey"]

function capMe(names) {
    let arr = []
    for(let i = 0; i < names.length; i++){
        if(names[i].slice(1) === names[i].slice(1).toLowerCase()){
            arr.push(names[i].charAt(0).toUpperCase() + names[i].slice(1));
        } else{
            arr.push(names[i].charAt(0).toUpperCase() + names[i].slice(1).toLowerCase());
        }
    }
    return arr;
}

const capMe = names =>
    names.map(val => val[0].toUpperCase() + val.slice(1).toLowerCase());

console.log(capMe(["KARLY", "DANIEL", "KELSEY"]));