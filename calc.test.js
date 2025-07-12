let calc = require('./calc.js');

test('basic 1',()=>{
    expect(calc.sum(1,2)).toBe(3);
})
test('basic 2',()=>{
    expect(calc.sum(2,2)).toBe(4);
})
test('basic 3',()=>{
    expect(calc.sub(3,1)).toBe(2);
})
test('basic 4',()=>{
    expect(calc.sub(2,2)).toBe(0);
})
test('basic 5',()=>{
    expect(calc.div(1,2)).toBeCloseTo(0.5);
})
test('basic 6',()=>{
    expect(calc.div(2,2)).toBeCloseTo(1);
})
test('basic 7',()=>{
    expect(calc.mult(3,1)).toBe(3);
})
test('basic 8',()=>{
    expect(calc.mult(2,2)).toBe(4);
})