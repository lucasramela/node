
console.log('Inicio del programa'); // Esperado 1 :: 1 Real

setTimeout( () => {

    console.log('Primer Timeout'); // Esperado 5 :: 5 Real

}, 3000 );



setTimeout( () => {

    console.log('Segundo Timeout'); // Esperado 2 :: 3 Real

}, 0 );



setTimeout( () => {

    console.log('Tercer Timeout'); // Esperado 3 :: 4 Real

}, 0 );


console.log('Fin del programa'); // Esperado 4 :: 2 Real


