function multiplication(a,b) {
    return a * b;
}

test("multiplies two numbers", () => {
    expect(multiplication(2, 2)).toBe(4);
})

function addition(a,b) {
    return a + b;
}

test("adds two numbers", () => {
    expect(addition(5,5)).toBe(10);
})

