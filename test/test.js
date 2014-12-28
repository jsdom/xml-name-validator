"use strict";
var xnv = require("..");
var assert = require("assert");

describe("Valid names", function () {
    ["x", ":", "a:0", "a0"].forEach(function (validName) {
        specify(validName + " is recognized as a valid name", function () {
            assert.strictEqual(xnv.name(validName), true);
        });
    });
});

describe("Invalid names", function () {
    ["\\", "'", "\"", "0", "0:a"].forEach(function (invalidName) {
        specify(invalidName + " is recognized as an invalid name", function () {
            assert.strictEqual(xnv.name(invalidName), false);
        });
    });
});
