"use strict";
/* eslint-disable no-console */
const assert = require("node:assert");
const Benchmark = require("benchmark");
const xnv = require("..");
const cases = require("../test/cases.json");

const benchmark = new Benchmark(() => {
  for (const input of cases.name.valid) {
    assert.strictEqual(xnv.name(input), true);
  }
  for (const input of cases.name.invalid) {
    assert.strictEqual(xnv.name(input), false);
    assert.strictEqual(xnv.qname(input), false);
  }
  for (const input of cases.qname.valid) {
    assert.strictEqual(xnv.qname(input), true);
  }
  for (const input of cases.qname.invalid) {
    assert.strictEqual(xnv.qname(input), false);
  }
});

benchmark.on("cycle", e => console.log(e.target.toString()));
benchmark.run();
