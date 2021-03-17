const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

//problema do dotall
console.log(texto.match(/^r.*r$/gi))
/*
    OUTPUT
    null
*/

console.log(texto.match(/^r[\s\S]*r$/gi))
/*
    OUTPUT
    [ 'Romário era um excelente jogador\n, mas hoje é um político questionador' ]
*/