const texto = 'Você precisa responder sim, não ou não sei!'

//usando alternativa (OU)
console.log(texto.match(/sim|não|sei/g))
/*
    OUTPUT
    [ 'sim', 'não', 'não', 'sei' ]
*/

//usando alternativa (OU)
console.log(texto.match(/sim|não|nao sei/g))
/*
    OUTPUT
    [ 'sim', 'não', 'não' ]
*/

//usando alternativa (OU)
console.log(texto.match(/sim|não sei|não/g))
/*
    OUTPUT
    [ 'sim', 'não', 'não sei' ]
*/