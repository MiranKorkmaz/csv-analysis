"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVFileReader = void 0;
const fs = require("fs");
class CSVFileReader {
    // create a filename object,
    // to use different csv files
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        // Changing the CSV file to array of strings
        this.data = fs.readFileSync(this.filename, {
            encoding: "utf-8"
        }).split("\n").map((row) => {
            return row.split(",");
        })
            .map(this.mapRow);
    }
}
exports.CSVFileReader = CSVFileReader;
// abstract classes - classes that we are never going to use to create an instance of an object 
/*
Generics
    Like function arguments, but for types in class/function definitions.
    Allows us to define the type of a property/argument value at a future point
*/ 
