

  //para filtrar por candy
  const data = POKEMON.pokemon
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
    

  