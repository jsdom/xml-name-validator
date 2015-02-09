"use strict";
var xnv = require("..");
var assert = require("assert");

describe("Valid names", function () {
    ["x", ":", "a:0", "a0", "a:b:c"].forEach(function (validName) {
        specify(validName + " is recognized as a valid name", function () {
            assert.ok(xnv.name(validName).success);
        });
    });
});

describe("Invalid names/qnames", function () {
    ["\\", "'", "\"", "0", "0:a", "a!"].forEach(function (invalidName) {
        specify(invalidName + " is recognized as an invalid name", function () {
            assert.ok(! xnv.name(invalidName).success);
        });

        specify(invalidName + " is recognized as an invalid qname", function () {
            assert.ok(! xnv.qname(invalidName).success);
        });
    });
});

describe("Valid qualified names", function () {
    ["x", "a0", "a:b"].forEach(function (validQname) {
        specify(validQname + " is recognized as a valid qname", function () {
            assert.ok(xnv.qname(validQname).success);
        });
    });
});

describe("Invalid qualified names", function () {
    [":a", "b:", "x:y:z", "a:0"].forEach(function (invalidQname) {
        specify(invalidQname + " is recognized as an invalid qname", function () {
            assert.ok(! xnv.qname(invalidQname).success);
        });
    });
});
