const texto = '1,2,3,4,5,6,a.b c!d?e[f'

console.log(texto.match(/[a-z]/g))
/*
    OUTPUT
    [ 'a', 'b', 'c', 'd', 'e', 'f' ]
*/

console.log(texto.match(/[b-d]/g))
/*
    OUTPUT
    [ 'b', 'c', 'd' ]
*/

console.log(texto.match(/[2-4]/g))
/*
    OUTPUT
    [ '2', '3', '4' ]
*/

console.log(texto.match(/[A-Z1-3]/gi))
/*
    OUTPUT
    [ '1', '2', '3', 'a', 'b', 'c', 'd', 'e', 'f' ]
*/