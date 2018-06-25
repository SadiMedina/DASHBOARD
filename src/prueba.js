/*--------------------------------------------------------------------------------*/
/*var contenido = document.querySelector('#menuCohort')
function traer(){
  fetch(urlCohorts)
  .then(res => res.json())
  .then(data=>{
   console.log(data[0].id);
   for (var i=0; i<data.length; i++){
     return contenido.innerHTML= `<option>"${data[i].id}"</option>`  
   }
   })
}//ejm contenido.innerHTML= `<option>akjfdkalsdjla</option>`