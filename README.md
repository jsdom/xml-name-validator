# Validate XML Names and Qualified Names

This package simply tells you whether or not a string matches the [`Name`](http://www.w3.org/TR/xml/#NT-Name) or [`QName`](http://www.w3.org/TR/xml-names/#NT-QName) productions in the XML Namespaces specification. We use it for implementing the [validate](https://dom.spec.whatwg.org/#validate) algorithm in jsdom, but you can use it for whatever you want.

## Usage

```js
"use strict":
var xnv = require("xml-name-validator");
var assert = require("assert");

assert(xnv.name("abc") === true);
assert(xnv.name("123") === false);

assert(xnv.qname("abc") === true);
assert(xnv.qname("abc:xyz") === true);
assert(xnv.qname("abc:xyz:rst") === false);
```
