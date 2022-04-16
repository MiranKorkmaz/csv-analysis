import { CSVFileReader } from "./CSVFileReader"

const reader = new CSVFileReader("football.csv")
reader.read()

// const homeWin = "H"
// const awayWin = "A"
// const draw = "D"
// same as below 

// const MatchResult = {
//     HomeWin: "H",
//     AwayWin: "A",
//     Draw: "D"
// }
// same as below

enum MatchResult {
    HomeWin = "H",
    AwayWin = "A",
    Draw = "D"
}



// function to show match result
// const printMatchResult = (): MatchResult => {
//     if (match[5] === "H") {
//         return MatchResult.HomeWin
//     }
// }
let manUnitedWins = 0

for (let match of reader.data) {
    if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
        manUnitedWins++
    } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
        manUnitedWins++
    } 
}

console.log(`Man United won ${manUnitedWins} games`)