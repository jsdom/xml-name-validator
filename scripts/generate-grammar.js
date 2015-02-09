"use strict";
var Waka = require("waka");

var grammarText = "";
process.stdin.on("data", function (data) {
    grammarText += data;
});
process.stdin.on("end", function () {
    var parserSource = Waka.getSourceStandalone(grammarText, { startRule: null });
    process.stdout.write("module.exports = ");
    process.stdout.write(parserSource);
});
