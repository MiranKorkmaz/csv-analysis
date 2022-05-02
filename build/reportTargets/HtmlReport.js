"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = void 0;
const fs = require("fs");
class HtmlReport {
    print(report) {
        const html = `
            <div>
                <h1>Analysis Output</h1>
                <div>${report}</div>
            </div>
        `;
        fs.writeFileSync("report.html", html);
    }
}
exports.HtmlReport = HtmlReport;
