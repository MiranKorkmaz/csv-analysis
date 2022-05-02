import { MatchReader } from "./MatchReader"
import { CSVFileReader } from "./CSVFileReader"
import { MatchResult } from "./MatchResult"

// Create an object that satifies the "DataReader" interface
const csvFileReader = new CSVFileReader("football.csv")

// Create an instance of MatchReader and pass in something satisfying
// the "DataReader" interface
const matchReader = new MatchReader(csvFileReader)
matchReader.load()


