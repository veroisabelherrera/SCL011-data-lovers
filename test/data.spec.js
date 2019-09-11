global.window = global;
global.assert = require('chai').assert;
require('../src/data/pokemon/pokemon.js');
require('../src/data.js');
require('./data.spec.js');  


// describe('example', () => {
  
//   it('debería ser una función', () => {
//     assert.equal(typeof example, 'function');
//   });

//   it('debería retornar "example"', () => {
//     assert.equal(example(), 'example');
//   });
// })


describe('filterData.firstFilterCandy', ()=>{
  const sample = [
    {
    "name": "Bulbasaur",
    "candy_count": 25
    },
    {
    "name": "Pidgeotto",
    "candy_count": 50
  },
  {
    "name": "Magikarp",
    "candy_count": 400,
  },

  ]
describe('filterData.firstFilterCandy', () => {
  
  it('debería ser una función', () => { 
    assert.equal(typeof window.filterData.firstFilterCandy, 'function');
  });


  it('debería retornar objeto"Bulbasaur" para filtro "25 candy_count" ', () => {
  assert.deepEqual(window.filterData.firstFilterCandy(sample ,'25' ),[{"name": "Bulbasaur","candy_count": 25}]);
  });
  
})
 })

describe('filterData.secondFilterEggs', ()=>{
  const sample = [
    {
    "name": "Ekans",
    "egg": "5 km"
    },
    {
    "name": "Squirtle",
    "egg": "2 km"
  },
  {
    "name": "Onix",
    "egg": "10 km"
  },


describe('filterData.secondFilterEggs', () => {
  
  it('debería ser una función', () => { 
    assert.equal(typeof window.filterData.secondFilterEggs, 'function');
  });


  it('debería retornar objeto "Squirtle" para filtro "2 km" ', () => {
  assert.deepEqual(window.filterData.secondFilterEggs(sample ,'2 km' ),[{"name": "Squirtle","egg": "2 km"}]);
  });
  
})
] })

describe('filterData.thirdFilterType', ()=>{
  const sample = [
    {
    "name": "Ekans",
    "type": [ "Poison"]
    },
    {
      "name": "Squirtle",
      "type":  ["Water"]
  },
  

  ]
describe('filterData.thirdFilterType', () => {
  
  it('debería ser una función', () => { 
    assert.equal(typeof window.filterData.thirdFilterType, 'function');
  });


  it('debería retornar objeto"Squirtle" para filtro Water" ', () => {
  assert.deepEqual(window.filterData.thirdFilterType(sample ,'Water' ),[{"name": "Squirtle","type": ["Water"]}]);
  });
  
})
 })

 describe('order.sortData', ()=>{
  const sample = [
    {
    
    "id": 1
    },
    {
     
     "id": 2,
  },
{
     
       "id": 3,
    },

  ]
describe('order.sortData', () => {
  
  it('debería ser una función', () => { 
    assert.equal(typeof window.order.sortData, 'function');
  });

  it('debería retornar objeto "1 ,2 , 3", para ordenado pokedex 1-151 ', () => {
    assert.deepEqual(window.order.sortData(sample ,'1-151' ),[{"id": 1},{"id": 2},{"id": 3}]);
    });
  it('debería retornar objeto "3 ,2 , 1", para ordenado pokedex 151-1 ', () => {
  assert.deepEqual(window.order.sortData(sample ,'151-1' ),[{"id": 3},{"id": 2},{"id": 1}]);
  });
  
})
 })