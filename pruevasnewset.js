const datos = data.results[0].members;



// filtro estados no repetidos guarro
function calculodeEstados(entrada) {
    const Nestados = [];
    entrada.forEach(function (actual) {
        Nestados.push(actual.state)
    });

    return [...new Set(Nestados)];
}
const prueva1 = calculodeEstados(datos);

// filtro de estados repetidos bueno

const prueba3 = [...new Set(datos.map(actual => actual.state))];
//  filtro de estados repetidos desde json nivel dios
const prueba2 = [...new Set(datos.map(function (actual) {
    return actual.state;
}))];

console.log(prueba2);






















// 
// let a = [];
// result = datos.filter(function (actual) {
//     return actual.party === 'R'; // devuelve true o false y crea array si es true
// });
// result.forEach(function (actual) {
//     a.push(actual);
// });
// resultados = datos.filter(function (actual) {
//     return actual.party === 'D';
// });

// console.log(result);
// .........................................................................................................

// const datos = data.results[0].members;
// a = [];
// datos.forEach(function (actual) {
//     if (actual.party === 'R') {
//         a.push(actual)
//     }
// });



// console.log(a);