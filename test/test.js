"use strict";
const xnv = require("..");
const assert = require("assert");

describe("Valid names", () => {
    for (const validName of ["x", ":", "a:0", "a0", "a:b:c"]) {
        specify(`"${validName}" is recognized as a valid name`, () => {
            assert.strictEqual(xnv.name(validName).success, true);
        });
    }
});

describe("Invalid names/qnames", () => {
    for (const invalidName of ["\\", "'", "\"", "0", "0:a", "a!", ""]) {
        specify(`"${invalidName}" is recognized as an invalid name`, () => {
            assert.strictEqual(xnv.name(invalidName).success, false);
        });

        specify(`"${invalidName}" is recognized as an invalid qname`, () => {
            assert.strictEqual(xnv.qname(invalidName).success, false);
        });
    }
});

describe("Valid qualified names", () => {
    for (const validQname of ["x", "a0", "a:b"]) {
        specify(`"${validQname}" is recognized as a valid qname`, () => {
            assert.strictEqual(xnv.qname(validQname).success, true);
        });
    }
});

describe("Invalid qualified names", () => {
    for (const invalidQname of [":a", "b:", "x:y:z", "a:0", "emp:", ":", "_:", ":0a", "_::a", "prefix::local"]) {
        specify(`"${invalidQname}" is recognized as an invalid name`, () => {
            assert.strictEqual(xnv.qname(invalidQname).success, false);
        });
    }
});
