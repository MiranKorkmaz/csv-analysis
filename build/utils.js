"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    // 28/10/2018
    const dateParse = dateString.split("/").map((value) => {
        return parseInt(value);
    });
    return new Date(dateParse[2], dateParse[1] - 1, dateParse[0]);
};
exports.dateStringToDate = dateStringToDate;
