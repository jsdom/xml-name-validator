"use strict";
var parser = require("./generated-parser.js");

exports.name = function (potentialName) {
    return parser.parse(potentialName);
};

exports.qname = function (potentialQname) {
};
