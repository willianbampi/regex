const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'

const texto2 = 'There is a big fog in NYC'

// + -> um ou mais ocorrência para letra que estiver imediatamente antes do +
const regex = /fogo+/gi

console.log(texto1.match(regex))
/*
    OUTPUT
    [ 'fogo', 'FOGOOOOOO' ]
*/

console.log(texto2.match(regex))
/*
    OUTPUT
    null
*/

const texto3 = 'Os números: 0123456789.'

console.log(texto3.match(/[0-9]/g))
/*
    OUTPUT
    [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]
*/

console.log(texto3.match(/[0-9]+/g))
/*
    OUTPUT
    [ '0123456789' ]
*/