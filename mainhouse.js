const key = {// varible con informacion de la request (peticion)
    method: 'GET', // modo de envio
    headers: {// insercion de key prporcionada para verificacion
        'X-API-Key': '4xLFIm8lOsRF4bG29upVJZSBfQpFUC5Da87tu8wr',// objeto con la cabecera indicada de la api con elcontenido que sera la key prporcionada por la api
    },

}
let datos = []

fetch('https://api.propublica.org/congress/v1/113/house/members.json', key) /* url de la api + la variable con la informacion de la request */
    .then(data => data.json()) /* creamos una promesa(indica que se 
        ara algo cuando reciva una respuesta
         y permitiendo que continue  el codigo) con la que 
         transformamos json en archivo legible para javascript */
    .then((data) => {
        datos = data.results[0].members

        inhtmlfiltro.addEventListener("change", filtro);
        checkD.addEventListener("change", filtro);
        checkI.addEventListener("change", filtro);
        checkR.addEventListener("change", filtro);
        tablamaldita(datos);


    })


const inhtmlfiltro = document.querySelector("#filtroDesplegable");
var checkD = document.querySelector("#d");
var checkR = document.querySelector("#r");
var checkI = document.querySelector("#i");


const tbody = document.getElementById("finaltable");
function filtro(event) {

    var a = []
    if (checkD.checked || checkR.checked || checkI.checked)/*si algunode estos esta pulsado*/ {

        if (checkD.checked /* es lo mismo que === true*/) {
            for (i = 0; i < datos.length; i++) {

                if (datos[i].party === "D") {
                    a.push(datos[i]);
                }

            }
        }
        if (checkR.checked) {
            for (i = 0; i < datos.length; i++) {

                if (datos[i].party === "R") {
                    a.push(datos[i]);
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

        console.log(a)
    }
    else {
        for (i = 0; i < datos.length; i++) {
            a.push(datos[i])
        }
        console.log(a)
    }

    // estados.unshift("STATES");
    // estados.unshift("STATES")
    // let estadoshtml = estados.map(function (actual) {
    //     return `<option  value="${actual}"> ${actual}</option>
    //     `;
    // });

    // let listaestadoshtml = estadoshtml.join();

    // console.log(listaestadoshtml);

    // const estados = [...new Set(datos.map(function (actual) {
    //     return actual.state;
    // }))];



    // if (inhtmlfiltro.value === true) {
    //     alert("all")
    // }
    console.log(inhtmlfiltro.value)

    if (inhtmlfiltro.value !== "all") {
        a = a.filter(function (actual) {
            return actual.state === inhtmlfiltro.value;
        });




    }

    tablamaldita(a)

}




function tablamaldita(listamfiltrada) {
    let tabla = ' ';


    for (let i = 0; i < listamfiltrada.length; i++) {
        let newrow = `

        <tr>


        <td><a href="${listamfiltrada[i].url}">${listamfiltrada[i].first_name} ${listamfiltrada[i].middle_name || ''}  ${listamfiltrada[i].last_name}</a></td>
        <td>${listamfiltrada[i].party}</td>
        <td>${listamfiltrada[i].state}</td>
        <td>${listamfiltrada[i].seniority}</td>
        <td>${listamfiltrada[i].votes_with_party_pct}</td>



    </tr>
`;
        tabla += newrow;
    }
    tbody.innerHTML = tabla;
}



