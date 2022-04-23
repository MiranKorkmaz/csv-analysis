"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVFileReader = void 0;
const fs = require("fs");
const utils_1 = require("./utils");
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
            .map((row) => {
            return [
                (0, utils_1.dateStringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4])
            ];
        });
    }
}
exports.CSVFileReader = CSVFileReader;
