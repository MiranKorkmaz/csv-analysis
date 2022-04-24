import fs = require("fs")


export abstract class CSVFileReader<T> {
    data: T[] = []
    // create a filename object,
    // to use different csv files
    constructor(public filename: string) { }
    // T can be anything - it's a generic class 
    abstract mapRow(row: string[]): T 

    read(): void {
        // Changing the CSV file to array of strings
        this.data = fs.readFileSync(this.filename, {
            encoding: "utf-8"
        }).split("\n").map((row: string): string[] => {
            return row.split(",")
        })
        .map(this.mapRow)
    }
}

// abstract classes - classes that we are never going to use to create an instance of an object 

/* 
Generics 
    Like function arguments, but for types in class/function definitions.
    Allows us to define the type of a property/argument value at a future point 
*/