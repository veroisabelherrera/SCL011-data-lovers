/* Manejo de data */


  //para filtrar
  const data = POKEMON.pokemon
  window.filterData={
  //window.data = data

   firstFilter:(data, valueCandy) => {
    const dataFilterCandy = data.filter(element => {
    return element.candy_count == (valueCandy) 
    
    
     })
    

    return dataFilterCandy
    
    }
  }
    //window.firstFilter = firstFilter
    
    
    