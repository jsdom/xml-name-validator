/* eslint-disable no-console */
import assert from "node:assert/strict";

import { Bench } from "tinybench";

import xnv from "../lib/xml-name-validator.js";
import cases from "../test/cases.json" with { type: "json" };

const bench = new Bench({ throws: true });

bench.add("XML names and qualified names", () => {
  for (const input of cases.name.valid) {
    assert.equal(xnv.name(input), true);
  }
  for (const input of cases.name.invalid) {
    assert.equal(xnv.name(input), false);
    assert.equal(xnv.qname(input), false);
  }
  for (const input of cases.qname.valid) {
    assert.equal(xnv.qname(input), true);
  }
  for (const input of cases.qname.invalid) {
    assert.equal(xnv.qname(input), false);
  }
});

await bench.run();
console.table(bench.table());
