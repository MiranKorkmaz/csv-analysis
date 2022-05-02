"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CSVFileReader_1 = require("./CSVFileReader");
const ConsoleReport_1 = require("./reportTargets/ConsoleReport");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const Summary_1 = require("./Summary");
// Create an object that satifies the "DataReader" interface
const csvFileReader = new CSVFileReader_1.CSVFileReader("football.csv");
// Create an instance of MatchReader and pass in something satisfying
// the "DataReader" interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis("Man United"), new ConsoleReport_1.ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
