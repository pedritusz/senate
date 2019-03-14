
const datos = data.results[0].members;


const todosLosDatos = {
    nombres: null,
    top10: null,
    bottom10: null,
    numerodemocratas: null,
    numerorepublicanos: null,
    numeroindependienter: null,
    totalvotos: null,
    tantoporcinentodem: null,
    tantoporcinentorep: null,
    tantoporcinentoind: null,
    numrep: null,
};



const app = new Vue({
    el: '#app',
    data: {
        estadisticas: todosLosDatos,
        prueba: 'eo',

    }
})


function calcrepublicanos(datos) {
    let republicanos = 0

    for (let i = 0; i < datos.length; i++) {
        if (datos[i].party === "R") {
            republicanos++

        }
        else { }






    }

    return republicanos;
};
const resultadoNrepublicanos = calcrepublicanos(datos);
todosLosDatos.numerorepublicanos = resultadoNrepublicanos;

function calcdemocratas(datos) {
    let democratas = 0;

    for (let i = 0; i < datos.length; i++) {
        if (datos[i].party === "D") {
            democratas++

        }
        else { }

    }

    return democratas;
};
const resultadoNdemocratas = calcdemocratas(datos);
todosLosDatos.numerodemocratas = resultadoNdemocratas;
function calcindep(datos) {
    let indep = 0

    for (let i = 0; i < datos.length; i++) {
        if (datos[i].party === "I") {
            indep++

        }
        else { }

    }

    return indep;
};
const resultadoNindep = calcindep(datos);

console.log(resultadoNindep)
todosLosDatos.numeroindependienter = resultadoNindep
console.log(todosLosDatos)

function tantoPorCiento(acalcular, cienPorCien) {
    const division = acalcular / cienPorCien;
    const resultado = division * 100;

    let redondeado = Math.round(resultado);
    return redondeado

}

function todoslosVotos(datos) {
    let votos = 0
    for (let i = 0; i < datos.length; i++) {
        votos = votos + datos[i].votes_with_party_pct;



    }
    return votos
}

const totalvotos = todoslosVotos(datos);
todosLosDatos.totalvotos = todoslosVotos;


function sumaVotosASuPartido(votantes, datos) {
    let votosXciento = 0;
    for (i = 0; i < votantes; i++) {
        votosXciento = votosXciento + datos[i].votes_with_party_pct;
    }
    return votosXciento
}

const votospropiosdemocratas = sumaVotosASuPartido(resultadoNdemocratas, datos);
const votospropiosrepublicanos = sumaVotosASuPartido(resultadoNrepublicanos, datos);
const votospropiosindependientes = sumaVotosASuPartido(resultadoNindep, datos);
const votosporcientodemocratas = tantoPorCiento(votospropiosdemocratas, totalvotos);
const votosporcientoindependientes = tantoPorCiento(votospropiosindependientes, totalvotos);
const votosporcientorepublicanos = tantoPorCiento(votospropiosrepublicanos, totalvotos);
todosLosDatos.tantoporcinentodem = votosporcientodemocratas;
todosLosDatos.tantoporcinentorep = votosporcientorepublicanos;
todosLosDatos.tantoporcinentoind = votosporcientoindependientes;

function NdiezXciento(data) {
    const diez = 0.10
    const porcentage = data.length * diez;
    return porcentage
}

function votosQhay(datos) {
    votos = [] /*votos sin repetir*/
    for (i = 0; i < datos.length; i++) {
        if (!votos.includes(datos[i].votes_with_party_pct)) {

            votos.push(datos[i].votes_with_party_pct)
        }


    }




    let resultado = votos.sort();
    return resultado
}


votos = votosQhay(datos);

let orden = votos.sort();//votos ordenados sin repetir
let dizporCientovotos = []// orden ascendente del 10% de los votos
let dizporciento = votos.length * 0.10;//10%votos no repetidos(numero)
for (b = 0; b < dizporciento; b++) {
    dizporCientovotos.push(orden[b])

}
const ordendescendente = orden.reverse();//datos ordenados de mas votos a menos(ok)
const dizporcientoMayorVotos = []//diez porciento de los votos ordenados de mayor a menor(ok)
for (a = 0; a < dizporciento; a++) {//diez por ciento es el numero y devovera el 10 pornciento de los votos ordenaqdos de mayor a menos(ok)
    dizporcientoMayorVotos.push(ordendescendente[a])

}
//ahora tengo que adjuntar a un array todos los ladrones que contengan los votos de diezporcientomayorvotos(en el que solo hay el valor de votes whith...)



const diezMejorespersonas = []

for (let i = 0; i < datos.length; i++) {

    for (let b = 0; b < dizporcientoMayorVotos.length; b++) {
        if (datos[i].votes_with_party_pct === dizporcientoMayorVotos[b]) {
            diezMejorespersonas.push(datos[i])
        }
    }

}

todosLosDatos.top10 = diezMejorespersonas;


console.log(todosLosDatos);






















const resultado = []
for (c = 0; c < datos.length; c++) {
    for (d = 0; d < dizporCientovotos.length; d++) {
        if (dizporCientovotos[d] === datos[c].votes_with_party_pct) {
            if (!resultado.includes(datos[c].votes_with_party_pct)) {
                resultado.push(datos[c])
            }
        }
    }





}
const numrepes = [resultadoNdemocratas, resultadoNrepublicanos, resultadoNindep];
todosLosDatos.numrep = numrepes;
todosLosDatos.bottom10 = resultado;
const nombrepartidos =
{
    democrats: {
        resultadoNumero: resultadoNdemocratas,
        tantoPorCiento: votosporcientodemocratas,
    },
    republicans: {
        resultadoNumero: resultadoNrepublicanos,
        tantoPorCiento: votospropiosrepublicanos,
    },

    independents: {
        resultadoNumero: resultadoNindep,
        tantoPorCiento: votosporcientoindependientes,
    }
};
todosLosDatos.nombres = nombrepartidos;

// let tablaglance = `
// <tr>
// <td>Democrats</td>
// <td>${resultadoNdemocratas}</td>
// <td>${votosporcientodemocratas}%</td>
// </tr>
// <tr>
// <td>republicans</td>
// <td>${resultadoNrepublicanos}</td>
// <td>${votosporcientorepublicanos}%</td>
// </tr>
// <tr>
// <td>Independents</td>
// <td>${resultadoNindep}</td>
// <td>${votosporcientoindependientes}%</td>
// </tr>



// `;



// console.log("filtrossssssssssssssssssssssssssssssss")














// tablaglanceOut = document.getElementById("tabla1");
// tablaglanceOut.innerHTML = tablaglance;

// console.log(document.getElementById("tabla1"));

// function rows(resultado) {

//     tabla = ``

//     for (i = 0; i < resultado.length; i++) {
//         row =
//             `
//         <tr>

//         <td>${resultado[i].first_name} ${resultado[i].middle_name || ""} </td>
//         <td>${resultado[i].missed_votes}</td>
//         <td>${resultado[i].missed_votes_pct}</td>

//        </tr>
//         `
//         tabla += row;
//     }

//     return tabla;
// }
// const rowdos = rows(resultado);

// const rowtres = rows(diezMejorespersonas);




// tablados = document.getElementById("tabla2");
// tablados.innerHTML = (rowdos);

// tablatres = document.getElementById("tabla3");
// tablatres.innerHTML = (rowtres);