
//+++++++++++++++DECLARO LOS EL ARRAY DATOS, ANTES DE LLAMARLO CON EL VUE(PUE SI NO DA FALLO POR QUE NO PUEDE ASINAR EL VALOR DE UNA VARIABLE QUE AUN NO HA SIDO INSTANCIA)
let datos = []
//+++++++++++++++++++++SE DECLARA OBJETO VUE RECORDANDO SIEMPRE PONER: VUE EN MAYUSCULAS,AVER ASIGNADO UNA ID EN 'EL:' QUE ESTE ASIGNADA DESPUES DEL BODY DE HTML
const app = new Vue({
    el: '#app',
    data: {              /*DENTRO  DE DATA INTRODUCIREMOS LOS DATOS QUE QUEREMOS QUE USE, TENIENDO EN CUENTA QUE SON REACCTIOVOS Y QUE DESDE JAVASCRIPT PARA CAMBIARLE EL VALOR= 
                           NOMBRE VUE PUNTO EL DATO IGUAL Y LO QUE PONGAMSOS EJE APP.SENADORES=ARRAY */
        senadores: datos,
        prueva: 'eyyyyy',
    },
    methods: {

    }
})

/*****sincronizacion**************************************************************************************************************************************************************************** */

const inhtmlfiltro = document.querySelector("#filtroDesplegable");// *****filtrodesplegable....
var checkD = document.querySelector("#d");// checkbox con id='D' es = a variable checkD
var checkR = document.querySelector("#r");// .................................
var checkI = document.querySelector("#i");// ...................................
// **********************************************************************************************escuchasndo interaccion en el html........................................
inhtmlfiltro.addEventListener("change", filtro);// *****************si en inhtmlfiltro ha habido un'change'(un cambio) ejecutara la funcion filtro
checkD.addEventListener('change', filtro);//************************ */ igual
checkI.addEventListener('change', filtro);//************************ */ igual
checkR.addEventListener('change', filtro);//************************ */ igual

//*********************************************************************************** LLAMADA AJAX

const key = {// varible con informacion de la request (peticion)
    method: 'GET', // modo de envio
    headers: {// insercion de key prporcionada para verificacion
        'X-API-Key': '4xLFIm8lOsRF4bG29upVJZSBfQpFUC5Da87tu8wr',// objeto con la cabecera indicada de la api con elcontenido que sera la key prporcionada por la api
    },

}

fetch('https://api.propublica.org/congress/v1/113/senate/members.json', key) /* url de la api + la variable con la informacion de la request */
    .then(data => data.json()) /* creamos una promesa(indica que se 
        ara algo cuando reciva una respuesta
         y permitiendo que continue  el codigo) con la que 
         transformamos json en archivo legible para javascript */
    .then((data) => {
        datos = data.results[0].members//AHORA DATOS ES EL DOCUMENTO LISTO PARA USARSE

        filtro();//EJECUTO LA FUNCION DETRO DEL FECH AUNQUE ESTE ECHA FUERA, PERO DEVO LLAMARLA DESDE EL FECH POR QUE LOS DATOS NO SALEN DE AKI




    })

//**************************************************************************************************************************************************************** */


function filtro(event) {                          //ESTE FILTRO ECHO CON IF`S ME DEVUELVE UN ELEMENTO UNICO FILTRADO QUE SIEMPRE SER EL MISMO

    var a = []
    if (checkD.checked || checkR.checked || checkI.checked) {/*si algunode estos esta pulsado*/

        if (checkD.checked /* es lo mismo que === true*/) {
            for (i = 0; i < datos.length; i++) {

                if (datos[i].party === "D") {
                    a.push(datos[i]);              //LOS DATOS QUEPASEN ESTE FILTRO SE AÑADEN AL ELEMENTO FINAL
                }

            }
        }
        if (checkR.checked) {
            for (i = 0; i < datos.length; i++) {

                if (datos[i].party === "R") {
                    a.push(datos[i]);//PUSH AÑADE UN ELEMENTO A UN ARRAY 
                }

            }
        }
        if (checkI.checked) {
            for (i = 0; i < datos.length; i++) {

                if (datos[i].party === "I") {
                    a.push(datos[i]);
                }

            }
        }


    }
    else {//SI NINGUN DATO PASA EL FILTRO ES QUE NO HA IDO MARCADO NINGUN CHECKBOX Y DEVUELVE TODOS LOS ELEMENTOS AL ELEMENTO DE SALIDA
        for (i = 0; i < datos.length; i++) {
            a.push(datos[i])
        }

    }

    //*************************************** 

    //CREO UN ARRAY CON 
    //^[...new Set]: que crea un array  copiando otro pero sin repetir datos(esto hace que si algun estado se repite no me lo copie)
    //(datos.map())ejecuta una funcion sobre cada elemento de un array y devuelve el array modificado
    //en este caso recorre el array de objetos y devuelve el contenido state del objeto.

    // const estados = [...new Set(datos.map(function (actual) {
    //     return actual.state;
    // }))];
    //el resultado es que map me devuelve el nombre de todos los estados que tienen los objetos y ...Set no deja que se repitan




    // let estadoshtml = estados.map(function (actual) {   /******************* */ aqui utilizo el map para que añada el codigo html a cada estado 
    //     return `<option  value="${actual}"> ${actual}</option>
    //     `;
    // });

    // let listaestadoshtml = estadoshtml.join();

    // console.log(listaestadoshtml);




    // if (inhtmlfiltro.value === true) {
    //     alert("all")
    // }

    {//en el html cada estiqueta <li> de estados tiene un value que tienen el nombre del objeto.state)
        if (inhtmlfiltro.value !== "all") //si el value no es All(porque si es all es que no se ha seleccionado ningun estado)

            a = a.filter(function (actual) {//  aqui utilizo la funcion filter de javascript para que devuelva solo los objetos que su objeto:estate sean igual que el value selecionado)
                return actual.state === inhtmlfiltro.value;
            });

    }
    a.sort(function (b, a) { return (a.votes_with_party_pct - b.votes_with_party_pct) })
    app.senadores = a;//en la ruta del vue(app que es el nombre de la variable que contiene vue).senadores que son los datos que tengo en el data declaro que los datos proporcionados por elfiltro sean losdatos del vue

}




// function tablamaldita(listamfiltrada) {
//     let tabla = ' ';


//     for (let i = 0; i < listamfiltrada.length; i++) {
//         let newrow = `

//         <tr>


//         <td><a href="${listamfiltrada[i].url}">${listamfiltrada[i].first_name} ${listamfiltrada[i].middle_name || ''}  ${listamfiltrada[i].last_name}</a></td>
//         <td>${listamfiltrada[i].party}</td>
//         <td>${listamfiltrada[i].state}</td>
//         <td>${listamfiltrada[i].seniority}</td>
//         <td>${listamfiltrada[i].votes_with_party_pct}</td>



//     </tr>
// `;
//         tabla += newrow;
//     }
//     tbody.innerHTML = tabla;
// }

