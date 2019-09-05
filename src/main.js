// /* Manejo del DOM */

const container = document.getElementById("root")
  const selectCandy  = document.getElementById("candy_count");
  selectCandy.addEventListener("change", () =>{
  let valueCandy = document.getElementById("candy_count").value    
//let valueCandy = selectCandy.options[selectCandy.selectedIndex].value
 let respuesta = window.filterData.firstFilter(data, valueCandy)
 //console.log(respuesta);
 
// console.log(value) // retornar 

//  })
//                  // imprimir resultados  
 respuesta.forEach(element => {
  container.innerHTML += `<div> 
                                <div class="cartPk">
                                
                                <img src = ${element.img}> 
                         
                                <p>Pokemon ${element.name}</p>
                                <p>Pokedex ${element.id}</p>
                               </div> 
                                </div>    
                            </div>`
    
    })})