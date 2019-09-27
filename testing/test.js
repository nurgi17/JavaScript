function sayName(name) {
    let message = "My name is" + name;
    return message;
}
let arr = [5, 4, 3, 6, 7, 8];
let result = arr.reduce(function (sum, elem) {
    return sum + elem;
});
let assert = require('chai').assert;

describe("sayName", function () {
    it("Get a phrase with new name", function () {
        assert.typeOf(sayName("Nurgissa"), 'string');
    });
});

describe("arr", function () {
    it("Get a sum of array", function () {
        assert.equal(result, 33);
    });
});