const MathOps = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(MathOps.sum(1, 2)).toBe(3);
});

test('multiply 1 * 3 to equal 3', () => {
expect(MathOps.multiply(1, 3)).toBe(3);
 });

test('divide 10 * 5 to equal 2', () => {
expect(MathOps.divide(10, 5)).toBe(2);
 });
                
