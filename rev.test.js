const reverse = require('./rev.js');

test('basic 1',()=>{
    expect(reverse('a')).toBe('a');
})

test('basic 2',()=>{
    expect(reverse('bb')).toBe('bb');
})

test('basic 3',()=>{
    expect(reverse('hello world')).toBe('dlrow olleh');
})