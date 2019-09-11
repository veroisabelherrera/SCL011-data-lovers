


  //para filtrar por candy
  
  window.filterData={
    firstFilterCandy:(data, valueCandy) => {
     const dataFilterCandy = data.filter(element => {
     return element.candy_count == (valueCandy) 
     
      })
     
     return dataFilterCandy
     },
 
 //para filtrar por eggs
    secondFilterEggs:(data, valueEgg) => {
      const dataFilterEgg = data.filter(element => {
      return element.egg == (valueEgg) 
    
       })
   
      return dataFilterEgg
      },
      //para filtrar por Type
      thirdFilterType:(data,valueTypePokemon) =>{
        const dataFilterPokemonType= data.filter(element =>{
          return element.type.includes(valueTypePokemon) 
        })
 
        return dataFilterPokemonType;
      }
  }
 
    
  window.order={
  sortData:(data ,  sortOrder) =>{

 const ordenarPokemon = data.sort((pk1, pk2 ) => {
  
  if(sortOrder == "1-151" ){
    return (pk1.id < pk2.id) ? -1 : 1
 } 
else  {
  return (pk1.id > pk2.id) ? -1 : 1
}
})
//console.log(sortby);

return ordenarPokemon
}}; 
  //console.log(ordenarPokemon);
  
   //funciona para calculos
 
 window.calcuData={
   computeStats:(data ) => {
const averageHeigh = (data.map(element => parseFloat(element.height)))
 let add = 0;
for(let i = 0; i < averageHeigh.length; i++){
    add += averageHeigh[i];
  }
  let average = add/151

  return average;
  
  
   }}
//  var promedio = suma / arreglo.length;
 
 
 
 
 
 /*
 suma=elemento1+elemento2+elemento3
 promedio=suma/3
 */
 
 
 
 /*
 // Calcular el promedio de ingresos de todos los usuarios.
 import { prop, map, reduce, add, compose } from 'ramda';
 const average = (xs) => reduce(add, 0, xs) / xs.length;
 const incomesAverage = compose(average, map(prop('incomes')));
 incomesAverage(USERS) // 8333.333
 */
 
 //      let tipoPorcen = [];
//      for (let i = 0; i < data.length; i++) {
//        for (let x = 0; x < data[i].height.length; x++) {
//          if (data[i].height[x] === alturaPoke) {
//            tipoPorcen.push(data[i].height[x]);
//          }
//        }
//      }
//      return ('El porcentaje del pokemon de tipo  es: ' + ((tipoPorcen.length) / (alturaPoke)).toFixed(2).bold() + '%');
//    }
//  };
  
   
 
 

//   if (pk2.id >pk1.id) {
//     return 1;
//   }
//   if (pk2.id < pk1.id) {
//     return -1;
//   }
//   return 0
//   } )
//   console.log(ordenarPk);




