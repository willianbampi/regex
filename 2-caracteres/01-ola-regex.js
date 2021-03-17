const texto = 'Casa bonita é casa amarela da esquina com a Rua ACASASUA.'

const regex = /casa/gi

console.log(texto.match(regex))
/*
    OUTPUT
    [ 'Casa', 'casa', 'CASA' ]
*/

console.log(texto.match(/a b/))
/*
    OUTPUT
    [
        'a b',
        index: 3,
        input: 'Casa bonita é casa amarela da esquina com a Rua ACASASUA.',
        groups: undefined
    ]
*/