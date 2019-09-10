


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

    
      
   //const data = POKEMON.pokemon
 //if sortOrder=a-z valor que tomare desde el select colocar como
  //sorby =name , id valor que no se de donde tomar 
  //const sortOrder = "Z-A"
  //let numero = "id"
// bAveriguar como agregar sort
  //funcion para ordenar por pokedex
  window.order={
  sortData:(data ,  sortOrder) =>{

 const ordenarPokemon = data.sort((pk1, pk2 ) => {
  
  if(sortOrder == "1-151" ){
    return (pk1.id < pk2.id) ? -1 : 1
 }
else if (sortOrder == "151-1" ){
  return (pk1.id > pk2.id) ? -1 : 1
}
})
return ordenarPokemon
}}; 
  //console.log(ordenarPokemon);
  
   
//   if (pk1.id >pk2.id) { 
//     return 1;
//   }
//   if (pk1.id < pk2.id) {
//     return -1;
//   }
//   return 0
//   } )
//   console.log(ordenarPk);
  
// return (pk1.name < pk2.name) ? -1 :  // como opcion para ordenar alfabeticamente

//Ordenar pk za
//  const ordenarPk = data.sort((pk1, pk2 ) => {
   
//   if (pk2.id >pk1.id) {
//     return 1;
//   }
//   if (pk2.id < pk1.id) {
//     return -1;
//   }
//   return 0
//   } )
//   console.log(ordenarPk);



  

