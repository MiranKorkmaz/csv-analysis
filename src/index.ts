import fs = require("fs")

// Changing the CSV file to array of strings
const matches = fs.readFileSync("football.csv", {
    encoding: "utf-8"
}).split("\n").map((row: string): string[] => {
    return row.split(",")
})

let manUnitedWins = 0

for (let match of matches) {
    if (match[1] === "Man United" && match[5] === "H") {
        manUnitedWins++
    } else if (match[2] === "Man United" && match[5] === "A") {
        manUnitedWins++
    }
}