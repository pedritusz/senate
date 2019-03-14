const datos = data.results[0].members;
datos.sort();
let senadores = {
    democratas: {
        nombre: '', numero: null, porcentaje: null,
    },
    republicanos: {
        nombre: '', numero: null, porcentaje: null,
    },
    independientes: {
        nombre: '', numero: null, porcentaje: null,
    },
    estadisticas: {
        top: null, bottom: null,
    }


};

const app = new Vue({
    el: '#app',
    data: {
        senadores: senadores,

    }
})

function calcrepublicanos(datos) {
    let republicanos = 0

    for (var i = 0; i < datos.length; i++) {
        if (datos[i].party === "R") {
            republicanos++

        }
        else { }

    }

    return republicanos;
};
const resultadoNrepublicanos = calcrepublicanos(datos);

function calcdemocratas(datos) {
    let democratas = 0

    for (var i = 0; i < datos.length; i++) {
        if (datos[i].party === "D") {
            democratas++

        }
        else { }

    }

    return democratas;
};
const resultadoNdemocratas = calcdemocratas(datos);

function calcindep(datos) {
    let indep = 0

    for (var i = 0; i < datos.length; i++) {
        if (datos[i].party === "I") {
            indep++

        }
        else { }

    }

    return indep;
};
var resultadoNindep = calcindep(datos);


function tantoPorCiento(acalcular, cienPorCien) {
    const division = acalcular / cienPorCien;
    const resultado = division * 100;

    let redondeado = Math.round(resultado);
    return redondeado

}

function todoslosVotos(datos) {
    var votos = 0
    for (var i = 0; i < datos.length; i++) {
        votos = votos + datos[i].votes_with_party_pct;

    }
    return votos
}

var totalvotos = todoslosVotos(datos);



function sumaVotosASuPartido(votantes, datos) {
    var votosXciento = 0;
    for (i = 0; i < votantes; i++) {
        votosXciento = votosXciento + datos[i].votes_with_party_pct;
    }
    return votosXciento
}

var votospropiosdemocratas = sumaVotosASuPartido(resultadoNdemocratas, datos);
var votospropiosrepublicanos = sumaVotosASuPartido(resultadoNrepublicanos, datos);
var votospropiosindependientes = sumaVotosASuPartido(resultadoNindep, datos);
var votosporcientodemocratas = tantoPorCiento(votospropiosdemocratas, totalvotos);
var votosporcientoindependientes = tantoPorCiento(votospropiosindependientes, totalvotos);
var votosporcientorepublicanos = tantoPorCiento(votospropiosrepublicanos, totalvotos);

function NdiezXciento(data) {
    var diez = 0.10
    var porcentage = data.length * diez;
    return porcentage
}

function votosQhay(datos) {
    votos = [] /*votos sin repetir*/
    for (i = 0; i < datos.length; i++) {
        if (!votos.includes(datos[i].votes_with_party_pct)) {

            votos.push(datos[i].votes_with_party_pct)
        }


    }

    resultado = votos.sort();
    return resultado
}


votos = votosQhay(datos);

let orden = votos.sort();//votos ordenados sin repetir
let dizporCientovotos = []// orden ascendente del 10% de los votos
let dizporciento = votos.length * 0.10;//10%votos no repetidos(numero)
for (b = 0; b < dizporciento; b++) {
    dizporCientovotos.push(orden[b])

}
var ordendescendente = orden.reverse();//datos ordenados de mas votos a menos(ok)
var dizporcientoMayorVotos = []//diez porciento de los votos ordenados de mayor a menor(ok)
for (a = 0; a < dizporciento; a++) {//diez por ciento es el numero y devovera el 10 pornciento de los votos ordenaqdos de mayor a menos(ok)
    dizporcientoMayorVotos.push(ordendescendente[a])

}
//ahora tengo que adjuntar a un array todos los ladrones que contengan los votos de diezporcientomayorvotos(en el que solo hay el valor de votes whith...)

var diezMejorespersonas = []

for (let i = 0; i < datos.length; i++) {

    for (let b = 0; b < dizporcientoMayorVotos.length; b++) {
        if (datos[i].votes_with_party_pct === dizporcientoMayorVotos[b]) {
            diezMejorespersonas.push(datos[i])
        }
    }

}

var resultado = []
for (c = 0; c < datos.length; c++) {
    for (d = 0; d < dizporCientovotos.length; d++) {
        if (dizporCientovotos[d] === datos[c].votes_with_party_pct) {
            if (!resultado.includes(datos[c].votes_with_party_pct)) {
                resultado.push(datos[c])
            }
        }
    }

}

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


// var tablaglanceOut = document.getElementById("tabla1");

// tablaglanceOut.innerHTML = (tablaglance);

// function rows(resultado) {

//     tabla = ``

//     for (i = 0; i < 10; i++) {
//         row =
//             `
//         <tr>

//         <td>${resultado[i].first_name} ${resultado[i].middle_name || ""} </td>
//         <td>${resultado[i].votes_with_party_pct}</td>
//         <td>${resultado[i].missed_votes_pct}</td>

//        </tr>
//         `
//         tabla += row;
//     }

//     return tabla;
// }
// var rowdos = rows(resultado);

// var rowtres = rows(diezMejorespersonas);

// tablados = document.getElementById("tabla2");
// tablados.innerHTML = (rowdos);

// tablatres = document.getElementById("tabla3");
// tablatres.innerHTML = (rowtres);

senadores = {
    democratas: {
        nombre: 'democrats', numero: resultadoNdemocratas, porcentaje: votosporcientodemocratas,
    },
    republicanos: {
        nombre: 'republicans', numero: resultadoNrepublicanos, porcentaje: votosporcientorepublicanos,
    },
    independientes: {
        nombre: ' independents', numero: resultadoNindep, porcentaje: votosporcientoindependientes,
    },
    estadisticas: {
        top: diezMejorespersonas.sort(), bottom: resultado,
    }


};
app.senadores = senadores;
console.log(senadores);
