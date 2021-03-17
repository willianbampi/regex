const texto = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`

console.log(texto.match(/\n/g))
/*
    OUTPUT
    [ '\n', '\n', '\n', '\n' ]
*/

//problema do .+ não capturar o \n
console.log(texto.match(/^(\w).+\1$/gi))
/*
    OUTPUT
    null
*/

//flag m (multiline) resolve esse problema
console.log(texto.match(/^(\w).+\1$/gim))
/*
    OUTPUT
    [
        'Leo é muito legal',
        'Emanuel foi jogar em Sergipe',
        'Bianca é casada com Habib'
    ]
*/