"use strict";
const { describe, test } = require("node:test");
const assert = require("node:assert");
const xnv = require("..");
const cases = require("./cases.json");

describe("Valid names", () => {
  for (const validName of cases.name.valid) {
    test(`"${validName}" is recognized as a valid name`, () => {
      assert.strictEqual(xnv.name(validName), true);
    });
  }
});

describe("Invalid names/qnames", () => {
  for (const invalidName of cases.name.invalid) {
    test(`"${invalidName}" is recognized as an invalid name`, () => {
      assert.strictEqual(xnv.name(invalidName), false);
    });

    test(`"${invalidName}" is recognized as an invalid qname`, () => {
      assert.strictEqual(xnv.qname(invalidName), false);
    });
  }
});

describe("Valid qualified names", () => {
  for (const validQname of cases.qname.valid) {
    test(`"${validQname}" is recognized as a valid qname`, () => {
      assert.strictEqual(xnv.qname(validQname), true);
    });
  }
});

describe("Invalid qualified names", () => {
  for (const invalidQname of cases.qname.invalid) {
    test(`"${invalidQname}" is recognized as an invalid name`, () => {
      assert.strictEqual(xnv.qname(invalidQname), false);
    });
  }
});
