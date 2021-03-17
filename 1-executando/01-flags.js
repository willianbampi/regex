// g - global -> procura todos os padrões da regex na string inteira
// i - ignore case -> procura os padrões como maiúsculas e minúsculas sem distinção

const texto = 'Carlos assinou o abaixo-assinado.'

console.log(texto.match(/C|ab/))
/**
    OUTPUT
    [
        'C',
        index: 0,
        input: 'Carlos assinou o abaixo-assinado.',
        groups: undefined
    ]
*/
console.log(texto.match(/c|ab/i))
/*
    OUTPUT
    [
        'C',
        index: 0,
        input: 'Carlos assinou o abaixo-assinado.',
        groups: undefined
    ]
*/

console.log(texto.match(/ab|c/gi))
/*
    OUTPUT
    [
        'C',
        'ab'
    ]
*/