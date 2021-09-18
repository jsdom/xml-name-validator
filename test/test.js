"use strict";
const xnv = require("..");
const assert = require("assert");
const cases = require("./cases.json");

describe("Valid names", () => {
  for (const validName of cases.name.valid) {
    specify(`"${validName}" is recognized as a valid name`, () => {
      assert.strictEqual(xnv.name(validName), true);
    });
  }
});

describe("Invalid names/qnames", () => {
  for (const invalidName of cases.name.invalid) {
    specify(`"${invalidName}" is recognized as an invalid name`, () => {
      assert.strictEqual(xnv.name(invalidName), false);
    });

    specify(`"${invalidName}" is recognized as an invalid qname`, () => {
      assert.strictEqual(xnv.qname(invalidName), false);
    });
  }
});

describe("Valid qualified names", () => {
  for (const validQname of cases.qname.valid) {
    specify(`"${validQname}" is recognized as a valid qname`, () => {
      assert.strictEqual(xnv.qname(validQname), true);
    });
  }
});

describe("Invalid qualified names", () => {
  for (const invalidQname of cases.qname.invalid) {
    specify(`"${invalidQname}" is recognized as an invalid name`, () => {
      assert.strictEqual(xnv.qname(invalidQname), false);
    });
  }
});
