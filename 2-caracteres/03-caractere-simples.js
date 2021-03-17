const texto = '1,2,3,4,5,6,a.b c!d?e'

const regexVirgula = /,/

console.log(texto.split(regexVirgula))
/*
    OUTPUT
    [ '1', '2', '3', '4', '5', '6', 'a.b c!d?e' ]
*/

console.log(texto.match(regexVirgula))
/*
    OUTPUT
    [ 
        ',',
        index: 1,
        input: '1,2,3,4,5,6,a.b c!d?e',
        groups: undefined
    ]
*/

console.log(texto.match(/,/g))
/*
    OUTPUT
    [ ',', ',', ',', ',', ',', ',' ]
*/

console.log(texto.match(/A/g))
/*
    OUTPUT
    null
*/

console.log(texto.match(/A/gi))
/*
    OUTPUT
    [ 'a' ]
*/

console.log(texto.match(/2/g))
/*
    OUTPUT
    [ '2' ]
*/

console.log(texto.match(/b c!d/))
/*
    OUTPUT
    [
        'b c!d',
        index: 14,
        input: '1,2,3,4,5,6,a.b c!d?e',
        groups: undefined
    ]
*/