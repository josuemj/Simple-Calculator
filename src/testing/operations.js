// operations.js
export function add(a, b) {
    return validateResult(a + b);
}

export function subtract(a, b) {
    return validateResult(a - b);
}

export function multiply(a, b) {
    return validateResult(a * b);
}

export function divide(a, b) {
    if (b === 0) throw new Error('Division by zero is not allowed');
    return validateResult(a / b);
}

function validateResult(result) {
    if (result < 0) {
        throw new Error('The result of the operation is negative');
    }
    if (result.toString().length > 9) {
        throw new Error('The expression has more than 9 digits');
    }
    return result;
}
