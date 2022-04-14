"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
// Changing the CSV file to array of strings
const matches = fs.readFileSync("football.csv", {
    encoding: "utf-8"
}).split("\n").map((row) => {
    return row.split(",");
});
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
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
let manUnitedWins = 0;
for (let match of matches) {
    if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games`);
