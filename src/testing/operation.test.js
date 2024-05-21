// operations.test.js
import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './operations';

describe('Arithmetic operations', () => {
    it('should add two numbers correctly', () => {
        expect(add(4, 5)).toBe(9);
    });

    it('should throw an error if the result of addition has more than 9 digits', () => {
        expect(() => add(999999999, 1)).toThrow('The expression has more than 9 digits');
    });

    it('should subtract two numbers correctly', () => {
        expect(subtract(10, 5)).toBe(5);
    });

    it('should throw an error if the result of subtraction is negative', () => {
        expect(() => subtract(5, 10)).toThrow('The result of the operation is negative');
    });

    it('should multiply two numbers correctly', () => {
        expect(multiply(3, 3)).toBe(9);
    });

    it('should throw an error if the result of multiplication has more than 9 digits', () => {
        expect(() => multiply(999999999, 10)).toThrow('The expression has more than 9 digits');
    });

    it('should divide two numbers correctly', () => {
        expect(divide(10, 2)).toBe(5);
    });

    it('should throw an error if dividing by zero', () => {
        expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
    });

    it('should throw an error if the result of division is negative', () => {
        expect(() => divide(5, -1)).toThrow('The result of the operation is negative');
    });

    it('should throw an error if the result of division has more than 9 digits', () => {
        expect(() => divide(1000000000, 0.1)).toThrow('The expression has more than 9 digits');
    });
});
