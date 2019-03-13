




new Vue({
    el: '#app',
    data: {
        titulo: 'como te llamas',
    }
})






















// ------------ejemplo-------fetch-------------------
//let key = {// varible con informacion de la request (peticion)
//     method: 'GET',//modo de envio
//     headers: {//insercion de key prporcionada para verificacion 
//         'X-API-Key': '4xLFIm8lOsRF4bG29upVJZSBfQpFUC5Da87tu8wr',//objeto con la cabecera indicada de la api con elcontenido que sera la key prporcionada por la api
//     },

// }
// const tablahtml = document.querySelector("#tabla")
// let miembros = []

// fetch('https://api.propublica.org/congress/v1/113/senate/members.json', key) /*url de la api + la variable con la informacion de la request*/
//     .then(datos => datos.json())// creamos una promesa(indica que se ara algo cuando reciva una respuesta y permitiendo que continue  el codigo) con la que transformamos json en archivo legible para javascript 
//     .then((datos) => {
//         miembros = datos.results[0].members
//         let tablafinal = GenerarTabla(miembros);

//         tablahtml.innerHTML = tablafinal;
//     })

// TABLA------------------------------------
// function GenerarTabla(arraymiembros) {
//     let tabla = ''
//     for (i = 0; i < arraymiembros.length; i++) {
//         let stringDeRows = `
//         <tr>
//         <td>${arraymiembros[i].first_name}</td>
//         <td>${arraymiembros[i].party}</td>
//         <td>${arraymiembros[i].state}</td>
//         <td>${arraymiembros[i].seniority}</td>
//         <td>${arraymiembros[i].votes_with_party_pct}</td>

//         </tr>
//         `
//         tabla += stringDeRows;
//     }
//     return tabla
// }


// const inhtmlfiltro = document.querySelector("#filtroDesplegable");

// const estados = [...new Set(datos.map(function (actual) {
//     return actual.state;
// }))];


// inhtmlfiltro.addEventListener("change", function (actual) {
//     console.log(inhtmlfiltro.value)//si al selct le miro el value me saldra el value seleccionado desde la pagina

// });

// estados.unshift("STATES");
// estados.unshift("STATES")
// let estadoshtml = estados.map(function (actual) {
//     return `<option  value="${actual}"> ${actual}</option>
//     `;
// });

// let listaestadoshtml = estadoshtml.join();

// console.log(listaestadoshtml);
// ***************************************************
// function salida() {
//     if (inhtmlfiltro.value === all) {
//         tablamaldita(a);
//         // let b = a.filter( function detectarvalor(actual) {
//         //     return actual.value === valor;
//     }
//     else {
//         let b = a.filter(function (actual) {
//             return actual.value === valor;
//         });
//         tablamaldita(b);
//     }


// }

