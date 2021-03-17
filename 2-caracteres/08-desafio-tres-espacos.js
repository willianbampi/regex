const texto = 'a   b'

console.log(texto.match(/a   b/))
/*
    OUTPUT
    [
        'a   b',
        index: 0,
        input: 'a   b',
        groups: undefined
    ]
*/

console.log(texto.match(/a\s\s\sb/))
/*
    OUTPUT
    [
        'a   b',
        index: 0,
        input: 'a   b',
        groups: undefined
    ]
*/

//usando quantificador de um ou mais com caracter do espaço
console.log(texto.match(/a\s+b/))
/*
    OUTPUT
    [
        'a   b',
        index: 0,
        input: 'a   b',
        groups: undefined
    ]
*/

//usando quantificador de número exato com espaço literal
console.log(texto.match(/a {3}b/))
/*
    OUTPUT
    [
        'a   b',
        index: 0,
        input: 'a   b',
        groups: undefined
    ]
*/

//usando quantificador de número exato com caracter do espaço
console.log(texto.match(/a\s{3}b/))
/*
    OUTPUT
    [
        'a   b',
        index: 0,
        input: 'a   b',
        groups: undefined
    ]
*/