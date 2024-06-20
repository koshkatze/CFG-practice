function returnChars(x) {
    return Array.from(x);
}

describe("string test", () => {
    it("returns the characters from a string", () => {
        const expected = (["h", "e", "l", "l", "o"]);
        const actual = returnChars("hello");
        expect(actual).toBe(expected);
    })
})

function stringLength(x) {
    return x.stringLength
}

describe("length test", () => {
    it("returns the length of a string" () => {
        const expected = 5;
        const actual = stringLength("hello");
        expect (actual).toBe(expected);
    })
})