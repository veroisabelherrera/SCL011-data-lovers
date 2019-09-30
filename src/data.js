
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
  sortData:(data , sortOrder) =>{
 const ordenarPokemon = data.sort((pk1, pk2 ) => {
  if(sortOrder == "1-151" ){
    return (pk1.id < pk2.id) ? -1 : 1
 }
else  {
  return (pk1.id > pk2.id) ? -1 : 1
}
})

return ordenarPokemon
},


sortData:(data , sortOrder) =>{
  const orderName = data.sort((a, b) => {
    if(sortOrder == "a-z" ){
      return (a.name < b.name) ? -1 : 1
   }
  else  {
    return (a.name > b.name) ? -1 : 1
  }
 })

 return orderName
 },


};






   //funciona para calculos

   window.calcuData={
    computeStats:(data) => {
 const averageHeigh = data.map(element => {
   return parseFloat(element.height)})
  let add = 0;
 for(let i = 0; i < averageHeigh.length; i++){
     add += averageHeigh[i];
   }
   let average =parseFloat(add/averageHeigh.length)

   return average;

    },



    computeStatswWeight:(data) => {
 const averageWeight = data.map(element => {
   return parseFloat(element.weight)})
  let add = 0;
 for(let i = 0; i < averageWeight.length; i++){
     add += averageWeight[i];
   }
   let average =parseFloat(add/averageWeight.length)


   return average;


    }
  }
 
