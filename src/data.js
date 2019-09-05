


  //para filtrar
  const data = POKEMON.pokemon
  window.filterData={
   firstFilter:(data, valueCandy) => {
    const dataFilterCandy = data.filter(element => {
    return element.candy_count == (valueCandy) 
    
    
     })
    

    return dataFilterCandy
    
    }
  }
    
    
    
    