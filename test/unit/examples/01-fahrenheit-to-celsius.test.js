const { fahrenheitToCelsius } = require('../../../examples/01-fahrenheit-to-celsius');

describe('the fahrenheit-to-celsius spec', () => {
    it('shows the infrastructure works', () => {
        expect(true).toBe(true);
    });
});

describe('a fahrenheitToCelsius function should', () => {
    it('Should return 0 for 32', () => {
        expect(fahrenheitToCelsius(32)).toBe(0);
    });

    it('Should return 10 for 50', () => {
        expect(fahrenheitToCelsius(50)).toBe(10);
    });

    it('return 100 for 212', () => {
        expect(fahrenheitToCelsius(212)).toBe(100);
    });

    it('return -40 for -40', () => {
        expect(fahrenheitToCelsius(-40)).toBe(-40);
    });

    it('return -273.15 for -459.67', () => {
        expect(fahrenheitToCelsius(-459.67)).toBe(-273.15);
    });
});