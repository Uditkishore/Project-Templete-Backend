function sum(a, b) {
    return a + b;
  }
  function sub(a, b) {
    return b - a;
  }
test('testing', () => {
  expect(sum(5, 9)).toBe(14);
  expect(sub(5, 9)).toBe(4);
});
