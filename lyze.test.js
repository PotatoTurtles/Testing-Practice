let analyze = require('./lyze');

test('basic 1',()=>{
    expect(analyze([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6})
})

test('basic 2',()=>{
    expect(analyze([4,7,1,8,3,0])).toEqual({average: 3.8333333333333335, min: 0, max: 8, length: 6})
})