//o caracter ponto é um coringa, válido para uma posição

const texto = '1,2,3,4,5,6,7,8,9,0'

console.log(texto.match(/1.2/g))
/*
    OUTPUT
    [ '1,2' ]
*/


console.log(texto.match(/1..2/g))
/*
    OUTPUT
    null
*/


console.log(texto.match(/1..,/g))
/*
    OUTPUT
    [ '1,2,' ]
*/


const notas = '8.3,7.1,8.8,10.0'

console.log(notas.match(/8../g))
/*
    OUTPUT
    [ '8.3', '8.8' ]
*/


console.log(notas.match(/.\../g))
/*
    OUTPUT
    [ '8.3', '7.1', '8.8', '0.0' ]
*/