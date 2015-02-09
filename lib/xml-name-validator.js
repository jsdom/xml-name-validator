"use strict";
var parser = require("./generated-parser.js");

exports.name = function (potentialName) {
    return parser.startWith("Name").exec(potentialName);
};

exports.qname = function (potentialQname) {
    return parser.startWith("QName").exec(potentialQname);
};
