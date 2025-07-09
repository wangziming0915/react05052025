const oddFilter = require('./oddFilter');

test('Return a filted array that contains only odd numbers', () =>{

    expect(oddFilter()).toEqual([1, 5, 9, 15])
})