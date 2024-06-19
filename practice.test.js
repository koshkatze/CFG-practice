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
        expect(multiplication(2, 2)).toBe(4);
    })
    it("adds two numbers", () => {
        expect(addition(5,5)).toBe(10);
    })
    it("divides two numbers", () => {
        expect(division(9, 3)).toBe(3);
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