// Nav Menu Principal

document.getElementById("imagen-logo").addEventListener("click", () =>{
//document.getElementById("news-screen").style.display="none";
document.getElementById("home").style.display="block";
document.getElementById("listSelect").style.display="none";
document.getElementById("estadisticas-screen").style.display="none";
document.getElementById("root3").innerHTML="";
});

const container2 = document.getElementById("root3")
  document.getElementById("button-menu1").addEventListener("click", () =>{
    document.getElementById("home").style.display="none";
    document.getElementById("listSelect").style.display="none";
    document.getElementById("estadisticas-screen").style.display="none";
    document.getElementById("showPokemones").innerHTML="";
   container2.innerHTML=`<div id="news-screen" class="homescreen">
  <div class="box-article">
      <h4 class="title5">Noticias</h4>
          <a type="button" href="https://www.pokemon.com/el/noticias-pokemon/"  target="_blank" class="readmorebutton">Leer más</a> 
      
  </div>
  <div class="box-article">
      <h4 class="title5">Campañas en IFEMA de Pokémon</h4>
      <a type="button" href="https://pokemon.fandom.com/es/wiki/Evento_Pok%C3%A9mon" target="_blank"  class="readmorebutton">Leer más</a> 
         
      </div>
  <div class="box-article">
      <h4 class="title5">Actualizaciones</h4>
      <a type="button"  href="https://pokemongolive.com/es/post/" target="_blank" class="readmorebutton">Leer más</a> 
  </div>

</div>`

})

const selects1 = document.getElementById("listSelect");
const containerFilters = document.getElementById("button-menu2");
containerFilters.addEventListener("click", ()=>{
    selects1.style.display = "block";
    document.getElementById("estadisticas-screen").style.display="none";
    document.getElementById("home").style.display="none";
    document.getElementById("root3").innerHTML="";
});

const statistics = document.getElementById("estadisticas-screen");
const containerStatistics = document.getElementById("button-menu3");
containerStatistics.addEventListener("click", ()=>{
    statistics.style.display = "block";
    document.getElementById("listSelect").style.display="none";
    document.getElementById("home").style.display="none";
    document.getElementById("showPokemones").innerHTML="";
    document.getElementById("root3").innerHTML="";
});

const data = window.POKEMON.pokemon;

const container = document.getElementById("showPokemones")
  const selectCandy  = document.getElementById("candy_count");
  selectCandy.addEventListener("change", () =>{
  let valueCandy = document.getElementById("candy_count").value
//let valueCandy = selectCandy.options[selectCandy.selectedIndex].value

 let prindCandy = window.filterData.firstFilterCandy(data, valueCandy)


//                  // imprimir resultados
document.getElementById("root3").innerHTML="";
document.getElementById("showPokemones").innerHTML="";
prindCandy.forEach(element => {
container.innerHTML += `<div>
                          <div class="cartPk">
                              <img class="imgPk" src = ${element.img}>
                                <div class="cartPk1">
                                  <p id="pokeName"> ${element.name}</p>
                                  <p id="pokedex"> # ${element.id}</p>
                                  <p id="pokeHeigth"> Altura: ${element.height}</p>
                                  <p id="pokeWeigth"> Peso: ${element.weight}</p>
                                </div>
                          </div>
                        </div>`
    });

  });
  
  
      const selectEgg  = document.getElementById("type_egg");
      selectEgg.addEventListener("change", () =>{
      let valueEgg = document.getElementById("type_egg").value    
    //let valueCandy = selectCandy.options[selectCandy.selectedIndex].value
     let prindEgg = window.filterData.secondFilterEggs(data, valueEgg)
     
  
    //                  // imprimir resultados egss
   document.getElementById("showPokemones").innerHTML="";
      prindEgg.forEach(element => {
        container.innerHTML += `<div>
                                      <div class="cartPk">
                                      <img src = ${element.img} class="imgPk">
                                      <div class="cartPk1">
                                      <p id="pokeName"> ${element.name}</p>
                                      <p id="pokedex"> # ${element.id}</p>
                                      <p id="pokeHeigth"> Altura: ${element.height}</p>
                                      <p id="pokeWeigth"> Peso: ${element.weight}</p>
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
    document.getElementById("showPokemones").innerHTML="";
  
     printPokemon.forEach(element => {
        container.innerHTML += `<div>
                                      <div class="cartPk">
                                      <img src = ${element.img} class="imgPk">
                                      <div class="cartPk1">
                                      <p id="pokeName"> ${element.name}</p>
                                      <p id="pokedex"> # ${element.id}</p>
                                      <p id="pokeHeigth"> Altura: ${element.height}</p>
                                      <p id="pokeWeigth"> Peso: ${element.weight}</p>
                                     </div>
                                      </div>
                                      </div>
                                  `
  
          })})
  
  
        
        const orderPk  = document.getElementById("orden-pokedex");
        orderPk.addEventListener("change", () =>{
        let sortOrder= document.getElementById("orden-pokedex").value   
       let printOrder = window.order.sortData(data, sortOrder)
       document.getElementById("showPokemones").innerHTML="";
  
       printOrder.forEach(element => {
        container.innerHTML += `<div>
                                  <div class="cartPk">
                                      <img src = ${element.img} class="imgPk">
                                    <div class="cartPk1">
                                        <p id="pokeName"> ${element.name}</p>
                                        <p id="pokedex"> # ${element.id}</p>
                                        <p id="pokeHeigth"> Altura: ${element.height}</p>
                                        <p id="pokeWeigth"> Peso: ${element.weight}</p>
                                    </div>
                                  </div>
                                </div>
                                `

          

        
        })})




// Mostrar Funcion Calculo
const buttonHeight= document.getElementById("height")
const containerCalcu = document.getElementById("calculoresult");
buttonHeight.addEventListener("click", () => { 
const resultHeight = window.calcuData.computeStats(data) 

containerCalcu.innerHTML = '<p class="resultCalcu">' +" El promedio de altura de los 151 Pokémones de la Región de Kanto es " +  (resultHeight).toFixed(2).bold() + "m"; '</p>'



});

//Calculo 2
const buttonWeight= document.getElementById("Weight")
buttonWeight.addEventListener("click", () => { 
const resultWeight = window.calcuData.computeStatswWeight(data) 


containerCalcu.innerHTML = '<p class="resultCalcu">'+" El promedio de peso de los 151 Pokémones de la Región de Kanto es " +  (resultWeight).toFixed(2).bold() + "kg"; '</p>'

});


