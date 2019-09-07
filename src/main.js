

const selects1 = document.getElementById("listSelect");
const containerFilters = document.getElementById("button-menu2") 
containerFilters.addEventListener("click", ()=>{
    selects1.style.display = "block";
});

//Nav Menu Principal
// document.getElementById("button-menu1").addEventListener("click", () =>{
//   document.getElementById("news-screen").style.display="block";
//   document.getElementById("home").style.display="none"
//   document.getElementById("listado-screen").style.display="none";
//   document.getElementById("estadisticas-screen").style.display="none";
// });

// document.getElementById("button-menu2").addEventListener("click", () =>{
//   document.getElementById("news-screen").style.display="none";
//   document.getElementById("home").style.display="none"
//   document.getElementById("listado-screen").style.display="block";
//   document.getElementById("estadisticas-screen").style.display="none";
// });

// document.getElementById("button-menu3").addEventListener("click", () =>{
//   document.getElementById("news-screen").style.display="none";
//   document.getElementById("home").style.display="none"
//   document.getElementById("listado-screen").style.display="none";
//   document.getElementById("estadisticas-screen").style.display="block";
// });

// document.getElementById("imagen-logo").addEventListener("click", () =>{
//   document.getElementById("news-screen").style.display="none";
//   document.getElementById("home").style.display="block"
//   document.getElementById("listado-screen").style.display="none";
//   document.getElementById("estadisticas-screen").style.display="none";
// });

const container = document.getElementById("root1")
  const selectCandy  = document.getElementById("candy_count");
  selectCandy.addEventListener("change", () =>{
  let valueCandy = document.getElementById("candy_count").value
//let valueCandy = selectCandy.options[selectCandy.selectedIndex].value

 let prindCandy = window.filterData.firstFilterCandy(data, valueCandy)
 
 

//                  // imprimir resultados
document.getElementById("root1").innerHTML="";
prindCandy.forEach(element => {
  container.innerHTML += `<div>

                                <div class="cartPk">
                                <div class="cartPk1">
                                <img src = ${element.img} class="imgPk">

                                <p> ${element.name}</p>
                                <p> # ${element.id}</p>
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
  document.getElementById("root1").innerHTML="";
  prindEgg.forEach(element => {
    container.innerHTML += `<div>
                                  <div class="cartPk">
                                  <div class="cartPk1">
                                  <img src = ${element.img} class="imgPk"> 
                           
                                  <p> ${element.name}</p>
                                  <p> # ${element.id}</p>
                                 </div> 
                                  </div>    
                                  </div> 
                              `
      
      })})

    const selectTypePokemon  = document.getElementById("type_Pokemon");
    selectTypePokemon.addEventListener("change", () =>{
    let valueTypePokemon = document.getElementById("type_Pokemon").value    
  //let valueCandy = selectCandy.options[selectCandy.selectedIndex].value
   let printPokemon = window.filterData.thirdFilterType(data, valueTypePokemon)
   
  //                  // imprimir resultados Type
  document.getElementById("root1").innerHTML="";

   printPokemon.forEach(element => {
    container.innerHTML += `<div>
                                  <div class="cartPk">
                                  <div class="cartPk1">
                                  <img src = ${element.img} class="imgPk"> 
                           
                                  <p> ${element.name}</p>
                                  <p> # ${element.id}</p>
                                 </div> 
                                  </div>   
                                  </div>  
                              `
      
      })})

      

