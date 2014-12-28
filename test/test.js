"use strict";
var xnv = require("..");
var assert = require("assert");

describe("Valid names", function () {
    ["x", ":", "a:0", "a0", "a:b:c"].forEach(function (validName) {
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

        specify(invalidName + " is recognized as an invalid qname", function () {
            assert.strictEqual(xnv.qname(invalidName), false);
        });
    });
});

describe("Valid qualified names", function () {
    ["x", "a0", "a:b"].forEach(function (validQname) {
        specify(validQname + " is recognized as a valid qname", function () {
            assert.strictEqual(xnv.qname(validQname), true);
        });
    });
});

describe("Invalid qualified names", function () {
    [":a", "b:", "x:y:z", "a:0"].forEach(function (invalidQname) {
        specify(invalidQname + " is recognized as an invalid qname", function () {
            assert.strictEqual(xnv.qname(invalidQname), false);
        });
    });
});
