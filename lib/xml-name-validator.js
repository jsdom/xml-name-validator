"use strict";
var parser = require("./generated-parser.js");

exports.name = function (potentialName) {
    return parser.parse(potentialName, { startRule: "Name" });
};

exports.qname = function (potentialQname) {
    return parser.parse(potentialQname, { startRule: "QName" });
};
