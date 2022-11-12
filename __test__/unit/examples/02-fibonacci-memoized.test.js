const { fibonacciMemoized, _initialize } = require('../../../examples/02-fibonacci-memoized')

beforeEach(() => {
    _initialize();
});

describe('the fibonacci spec', () => {
    it('shows the infrastructure works', () => {
        expect(true).toBe(true);
    });
});

describe('fibonacciMemoized function should', () => {
    test.each([
        { n: 0, expected: 0 },
        { n: 1, expected: 1 },
        { n: 2, expected: 1 },
        { n: 3, expected: 2 },
        { n: 4, expected: 3 },
        { n: 5, expected: 5 },
        { n: 6, expected: 8 },
        { n: 7, expected: 13 },
        { n: 8, expected: 21 },
        { n: 40, expected: 102334155 }
    ])('Should return $expected for $n', ({ n, expected }) => {
        expect(fibonacciMemoized(n)).toBe(expected);
    });
});