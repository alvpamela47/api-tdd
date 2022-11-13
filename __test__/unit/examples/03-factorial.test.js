const { factorial } = require('../../../examples/03-factorial');

describe('the factorial spec', () => {
    it('shows the infrastructure works', () => {
        expect(true).toBe(true);
    });
});

describe('factorial function should', () => {
    test.each([
        { n: 0, expected: 0 },
        { n: 1, expected: 1 },
        { n: 2, expected: 2 },
        { n: 3, expected: 6 },
        { n: 4, expected: 24 },
        { n: 5, expected: 120 },
        { n: 6, expected: 720 },
        { n: 7, expected: 5040 },
        { n: 8, expected: 40320 },
        { n: 10, expected: 3628800 }
    ])('Should return $expected for $n', ({ n, expected }) => {
        expect(factorial(n)).toBe(expected);
    });
});