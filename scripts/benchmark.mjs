/* eslint-disable no-console */
import assert from "node:assert/strict";

import { Bench } from "tinybench";

import xnv from "../lib/xml-name-validator.js";
import cases from "../test/cases.json" with { type: "json" };

const bench = new Bench({ throws: true });

bench.add("XML names and qualified names", () => {
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

await bench.run();
console.table(bench.table());
