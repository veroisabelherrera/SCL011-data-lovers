
const selects1 = document.getElementById("prueba");
const containerFilters = document.getElementById("listOfPokemos") 
containerFilters.addEventListener("click", ()=>{
    selects1.style.display = "block";
});

const container = document.getElementById("root")
  const selectCandy  = document.getElementById("candy_count");
  selectCandy.addEventListener("change", () =>{
  let valueCandy = document.getElementById("candy_count").value    
//let valueCandy = selectCandy.options[selectCandy.selectedIndex].value
 let prindCandy = window.filterData.firstFilterCandy(data, valueCandy)
 
 

//                  // imprimir resultados
document.getElementById("root").innerHTML="";
prindCandy.forEach(element => {
  container.innerHTML += `<div> 
                                <div class="cartPk">
                                
                                <img src = ${element.img}> 
                         
                                <p>Pokemon ${element.name}</p>
                                <p>Pokedex ${element.id}</p>
                               </div> 
                                </div>    
                            </div>`
    
    })})

    
    const selectEgg  = document.getElementById("type_egg");
    selectEgg.addEventListener("change", () =>{
    let valueEgg = document.getElementById("type_egg").value    
  //let valueCandy = selectCandy.options[selectCandy.selectedIndex].value
   let prindEgg = window.filterData.secondFilterEggs(data, valueEgg)
   

  //                  // imprimir resultados egss
  document.getElementById("root").innerHTML="";
  prindEgg.forEach(element => {
    container.innerHTML += `<div> 
                                  <div class="cartPk">
                                  
                                  <img src = ${element.img}> 
                           
                                  <p>Pokemon ${element.name}</p>
                                  <p>Pokedex ${element.id}</p>
                                 </div> 
                                  </div>    
                              </div>`
      
      })})

    const selectTypePokemon  = document.getElementById("type_Pokemon");
    selectTypePokemon.addEventListener("change", () =>{
    let valueTypePokemon = document.getElementById("type_Pokemon").value    
  //let valueCandy = selectCandy.options[selectCandy.selectedIndex].value
   let printPokemon = window.filterData.thirdFilterType(data, valueTypePokemon)
   
  //                  // imprimir resultados Type
  document.getElementById("root").innerHTML="";

   printPokemon.forEach(element => {
    container.innerHTML += `<div> 
                                  <div class="cartPk">
                                  
                                  <img src = ${element.img}> 
                           
                                  <p>Pokemon ${element.name}</p>
                                  <p>Pokedex ${element.id}</p>
                                 </div> 
                                  </div>    
                              </div>`
      
      })})

      