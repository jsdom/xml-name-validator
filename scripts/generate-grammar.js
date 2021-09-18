"use strict";
const waka = require("waka");

let grammarText = "";
process.stdin.on("data", data => {
  grammarText += data;
});
process.stdin.on("end", () => {
  const parserSource = waka.getSourceStandalone(grammarText, { startRule: null });
  process.stdout.write("module.exports = ");
  process.stdout.write(parserSource);
});
