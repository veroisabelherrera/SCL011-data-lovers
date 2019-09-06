
const container = document.getElementById("root")
  const selectCandy  = document.getElementById("candy_count");
  selectCandy.addEventListener("change", () =>{
  let valueCandy = document.getElementById("candy_count").value
//let valueCandy = selectCandy.options[selectCandy.selectedIndex].value
 let respuesta = window.filterData.firstFilter(data, valueCandy)
 //console.log(respuesta);

// console.log(value) // retornar

//  })
// imprimir resultados
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

//Nav Menu Principal
document.getElementById("button-menu1").addEventListener("click", () =>{
  document.getElementById("news-screen").style.display="block";
  document.getElementById("home").style.display="none"
  document.getElementById("listado-screen").style.display="none";
  document.getElementById("estadisticas-screen").style.display="none";
});

document.getElementById("button-menu2").addEventListener("click", () =>{
  document.getElementById("news-screen").style.display="none";
  document.getElementById("home").style.display="none"
  document.getElementById("listado-screen").style.display="block";
  document.getElementById("estadisticas-screen").style.display="none";
});

document.getElementById("button-menu3").addEventListener("click", () =>{
  document.getElementById("news-screen").style.display="none";
  document.getElementById("home").style.display="none"
  document.getElementById("listado-screen").style.display="none";
  document.getElementById("estadisticas-screen").style.display="block";
});

document.getElementById("imagen-logo").addEventListener("click", () =>{
  document.getElementById("news-screen").style.display="none";
  document.getElementById("home").style.display="block"
  document.getElementById("listado-screen").style.display="none";
  document.getElementById("estadisticas-screen").style.display="none";
});
