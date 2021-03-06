"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVFileReader = void 0;
const fs = require("fs");
class CSVFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        this.data = fs.readFileSync(this.filename, {
            encoding: "utf-8"
        }).split("\n").map((row) => {
            return row.split(",");
        });
    }
}
exports.CSVFileReader = CSVFileReader;
