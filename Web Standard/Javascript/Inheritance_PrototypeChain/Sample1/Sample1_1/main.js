let func = function() {
    this.nInt01 = 10;
    this.nInt02 = 20;
}

// object.[[Prototype]] has properties nInt01 and nInt02.
let object = new func();

// do not set the prototype f.prototype = {b:3,c:4}; this will break the prototype chain
func.prototype.nInt02 = 30;
func.prototype.sTxt01 = 'Add Txt01';

// object.[[Prototype]].[[Prototype]] is Object.prototype.

// Finally, object.[[Prototype]].[[Prototype]].[[Prototype]] is null.
// This is the end of the prototype chain, as null,

// by definition, has no [[Prototype]].
// Thus, the full prototype chain looks like:
// {nInt01: 1, nInt01: 2} ---> {sTxt01: 3, sTxt02: 4} ---> Object.prototype ---> null

console.log(object.nInt01);
// Is there an 'nInt01' own property on Object? Yes, and its value is 10.

console.log(object.nInt02);
// Is there a 'nInt02' own property on Object? Yes, and its value is 20.
// The prototype also has a 'b' property, but it's not visited.
// This is called Property Shadowing

console.log(object.sTxt01);
// Is there a 'sTxt01' own property on o? No, check its prototype.
// Is there a 'sTxt01' own property on o.[[Prototype]]? Yes, its value is Add Txt01.

console.log(object.sTxt02);
// Is there a 'sTxt02' own property on o? No, check its prototype.
// Is there a 'sTxt02' own property on o.[[Prototype]]? No, check its prototype.
// o.[[Prototype]].[[Prototype]] is Object.prototype and there is no 'sTxt02' property by default, check its prototype.
// o.[[Prototype]].[[Prototype]].[[Prototype]] is null, stop searching,
// no property found, return undefined.
