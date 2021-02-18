// let x = 13
// let y = 15

// const calculateFunction = () => {
//     return 2 * x + y;
// }

// console.log("2x+y= ", calculateFunction())

const numbers = [45, 8, 85, 4, 96];
let suma = 0;

const calculateSuma = () => {
    for (let i = 0; i < numbers.length; i++) {
        suma += numbers[i]
    }
    return suma;
}

console.log("Summa din elemente", numbers.join(", "), " = ", calculateSuma())


const sum = numbers.reduce((total, amount) => total + amount);
console.log("Summa din elemente", numbers.join(", "), " = ", sum);


const marks = [10, 9, 5.5, 4, 10];
let media = 0;
let totalnumberofmarks = marks.length

const calculateMedia = () => {
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] > 5) {
            media += marks[i]
        } else {
            return 0
        }

    }
    return media / totalnumberofmarks;
}
if (calculateMedia() > 0) {
    console.log("Medie din elemente", marks.join(", "), " = ", calculateMedia())
} else {
    console.log("Restantier")
}

const average = marks.reduce((sum, amount) => sum + amount, 0) / totalnumberofmarks

console.log("Medie din toate note", marks.join(", "), " = ", average)

const positivemarks = marks.filter(item => item > 5)
//console.log(positivemarks);
const positiveaverage = positivemarks.reduce((sum, amount) => sum + amount, 0) / positivemarks.length
//console.log(positiveaverage);
console.log("Medie din note pozitive", positivemarks.join(", "), " = ", positiveaverage)