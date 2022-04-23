import fs = require("fs")
import { dateStringToDate } from "./utils" 

export class CSVFileReader {
    data: string[][] = []

    // create a filename object,
    // to use different csv files
    constructor(public filename: string) { }

    read(): void {
        // Changing the CSV file to array of strings
        this.data = fs.readFileSync(this.filename, {
            encoding: "utf-8"
        }).split("\n").map((row: string): string[] => {
            return row.split(",")
        })
        .map((row: string[]): any => {
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4])
            ]
        })
    }
}