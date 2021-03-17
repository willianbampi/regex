const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(texto.match(/r/gi))
/*
    OUTPUT
    [ 'R', 'r', 'r', 'r', 'r' ]
*/

// ^ fora de um conjunto significa início da linha/string
console.log(texto.match(/^r/gi))
/*
    OUTPUT
    [ 'R' ]
*/

// $ fim da linha/string
console.log(texto.match(/r$/gi))
/*
    OUTPUT
    [ 'r' ]
*/

//problema do dotall
console.log(texto.match(/^r.*r$/gi))
/*
    OUTPUT
    null
*/