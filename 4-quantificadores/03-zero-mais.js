const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'

const texto2 = 'There is a big fog in NYC'

// * -> zero ou mais ocorrĂȘncia para letra que estiver imediatamente antes do *
const regex = /fogo*/gi

console.log(texto1.match(regex))
/*
    OUTPUT
    [ 'fogo', 'FOGOOOOOO' ]
*/

console.log(texto2.match(regex))
/*
    OUTPUT
    [ 'fog' ]
*/