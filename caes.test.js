const salad = require('./caes.js')

test('basic 1',()=>{
    expect(salad('a',0)).toBe('a');
})

test('basic 2',()=>{
    expect(salad('a',1)).toBe('b');
})
test('basic 3',()=>{
    expect(salad('aA',1)).toBe('bB');
})
test('basic 4',()=>{
    expect(salad('aA',27)).toBe('bB');
})
test('basic 5',()=>{
    expect(salad('Hello, World!', 3)).toBe('Khoor, Zruog!');
})