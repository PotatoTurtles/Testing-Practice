const cap = require("./cap.js");

test('Easy 1', () => {
  expect(cap('a')).toBe('A');
});

test('Easy 2', () => {
  expect(cap('b')).toBe('B');
});

test('Easy 3', () => {
  expect(cap('c')).toBe('C');
});

test('Easy 4', () => {
  expect(cap('case closed')).toBe('Case closed');
});


test('Edge 1', () => {
  expect(cap('')).toBe(null);
});

test('Edge 2', () => {
  expect(cap('1def')).toBe('1def');
});
