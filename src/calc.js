// src/calc.js
export const add = (a, b) => a + b
export const sub = (a, b) => a - b
export const mul = (a, b) => a * b

export const div = (a, b) => {
    if (b === 0) throw new RangeError('Division by zero')
    return a / b
}

export const sqrt = (x) => {
    if (x < 0) throw new RangeError('Square root of negative number')
    return Math.sqrt(x)
}