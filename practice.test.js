function multiplication(a,b) {
    return a * b;
}

function addition(a,b) {
    return a + b;
}

function division(a,b) {
    return a / b;
}

function minus(a,b) {
    return a - b;
}

function round(x) {
    return Math.round(x);
}

function root(x) {
    return Math.sqrt(x);
}

describe("sum function", () => {
    it("multiplies two numbers", () => {
        const expected = 4;
        const actual = multiplication(2,2);
        expect(actual).toBe(expected);
    })
    it("adds two numbers", () => {
        const expected = 10;
        const actual = addition(5,5);
        expect(actual).toBe(expected);
    })
    it("divides two numbers", () => {
        const expected = 3;
        const actual = division(9,3);
        expect(actual).toBe(expected);
    })
    it("minuses from a number", () => {
        expect(minus(5, 2)).toBe(3);
    })
    it("gives the number rounded up", () => {
        expect(round(6.7)).toBe(7);
    })
    it("gives the square root", () => {
        expect(root(64)).toBe(8);
    })
})